/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function Page() {
  return (
    <>

{/* TopNavBar */}
<nav className="h-[64px] w-full bg-black hairline-b fixed top-0 z-50 flex justify-between items-center px-margin-page">
<div className="flex items-center">
<Link href="/">
<span className="font-headline-sm text-headline-sm font-bold text-primary">LEX</span>
<span className="font-headline-sm text-headline-sm font-bold text-primary tricolor-accent">ORA</span>
</Link>
</div>
<div className="hidden md:flex gap-8 items-center">
<Link className="font-label-lg text-label-lg uppercase tracking-[1.5px] text-on-surface-variant hover:text-primary transition-colors" href="/document-generator">PRODUCT</Link>
<Link className="font-label-lg text-label-lg uppercase tracking-[1.5px] text-on-surface-variant hover:text-primary transition-colors" href="/how-it-works">HOW IT WORKS</Link>
<Link className="font-label-lg text-label-lg uppercase tracking-[1.5px] text-on-surface-variant hover:text-primary transition-colors" href="/pricing">PRICING</Link>
<Link className="font-label-lg text-label-lg uppercase tracking-[1.5px] text-on-surface-variant hover:text-primary transition-colors" href="/about">ABOUT</Link>
</div>
<div className="flex gap-4">
<Link href="/login" className="h-[48px] px-8 border border-white font-label-lg text-label-lg uppercase tracking-[1.5px] hover:bg-surface-container-high transition-colors flex items-center">LOGIN</Link>
<Link href="/register" className="h-[48px] px-8 bg-white text-black font-label-lg text-label-lg uppercase tracking-[1.5px] hover:opacity-90 transition-opacity flex items-center">GET STARTED</Link>
</div>
</nav>
{/* Hero Section */}
<section className="relative w-full min-h-[680px] pt-[64px] flex items-center overflow-hidden">
<div className="absolute inset-0 z-0 bg-[#111111]">
<img alt="Modern architectural lines" className="w-full h-full object-cover opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0MsiCMJUE2teE3WqF6Tp_7WWYNnVmOHP5zqza6l4AKPoQW9XxAUjOpt7YnIzSq_oR6wVba5UQSZRMzNznf3-XUxd3EbHPH0yN2s-jRzh6H0k-9pqSjScXokMjFN1IYKBVcKueD8W5Wocp1-ZGlR6-lA9ByXmoBMZJjZFBqxLelYSW8Z4LVktTZgkxMDYmanBmlHhspVM13Co2O1iL8FqtUDoq0W8I86yplDAYiMJn4lTKxfC6QY3p3kndZ4OFvAczujLVtNK3BkE"/>
</div>
<div className="relative z-10 px-margin-page w-full max-w-7xl mx-auto grid grid-cols-12 gap-gutter">
<div className="col-span-12 md:col-span-8 flex flex-col items-start gap-stack-md">
<div className="tricolor-stripe w-24"></div>
<h1 className="font-display text-display uppercase leading-none">
                    LEGAL CLARITY.<br/>FOR INDIAN STARTUPS.
                </h1>
<p className="font-body-lg text-body-lg text-[#bbbbbb] max-w-xl">
                    Generate investor-safe NDAs, Founder Agreements, and Employment Contracts in minutes. High-precision legal engineering for the next generation of founders.
                </p>
<div className="flex items-center gap-8 mt-4">
<Link href="/document-generator" className="h-[48px] px-8 border border-white font-label-lg text-label-lg uppercase tracking-[1.5px] hover:bg-white hover:text-black transition-all flex items-center">
                        GENERATE YOUR FIRST DOCUMENT →
                    </Link>
<Link className="font-label-lg text-label-lg uppercase tracking-[1.5px] text-primary hover:underline underline-offset-8 transition-all" href="/how-it-works">
                        SEE HOW IT WORKS
                    </Link>
</div>
</div>
</div>
</section>
{/* Trust Bar */}
<section className="bg-[#0d0d0d] hairline-b hairline-t w-full">
<div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-[#3c3c3c]">
<div className="py-12 px-6 flex flex-col items-center justify-center text-center">
<span className="font-headline-sm text-headline-sm block mb-2">2,400+</span>
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">DOCUMENTS GENERATED</span>
</div>
<div className="py-12 px-6 flex flex-col items-center justify-center text-center">
<span className="font-headline-sm text-headline-sm block mb-2">5</span>
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">DOCUMENT TYPES</span>
</div>
<div className="py-12 px-6 flex flex-col items-center justify-center text-center">
<span className="font-headline-sm text-headline-sm block mb-2">450+</span>
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">ACTIVE STARTUPS</span>
</div>
<div className="py-12 px-6 flex flex-col items-center justify-center text-center">
<span className="font-headline-sm text-headline-sm block mb-2">99.9%</span>
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">INVESTOR ACCEPTANCE</span>
</div>
<div className="py-12 px-6 flex flex-col items-center justify-center text-center">
<span className="font-headline-sm text-headline-sm block mb-2">10X</span>
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">FASTER COMPLIANCE</span>
</div>
</div>
</section>
{/* Document Types Section */}
<section className="py-stack-xl px-margin-page max-w-7xl mx-auto">
<div className="mb-stack-lg">
<h2 className="font-headline-lg text-[56px] uppercase leading-tight mb-4">EVERY DOCUMENT YOUR<br/>STARTUP NEEDS.</h2>
<div className="tricolor-stripe w-32"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
{/* Card 1 */}
<Link href="/document-generator" className="bg-[#1a1a1a] hairline p-inset-lg flex flex-col justify-between aspect-square hover:bg-[#262626] transition-colors group">
<div className="flex flex-col gap-4">
<span className="material-symbols-outlined text-4xl">description</span>
<h3 className="font-headline-sm text-headline-sm uppercase">NDA</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Protect your intellectual property with ironclad confidentiality agreements.</p>
</div>
<span className="material-symbols-outlined self-end opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
</Link>
{/* Card 2 */}
<Link href="/document-generator" className="bg-[#1a1a1a] hairline p-inset-lg flex flex-col justify-between aspect-square hover:bg-[#262626] transition-colors group">
<div className="flex flex-col gap-4">
<span className="material-symbols-outlined text-4xl">groups</span>
<h3 className="font-headline-sm text-headline-sm uppercase">FOUNDER AGREEMENT</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Solidify co-founder relationships with clear equity and vesting schedules.</p>
</div>
<span className="material-symbols-outlined self-end opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
</Link>
{/* Card 3 */}
<Link href="/document-generator" className="bg-[#1a1a1a] hairline p-inset-lg flex flex-col justify-between aspect-square hover:bg-[#262626] transition-colors group">
<div className="flex flex-col gap-4">
<span className="material-symbols-outlined text-4xl">work</span>
<h3 className="font-headline-sm text-headline-sm uppercase">EMPLOYMENT</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Standardized contracts for your growing team, fully Indian law compliant.</p>
</div>
<span className="material-symbols-outlined self-end opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
</Link>
{/* Card 4 */}
<Link href="/document-generator" className="bg-[#1a1a1a] hairline p-inset-lg flex flex-col justify-between aspect-square hover:bg-[#262626] transition-colors group">
<div className="flex flex-col gap-4">
<span className="material-symbols-outlined text-4xl">assignment</span>
<h3 className="font-headline-sm text-headline-sm uppercase">ADVISORY</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Bring mentors on board with defined scope and equity compensation.</p>
</div>
<span className="material-symbols-outlined self-end opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
</Link>
{/* Card 5 */}
<Link href="/document-generator" className="bg-[#1a1a1a] hairline p-inset-lg flex flex-col justify-between aspect-square hover:bg-[#262626] transition-colors group">
<div className="flex flex-col gap-4">
<span className="material-symbols-outlined text-4xl">shield</span>
<h3 className="font-headline-sm text-headline-sm uppercase">IP ASSIGNMENT</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Ensure your company owns every line of code created by contractors.</p>
</div>
<span className="material-symbols-outlined self-end opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
</Link>
</div>
</section>
{/* AI Intelligence Section */}
<section className="py-stack-xl bg-black">
<div className="max-w-7xl mx-auto px-margin-page grid grid-cols-1 md:grid-cols-2 gap-stack-xl items-center">
<div className="flex flex-col gap-stack-md">
<span className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant">INTELLIGENCE LAYER</span>
<h2 className="font-headline-lg text-headline-lg uppercase leading-tight">NOT JUST A<br/>TEMPLATE GENERATOR.</h2>
<div className="mt-8 flex flex-col gap-8">
<div className="flex gap-6 items-start">
<div className="tricolor-stripe-vertical h-16 shrink-0"></div>
<div>
<h4 className="font-headline-sm text-headline-sm uppercase mb-2">DYNAMIC ADAPTATION</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Our engine rewrites clauses in real-time based on your specific business sector and jurisdiction.</p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="tricolor-stripe-vertical h-16 shrink-0"></div>
<div>
<h4 className="font-headline-sm text-headline-sm uppercase mb-2">INVESTOR-READY LOGIC</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Pre-vetted by Tier-1 VCs to ensure your documents pass due diligence without friction.</p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="tricolor-stripe-vertical h-16 shrink-0"></div>
<div>
<h4 className="font-headline-sm text-headline-sm uppercase mb-2">SMART VERSIONING</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Automatically track changes and maintain an immutable ledger of every contract iteration.</p>
</div>
</div>
</div>
</div>
<div className="bg-[#111111] hairline aspect-[4/5] relative overflow-hidden">
<img alt="Technological abstract background" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeg_nJq--It5Z9E6jVn46ylycF2Y8nvokxzaYs4AYTHYih5-6edpXpdOCWsO1PDvUaDvTQwDrNmJJ2ufuoIHPkW5D72xcmTGbnujLrq52VkLaH1hto0khDpXu6Kxl9JG1aXGE801m2tIPVnebEuhQFMBQBDh5nWtZQL0L9XL5MH8VF34qdCdH9ZJkuQEnB1PcSLdP6F0RIAn_4WYFBwk9cGUFItG4WjNHC_zAFwHayvYjjT1hV-DWG0P54U0mvh0F6xGe2V9LjHVE"/>
</div>
</div>
</section>
{/* Red Flag Mode Callout */}
<section className="py-stack-xl px-margin-page bg-black">
<div className="max-w-7xl mx-auto bg-[#1a1a1a] hairline p-stack-lg relative overflow-hidden">
<div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="flex flex-col gap-4">
<div className="inline-flex border border-red-600 px-3 py-1 w-fit">
<span className="font-label-md text-label-md text-red-600 uppercase tracking-widest">MOST POWERFUL FEATURE</span>
</div>
<h2 className="font-headline-lg text-headline-lg uppercase leading-tight">UPLOAD ANY CONTRACT.<br/>WE FIND THE TRAPS.</h2>
</div>
<Link href="/red-flag-analyser" className="h-[64px] px-12 bg-white text-black font-label-lg text-label-lg uppercase tracking-[2px] hover:bg-on-surface transition-all flex items-center gap-4">
                    ANALYSE A CONTRACT <span className="material-symbols-outlined">arrow_forward</span>
</Link>
</div>
{/* Decorative background element */}
<div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-red-600/10 to-transparent pointer-events-none"></div>
</div>
</section>
{/* Testimonial Band */}
<section className="py-stack-xl px-margin-page max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex flex-col gap-6 p-stack-md hairline bg-[#0d0d0d] relative">
<div className="tricolor-stripe absolute top-0 left-0 right-0"></div>
<p className="font-body-lg text-body-lg italic">"Lexora reduced our legal turnaround time from 2 weeks to 20 minutes. It's essentially an automated General Counsel for our team."</p>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg uppercase">ROHAN MEHTA</span>
<span className="font-label-md text-label-md text-on-surface-variant uppercase">CEO, TECHFLOW</span>
</div>
</div>
<div className="flex flex-col gap-6 p-stack-md hairline bg-[#0d0d0d] relative">
<div className="tricolor-stripe absolute top-0 left-0 right-0"></div>
<p className="font-body-lg text-body-lg italic">"The Red Flag mode is a game changer. It caught a non-compete clause in a partner agreement that could have killed our pivot."</p>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg uppercase">SARAH D'SOUZA</span>
<span className="font-label-md text-label-md text-on-surface-variant uppercase">COO, FINSCALE</span>
</div>
</div>
<div className="flex flex-col gap-6 p-stack-md hairline bg-[#0d0d0d] relative">
<div className="tricolor-stripe absolute top-0 left-0 right-0"></div>
<p className="font-body-lg text-body-lg italic">"Finally, a legal platform that understands the Indian venture ecosystem. The documents are perfectly formatted for Sequoia/Accel standards."</p>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg uppercase">ARJUN KAPOOR</span>
<span className="font-label-md text-label-md text-on-surface-variant uppercase">FOUNDER, NEON LABS</span>
</div>
</div>
</div>
</section>
{/* Pre-footer */}
<section className="relative py-stack-xl overflow-hidden bg-[#111111]">
<img alt="Network connections abstract" className="absolute inset-0 w-full h-full object-cover opacity-30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp2vUDhrbbd_cQLKZlXx8X7m7G-WTQIAbgAJtNqamHd0hqGsOhd-kst6LVAgKekY52GgPtmoHfFIHliaee2T_TxZsbIzAq2vmXyULOLTmlLPHlwrkNhhKBPoFk6DFjNSFJMisoiiSv-mMHLQ94w9cTNU3ZWct7FAppye_N8oeQMSfedgKDeOZcrfoAoLMwRQDbrX-orDo1JSA1rfyVbNB3sAAq50mZFfgcSpTrf58YxauLn_duRj0zwYjB5jQrFCK1R9Jfo-KsDhQ"/>
<div className="relative z-10 max-w-7xl mx-auto px-margin-page text-center flex flex-col items-center gap-stack-md">
<h2 className="font-display text-[56px] uppercase leading-tight">YOUR NEXT AGREEMENT<br/>STARTS HERE.</h2>
<Link href="/register" className="h-[64px] px-16 bg-white text-black font-label-lg text-label-lg uppercase tracking-[2px] hover:opacity-90 transition-all flex items-center">
                GET STARTED FOR FREE
            </Link>
</div>
</section>
{/* Footer */}
<footer className="bg-black hairline-t py-stack-xl">
<div className="max-w-7xl mx-auto px-margin-page">
<div className="grid grid-cols-2 md:grid-cols-4 gap-gutter mb-stack-xl">
<div className="flex flex-col gap-6">
<Link href="/" className="font-headline-sm text-headline-sm font-bold text-primary">LEXORA</Link>
<p className="font-body-sm text-body-sm text-[#7e7e7e]">Engineering the future of legal operations for the Indian startup ecosystem.</p>
</div>
<div className="flex flex-col gap-4">
<span className="font-label-lg text-label-lg uppercase tracking-widest mb-2">PRODUCT</span>
<Link className="font-body-sm text-body-sm text-[#7e7e7e] hover:text-white transition-colors" href="/document-generator">Document Generator</Link>
<Link className="font-body-sm text-body-sm text-[#7e7e7e] hover:text-white transition-colors" href="/red-flag-analyser">Red Flag Mode</Link>
<Link className="font-body-sm text-body-sm text-[#7e7e7e] hover:text-white transition-colors" href="/pricing">Pricing</Link>
</div>
<div className="flex flex-col gap-4">
<span className="font-label-lg text-label-lg uppercase tracking-widest mb-2">COMPANY</span>
<Link className="font-body-sm text-body-sm text-[#7e7e7e] hover:text-white transition-colors" href="/about">About Us</Link>
<Link className="font-body-sm text-body-sm text-[#7e7e7e] hover:text-white transition-colors" href="/how-it-works">How It Works</Link>
<Link className="font-body-sm text-body-sm text-[#7e7e7e] hover:text-white transition-colors" href="/dashboard">Dashboard</Link>
</div>
<div className="flex flex-col gap-4">
<span className="font-label-lg text-label-lg uppercase tracking-widest mb-2">LEGAL</span>
<Link className="font-body-sm text-body-sm text-[#7e7e7e] hover:text-white transition-colors" href="/legal-disclaimer">Privacy Policy</Link>
<Link className="font-body-sm text-body-sm text-[#7e7e7e] hover:text-white transition-colors" href="/legal-disclaimer">Terms of Service</Link>
<Link className="font-body-sm text-body-sm text-[#7e7e7e] hover:text-white transition-colors" href="/legal-disclaimer">Cookie Policy</Link>
</div>
</div>
<div className="pt-8 hairline-t flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<span className="font-label-md text-label-md text-[#7e7e7e] uppercase">© 2024 LEXORA TECHNOLOGIES. ALL RIGHTS RESERVED.</span>
<p className="font-body-sm text-body-sm text-[#555555] max-w-2xl">Disclaimer: Lexora is a technology platform and not a law firm. Our services do not constitute legal advice. We recommend consulting with professional legal counsel for critical corporate decisions.</p>
</div>
</div>
</footer>

    </>
  );
}
