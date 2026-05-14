'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

const INDIAN_STATES = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh",
  "Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand",
  "Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur",
  "Meghalaya","Mizoram","Nagaland","Odisha","Punjab",
  "Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura",
  "Uttar Pradesh","Uttarakhand","West Bengal"
];

const DOC_TYPES = [
  { id: 'nda', label: 'Non-Disclosure Agreement' },
  { id: 'founder_agreement', label: 'Founder Agreement' },
  { id: 'esop', label: 'ESOP Policy' },
  { id: 'vendor_contract', label: 'Vendor Contract' },
  { id: 'employment_agreement', label: 'Employment Agreement' },
];

export default function DocumentGenerator() {
  const { user, token, loading: authLoading, logout } = useAuth();
  const router = useRouter();

  // Intake Method: 'chat', 'form', 'upload'
  const [intakeMethod, setIntakeMethod] = useState('chat');

  // Shared State
  const [sessionId, setSessionId] = useState(null);
  const [status, setStatus] = useState('collecting_fields');
  const [isLoading, setIsLoading] = useState(false);
  const [collectedState, setCollectedState] = useState({ fields: {}, missing_fields: [], progress_percent: 0 });
  const [result, setResult] = useState(null);
  const [activeTab, setActiveTab] = useState('state'); // 'state', 'preview', 'risk', 'clause'
  const [error, setError] = useState('');
  const [selectedDocType, setSelectedDocType] = useState(null);

  // --- Chat State ---
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  // --- Form State ---
  const [formDocType, setFormDocType] = useState('nda');
  const [formData, setFormData] = useState({});

  // --- Upload State ---
  const [uploadFile, setUploadFile] = useState(null);

  useEffect(() => {
    if (!authLoading && !user) router.push('/login');
  }, [user, authLoading, router]);

  useEffect(() => {
    if (intakeMethod === 'chat') {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, intakeMethod]);

  // Removed auto-initialization message to allow document selection screen first.

  const handleUpdateResponse = (data) => {
    setSessionId(data.session_id);
    setStatus(data.status);
    setCollectedState(data.collected_state || { fields: {}, missing_fields: [], progress_percent: 0 });
    if (data.status === 'completed') {
      setActiveTab('preview');
      setResult({
        preview_text: data.preview_text,
        docx_download_url: data.docx_download_url,
        pdf_download_url: data.pdf_download_url,
        document_type: data.collected_state?.document_type_label || 'Document',
        session_id: data.session_id
      });
    }
  };

  const handleSelectDocument = async (docTypeId, docLabel) => {
    setSelectedDocType(docTypeId);
    setFormDocType(docTypeId);
    const initialMessage = `I want to create a ${docLabel}`;
    setMessages([{ role: 'user', content: initialMessage }]);
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch(`${API_BASE}/api/chat/message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ session_id: null, message: initialMessage })
      });
      if (!res.ok) throw new Error('Failed to send message');
      const data = await res.json();
      handleUpdateResponse(data);
      setMessages(prev => [...prev, { role: 'assistant', content: data.assistant_message }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm sorry, I encountered an error connecting to the server. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  // --- Chat Handlers ---
  const handleSendMessage = async (e) => {
    if (e) e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch(`${API_BASE}/api/chat/message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ session_id: sessionId, message: userMessage })
      });
      if (!res.ok) throw new Error('Failed to send message');
      const data = await res.json();
      handleUpdateResponse(data);
      setMessages(prev => [...prev, { role: 'assistant', content: data.assistant_message }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm sorry, I encountered an error connecting to the server. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  // --- Form Handlers ---
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Auto convert numbers based on generic assumptions or let the backend Pydantic models handle parsing
    try {
      const res = await fetch(`${API_BASE}/api/chat/update-state`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ 
          session_id: sessionId, 
          document_type: formDocType,
          fields: formData
        })
      });
      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.detail || 'Failed to update state');
      }
      const data = await res.json();
      handleUpdateResponse(data);
      if (data.status !== 'completed') {
        setActiveTab('state'); // Switch to state tab to see what's missing
      }
    } catch (err) {
      setError(err.message || "Failed to submit form.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFieldChange = (key, val) => {
    setFormData(prev => ({ ...prev, [key]: val }));
  };

  // --- Upload Handlers ---
  const handleUploadSubmit = async (e) => {
    e.preventDefault();
    if (!uploadFile) return;
    setIsLoading(true);
    setError('');

    const form = new FormData();
    if (sessionId) form.append('session_id', sessionId);
    form.append('file', uploadFile);

    try {
      const res = await fetch(`${API_BASE}/api/chat/upload`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: form
      });
      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.detail || 'Failed to process document');
      }
      const data = await res.json();
      handleUpdateResponse(data);
      setUploadFile(null);
      
      if (data.status !== 'completed') {
        setActiveTab('state');
      }
    } catch (err) {
      setError(err.message || "Failed to upload document.");
    } finally {
      setIsLoading(false);
    }
  };

  if (authLoading || !user) return <div className="min-h-screen bg-black flex items-center justify-center text-primary font-headline-sm uppercase">Loading...</div>;

  const inputCls = "w-full bg-[#1a1a1a] border border-[#3c3c3c] p-3 text-primary focus:border-white outline-none transition-colors mb-4 font-body-md text-body-md";
  const labelCls = "block font-label-md text-label-md text-[#7e7e7e] uppercase mb-1";

  // Quick form renderer
  const renderFormFields = () => {
    switch (formDocType) {
      case 'nda':
        return (
          <>
            <div><label className={labelCls}>Disclosing Party</label><input className={inputCls} placeholder="Company A" onChange={e => handleFieldChange('disclosing_party', e.target.value)} /></div>
            <div><label className={labelCls}>Receiving Party</label><input className={inputCls} placeholder="Company B" onChange={e => handleFieldChange('receiving_party', e.target.value)} /></div>
            <div><label className={labelCls}>Purpose</label><input className={inputCls} placeholder="Exploring partnership..." onChange={e => handleFieldChange('purpose', e.target.value)} /></div>
            <div><label className={labelCls}>NDA Type</label><select className={inputCls} onChange={e => handleFieldChange('nda_type', e.target.value)}><option value="">Select...</option><option value="mutual">Mutual</option><option value="one_way">One-Way</option></select></div>
            <div><label className={labelCls}>Duration (Years)</label><input className={inputCls} type="number" onChange={e => handleFieldChange('confidentiality_duration_years', e.target.value)} /></div>
            <div><label className={labelCls}>Jurisdiction State</label><select className={inputCls} onChange={e => handleFieldChange('jurisdiction_state', e.target.value)}><option value="">Select...</option>{INDIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}</select></div>
          </>
        );
      case 'founder_agreement':
        return (
          <>
            <div><label className={labelCls}>Company Name</label><input className={inputCls} onChange={e => handleFieldChange('company_name', e.target.value)} /></div>
            <div><label className={labelCls}>Founder 1 Name</label><input className={inputCls} onChange={e => handleFieldChange('founder_1_name', e.target.value)} /></div>
            <div><label className={labelCls}>Founder 1 Equity (%)</label><input className={inputCls} type="number" onChange={e => handleFieldChange('founder_1_equity_percent', e.target.value)} /></div>
            <div><label className={labelCls}>Founder 2 Name</label><input className={inputCls} onChange={e => handleFieldChange('founder_2_name', e.target.value)} /></div>
            <div><label className={labelCls}>Founder 2 Equity (%)</label><input className={inputCls} type="number" onChange={e => handleFieldChange('founder_2_equity_percent', e.target.value)} /></div>
            <div><label className={labelCls}>Vesting Schedule</label><select className={inputCls} onChange={e => handleFieldChange('vesting_schedule', e.target.value)}><option value="">Select...</option><option value="4yr_1yr_cliff">4yr / 1yr Cliff</option><option value="3yr_monthly">3yr Monthly</option></select></div>
            <div><label className={labelCls}>Jurisdiction State</label><select className={inputCls} onChange={e => handleFieldChange('jurisdiction_state', e.target.value)}><option value="">Select...</option>{INDIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}</select></div>
          </>
        );
      case 'esop':
        return (
          <>
             <div><label className={labelCls}>Company Name</label><input className={inputCls} onChange={e => handleFieldChange('company_name', e.target.value)} /></div>
             <div><label className={labelCls}>Total ESOP Pool (%)</label><input className={inputCls} type="number" onChange={e => handleFieldChange('total_esop_pool_percent', e.target.value)} /></div>
             <div><label className={labelCls}>Vesting Period (Years)</label><input className={inputCls} type="number" onChange={e => handleFieldChange('vesting_period_years', e.target.value)} /></div>
             <div><label className={labelCls}>Jurisdiction State</label><select className={inputCls} onChange={e => handleFieldChange('jurisdiction_state', e.target.value)}><option value="">Select...</option>{INDIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}</select></div>
          </>
        );
      case 'vendor_contract':
        return (
          <>
             <div><label className={labelCls}>Company Name</label><input className={inputCls} onChange={e => handleFieldChange('company_name', e.target.value)} /></div>
             <div><label className={labelCls}>Vendor Name</label><input className={inputCls} onChange={e => handleFieldChange('vendor_name', e.target.value)} /></div>
             <div><label className={labelCls}>Service Description</label><input className={inputCls} onChange={e => handleFieldChange('service_description', e.target.value)} /></div>
             <div><label className={labelCls}>Contract Value (INR)</label><input className={inputCls} type="number" onChange={e => handleFieldChange('contract_value_inr', e.target.value)} /></div>
             <div><label className={labelCls}>Jurisdiction State</label><select className={inputCls} onChange={e => handleFieldChange('jurisdiction_state', e.target.value)}><option value="">Select...</option>{INDIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}</select></div>
          </>
        );
      case 'employment_agreement':
        return (
           <>
             <div><label className={labelCls}>Company Name</label><input className={inputCls} onChange={e => handleFieldChange('company_name', e.target.value)} /></div>
             <div><label className={labelCls}>Employee Name</label><input className={inputCls} onChange={e => handleFieldChange('employee_name', e.target.value)} /></div>
             <div><label className={labelCls}>Designation</label><input className={inputCls} onChange={e => handleFieldChange('designation', e.target.value)} /></div>
             <div><label className={labelCls}>Annual CTC (INR)</label><input className={inputCls} type="number" onChange={e => handleFieldChange('ctc_annual_inr', e.target.value)} /></div>
             <div><label className={labelCls}>Jurisdiction State</label><select className={inputCls} onChange={e => handleFieldChange('jurisdiction_state', e.target.value)}><option value="">Select...</option>{INDIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}</select></div>
           </>
        );
      default:
        return null;
    }
  };

  if (!selectedDocType) {
    return (
      <div className="flex flex-col min-h-screen bg-surface-container-lowest text-on-surface">
        {/* Nav */}
        <nav className="h-[64px] w-full border-b border-outline-variant bg-surface flex justify-between items-center px-margin-desktop shrink-0 sticky top-0 z-50">
          <div className="flex items-center gap-8 h-full">
            <Link href="/" className="font-headline-sm text-headline-sm font-bold text-primary border-b-4 border-on-tertiary-container">LEXORA</Link>
            <div className="hidden md:flex items-center gap-6 h-full ml-12">
              <Link className="text-on-surface-variant font-label-lg uppercase tracking-[1.5px] hover:bg-surface-container-high px-2" href="/dashboard">Dashboard</Link>
              <Link className="text-primary border-b-2 border-primary pb-1 font-label-lg uppercase tracking-[1.5px] px-2" href="/document-generator">Contracts</Link>
              <Link className="text-on-surface-variant font-label-lg uppercase tracking-[1.5px] hover:bg-surface-container-high px-2" href="/red-flag-analyser">Compliance</Link>
              <Link className="text-on-surface-variant font-label-lg uppercase tracking-[1.5px] hover:bg-surface-container-high px-2" href="/about">Consult</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-surface-container-high border border-outline-variant flex items-center justify-center font-bold text-primary cursor-pointer hover:opacity-80" onClick={logout} title="Logout">
              {user?.full_name?.substring(0,2).toUpperCase() || 'ME'}
            </div>
          </div>
        </nav>

        <main className="flex-grow pt-[80px] pb-[80px] px-margin-desktop max-w-7xl mx-auto w-full">
          <header className="mb-[48px] max-w-2xl">
            <h1 className="font-display-md text-display-md uppercase mb-[12px] text-primary">CHOOSE YOUR DOCUMENT</h1>
            <p className="font-body-lg text-body-lg text-[#bbbbbb] font-light">Select the instrument you need to generate. Each draft is high-precision and India-compliant.</p>
          </header>
          <div className="tricolor-stripe w-full mb-[48px]"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mb-[24px]">
            {/* Card 1: NDA */}
            <div className="bg-[#1a1a1a] border border-[#3c3c3c] transition-colors duration-300 hover:border-white p-[24px] flex flex-col gap-[12px] cursor-pointer group" onClick={() => handleSelectDocument('nda', 'Non-Disclosure Agreement')}>
              <div className="w-[40px] h-[40px] bg-[#262626] flex items-center justify-center">
                <span className="material-symbols-outlined text-primary" data-icon="lock">lock</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg uppercase text-primary">NDA</h3>
              <p className="font-body-sm text-body-sm text-[#bbbbbb]">Protect your sensitive business information with a robust Non-Disclosure Agreement tailored for Indian jurisdictions.</p>
              <div className="mt-auto font-bold text-primary text-[14px] flex items-center gap-[4px] group-hover:gap-[12px] transition-all">
                  SELECT <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </div>
            {/* Card 2: FOUNDER AGREEMENT */}
            <div className="bg-[#1a1a1a] border border-[#3c3c3c] transition-colors duration-300 hover:border-white p-[24px] flex flex-col gap-[12px] cursor-pointer group" onClick={() => handleSelectDocument('founder_agreement', 'Founder Agreement')}>
              <div className="w-[40px] h-[40px] bg-[#262626] flex items-center justify-center">
                <span className="material-symbols-outlined text-primary" data-icon="groups">groups</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg uppercase text-primary">FOUNDER AGREEMENT</h3>
              <p className="font-body-sm text-body-sm text-[#bbbbbb]">Define equity, vesting, and roles among co-founders to prevent future disputes and ensure long-term stability.</p>
              <div className="mt-auto font-bold text-primary text-[14px] flex items-center gap-[4px] group-hover:gap-[12px] transition-all">
                  SELECT <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </div>
            {/* Card 3: ESOP POLICY */}
            <div className="bg-[#1a1a1a] border border-[#3c3c3c] transition-colors duration-300 hover:border-white p-[24px] flex flex-col gap-[12px] cursor-pointer group" onClick={() => handleSelectDocument('esop', 'ESOP Policy')}>
              <div className="w-[40px] h-[40px] bg-[#262626] flex items-center justify-center">
                <span className="material-symbols-outlined text-primary" data-icon="rebase">rebase</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg uppercase text-primary">ESOP POLICY</h3>
              <p className="font-body-sm text-body-sm text-[#bbbbbb]">Incentivize your key talent with a structured Employee Stock Option Plan compliant with MCA guidelines.</p>
              <div className="mt-auto font-bold text-primary text-[14px] flex items-center gap-[4px] group-hover:gap-[12px] transition-all">
                  SELECT <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </div>
            {/* Card 4: VENDOR CONTRACT */}
            <div className="bg-[#1a1a1a] border border-[#3c3c3c] transition-colors duration-300 hover:border-white p-[24px] flex flex-col gap-[12px] cursor-pointer group" onClick={() => handleSelectDocument('vendor_contract', 'Vendor Contract')}>
              <div className="w-[40px] h-[40px] bg-[#262626] flex items-center justify-center">
                <span className="material-symbols-outlined text-primary" data-icon="handshake">handshake</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg uppercase text-primary">VENDOR CONTRACT</h3>
              <p className="font-body-sm text-body-sm text-[#bbbbbb]">Professional service agreements to streamline procurement and define clear SLAs with your external partners.</p>
              <div className="mt-auto font-bold text-primary text-[14px] flex items-center gap-[4px] group-hover:gap-[12px] transition-all">
                  SELECT <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </div>
          </div>
          {/* 5th Document Centered Below */}
          <div className="flex justify-center">
            <div className="bg-[#1a1a1a] border border-[#3c3c3c] transition-colors duration-300 hover:border-white p-[24px] flex flex-col gap-[12px] w-full md:w-[calc(50%-12px)] cursor-pointer group" onClick={() => handleSelectDocument('employment_agreement', 'Employment Agreement')}>
              <div className="w-[40px] h-[40px] bg-[#262626] flex items-center justify-center">
                <span className="material-symbols-outlined text-primary" data-icon="badge">badge</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg uppercase text-primary">EMPLOYMENT AGREEMENT</h3>
              <p className="font-body-sm text-body-sm text-[#bbbbbb]">Comprehensive employment terms including IP assignment, non-compete, and confidentiality clauses.</p>
              <div className="mt-auto font-bold text-primary text-[14px] flex items-center gap-[4px] group-hover:gap-[12px] transition-all">
                  SELECT <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-surface-container-lowest text-on-surface">
    {/* Nav */}
    <nav className="h-[64px] w-full border-b border-outline-variant bg-surface flex justify-between items-center px-margin-page shrink-0">
      <div className="flex items-center gap-8 h-full">
        <Link href="/" className="font-headline-sm text-headline-sm font-bold text-primary border-b-4 border-on-tertiary-container">LEXORA</Link>
        <div className="hidden md:flex items-center gap-6 h-full">
          <Link className="text-on-surface-variant font-label-lg uppercase tracking-[1.5px] hover:bg-surface-container-high px-2" href="/dashboard">Dashboard</Link>
          <Link className="text-primary border-b-2 border-primary pb-1 font-label-lg uppercase tracking-[1.5px] px-2" href="/document-generator">Contracts</Link>
          <Link className="text-on-surface-variant font-label-lg uppercase tracking-[1.5px] hover:bg-surface-container-high px-2" href="/red-flag-analyser">Compliance</Link>
          <Link className="text-on-surface-variant font-label-lg uppercase tracking-[1.5px] hover:bg-surface-container-high px-2" href="/about">Consult</Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-surface-container-high border border-outline-variant flex items-center justify-center font-bold text-primary cursor-pointer hover:opacity-80" onClick={logout} title="Logout">
          {user?.full_name?.substring(0,2).toUpperCase() || 'ME'}
        </div>
      </div>
    </nav>

    {/* Main Split - 50/50 */}
    <main className="flex-grow flex overflow-hidden">
      
      {/* LEFT PANEL: 50% WIDTH */}
      <aside className="w-1/2 bg-[#0d0d0d] border-r border-[#3c3c3c] flex flex-col shrink-0 overflow-hidden relative">
        <div className="tricolor-stripe"></div>
        <div className="p-4 border-b border-[#3c3c3c] shrink-0">
          <h1 className="font-headline-sm text-headline-sm text-primary uppercase tracking-wider">AI Legal Intake</h1>
          <p className="font-label-md text-label-md text-on-surface-variant">CHOOSE YOUR INTAKE METHOD</p>
        </div>

        {/* Tab Toggle */}
        <div className="flex border-b border-[#3c3c3c] shrink-0">
          <button onClick={() => setIntakeMethod('chat')} className={`flex-1 py-4 font-label-lg uppercase tracking-widest transition-colors ${intakeMethod === 'chat' ? 'bg-primary text-background' : 'text-on-surface-variant hover:text-primary hover:bg-[#1a1a1a]'}`}>Chat</button>
          <button onClick={() => setIntakeMethod('form')} className={`flex-1 py-4 font-label-lg uppercase tracking-widest transition-colors ${intakeMethod === 'form' ? 'bg-primary text-background' : 'text-on-surface-variant hover:text-primary hover:bg-[#1a1a1a]'}`}>Fill Form</button>
          <button onClick={() => setIntakeMethod('upload')} className={`flex-1 py-4 font-label-lg uppercase tracking-widest transition-colors ${intakeMethod === 'upload' ? 'bg-primary text-background' : 'text-on-surface-variant hover:text-primary hover:bg-[#1a1a1a]'}`}>Upload Docs</button>
        </div>

        {/* --- CHAT METHOD --- */}
        {intakeMethod === 'chat' && (
          <div className="flex flex-col flex-grow overflow-hidden">
            <div className="flex-grow overflow-y-auto p-6 space-y-4 font-body-md text-body-md flex flex-col">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 border shadow-sm ${msg.role === 'user' ? 'bg-primary text-background border-primary' : 'bg-[#1a1a1a] text-[#e0e0e0] border-[#3c3c3c]'}`}>
                    {msg.role === 'assistant' && <div className="text-[10px] font-bold uppercase mb-2 text-[#888] flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">smart_toy</span> COPILOT</div>}
                    <div className="whitespace-pre-wrap">{msg.content}</div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex w-full justify-start">
                  <div className="max-w-[85%] p-4 border bg-[#1a1a1a] text-[#e0e0e0] border-[#3c3c3c] flex items-center gap-2">
                    <span className="material-symbols-outlined animate-spin text-md">progress_activity</span>
                    <span>Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="p-4 border-t border-[#3c3c3c] bg-[#000] shrink-0">
              <form onSubmit={handleSendMessage} className="relative">
                <textarea
                  className="w-full bg-[#1a1a1a] border border-[#3c3c3c] p-4 pr-16 text-primary focus:border-white outline-none transition-colors resize-none h-[80px] font-body-md text-body-md"
                  placeholder="Type your answer..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSendMessage(); } }}
                  disabled={isLoading || status === 'completed'}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading || status === 'completed'}
                  className="absolute right-3 top-3 bottom-3 w-12 flex items-center justify-center bg-primary text-background hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="material-symbols-outlined">send</span>
                </button>
              </form>
            </div>
          </div>
        )}

        {/* --- FORM METHOD --- */}
        {intakeMethod === 'form' && (
          <div className="flex-grow overflow-y-auto p-8">
            <h2 className="font-headline-sm text-headline-sm text-primary uppercase mb-6">Manual Form Entry</h2>
            
            <div className="mb-6">
              <label className={labelCls}>Document Type</label>
              <select className={inputCls} value={formDocType} onChange={e => { setFormDocType(e.target.value); setFormData({}); }}>
                {DOC_TYPES.map(dt => <option key={dt.id} value={dt.id}>{dt.label}</option>)}
              </select>
            </div>

            <form onSubmit={handleFormSubmit}>
              {renderFormFields()}
              
              {error && (
                <div className="bg-[#93000a]/20 border border-[#93000a] p-3 text-[#ffb4ab] text-sm mb-4">
                  <span className="material-symbols-outlined text-sm align-middle mr-1">error</span>{error}
                </div>
              )}
              
              <button type="submit" disabled={isLoading} className="w-full py-4 mt-6 bg-primary text-background font-label-lg uppercase tracking-[1.5px] hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2">
                {isLoading ? <><span className="material-symbols-outlined animate-spin">progress_activity</span> PROCESSING...</> : <>Submit Data <span className="material-symbols-outlined">arrow_forward</span></>}
              </button>
            </form>
          </div>
        )}

        {/* --- UPLOAD METHOD --- */}
        {intakeMethod === 'upload' && (
          <div className="flex-grow p-8 flex flex-col justify-center">
            <h2 className="font-headline-sm text-headline-sm text-primary uppercase mb-2 text-center">AI Data Extraction</h2>
            <p className="font-body-md text-on-surface-variant text-center mb-8 max-w-sm mx-auto">Upload an existing contract, term sheet, or draft. Lexora AI will read it and automatically extract the relevant fields.</p>
            
            <form onSubmit={handleUploadSubmit} className="flex flex-col items-center">
              <label className="w-full max-w-md h-64 border-2 border-dashed border-[#3c3c3c] hover:border-primary bg-[#1a1a1a] flex flex-col items-center justify-center cursor-pointer transition-colors p-6 text-center">
                <span className="material-symbols-outlined text-5xl text-primary mb-4">upload_file</span>
                <span className="font-label-lg uppercase text-primary mb-2">Select a PDF or DOCX</span>
                <span className="text-sm text-on-surface-variant">{uploadFile ? uploadFile.name : 'Drag & drop or click to browse'}</span>
                <input type="file" className="hidden" accept=".pdf,.docx" onChange={e => setUploadFile(e.target.files[0])} />
              </label>

              {error && (
                <div className="bg-[#93000a]/20 border border-[#93000a] p-3 text-[#ffb4ab] text-sm mt-4 w-full max-w-md">
                  <span className="material-symbols-outlined text-sm align-middle mr-1">error</span>{error}
                </div>
              )}

              <button type="submit" disabled={!uploadFile || isLoading} className="w-full max-w-md py-4 mt-6 bg-primary text-background font-label-lg uppercase tracking-[1.5px] hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2">
                {isLoading ? <><span className="material-symbols-outlined animate-spin">progress_activity</span> EXTRACTING...</> : <>Extract Data <span className="material-symbols-outlined">analytics</span></>}
              </button>
            </form>
          </div>
        )}

      </aside>

      {/* RIGHT PANEL: 50% WIDTH - Visualization & Preview */}
      <section className="w-1/2 bg-[#000] flex flex-col overflow-hidden">
        <div className="px-margin-page border-b border-[#3c3c3c] flex items-center justify-between shrink-0">
          <div className="flex gap-stack-lg">
            <button onClick={() => setActiveTab('state')} className={`py-6 font-label-lg uppercase tracking-widest transition-colors ${activeTab === 'state' ? 'border-b-2 border-primary text-primary' : 'text-on-surface-variant hover:text-primary'}`}>
              State
            </button>
            <button onClick={() => setActiveTab('preview')} className={`py-6 font-label-lg uppercase tracking-widest transition-colors ${activeTab === 'preview' ? 'border-b-2 border-primary text-primary' : 'text-on-surface-variant hover:text-primary'}`}>
              Preview
            </button>
          </div>
          <div className="flex items-center gap-4">
            {result && <>
              <button onClick={() => window.open(`${API_BASE}${result.docx_download_url}`, '_blank')}
                className="p-2 border border-[#3c3c3c] text-on-surface-variant hover:text-primary hover:border-primary flex items-center gap-2 transition-colors">
                <span className="material-symbols-outlined">download</span><span className="text-[10px] font-bold uppercase">DOCX</span>
              </button>
              <button onClick={() => window.open(`${API_BASE}${result.pdf_download_url}`, '_blank')}
                className="p-2 border border-[#3c3c3c] text-on-surface-variant hover:text-primary hover:border-primary flex items-center gap-2 transition-colors">
                <span className="material-symbols-outlined">picture_as_pdf</span><span className="text-[10px] font-bold uppercase">PDF</span>
              </button>
            </>}
          </div>
        </div>

        <div className="flex-grow overflow-y-auto p-margin-page">
          <div className="max-w-3xl mx-auto">
            
            {/* STATE TAB */}
            {activeTab === 'state' && (
              <div className="space-y-8 mt-4">
                <div className="flex justify-between items-end border-b border-[#3c3c3c] pb-2">
                  <h2 className="font-headline-md text-headline-md text-primary uppercase">
                    {collectedState.document_type_label || 'Awaiting Input...'}
                  </h2>
                  <span className="font-label-md text-on-tertiary-container px-3 py-1 border border-on-tertiary-container">
                    {collectedState.progress_percent}% COMPLETE
                  </span>
                </div>
                
                {/* Progress bar */}
                <div className="w-full h-1 bg-[#1a1a1a]">
                  <div className="h-full bg-primary transition-all duration-1000 ease-out" style={{ width: `${collectedState.progress_percent}%` }}></div>
                </div>

                <div className="grid grid-cols-2 gap-8 mt-8">
                  {/* Collected Fields */}
                  <div className="space-y-4">
                    <h3 className="font-label-lg text-primary uppercase tracking-widest border-b border-[#3c3c3c] pb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">check_circle</span> COLLECTED
                    </h3>
                    {Object.keys(collectedState.fields || {}).length === 0 ? (
                      <p className="text-on-surface-variant text-sm">No fields collected yet.</p>
                    ) : (
                      <div className="space-y-3">
                        {Object.entries(collectedState.fields).map(([key, value]) => (
                          <div key={key} className="bg-[#1a1a1a] border border-[#3c3c3c] p-4 flex flex-col">
                            <span className="text-[10px] text-on-surface-variant uppercase tracking-wider mb-1">{key.replace(/_/g, ' ')}</span>
                            <span className="text-primary font-bold">{String(value)}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Missing Fields */}
                  <div className="space-y-4">
                    <h3 className="font-label-lg text-[#ffb4ab] uppercase tracking-widest border-b border-[#3c3c3c] pb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">pending</span> PENDING
                    </h3>
                    {collectedState.missing_fields?.length === 0 ? (
                      <p className="text-on-surface-variant text-sm">{collectedState.document_type ? "All required data collected!" : "Awaiting document type."}</p>
                    ) : (
                      <div className="space-y-3">
                        {collectedState.missing_fields?.map((field) => (
                          <div key={field} className="border border-dashed border-[#ffb4ab]/30 p-4 flex items-center gap-3 text-[#ffb4ab]/70">
                            <span className="material-symbols-outlined text-sm">hourglass_empty</span>
                            <span className="text-sm font-bold uppercase tracking-wider">{field.replace(/_/g, ' ')}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* PREVIEW TAB */}
            {activeTab === 'preview' && (
              <div className="mt-4">
                {!result ? (
                   <div className="flex flex-col items-center justify-center min-h-[400px] gap-6 text-center">
                     <span className="material-symbols-outlined text-6xl text-[#3c3c3c]">description</span>
                     <div>
                       <h3 className="font-headline-sm text-headline-sm text-primary uppercase mb-2">NO DOCUMENT YET</h3>
                       <p className="font-body-md text-on-surface-variant max-w-md mx-auto">Complete the AI intake process on the left to generate your document.</p>
                     </div>
                   </div>
                ) : (
                  <>
                    <div className="flex justify-between items-end border-b border-[#3c3c3c] pb-inset-md mb-6">
                      <div>
                        <h2 className="font-headline-md text-headline-md text-primary">
                          {result.document_type?.replace('_',' ').toUpperCase()}_{result.session_id.slice(0,8).toUpperCase()}.PDF
                        </h2>
                        <p className="font-body-sm text-body-sm text-[#7e7e7e]">Generated: {new Date().toLocaleString()}</p>
                      </div>
                      <span className="font-label-md text-on-tertiary-container px-3 py-1 border border-on-tertiary-container">DRAFT: v1.0</span>
                    </div>
                    <div className="bg-[#0d0d0d] border border-[#3c3c3c] p-stack-xl shadow-2xl relative min-h-[600px]">
                      <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#3c3c3c] m-inset-md"></div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-[#3c3c3c] m-inset-md"></div>
                      <div className="font-body-md text-[#c4c7c8] leading-relaxed max-w-2xl mx-auto whitespace-pre-wrap">{result.preview_text}</div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
    </div>
  );
}
