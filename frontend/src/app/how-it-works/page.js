/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function Page() {
  return (
    <>

{/* TopNavBar */}
<nav className="bg-surface border-b border-outline-variant h-[64px] w-full flex justify-between items-center px-margin-page sticky top-0 z-50">
<div className="flex items-center gap-12 h-full">
<Link href="/" className="font-headline-sm text-headline-sm font-extrabold text-primary border-b-4 border-on-tertiary-container tracking-tight">LEXORA</Link>
<div className="hidden md:flex gap-8 items-center h-full">
<Link className="text-on-surface-variant font-label-lg text-label-lg uppercase tracking-[1.5px] hover:bg-surface-container-high transition-colors h-full flex items-center px-2" href="/dashboard">Dashboard</Link>
<Link className="text-primary border-b-2 border-primary pb-1 font-label-lg text-label-lg uppercase tracking-[1.5px] h-full flex items-center px-2" href="/document-generator">Contracts</Link>
<Link className="text-on-surface-variant font-label-lg text-label-lg uppercase tracking-[1.5px] hover:bg-surface-container-high transition-colors h-full flex items-center px-2" href="/red-flag-analyser">Compliance</Link>
<Link className="text-on-surface-variant font-label-lg text-label-lg uppercase tracking-[1.5px] hover:bg-surface-container-high transition-colors h-full flex items-center px-2" href="/about">Consult</Link>
</div>
</div>
<Link href="/document-generator" className="bg-primary text-on-primary font-label-lg text-label-lg uppercase tracking-[1.5px] px-6 py-3 font-bold hover:bg-surface-container-high transition-colors">
            GET STARTED
        </Link>
</nav>
{/* Hero Band */}
<header className="relative h-[480px] w-full flex items-center justify-center overflow-hidden border-b border-outline-variant">
<img className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale" data-alt="A sophisticated architectural photograph of a high-end law firm interior with sharp geometric lines and deep shadows. The atmosphere is professional and authoritative, featuring a monochromatic palette of blacks and dark greys with high-contrast lighting. Dramatic light streaks across a polished obsidian floor, emphasizing a mood of speed and technological precision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjjiQQNmbwOTlbTfd5esQlPN14vHfRz-H0HFooIl7DfLY1F4ha_REmjED3DLfO_tv391la-iKMEwIMGXkXA2Y8k8vq3rpmjYY7ai6eXRniDUML7eu04Mri1ZV71Vgb_M7bIvdJWHXu4Q32g1YnAK8UCvnq5udIW8tC93FyG5WCdE0JMCDfSnpYHU8p5ipl9f-lwjfyRJ_M9zrf473YiQje1q96mLnP1o557_I4v8Q_nAn1-LB_tLT_8CkwG4vX9eff9WJxRx8wC3E"/>
<div className="absolute inset-0 bg-black/60"></div>
<div className="relative z-10 text-center px-margin-page">
<h1 className="font-display text-display uppercase tracking-tight max-w-4xl mx-auto">FROM IDEA TO FIRST DRAFT IN MINUTES.</h1>
</div>
</header>
{/* Process Detail Sections */}
<main>
{/* BAND 1 */}
<section className="bg-[#000] py-stack-xl border-b border-outline-variant relative overflow-hidden">
<div className="absolute right-0 top-0 text-[30rem] font-extrabold text-white/5 leading-none select-none -mr-20 -mt-20">01</div>
<div className="max-w-7xl mx-auto px-margin-page grid grid-cols-1 md:grid-cols-2 gap-stack-xl items-center relative z-10">
<div>
<div className="tricolor-stripe w-12 mb-6"></div>
<h2 className="font-headline-lg text-headline-lg uppercase mb-6">CHOOSE YOUR DOCUMENT TYPE.</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">Access a comprehensive suite of legal instruments tailored for high-growth tech startups. From SAFE notes to complex IP assignments, LEXORA covers every essential legal pillar.</p>
</div>
<div className="grid grid-cols-2 gap-gutter">
{/* Doc Cards Mockup */}
<div className="bg-[#1a1a1a] border border-outline-variant p-inset-lg hover:border-primary transition-colors">
<span className="material-symbols-outlined text-primary mb-4">description</span>
<div className="font-label-lg text-label-lg uppercase mb-1">SAFE NOTE</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Post-Money Valuation Cap</div>
</div>
<div className="bg-[#1a1a1a] border border-outline-variant p-inset-lg hover:border-primary transition-colors">
<span className="material-symbols-outlined text-primary mb-4">person_add</span>
<div className="font-label-lg text-label-lg uppercase mb-1">OFFER LETTER</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Standard Employee Terms</div>
</div>
<div className="bg-[#1a1a1a] border border-outline-variant p-inset-lg hover:border-primary transition-colors">
<span className="material-symbols-outlined text-primary mb-4">gavel</span>
<div className="font-label-lg text-label-lg uppercase mb-1">NDA</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Unilateral/Mutual</div>
</div>
<div className="bg-[#1a1a1a] border border-outline-variant p-inset-lg hover:border-primary transition-colors">
<span className="material-symbols-outlined text-primary mb-4">shield</span>
<div className="font-label-lg text-label-lg uppercase mb-1">IP ASSIGNMENT</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Full Tech Transfer</div>
</div>
</div>
</div>
</section>
{/* BAND 2 */}
<section className="bg-[#0d0d0d] py-stack-xl border-b border-outline-variant">
<div className="max-w-7xl mx-auto px-margin-page grid grid-cols-1 md:grid-cols-2 gap-stack-xl items-center">
<div className="order-2 md:order-1">
<div className="bg-[#1a1a1a] border border-outline-variant rounded-none p-6 shadow-2xl">
<div className="flex items-center gap-3 mb-8 border-b border-outline-variant pb-4">
<div className="w-2 h-2 rounded-full bg-on-tertiary-container"></div>
<span className="font-label-md text-label-md uppercase tracking-[0.2em]">INTAKE ASSISTANT</span>
</div>
<div className="space-y-6">
<div className="flex flex-col items-start gap-2">
<div className="bg-[#262626] p-4 font-body-md text-body-md max-w-[80%] border-l-2 border-on-tertiary-container">What is the investment amount for this SAFE?</div>
</div>
<div className="flex flex-col items-end gap-2">
<div className="bg-primary text-on-primary p-4 font-body-md text-body-md max-w-[80%]">$500,000 USD</div>
</div>
<div className="flex flex-col items-start gap-2">
<div className="bg-[#262626] p-4 font-body-md text-body-md max-w-[80%] border-l-2 border-on-tertiary-container">Will there be a valuation cap? If yes, please specify.</div>
</div>
<div className="pt-4 border-t border-outline-variant">
<div className="bg-[#0d0d0d] border border-outline-variant p-4 flex justify-between items-center">
<span className="text-on-surface-variant font-body-sm">Type your answer...</span>
<span className="material-symbols-outlined text-primary">arrow_forward</span>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<div className="tricolor-stripe w-12 mb-6"></div>
<h2 className="font-headline-lg text-headline-lg uppercase mb-6">ANSWER 6 SMART QUESTIONS.</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">Our dynamic intake engine eliminates legal jargon. Through a series of targeted inquiries, we gather the exact data needed to generate a professional-grade instrument without the billable hours.</p>
</div>
</div>
</section>
{/* BAND 3 */}
<section className="bg-[#000] py-stack-xl border-b border-outline-variant">
<div className="max-w-7xl mx-auto px-margin-page grid grid-cols-1 md:grid-cols-2 gap-stack-xl items-center">
<div>
<div className="tricolor-stripe w-12 mb-6"></div>
<h2 className="font-headline-lg text-headline-lg uppercase mb-6">YOUR DOCUMENT IS READY.</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">Instantly view a high-fidelity preview of your customized document. LEXORA ensures that every clause is perfectly formatted and legally sound, ready for final review and e-signature.</p>
</div>
<div>
<div className="bg-[#1a1a1a] border border-outline-variant p-10 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-on-tertiary-container/10 to-transparent pointer-events-none"></div>
<div className="relative bg-white text-black p-8 shadow-2xl h-[400px]">
<div className="w-16 h-1 bg-black mb-6"></div>
<div className="font-label-md text-[10px] uppercase font-bold tracking-widest mb-4">SIMPLE AGREEMENT FOR FUTURE EQUITY</div>
<div className="space-y-4">
<div className="h-2 w-full bg-black/10"></div>
<div className="h-2 w-full bg-black/10"></div>
<div className="h-2 w-[80%] bg-black/10"></div>
<div className="h-2 w-full bg-black/10 mt-8"></div>
<div className="h-2 w-full bg-black/10"></div>
<div className="h-2 w-[90%] bg-black/10"></div>
<div className="grid grid-cols-2 gap-4 mt-12">
<div className="h-10 border-b border-black"></div>
<div className="h-10 border-b border-black"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* BAND 4 */}
<section className="bg-[#0d0d0d] py-stack-xl border-b border-outline-variant">
<div className="max-w-7xl mx-auto px-margin-page grid grid-cols-1 md:grid-cols-2 gap-stack-xl items-center">
<div className="order-2 md:order-1">
<div className="bg-[#1a1a1a] border border-outline-variant p-6">
<div className="flex justify-between items-end mb-8">
<div>
<div className="font-label-md text-label-md uppercase text-on-surface-variant mb-1">RISK ANALYSIS</div>
<div className="text-4xl font-extrabold text-primary">42<span className="text-on-surface-variant text-lg">/100</span></div>
</div>
<div className="text-right">
<span className="bg-[#93000a] text-white px-3 py-1 font-label-md text-[10px] uppercase">HIGH RISK</span>
</div>
</div>
<div className="w-full bg-[#262626] h-1 mb-8">
<div className="bg-[#93000a] h-full w-[42%]"></div>
</div>
<div className="space-y-4">
<div className="border-b border-outline-variant pb-4 flex gap-4">
<span className="material-symbols-outlined text-[#93000a]">report</span>
<div>
<div className="font-label-lg text-label-lg uppercase mb-1">UNLIMITED LIABILITY</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Clause 4.2 contains standard phrasing that exposes assets beyond reasonable limits.</div>
</div>
</div>
<div className="border-b border-outline-variant pb-4 flex gap-4">
<span className="material-symbols-outlined text-[#ffb4ab]">warning</span>
<div>
<div className="font-label-lg text-label-lg uppercase mb-1">VAGUE TERMINATION</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Notice period for termination is not explicitly defined in working days.</div>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<div className="tricolor-stripe w-12 mb-6"></div>
<h2 className="font-headline-lg text-headline-lg uppercase mb-6">KNOW EVERY RISK BEFORE YOU SIGN.</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">Our legal AI scans every line to identify predatory terms and unusual clauses. Gain total clarity on your liabilities and obligations before they become liabilities.</p>
</div>
</div>
</section>
{/* Intelligence Features Section */}
<section className="bg-[#000] py-stack-xl px-margin-page border-b border-outline-variant">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-headline-lg text-headline-lg uppercase mb-4">SYSTEM INTELLIGENCE</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">LEXORA is more than a template engine; it's a context-aware legal architect.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div className="bg-[#1a1a1a] border border-outline-variant p-inset-lg hover:bg-[#262626] transition-all group">
<div className="h-1 tricolor-stripe mb-8 opacity-50 group-hover:opacity-100 transition-opacity"></div>
<h3 className="font-label-lg text-label-lg uppercase mb-4">STARTUP STAGE AWARENESS</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Our engine adjusts the tone and rigor of clauses based on whether you are Pre-Seed, Series A, or beyond.</p>
</div>
<div className="bg-[#1a1a1a] border border-outline-variant p-inset-lg hover:bg-[#262626] transition-all group">
<div className="h-1 tricolor-stripe mb-8 opacity-50 group-hover:opacity-100 transition-opacity"></div>
<h3 className="font-label-lg text-label-lg uppercase mb-4">JURISDICTION INTELLIGENCE</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Automatic compliance checks for DE, CA, NY, and international hubs to ensure local enforceability.</p>
</div>
<div className="bg-[#1a1a1a] border border-outline-variant p-inset-lg hover:bg-[#262626] transition-all group">
<div className="h-1 tricolor-stripe mb-8 opacity-50 group-hover:opacity-100 transition-opacity"></div>
<h3 className="font-label-lg text-label-lg uppercase mb-4">CLAUSE LIBRARY</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Access hundreds of battle-tested legal clauses curated by top-tier venture counsel across the globe.</p>
</div>
</div>
</div>
</section>
{/* Red Flag Mode Section */}
<section className="bg-[#1a1a1a] py-stack-xl px-margin-page">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-gutter">
<div className="max-w-2xl">
<h2 className="font-headline-md text-headline-md uppercase mb-6">RED FLAG MODE: UPLOAD ANY CONTRACT.</h2>
<div className="flex flex-wrap gap-3">
<span className="border border-outline-variant px-4 py-2 font-label-md text-label-md uppercase bg-surface">Liability Caps</span>
<span className="border border-outline-variant px-4 py-2 font-label-md text-label-md uppercase bg-surface">Non-Compete Scope</span>
<span className="border border-outline-variant px-4 py-2 font-label-md text-label-md uppercase bg-surface">Payment Terms</span>
<span className="border border-outline-variant px-4 py-2 font-label-md text-label-md uppercase bg-surface">Governing Law</span>
</div>
</div>
<Link href="/red-flag-analyser" className="border-2 border-primary text-primary px-8 py-4 font-label-lg text-label-lg uppercase tracking-[1.5px] font-bold hover:bg-primary hover:text-black transition-all">
                    UPLOAD FOR ANALYSIS
                </Link>
</div>
</section>
</main>
{/* Footer */}
<footer className="bg-surface border-t border-outline-variant w-full pt-stack-xl pb-stack-md px-margin-page">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter mb-12">
<div className="col-span-1">
<Link href="/" className="font-headline-sm text-headline-sm font-bold text-primary mb-6">LEXORA</Link>
<p className="font-body-sm text-body-sm text-on-surface-variant">The definitive protocol for startup legal engineering.</p>
</div>
<div>
<h4 className="font-label-md text-label-md uppercase tracking-[0.15em] mb-6 text-primary">Product</h4>
<ul className="space-y-3">
<li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="/dashboard">Dashboard</Link></li>
<li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="/document-generator">Contracts</Link></li>
<li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="/red-flag-analyser">Compliance</Link></li>
</ul>
</div>
<div>
<h4 className="font-label-md text-label-md uppercase tracking-[0.15em] mb-6 text-primary">Company</h4>
<ul className="space-y-3">
<li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="/about">About Us</Link></li>
<li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="/about">Legal Team</Link></li>
<li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="/about">Careers</Link></li>
</ul>
</div>
<div>
<h4 className="font-label-md text-label-md uppercase tracking-[0.15em] mb-6 text-primary">Legal</h4>
<ul className="space-y-3">
<li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="/legal-disclaimer">Privacy Policy</Link></li>
<li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="/legal-disclaimer">Terms of Service</Link></li>
<li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="/legal-disclaimer">Risk Disclaimer</Link></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-outline-variant pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="font-label-md text-label-md uppercase tracking-[0.15em] text-on-surface-variant">© 2024 LEXORA TECHNOLOGIES. ALL RIGHTS RESERVED.</span>
<div className="flex gap-6">
<span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">public</span>
<span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">share</span>
</div>
</div>
</footer>

    </>
  );
}
