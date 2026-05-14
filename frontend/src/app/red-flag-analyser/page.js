'use client';
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export default function Page() {
  const { user, token, loading: authLoading, logout } = useAuth();
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    }
  }, [user, authLoading, router]);

  const handleFileDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleAnalyze = async () => {
    if (!file) return;
    setIsAnalyzing(true);
    setError(null);
    setResults(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(`${API_BASE}/api/analysis/red-flag`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `Analysis failed: ${response.statusText}`);
      }

      const data = await response.json();
      setResults(data.flags || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <>

{/* Top Navigation */}
<nav className="flex justify-between items-center w-full px-margin-desktop h-12 max-w-max-width mx-auto bg-background border-b border-outline-variant">
<Link href="/" className="text-headline-md font-headline-md font-bold uppercase tracking-tighter text-primary">Lexora</Link>
<div className="hidden md:flex gap-8 items-center h-full">
<Link className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="/document-generator">Documents</Link>
<Link className="text-label-caps font-label-caps text-primary border-b-2 border-primary pb-1" href="/red-flag-analyser">Analysis</Link>
<Link className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="/about">About</Link>
<Link className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="/legal-disclaimer">Terms</Link>
</div>
<div className="flex items-center gap-gutter">
{user ? (
  <div
    className="w-10 h-10 bg-surface-container-high border border-outline-variant flex items-center justify-center font-bold text-primary cursor-pointer hover:bg-surface-container-highest transition-colors"
    onClick={logout}
    title="Logout"
  >
    {user.full_name?.substring(0,2).toUpperCase() || 'ME'}
  </div>
) : (
  <Link href="/login" className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary cursor-pointer">Login</Link>
)}
</div>
</nav>

{/* Hero Band */}
<header className="relative h-[520px] w-full flex items-center overflow-hidden bg-[#111111]">
<img alt="A cinematic, low-angle shot of a high-tech legal firm at night." className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD2jAu2USaEZTbi6sHMNsBjcgfxLnkum-dGbbThn4FEL5NsKNhuboaeXtcwg0TukfA1GgF3ic_P4T5jCwS6bhAhA4D758ldabsBwpGgpMfaybEcZx0oBcQckFCBSO-c0zQ4IqviWMaqTckYkNHlcCbnmKvmq4AYMhAU51e13zUqHiYu31guRQ22UgkpvzfTswKzV27DVU3OQu-JI-AJPgBMWra0mSZlowKyKtppB4NEvZ5gLbOVPMCTz1BfHH4M287NHdavB0aTQ"/>
<div className="relative z-10 max-w-max-width mx-auto w-full px-margin-desktop">
<div className="flex flex-col gap-6 max-w-3xl">
<span className="inline-block self-start border border-[#e22718] text-[#e22718] px-3 py-1 text-label-caps font-label-caps">MOST POWERFUL FEATURE</span>
<div className="tricolor-stripe w-32"></div>
<h1 className="text-[80px] font-bold leading-[0.9] tracking-tighter uppercase text-primary">UPLOAD ANY CONTRACT. WE FIND THE TRAPS.</h1>
<p className="text-body-lg text-on-surface-variant max-w-xl">
                    Engineered for founders and high-stakes operations. Our AI decomposes legal jargon into risk-mapped data points, ensuring you never sign a document that compromises your sovereignty.
                </p>
</div>
</div>
</header>

{/* Upload Zone */}
<section className="bg-surface-container-lowest py-[64px]">
<div className="max-w-max-width mx-auto px-margin-desktop">
<div 
  className={`max-w-[640px] mx-auto bg-surface-container p-12 brutalist-border flex flex-col items-center gap-6 text-center transition-colors ${file ? 'border-primary bg-surface-container-low' : ''}`}
  onDrop={handleFileDrop}
  onDragOver={handleDragOver}
>
<div className="w-20 h-20 brutalist-border bg-surface-container-low flex items-center justify-center">
<span className="material-symbols-outlined text-[40px] text-primary" data-icon="upload_file">upload_file</span>
</div>
<div>
<h3 className="text-headline-md font-headline-md text-primary uppercase">
  {file ? file.name : "DROP YOUR CONTRACT HERE"}
</h3>
<p className="text-label-caps font-label-caps text-outline mt-2">PDF or DOCX (Max 25MB)</p>
</div>

<input 
  type="file" 
  ref={fileInputRef} 
  onChange={handleFileSelect} 
  accept=".pdf,.docx,.txt" 
  className="hidden" 
/>

{!file && (
  <button 
    onClick={() => fileInputRef.current.click()}
    className="h-12 w-full max-w-[280px] bg-primary text-background font-button-text uppercase tracking-[1.5px]"
  >
    BROWSE FILES
  </button>
)}

{file && !isAnalyzing && !results && (
  <button 
    onClick={handleAnalyze}
    className="h-12 w-full max-w-[280px] bg-[#e22718] text-white font-button-text uppercase tracking-[1.5px]"
  >
    ANALYZE NOW
  </button>
)}

{isAnalyzing && (
  <div className="flex flex-col items-center gap-4 mt-4 w-full">
    <div className="text-label-caps font-label-caps text-primary animate-pulse">SCANNING CLAUSES...</div>
    <div className="w-full h-1 bg-surface-container-high overflow-hidden">
      <div className="h-full bg-primary animate-[scan_2s_ease-in-out_infinite]" style={{ width: '50%' }}></div>
    </div>
  </div>
)}

{error && (
  <div className="text-[#e22718] mt-4 p-4 border border-[#e22718] bg-on-error-container text-body-md w-full text-center">
    {error}
  </div>
)}

</div>
</div>
</section>

{/* Results Section (Active Analysis State) */}
{results && (
<section className="max-w-max-width mx-auto px-margin-desktop py-12">
{/* Analysis Summary Bar */}
<div className="bg-surface-container-lowest brutalist-border p-6 flex justify-between items-center mb-12">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-secondary" data-icon="description">description</span>
<span className="text-headline-sm font-headline-sm uppercase">ANALYSIS COMPLETE</span>
</div>
<div className="flex items-center gap-4">
<span className="text-label-caps font-label-caps text-on-surface-variant">RISK FLAGS FOUND:</span>
<span className="text-headline-md font-headline-md text-[#e22718]">{results.length}</span>
</div>
</div>

{/* Critical Findings */}
<div className="mb-16">
<div className="flex items-center gap-4 mb-4">
<h2 className="text-headline-md font-headline-md uppercase">CRITICAL FINDINGS</h2>
<div className="tricolor-stripe flex-grow"></div>
</div>
<div className="flex flex-col gap-4">
{results.length === 0 ? (
  <div className="bg-surface-container brutalist-border p-8 text-center text-primary text-headline-sm uppercase">
    NO HIGH RISK FLAGS DETECTED IN THIS CHUNK.
  </div>
) : (
  results.map((flag, index) => (
    <div key={index} className="bg-surface-container brutalist-border red-flag-border p-8 flex flex-col gap-4">
    <span className={`inline-block self-start px-2 py-0.5 text-label-caps ${flag.risk_level === 'HIGH' ? 'bg-on-error-container text-on-error' : flag.risk_level === 'MEDIUM' ? 'bg-orange-900 text-orange-200' : 'bg-surface-container-high text-primary'}`}>
      {flag.risk_level} RISK
    </span>
    <h3 className="text-headline-sm font-headline-sm uppercase">{flag.issue}</h3>
    <div className="bg-surface-container-low p-4 border-l border-outline text-label-caps italic text-on-surface-variant">
        "{flag.clause_text}"
    </div>
    <div className="flex items-center gap-2 text-primary font-bold mt-2">
    <span className="material-symbols-outlined text-[18px]" data-icon="recommend">recommend</span>
    <span className="text-label-caps uppercase">RECOMMENDATION: {flag.suggested_revision}</span>
    </div>
    </div>
  ))
)}
</div>
</div>
</section>
)}

{/* What Lexora Checks */}
<section className="max-w-max-width mx-auto px-margin-desktop py-24 border-t border-outline-variant mt-12">
<h2 className="text-[56px] font-bold tracking-tighter uppercase leading-[0.9] mb-12">WHAT WE SCAN FOR.</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
<div className="bg-surface-container-lowest p-8 brutalist-border flex flex-col gap-4">
<span className="material-symbols-outlined text-primary text-[32px]" data-icon="gavel">gavel</span>
<h4 className="text-headline-sm font-headline-sm uppercase">REGULATORY ALIGNMENT</h4>
<p className="text-body-md text-on-surface-variant">Compliance with RBI, GDPR, and Indian Contract Act mandates.</p>
</div>
<div className="bg-surface-container-lowest p-8 brutalist-border flex flex-col gap-4">
<span className="material-symbols-outlined text-primary text-[32px]" data-icon="monetization_on">monetization_on</span>
<h4 className="text-headline-sm font-headline-sm uppercase">HIDDEN COSTS</h4>
<p className="text-body-md text-on-surface-variant">Escalation clauses, late fees, and unfair payment cycles.</p>
</div>
<div className="bg-surface-container-lowest p-8 brutalist-border flex flex-col gap-4">
<span className="material-symbols-outlined text-primary text-[32px]" data-icon="security">security</span>
<h4 className="text-headline-sm font-headline-sm uppercase">LIABILITY SHIELDS</h4>
<p className="text-body-md text-on-surface-variant">Ensuring your personal and corporate assets are insulated.</p>
</div>
<div className="bg-surface-container-lowest p-8 brutalist-border flex flex-col gap-4">
<span className="material-symbols-outlined text-primary text-[32px]" data-icon="published_with_changes">published_with_changes</span>
<h4 className="text-headline-sm font-headline-sm uppercase">EXIT STRATEGY</h4>
<p className="text-body-md text-on-surface-variant">Termination for convenience and transition assistance rights.</p>
</div>
</div>
</section>

{/* Footer */}
<footer className="bg-surface-container-lowest border-t-divider-weight border-primary">
<div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-desktop py-8 max-w-max-width mx-auto gap-gutter">
<div className="flex flex-col gap-2 text-left w-full md:w-auto">
<Link href="/" className="text-headline-sm font-headline-sm font-bold text-primary">Lexora</Link>
<div className="text-body-md font-body-md text-on-surface-variant">© 2024 Lexora. Indian Legal-Tech.</div>
</div>
<div className="flex gap-8 flex-wrap">
<a className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary underline" href="/about">Mission</a>
<a className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary underline" href="/about">Coverage</a>
<a className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary underline" href="/legal-disclaimer">Terms of Use</a>
<a className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary underline" href="/legal-disclaimer">Privacy Policy</a>
</div>
</div>
</footer>

    <style jsx global>{`
      @keyframes scan {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(200%); }
      }
    `}</style>
    </>
  );
}
