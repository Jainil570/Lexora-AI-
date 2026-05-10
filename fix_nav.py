"""Fix navigation links across all remaining frontend pages."""
import re

# Map of pages to fix and their specific nav link targets
pages_to_fix = {
    'lexora-frontend/src/app/pricing/page.js': {
        'nav_links': {
            'Documents': '/document-generator',
            'Analysis': '/red-flag-analyser',
            'About': '/about',
            'Terms': '/legal-disclaimer',
        },
        'footer_links': {
            'Mission': '/about',
            'Coverage': '/about',
            'Terms of Use': '/legal-disclaimer',
            'Privacy Policy': '/legal-disclaimer',
            'Dashboard': '/dashboard',
            'Contracts': '/document-generator',
            'Compliance': '/red-flag-analyser',
            'About Us': '/about',
            'Legal Team': '/about',
            'Careers': '/about',
            'Privacy': '/legal-disclaimer',
            'Generator': '/document-generator',
        },
    },
    'lexora-frontend/src/app/dashboard/page.js': {
        'nav_links': {
            'Documents': '/document-generator',
            'Analysis': '/red-flag-analyser',
            'About': '/about',
            'Terms': '/legal-disclaimer',
        },
        'footer_links': {
            'Mission': '/about',
            'Coverage': '/about',
            'Terms of Use': '/legal-disclaimer',
            'Privacy Policy': '/legal-disclaimer',
        },
    },
    'lexora-frontend/src/app/red-flag-analyser/page.js': {
        'nav_links': {
            'Documents': '/document-generator',
            'Analysis': '/red-flag-analyser',
            'About': '/about',
            'Terms': '/legal-disclaimer',
        },
        'footer_links': {
            'Mission': '/about',
            'Coverage': '/about',
            'Terms of Use': '/legal-disclaimer',
            'Privacy Policy': '/legal-disclaimer',
        },
    },
    'lexora-frontend/src/app/about/page.js': {
        'nav_links': {
            'Documents': '/document-generator',
            'Analysis': '/red-flag-analyser',
            'About': '/about',
            'Terms': '/legal-disclaimer',
        },
        'footer_links': {
            'Mission': '/about',
            'Coverage': '/about',
            'Terms of Use': '/legal-disclaimer',
            'Privacy Policy': '/legal-disclaimer',
        },
    },
    'lexora-frontend/src/app/legal-disclaimer/page.js': {
        'nav_links': {
            'Documents': '/document-generator',
            'Analysis': '/red-flag-analyser',
            'About': '/about',
            'Terms': '/legal-disclaimer',
        },
        'footer_links': {
            'Mission': '/about',
            'Coverage': '/about',
            'Terms of Use': '/legal-disclaimer',
            'Privacy Policy': '/legal-disclaimer',
        },
    },
    'lexora-frontend/src/app/document-generator/page.js': {
        'nav_links': {
            'Dashboard': '/dashboard',
            'Contracts': '/document-generator',
            'Compliance': '/red-flag-analyser',
            'Consult': '/about',
        },
        'footer_links': {
            'Generator': '/document-generator',
            'Analysis': '/red-flag-analyser',
            'Compliance': '/red-flag-analyser',
            'Privacy': '/legal-disclaimer',
        },
    },
}

for page_path, config in pages_to_fix.items():
    with open(page_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Build combined link map
    all_links = {}
    all_links.update(config.get('nav_links', {}))
    all_links.update(config.get('footer_links', {}))

    # Replace <a> tags with href="#" by matching text content to determine route
    for link_text, route in all_links.items():
        # Match: <a ...href="#"...>link_text</a> and replace href="#" with href="/route"
        # Also match: <a ...href="#">link_text</a>
        pattern = rf'(<a\s[^>]*?)href="#"([^>]*>){link_text}(</a>)'
        replacement = rf'\1href="{route}"\2{link_text}\3'
        content = re.sub(pattern, replacement, content)

    # Replace Lexora logo text that's a div/span with Link
    def replace_logo(m):
        full = m.group(0)
        cls_start = full.split('className="')[1]
        cls_name = cls_start.split('"')[0]
        text = m.group(2)
        return '<Link href="/" className="' + cls_name + '">' + text + '</Link>'

    content = re.sub(
        r'(<(?:div|span)\s+className="[^"]*font-headline[^"]*font-bold[^"]*text-primary[^"]*"[^>]*>)(Lexora|LEXORA)(</(?:div|span)>)',
        replace_logo,
        content
    )

    with open(page_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f'Fixed: {page_path}')

print('All navigation links fixed!')
