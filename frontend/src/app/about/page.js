/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function Page() {
  return (
    <>

{/* TopNavBar */}
<nav className="bg-background dark:bg-background border-b border-outline-variant dark:border-outline-variant fixed top-0 left-0 right-0 z-50">
<div className="flex justify-between items-center w-full px-margin-desktop h-12 max-w-max-width mx-auto">
<Link href="/" className="text-headline-md font-headline-md font-bold uppercase tracking-tighter text-primary dark:text-primary">Lexora</Link>
<div className="hidden md:flex items-center gap-8">
<a className="text-label-caps font-label-caps text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors duration-200" href="/document-generator">Documents</a>
<a className="text-label-caps font-label-caps text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors duration-200" href="/red-flag-analyser">Analysis</a>
<a className="text-label-caps font-label-caps text-primary dark:text-primary border-b-2 border-primary pb-1" href="/about">About</a>
<a className="text-label-caps font-label-caps text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors duration-200" href="/legal-disclaimer">Terms</a>
</div>
<div className="flex items-center gap-4">
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="w-8 h-8 bg-surface-variant flex items-center justify-center">
<span className="material-symbols-outlined text-sm">person</span>
</div>
</div>
</div>
</nav>
<main className="pt-12">
{/* Hero Band */}
<section className="relative h-[480px] w-full flex items-center overflow-hidden">
<div className="absolute inset-0 bg-[#111111] z-0">
<img alt="Corporate High Rise" className="w-full h-full object-cover opacity-40 grayscale" data-alt="A cinematic, low-angle shot of a brutalist concrete skyscraper reflecting the sharp morning sun in a dense urban business district. The lighting is harsh and high-contrast, emphasizing the structural integrity and mathematical precision of the architecture. The color palette is dominated by deep charcoal and stark white, creating an atmosphere of authority and professional gravity. The mood is powerful and unwavering, capturing the essence of modern legal and corporate strength." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHRpkOA6Iwez4EX0ubFqkgvRVY5s-EYtMhEYOFi4NsN-laPkDsl4KREG7PNLjl7GRI0vyMDLF63gMQZNWgtyUUsGROHbdbSWhjSg_0ZddPCRkL1F-3GkNHuTcGLriErQQJ588mNTtBBh9OiTqQ14v0lSoYL7huXw8X_cyRIiGAyy-nOheb0Tj9HqsvV8gN9BtrAyzpNAVbv30xlFjeQUywKC9bFaqWmLY2O5aovt0sMFTX36xyvH_ivoQzbx8RcY-nU_4SeQN0jg"/>
</div>
<div className="relative z-10 w-full max-w-max-width mx-auto px-margin-desktop">
<div className="max-w-4xl">
<h1 className="text-[80px] leading-[0.9] font-extrabold tracking-tighter uppercase mb-6 text-primary">
                        BUILT FOR <br/>INDIAN FOUNDERS.
                    </h1>
<p className="text-body-lg font-body-lg max-w-2xl text-on-surface-variant">
                        The Indian legal landscape is high-stakes and high-friction. We built LexStart to provide founders with the mathematical clarity and structural speed required to navigate the absolute authority of the law.
                    </p>
</div>
</div>
</section>
<div className="tricolor-stripe"></div>
{/* Mission Section */}
<section className="max-w-max-width mx-auto px-margin-desktop py-24 grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<h2 className="text-display-lg font-display-lg uppercase tracking-tight text-primary">
                    LEGAL CLARITY SHOULD NOT BE A LUXURY.
                </h2>
<div className="space-y-4 text-on-surface-variant text-body-lg">
<p>Lexora was founded on the principle that precision in legal documentation is the backbone of India's startup ecosystem. For too long, high-quality legal intelligence has been locked behind billable hours and manual workflows.</p>
<p>
                        We translate the density of the Companies Act and Indian Contract Law into structured data, empowering founders to make decisions with absolute certainty. Our mission is to democratize institutional-grade legal structural clarity.
                    </p>
</div>
<button className="h-12 px-8 bg-primary text-on-primary font-button-text text-button-text uppercase tracking-[1.5px] hover:scale-95 transition-transform">
                    JOIN THE MISSION
                </button>
</div>
<div className="aspect-square bg-[#111111] brutalist-border overflow-hidden">
<img alt="Statue of Justice" className="w-full h-full object-cover grayscale brightness-75" data-alt="A close-up, sharp-focus photograph of a weathered stone pillar in an Indian High Court, capturing the intricate textures and historical weight of the legal institution. The lighting is dramatic, casting deep shadows that highlight the geometric lines and solid forms of the architecture. The aesthetic is strictly brutalist and high-gravity, using a monochrome palette with high contrast. The mood is solemn, authoritative, and deeply rooted in the tradition of Indian jurisprudence." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrT7B4U2zQ76wqFSz5bjydjKZZkdCS0XYw0p2VQGeCkG6efG2JQWF7-E8piFN7NAm8MHe1LD0OzgQl4TjoJXEkav9N9g1jcmQh7QsBl_tLYrIWMX63DFu2OtbIDnUmgc5HQ7-d9q7RHHu4OtrfDkSYk37aV7NLe0n00G9_1FpyWai6i9A9StkDvo3XOQqB7wpl3fo2MI6IxnSOLFvkHJ6e66kCkuZrWpWBEQ3gTuqLHRMCM4GiJ5nRbP1rCkXvnbjh7aCVH6PMXg"/>
</div>
</section>
{/* What LexStart is NOT */}
<section className="bg-surface-container-lowest py-24 border-y border-[#3c3c3c]">
<div className="max-w-max-width mx-auto px-margin-desktop">
<h2 className="text-display-lg font-display-lg uppercase tracking-tight text-primary mb-16">WHAT LEXORA IS NOT.</h2>
<div className="grid md:grid-cols-3 gap-8">
{/* Card 1 */}
<div className="bg-surface-container-low brutalist-border flex flex-col h-full relative overflow-hidden group">
<div className="tricolor-stripe absolute top-0 left-0 w-full"></div>
<div className="p-8 pt-12">
<span className="material-symbols-outlined text-4xl mb-6 text-on-surface-variant">balance</span>
<h3 className="text-headline-sm font-headline-sm uppercase mb-4 text-primary">NOT A LAW FIRM</h3>
<p className="text-body-md text-on-surface-variant">
                                We are a technology company building legal-tech infrastructure. We do not represent clients in court or provide subjective legal advocacy. We provide data-driven document analysis and automation.
                            </p>
</div>
</div>
{/* Card 2 */}
<div className="bg-surface-container-low brutalist-border flex flex-col h-full relative overflow-hidden group">
<div className="tricolor-stripe absolute top-0 left-0 w-full"></div>
<div className="p-8 pt-12">
<span className="material-symbols-outlined text-4xl mb-6 text-on-surface-variant">person_off</span>
<h3 className="text-headline-sm font-headline-sm uppercase mb-4 text-primary">NOT A LAWYER SUBSTITUTE</h3>
<p className="text-body-md text-on-surface-variant">Lexora augments legal workflows; it does not replace the nuanced strategic advice of a qualified legal professional. Our tools are designed for founders and legal teams to collaborate more effectively.</p>
</div>
</div>
{/* Card 3 */}
<div className="bg-surface-container-low brutalist-border flex flex-col h-full relative overflow-hidden group">
<div className="tricolor-stripe absolute top-0 left-0 w-full"></div>
<div className="p-8 pt-12">
<span className="material-symbols-outlined text-4xl mb-6 text-on-surface-variant">public_off</span>
<h3 className="text-headline-sm font-headline-sm uppercase mb-4 text-primary">NOT US LAW</h3>
<p className="text-body-md text-on-surface-variant">
                                Our models and logic are built specifically for the Indian jurisdiction. We do not apply Silicon Valley legal standards to Indian entities. We respect the local nuances of ROC, RBI, and SEBI regulations.
                            </p>
</div>
</div>
</div>
</div>
</section>
{/* Indian Law Coverage */}
<section className="max-w-max-width mx-auto px-margin-desktop py-24">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
<h2 className="text-display-lg font-display-lg uppercase tracking-tight text-primary leading-none">
                    INDIA-SPECIFIC <br/>LEGAL COVERAGE.
                </h2>
<div className="w-full md:w-1/3 tricolor-stripe mb-4"></div>
</div>
<div className="grid md:grid-cols-2 gap-0 brutalist-border">
<div className="p-8 bg-surface-container-lowest border-r border-b border-[#3c3c3c]">
<div className="flex justify-between items-start mb-6">
<h4 className="text-label-caps font-label-caps text-on-surface-variant">SECTION 01</h4>
<span className="material-symbols-outlined text-primary">gavel</span>
</div>
<h3 className="text-headline-sm font-headline-sm uppercase mb-4">Companies Act, 2013</h3>
<p className="text-body-md text-on-surface-variant">Full coverage of incorporation documents, SHA, SPA, and complex cap-table math governed by the Ministry of Corporate Affairs.</p>
</div>
<div className="p-8 bg-surface-container-lowest border-b border-[#3c3c3c]">
<div className="flex justify-between items-start mb-6">
<h4 className="text-label-caps font-label-caps text-on-surface-variant">SECTION 02</h4>
<span className="material-symbols-outlined text-primary">account_balance</span>
</div>
<h3 className="text-headline-sm font-headline-sm uppercase mb-4">RBI &amp; FEMA COMPLIANCE</h3>
<p className="text-body-md text-on-surface-variant">Cross-border investment tracking and structural compliance for FDI inflows and reporting requirements under Indian banking law.</p>
</div>
<div className="p-8 bg-surface-container-lowest border-r border-[#3c3c3c]">
<div className="flex justify-between items-start mb-6">
<h4 className="text-label-caps font-label-caps text-on-surface-variant">SECTION 03</h4>
<span className="material-symbols-outlined text-primary">description</span>
</div>
<h3 className="text-headline-sm font-headline-sm uppercase mb-4">Indian Contract Act, 1872</h3>
<p className="text-body-md text-on-surface-variant">Algorithmic parsing of indemnity, liability, and dispute resolution clauses optimized for the Indian judicial pipeline.</p>
</div>
<div className="p-8 bg-surface-container-lowest">
<div className="flex justify-between items-start mb-6">
<h4 className="text-label-caps font-label-caps text-on-surface-variant">SECTION 04</h4>
<span className="material-symbols-outlined text-primary">shield_person</span>
</div>
<h3 className="text-headline-sm font-headline-sm uppercase mb-4">Labour &amp; IP Laws</h3>
<p className="text-body-md text-on-surface-variant">Employment agreements, ESOP structures, and IP assignment deeds verified against local state-specific mandates.</p>
</div>
</div>
</section>
{/* Transparency Section */}
<section className="bg-surface-container-low py-24 border-t border-[#3c3c3c]">
<div className="max-w-max-width mx-auto px-margin-desktop">
<h2 className="text-display-lg font-display-lg uppercase tracking-tight text-primary mb-16">
                    HOW THE AI WORKS.
                </h2>
<div className="flex flex-col md:flex-row items-center justify-between gap-4">
<div className="w-full md:flex-1 p-6 bg-surface-container-lowest brutalist-border">
<h4 className="text-label-caps font-label-caps text-primary mb-4">01 INGESTION</h4>
<p className="text-body-md text-on-surface-variant">OCR engines extract raw text from scanned PDFs or digital contracts with 99.8% precision.</p>
</div>
<span className="material-symbols-outlined text-on-surface-variant rotate-90 md:rotate-0">arrow_forward</span>
<div className="w-full md:flex-1 p-6 bg-surface-container-lowest brutalist-border">
<h4 className="text-label-caps font-label-caps text-primary mb-4">02 VECTORIZATION</h4>
<p className="text-body-md text-on-surface-variant">Legal clauses are mapped into mathematical vectors to identify structural deviations.</p>
</div>
<span className="material-symbols-outlined text-on-surface-variant rotate-90 md:rotate-0">arrow_forward</span>
<div className="w-full md:flex-1 p-6 bg-surface-container-lowest brutalist-border">
<h4 className="text-label-caps font-label-caps text-primary mb-4">03 JURISDICTIONAL CHECK</h4>
<p className="text-body-md text-on-surface-variant">Entities are cross-referenced against Indian legal databases and current ROC filings.</p>
</div>
<span className="material-symbols-outlined text-on-surface-variant rotate-90 md:rotate-0">arrow_forward</span>
<div className="w-full md:flex-1 p-6 bg-surface-container-lowest brutalist-border">
<h4 className="text-label-caps font-label-caps text-primary mb-4">04 REPORTING</h4>
<p className="text-body-md text-on-surface-variant">A dense, brutalist report is generated highlighting risk, compliance, and next steps.</p>
</div>
</div>
</div>
</section>
{/* Disclaimer Band */}
<section className="bg-surface-container-low border-t-4 border-[#e22718] py-16">
<div className="max-w-4xl mx-auto px-margin-desktop text-center">
<p className="text-headline-sm font-headline-sm text-on-surface uppercase tracking-wide leading-relaxed">Disclaimer: Lexora is a legal technology platform. Information provided through this platform is for informational purposes only and does not constitute legal, financial, or tax advice. Use of this platform does not create an attorney-client relationship. All legal documents should be reviewed by qualified legal counsel in your jurisdiction.</p>
</div>
</section>
</main>
{/* Footer */}
<footer className="bg-surface-container-lowest dark:bg-surface-container-lowest border-t-divider-weight border-primary bg-background dark:bg-background">
<div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-desktop py-8 max-w-max-width mx-auto gap-gutter">
<Link href="/" className="text-headline-sm font-headline-sm font-bold text-primary">Lexora</Link>
<div className="flex flex-wrap justify-center gap-8">
<a className="text-label-caps font-label-caps text-on-surface-variant dark:text-on-surface-variant hover:text-primary underline" href="/about">Mission</a>
<a className="text-label-caps font-label-caps text-on-surface-variant dark:text-on-surface-variant hover:text-primary underline" href="/about">Coverage</a>
<a className="text-label-caps font-label-caps text-on-surface-variant dark:text-on-surface-variant hover:text-primary underline" href="/legal-disclaimer">Terms of Use</a>
<a className="text-label-caps font-label-caps text-on-surface-variant dark:text-on-surface-variant hover:text-primary underline" href="/legal-disclaimer">Privacy Policy</a>
</div>
<div className="text-body-md font-body-md text-on-surface dark:text-on-surface">© 2024 Lexora. Indian Legal-Tech.</div>
</div>
</footer>

    </>
  );
}
