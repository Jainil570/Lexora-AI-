/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function Page() {
  return (
    <>

{/* TopAppBar */}
<nav className="fixed top-0 z-50 w-full bg-background border-b border-outline-variant">
<div className="flex justify-between items-center w-full px-margin-desktop h-12 max-w-max-width mx-auto">
<Link href="/" className="text-headline-md font-headline-md font-bold uppercase tracking-tighter text-primary">Lexora</Link>
<div className="hidden md:flex gap-8 items-center">
<a className="text-on-surface-variant font-label-caps text-label-caps hover:text-primary transition-colors duration-200" href="/document-generator">Documents</a>
<a className="text-on-surface-variant font-label-caps text-label-caps hover:text-primary transition-colors duration-200" href="/red-flag-analyser">Analysis</a>
<a className="text-on-surface-variant font-label-caps text-label-caps hover:text-primary transition-colors duration-200" href="/about">About</a>
<a className="text-primary border-b-2 border-primary pb-1 font-label-caps text-label-caps" href="/legal-disclaimer">Terms</a>
<div className="flex items-center gap-4 ml-4">
<span className="material-symbols-outlined text-primary cursor-pointer">settings</span>
<div className="w-8 h-8 bg-surface-container-highest rounded-full overflow-hidden border border-outline-variant">
<img alt="User Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCamEH2ylS9LgEkFo_BM-e29RUco50zSjoim8ZHDoCuLpGsumfZILaOApe5o8NfgRhQbHRxnBYTXogtM3_I-RQvq-eT-tQAGSrda-lNdqJeOet-zEUB9NH0hYIENqCNwM_1KoMP58eW7_eydaHzwovCypM9LtfvzMYF85PS9-EwOgHBEyZYZ5jnj1D7ID7TJIIHuEbckU8nHeBAgGzHm5oGUGJ7kRgCjUd8Xlf64m8xK7sl9neE3vkORaVXlI23jiQ4MOuw2Hxhlg"/>
</div>
</div>
</div>
</div>
</nav>
{/* Page Header */}
<header className="pt-24 px-margin-desktop max-w-max-width mx-auto">
<div className="max-w-[720px] mx-auto pt-24 text-left">
<h1 className="text-[56px] font-extrabold leading-tight tracking-tighter uppercase text-primary mb-8">
                LEGAL DISCLAIMER AND TERMS OF USE.
            </h1>
<div className="tricolor-stripe mb-6"></div>
<p className="font-label-caps text-label-caps text-on-surface-variant tracking-widest">
                LAST UPDATED: JANUARY 2025
            </p>
</div>
</header>
{/* Main Content Canvas */}
<main className="px-margin-desktop py-16 max-w-max-width mx-auto">
<div className="max-w-[720px] mx-auto space-y-12">
{/* Section 1 */}
<section className="pb-12 hairline">
<h2 className="text-headline-md font-headline-md uppercase text-primary mb-4">NOT LEGAL ADVICE</h2>
<div className="legal-body font-body-lg text-body-lg">The materials available on this website, including all legal document templates, automated analysis reports, and informational articles, are for general informational purposes only. Lexora is a technology platform and does not provide legal, financial, or tax advice. The information provided is not intended to be a substitute for professional legal advice from a qualified advocate licensed in the relevant jurisdiction.</div>
</section>
{/* Section 2 */}
<section className="pb-12 hairline">
<h2 className="text-headline-md font-headline-md uppercase text-primary mb-4">NO ATTORNEY-CLIENT RELATIONSHIP</h2>
<div className="legal-body font-body-lg text-body-lg">Use of Lexora, including the transmission of information through our platform or the generation of documents, does not create an attorney-client relationship between you and Lexora. No communication between you and Lexora or its employees via our website, email, or chatbot is protected by attorney-client privilege or work product doctrine.</div>
</section>
{/* Section 3 */}
<section className="pb-12 hairline">
<h2 className="text-headline-md font-headline-md uppercase text-primary mb-4">ACCURACY</h2>
<div className="legal-body font-body-lg text-body-lg">While we strive to keep our platform updated with the latest Indian legal standards and regulations, laws change frequently. Lexora cannot guarantee that all information or templates on the site are completely current, accurate, or applicable to your specific legal situation. Users are encouraged to verify the validity of documents with legal counsel.</div>
</section>
{/* Section 4 */}
<section className="pb-12 hairline">
<h2 className="text-headline-md font-headline-md uppercase text-primary mb-4">USER RESPONSIBILITIES</h2>
<div className="legal-body font-body-lg text-body-lg">You are solely responsible for the information you input into our document generators. Lexora does not review your answers for legal sufficiency, draw legal conclusions, provide opinions about your selection of forms, or apply the law to the facts of your situation. You are responsible for ensuring your use of our services complies with local laws.</div>
</section>
{/* Section 5 */}
<section className="pb-12 hairline">
<h2 className="text-headline-md font-headline-md uppercase text-primary mb-4">INTELLECTUAL PROPERTY</h2>
<div className="legal-body font-body-lg text-body-lg">All software, design, text, graphics, and the selection and arrangement thereof are the proprietary property of Lexora. Unauthorized use of these materials—including reproduction, modification, distribution, or republication—without the prior written permission of Lexora is strictly prohibited.</div>
</section>
{/* Section 6 */}
<section className="pb-12 hairline">
<h2 className="text-headline-md font-headline-md uppercase text-primary mb-4">DATA PRIVACY</h2>
<div className="legal-body font-body-lg text-body-lg">Your privacy is paramount. Lexora adheres to high standards of data protection. Information collected during the document generation process is used strictly for service delivery. For detailed information on how we handle your data, please refer to our Privacy Policy.</div>
</section>
{/* Section 7 */}
<section className="pb-12 hairline">
<h2 className="text-headline-md font-headline-md uppercase text-primary mb-4">GOVERNING LAW</h2>
<div className="legal-body font-body-lg text-body-lg">
                    These terms and your use of the website are governed by the laws of India. Any legal action or proceeding relating to your access to, or use of, the website shall be instituted in the competent courts located in Bangalore, Karnataka.
                </div>
</section>
{/* Section 8 */}
<section className="pb-12 hairline">
<h2 className="text-headline-md font-headline-md uppercase text-primary mb-4">CHANGES TO TERMS</h2>
<div className="legal-body font-body-lg text-body-lg">Lexora reserves the right to change these Terms of Use at any time without notice. Your continued use of the site after any changes constitutes your acceptance of the new Terms of Use. We recommend reviewing this page periodically for updates.</div>
</section>
{/* Section 9 */}
<section className="pb-12">
<h2 className="text-headline-md font-headline-md uppercase text-primary mb-4">CONTACT</h2>
<div className="legal-body font-body-lg text-body-lg">If you have any questions regarding this disclaimer or any other terms, please contact us at compliance@lexora.in or through our support portal.</div>
</section>
</div>
</main>
{/* Bottom Band */}
<section className="bg-surface-container-low py-16 px-margin-desktop">
<div className="max-w-max-width mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<h2 className="text-[32px] font-bold uppercase tracking-tighter text-primary">QUESTIONS ABOUT YOUR DOCUMENT?</h2>
<div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
<button className="h-12 px-8 bg-primary text-background font-button-text text-button-text uppercase flex items-center justify-center gap-2 hover:bg-on-surface transition-colors">
                    SPEAK TO A LAWYER 
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
<button className="h-12 px-8 border border-primary text-primary font-button-text text-button-text uppercase flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-colors">CONTACT LEXORA <span className="material-symbols-outlined text-[18px]">arrow_forward</span></button>
</div>
</div>
</section>
{/* Footer */}
<footer className="bg-surface-container-lowest border-t-divider-weight border-primary">
<div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-desktop py-8 max-w-max-width mx-auto gap-gutter">
<div className="flex flex-col gap-2 items-center md:items-start">
<Link href="/" className="text-headline-sm font-headline-sm font-bold text-primary">Lexora</Link>
<p className="text-on-surface-variant font-body-md text-body-md">© 2024 Lexora. Indian Legal-Tech.</p>
</div>
<div className="flex gap-6">
<a className="text-on-surface-variant font-label-caps text-label-caps hover:text-primary underline" href="/about">Mission</a>
<a className="text-on-surface-variant font-label-caps text-label-caps hover:text-primary underline" href="/about">Coverage</a>
<a className="text-on-surface-variant font-label-caps text-label-caps hover:text-primary underline" href="/legal-disclaimer">Terms of Use</a>
<a className="text-primary font-label-caps text-label-caps underline" href="/legal-disclaimer">Privacy Policy</a>
</div>
</div>
</footer>

    </>
  );
}
