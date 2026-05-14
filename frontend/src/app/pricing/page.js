/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function Page() {
  return (
    <>

{/* TopNavBar */}
<nav className="h-[64px] w-full border-b border-outline-variant bg-surface sticky top-0 z-50">
<div className="flex justify-between items-center px-margin-page w-full h-full max-w-[1440px] mx-auto">
<div className="flex items-center gap-stack-md">
<Link href="/" className="font-headline-sm text-headline-sm font-bold text-primary border-b-4 border-on-tertiary-container">LEXORA</Link>
</div>
<div className="hidden md:flex items-center gap-stack-lg">
<a className="text-on-surface-variant font-label-lg uppercase tracking-[1.5px] hover:bg-surface-container-high transition-colors px-2 py-1" href="/dashboard">Dashboard</a>
<a className="text-on-surface-variant font-label-lg uppercase tracking-[1.5px] hover:bg-surface-container-high transition-colors px-2 py-1" href="/document-generator">Contracts</a>
<a className="text-on-surface-variant font-label-lg uppercase tracking-[1.5px] hover:bg-surface-container-high transition-colors px-2 py-1" href="/red-flag-analyser">Compliance</a>
<a className="text-on-surface-variant font-label-lg uppercase tracking-[1.5px] hover:bg-surface-container-high transition-colors px-2 py-1" href="/about">Consult</a>
</div>
<Link href="/document-generator" className="border border-primary px-stack-md py-2 font-label-lg uppercase tracking-[1.5px] hover:bg-primary hover:text-surface transition-all">GET STARTED</Link>
</div>
</nav>
{/* Hero Band */}
<header className="h-[320px] w-full flex items-center px-margin-page border-b border-outline-variant bg-surface relative overflow-hidden">
<div className="absolute inset-0 opacity-20 pointer-events-none">
<div className="w-full h-full bg-[radial-gradient(circle_at_30%_30%,#3c3c3c_0%,transparent_50%)]"></div>
</div>
<div className="max-w-7xl mx-auto w-full z-10">
<h1 className="font-display text-display uppercase font-[700] tracking-tight leading-none">STRAIGHTFORWARD<br/>PRICING.</h1>
</div>
</header>
{/* Pricing Section */}
<section className="py-stack-xl px-margin-page">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/* FREE Card */}
<div className="bg-[#1a1a1a] border border-[#3c3c3c] flex flex-col relative">
<div className="tricolor-stripe absolute top-0 left-0"></div>
<div className="p-inset-lg pt-stack-lg">
<span className="font-label-md text-label-md uppercase text-on-surface-variant mb-stack-xs block">PERSONAL</span>
<h3 className="font-headline-lg text-headline-lg mb-stack-sm">₹0</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-stack-lg">Essential legal tools for individuals and solo founders starting their journey.</p>
<div className="space-y-stack-sm mb-stack-xl">
<div className="flex items-center gap-2 border-b border-[#3c3c3c] pb-2">
<span className="material-symbols-outlined text-on-tertiary-container text-sm">check</span>
<span className="font-body-md text-body-md">Basic Contract Builder</span>
</div>
<div className="flex items-center gap-2 border-b border-[#3c3c3c] pb-2">
<span className="material-symbols-outlined text-on-tertiary-container text-sm">check</span>
<span className="font-body-md text-body-md">Community Access</span>
</div>
<div className="flex items-center gap-2 border-b border-[#3c3c3c] pb-2">
<span className="material-symbols-outlined text-on-tertiary-container text-sm">check</span>
<span className="font-body-md text-body-md">3 Document Storage</span>
</div>
</div>
<button className="w-full border border-primary py-4 font-label-lg uppercase tracking-[1.5px] hover:bg-surface-container-high transition-colors">START FREE</button>
</div>
</div>
{/* STARTER Card (Elevated) */}
<div className="bg-[#262626] border border-primary flex flex-col relative scale-105 z-10 shadow-2xl">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background font-label-md px-4 py-1 uppercase tracking-widest">MOST POPULAR</div>
<div className="p-inset-lg pt-stack-lg">
<span className="font-label-md text-label-md uppercase text-primary mb-stack-xs block">GROWTH</span>
<div className="flex items-baseline gap-1 mb-stack-sm">
<h3 className="font-headline-lg text-headline-lg">₹499</h3>
<span className="font-label-lg text-on-surface-variant">/MONTH</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-stack-lg">Comprehensive legal protection for growing startups and small teams.</p>
<div className="space-y-stack-sm mb-stack-xl">
<div className="flex items-center gap-2 border-b border-[#3c3c3c] pb-2">
<span className="material-symbols-outlined text-on-tertiary-container text-sm">check</span>
<span className="font-body-md text-body-md">Advanced Template Library</span>
</div>
<div className="flex items-center gap-2 border-b border-[#3c3c3c] pb-2">
<span className="material-symbols-outlined text-on-tertiary-container text-sm">check</span>
<span className="font-body-md text-body-md">E-Signature Integration</span>
</div>
<div className="flex items-center gap-2 border-b border-[#3c3c3c] pb-2">
<span className="material-symbols-outlined text-on-tertiary-container text-sm">check</span>
<span className="font-body-md text-body-md">Compliance Dashboard</span>
</div>
<div className="flex items-center gap-2 border-b border-[#3c3c3c] pb-2">
<span className="material-symbols-outlined text-on-tertiary-container text-sm">check</span>
<span className="font-body-md text-body-md">Priority Email Support</span>
</div>
</div>
<button className="w-full bg-primary text-background py-4 font-label-lg uppercase tracking-[1.5px] hover:opacity-90 transition-opacity">CHOOSE STARTER</button>
</div>
</div>
{/* PROFESSIONAL Card */}
<div className="bg-[#1a1a1a] border border-[#3c3c3c] flex flex-col">
<div className="p-inset-lg pt-stack-lg">
<span className="font-label-md text-label-md uppercase text-on-surface-variant mb-stack-xs block">ENTERPRISE</span>
<div className="flex items-baseline gap-1 mb-stack-sm">
<h3 className="font-headline-lg text-headline-lg">₹1,499</h3>
<span className="font-label-lg text-on-surface-variant">/MONTH</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-stack-lg">Uncompromising legal scale for established firms and high-velocity teams.</p>
<div className="space-y-stack-sm mb-stack-xl">
<div className="flex items-center gap-2 border-b border-[#3c3c3c] pb-2">
<span className="material-symbols-outlined text-on-tertiary-container text-sm">check</span>
<span className="font-body-md text-body-md">Unlimited Document Storage</span>
</div>
<div className="flex items-center gap-2 border-b border-[#3c3c3c] pb-2">
<span className="material-symbols-outlined text-on-tertiary-container text-sm">check</span>
<span className="font-body-md text-body-md">Multi-User Workspaces</span>
</div>
<div className="flex items-center gap-2 border-b border-[#3c3c3c] pb-2">
<span className="material-symbols-outlined text-on-tertiary-container text-sm">check</span>
<span className="font-body-md text-body-md">API Access for Automation</span>
</div>
<div className="flex items-center gap-2 border-b border-[#3c3c3c] pb-2">
<span className="material-symbols-outlined text-on-tertiary-container text-sm">check</span>
<span className="font-body-md text-body-md">24/7 Dedicated Support</span>
</div>
</div>
<button className="w-full border border-primary py-4 font-label-lg uppercase tracking-[1.5px] hover:bg-surface-container-high transition-colors">CONTACT SALES</button>
</div>
</div>
</div>
</section>
{/* FAQ Section */}
<section className="py-stack-xl px-margin-page bg-surface-container-lowest border-t border-outline-variant">
<div className="max-w-4xl mx-auto">
<h2 className="font-headline-lg text-headline-lg uppercase font-[700] mb-stack-xl text-center">COMMON QUESTIONS.</h2>
<div className="space-y-0">
{/* FAQ 1 */}
<div className="border-b border-[#3c3c3c] py-stack-md group cursor-pointer hover:bg-surface-container-low transition-colors px-4">
<div className="flex justify-between items-center">
<h4 className="font-headline-sm text-headline-sm uppercase tracking-wide">WHAT IS THE CANCELLATION POLICY?</h4>
<span className="material-symbols-outlined">add</span>
</div>
</div>
{/* FAQ 2 */}
<div className="border-b border-[#3c3c3c] py-stack-md group cursor-pointer hover:bg-surface-container-low transition-colors px-4">
<div className="flex justify-between items-center">
<h4 className="font-headline-sm text-headline-sm uppercase tracking-wide">CAN I UPGRADE MY PLAN AT ANY TIME?</h4>
<span className="material-symbols-outlined">add</span>
</div>
</div>
{/* FAQ 3 */}
<div className="border-b border-[#3c3c3c] py-stack-md group cursor-pointer hover:bg-surface-container-low transition-colors px-4">
<div className="flex justify-between items-center">
<h4 className="font-headline-sm text-headline-sm uppercase tracking-wide">ARE CONTRACTS LEGALLY BINDING?</h4>
<span className="material-symbols-outlined">add</span>
</div>
</div>
{/* FAQ 4 */}
<div className="border-b border-[#3c3c3c] py-stack-md group cursor-pointer hover:bg-surface-container-low transition-colors px-4">
<div className="flex justify-between items-center">
<h4 className="font-headline-sm text-headline-sm uppercase tracking-wide">HOW SECURE IS MY DATA?</h4>
<span className="material-symbols-outlined">add</span>
</div>
</div>
{/* FAQ 5 */}
<div className="border-b border-[#3c3c3c] py-stack-md group cursor-pointer hover:bg-surface-container-low transition-colors px-4">
<div className="flex justify-between items-center">
<h4 className="font-headline-sm text-headline-sm uppercase tracking-wide">DO YOU OFFER ENTERPRISE DISCOUNTS?</h4>
<span className="material-symbols-outlined">add</span>
</div>
</div>
{/* FAQ 6 */}
<div className="border-b border-[#3c3c3c] py-stack-md group cursor-pointer hover:bg-surface-container-low transition-colors px-4">
<div className="flex justify-between items-center">
<h4 className="font-headline-sm text-headline-sm uppercase tracking-wide">CAN I IMPORT EXISTING CONTRACTS?</h4>
<span className="material-symbols-outlined">add</span>
</div>
</div>
</div>
</div>
</section>
{/* Footer */}
<footer className="w-full pt-stack-xl pb-stack-md border-t border-outline-variant bg-surface">
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-page max-w-7xl mx-auto">
<div className="flex flex-col gap-4">
<Link href="/" className="font-headline-sm text-headline-sm font-bold text-primary">LEXORA</Link>
<p className="font-body-sm text-body-sm text-on-surface-variant">The future of legal infrastructure. Built for speed, scale, and certainty.</p>
</div>
<div>
<h5 className="font-label-md text-label-md uppercase tracking-[0.15em] mb-4">Product</h5>
<ul className="space-y-2">
<li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="/pricing">Pricing</Link></li>
<li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="/document-generator">Features</Link></li>
<li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="/how-it-works">Roadmap</Link></li>
</ul>
</div>
<div>
<h5 className="font-label-md text-label-md uppercase tracking-[0.15em] mb-4">Company</h5>
<ul className="space-y-2">
<li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="/about">About Us</Link></li>
<li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="/about">Careers</Link></li>
<li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="/about">Contact</Link></li>
</ul>
</div>
<div>
<h5 className="font-label-md text-label-md uppercase tracking-[0.15em] mb-4">Legal</h5>
<ul className="space-y-2">
<li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="/legal-disclaimer">Privacy Policy</Link></li>
<li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="/legal-disclaimer">Terms of Service</Link></li>
<li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="/legal-disclaimer">Cookie Policy</Link></li>
</ul>
</div>
</div>
<div className="mt-stack-xl px-margin-page max-w-7xl mx-auto border-t border-outline-variant pt-stack-md">
<p className="font-label-md text-label-md uppercase tracking-[0.15em] text-on-surface-variant text-center">© 2024 LEXORA TECHNOLOGIES. ALL RIGHTS RESERVED.</p>
</div>
</footer>

    </>
  );
}
