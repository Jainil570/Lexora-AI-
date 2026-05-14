"use client";

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const { user, token, loading, logout } = useAuth();
  const router = useRouter();
  const [history, setHistory] = useState([]);
  const [historyLoading, setHistoryLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchHistory = async () => {
      if (!token) return;
      try {
        const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
        const res = await fetch(`${API_BASE}/api/documents/history`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          setHistory(data);
        }
      } catch (err) {
        console.error("Failed to fetch history:", err);
      } finally {
        setHistoryLoading(false);
      }
    };
    fetchHistory();
  }, [token]);

  if (loading || !user) {
    return <div className="min-h-screen bg-black flex items-center justify-center text-primary font-headline-sm uppercase">Loading Profile...</div>;
  }

  return (
    <>

{/* Top Navigation */}
<nav className="bg-background dark:bg-background border-b border-outline-variant fixed top-0 w-full z-50">
<div className="flex justify-between items-center w-full px-margin-desktop h-12 max-w-max-width mx-auto">
<Link href="/" className="text-headline-md font-headline-md font-bold uppercase tracking-tighter text-primary">Lexora</Link>
<div className="flex items-center gap-8">
<a className="text-primary border-b-2 border-primary pb-1 font-label-caps text-label-caps uppercase" href="/document-generator">Documents</a>
<a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-caps text-label-caps uppercase" href="/red-flag-analyser">Analysis</a>
<a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-caps text-label-caps uppercase" href="/about">About</a>
<a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-caps text-label-caps uppercase" href="/legal-disclaimer">Terms</a>
<div className="flex items-center gap-6 border-l border-outline-variant pl-8">
<button onClick={logout} className="font-button-text text-button-text uppercase text-on-surface-variant hover:text-primary transition-colors">LOGOUT</button>
<div className="w-10 h-10 bg-surface-container-lowest border border-primary flex items-center justify-center font-bold text-primary">
                        {user.full_name?.substring(0,2).toUpperCase() || 'XX'}
                    </div>
</div>
</div>
</div>
</nav>
<main className="max-w-max-width mx-auto px-margin-desktop pt-24 pb-32">
{/* Dashboard Header */}
<header className="pt-24 mb-16">
<h1 className="text-[56px] font-bold text-primary leading-tight uppercase">GOOD MORNING, {user.full_name?.split(' ')[0] || 'FOUNDER'}.</h1>
<p className="text-[18px] font-light text-on-surface-variant mt-4">
                You have {history.length} documents generated. <span className="text-primary font-normal">Starter plan</span> · {10 - (history.length % 10)} documents remaining this cycle.
            </p>
</header>
{/* Stat Cells */}
<section className="grid grid-cols-1 md:grid-cols-4 gap-0 mb-16 hairline">
<div className="bg-surface-container-lowest p-8 flex flex-col justify-center border-r border-[#3c3c3c]">
<span className="text-[32px] font-bold text-primary leading-none">{history.length}</span>
<span className="text-label-caps font-label-caps text-[#7e7e7e] mt-2 uppercase">TOTAL DOCUMENTS</span>
</div>
<div className="bg-surface-container-lowest p-8 flex flex-col justify-center border-r border-[#3c3c3c]">
<span className="text-[32px] font-bold text-primary leading-none">2</span>
<span className="text-label-caps font-label-caps text-[#7e7e7e] mt-2 uppercase">HIGH RISK FLAGS</span>
</div>
<div className="bg-surface-container-lowest p-8 flex flex-col justify-center border-r border-[#3c3c3c]">
<span className="text-[32px] font-bold text-primary leading-none">SEED STAGE</span>
<span className="text-label-caps font-label-caps text-[#7e7e7e] mt-2 uppercase">FUNDING ROUND</span>
</div>
<div className="bg-surface-container-lowest p-8 flex flex-col justify-center">
<span className="text-[32px] font-bold text-primary leading-none">MAHARASHTRA</span>
<span className="text-label-caps font-label-caps text-[#7e7e7e] mt-2 uppercase">JURISDICTION</span>
</div>
</section>
{/* Quick Action Bar */}
<section className="w-full bg-surface-container-lowest p-12 mb-24 hairline">
<div className="flex flex-wrap gap-4 items-center justify-between">
<button className="h-12 px-6 border border-primary text-primary font-button-text text-button-text uppercase hover:bg-primary hover:text-background transition-all group flex items-center">
                    NEW NDA <span className="ml-4 transition-transform group-hover:translate-x-1">→</span>
</button>
<button className="h-12 px-6 border border-primary text-primary font-button-text text-button-text uppercase hover:bg-primary hover:text-background transition-all group flex items-center">
                    NEW FOUNDER AGREEMENT <span className="ml-4 transition-transform group-hover:translate-x-1">→</span>
</button>
<button className="h-12 px-6 border border-primary text-primary font-button-text text-button-text uppercase hover:bg-primary hover:text-background transition-all group flex items-center">
                    NEW ESOP <span className="ml-4 transition-transform group-hover:translate-x-1">→</span>
</button>
<button className="h-12 px-6 border border-primary text-primary font-button-text text-button-text uppercase hover:bg-primary hover:text-background transition-all group flex items-center">
                    NEW VENDOR CONTRACT <span className="ml-4 transition-transform group-hover:translate-x-1">→</span>
</button>
<button className="h-12 px-6 border border-primary text-primary font-button-text text-button-text uppercase hover:bg-primary hover:text-background transition-all group flex items-center">
                    ANALYSE A CONTRACT <span className="ml-4 transition-transform group-hover:translate-x-1">→</span>
</button>
</div>
</section>
{/* Document History Table */}
<section className="mb-24">
<div className="flex flex-col mb-8">
<h2 className="text-headline-md font-headline-md text-primary mb-2 uppercase">RECENT DOCUMENTS</h2>
<div className="tricolor-stripe w-full"></div>
</div>
<div className="overflow-x-auto">
<table className="w-full border-collapse">
<thead>
<tr className="bg-surface-container-high hairline">
<th className="px-6 py-4 text-left font-label-caps text-label-caps text-[#7e7e7e] uppercase border-r border-[#3c3c3c]">TYPE</th>
<th className="px-6 py-4 text-left font-label-caps text-label-caps text-[#7e7e7e] uppercase border-r border-[#3c3c3c]">PARTIES</th>
<th className="px-6 py-4 text-left font-label-caps text-label-caps text-[#7e7e7e] uppercase border-r border-[#3c3c3c]">DATE</th>
<th className="px-6 py-4 text-left font-label-caps text-label-caps text-[#7e7e7e] uppercase border-r border-[#3c3c3c]">RISK</th>
<th className="px-6 py-4 text-left font-label-caps text-label-caps text-[#7e7e7e] uppercase border-r border-[#3c3c3c]">STATUS</th>
<th className="px-6 py-4 text-left font-label-caps text-label-caps text-[#7e7e7e] uppercase">ACTIONS</th>
</tr>
</thead>
<tbody>
{historyLoading ? (
  <tr><td colSpan="6" className="px-6 py-4 text-center text-on-surface-variant">Loading history...</td></tr>
) : history.length === 0 ? (
  <tr><td colSpan="6" className="px-6 py-4 text-center text-on-surface-variant">No documents generated yet. Create your first contract above.</td></tr>
) : (
  history.map((doc, idx) => (
    <tr key={idx} className="hairline h-16 hover:bg-surface-container-low transition-colors">
      <td className="px-6 border-r border-[#3c3c3c] font-bold text-primary">{doc.filename}</td>
      <td className="px-6 border-r border-[#3c3c3c] text-on-surface-variant">{doc.parties}</td>
      <td className="px-6 border-r border-[#3c3c3c] text-on-surface-variant text-[12px]">{new Date(doc.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase()}</td>
      <td className="px-6 border-r border-[#3c3c3c]">
        <span className="px-2 py-1 border border-green-500 text-green-500 text-[10px] font-bold">{doc.risk || 'LOW'}</span>
      </td>
      <td className="px-6 border-r border-[#3c3c3c]">
        <span className="text-[10px] font-bold text-primary uppercase">{doc.status || 'COMPLETED'}</span>
      </td>
      <td className="px-6 flex gap-4 h-16 items-center">
        <a href={process.env.NEXT_PUBLIC_API_URL + doc.docx_url || "http://localhost:8000" + doc.docx_url} target="_blank" className="text-[12px] font-bold underline hover:text-primary uppercase" rel="noreferrer">DOCX</a>
        <a href={process.env.NEXT_PUBLIC_API_URL + doc.pdf_url || "http://localhost:8000" + doc.pdf_url} target="_blank" className="text-[12px] font-bold underline hover:text-primary uppercase" rel="noreferrer">PDF</a>
      </td>
    </tr>
  ))
)}
</tbody>
</table>
</div>
</section>
{/* Risk Summary & Actions */}
<section className="grid grid-cols-1 md:grid-cols-2 gap-12">
{/* Left: Risk Overview */}
<div>
<h3 className="text-[40px] font-bold text-primary mb-8 uppercase leading-tight">YOUR RISK OVERVIEW</h3>
<div className="space-y-6">
<div className="bg-surface-container p-6 hairline border-l-4 border-l-[#e22718]">
<h4 className="font-bold text-primary uppercase mb-2">CRITICAL LIABILITY CLAUSE</h4>
<p className="text-body-md text-on-surface-variant">The Vendor agreement with AWS India contains an uncapped liability clause. This exceeds standard Seed-stage risk tolerance.</p>
</div>
<div className="bg-surface-container p-6 hairline border-l-4 border-l-[#1c69d4]">
<h4 className="font-bold text-primary uppercase mb-2">INTELLECTUAL PROPERTY GAP</h4>
<p className="text-body-md text-on-surface-variant">Founder agreement vesting schedule lacks specific 'Work for Hire' assignment clauses for Maharashtra jurisdiction.</p>
</div>
</div>
</div>
{/* Right: Pending Actions */}
<div className="bg-surface-container-lowest p-8 hairline">
<h3 className="text-headline-sm font-headline-sm text-primary mb-8 uppercase">PENDING ACTIONS</h3>
<div className="space-y-4">
<label className="flex items-center gap-4 p-4 border border-[#3c3c3c] hover:border-primary transition-colors cursor-pointer group">
<input className="w-5 h-5 rounded-none border-[#3c3c3c] bg-transparent text-primary focus:ring-0" type="checkbox"/>
<span className="text-body-md text-on-surface group-hover:text-primary uppercase">Countersign Reliance NDA</span>
</label>
<label className="flex items-center gap-4 p-4 border border-[#3c3c3c] hover:border-primary transition-colors cursor-pointer group">
<input className="w-5 h-5 rounded-none border-[#3c3c3c] bg-transparent text-primary focus:ring-0" type="checkbox"/>
<span className="text-body-md text-on-surface group-hover:text-primary uppercase">Upload Stamp Duty Receipt - Embassy</span>
</label>
<label className="flex items-center gap-4 p-4 border border-[#3c3c3c] hover:border-primary transition-colors cursor-pointer group">
<input className="w-5 h-5 rounded-none border-[#3c3c3c] bg-transparent text-primary focus:ring-0" type="checkbox"/>
<span className="text-body-md text-on-surface group-hover:text-primary uppercase">Confirm ESOP Grant Letters List</span>
</label>
</div>
</div>
</section>
</main>
{/* Footer */}
<footer className="bg-surface-container-lowest dark:bg-surface-container-lowest border-t-divider-weight border-primary bg-background w-full">
<div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-desktop py-8 max-w-max-width mx-auto gap-gutter">
<div className="flex flex-col gap-2">
<Link href="/" className="text-headline-sm font-headline-sm font-bold text-primary">Lexora</Link>
<p className="text-on-surface-variant text-body-md">© 2024 Lexora. Indian Legal-Tech.</p>
</div>
<div className="flex gap-8">
<a className="text-on-surface-variant hover:text-primary underline text-label-caps font-label-caps uppercase" href="/about">Mission</a>
<a className="text-on-surface-variant hover:text-primary underline text-label-caps font-label-caps uppercase" href="/about">Coverage</a>
<a className="text-on-surface-variant hover:text-primary underline text-label-caps font-label-caps uppercase" href="/legal-disclaimer">Terms of Use</a>
<a className="text-on-surface-variant hover:text-primary underline text-label-caps font-label-caps uppercase" href="/legal-disclaimer">Privacy Policy</a>
</div>
</div>
</footer>

    </>
  );
}
