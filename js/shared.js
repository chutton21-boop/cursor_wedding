/**
 * Shared layout: inject nav and footer into each page.
 * Run after DOM is ready.
 */
function renderNav(activePage) {
  const pages = [
    { href: 'index.html', label: 'Home' },
    { href: 'details.html', label: 'Details' },
    { href: 'faq.html', label: 'FAQ' },
    { href: 'rsvp.html', label: 'RSVP' },
  ];
  let currentPath = window.location.pathname.split('/').pop();
  if (!currentPath || currentPath === '') currentPath = 'index.html';
  const navHtml = `
    <nav class="w-full bg-[#f5f5f5] border-t border-b border-[#e5e5e5]" aria-label="Main">
      <div class="max-w-4xl mx-auto px-4 py-3 flex flex-wrap gap-2 justify-center">
        ${pages.map((p) => {
          const isActive = currentPath === p.href;
          const base = 'nav-pill inline-block rounded-full px-5 py-2.5 text-sm font-medium transition-colors min-h-[44px] flex items-center justify-center';
          const activeClass = isActive
            ? 'bg-black text-white border border-black'
            : 'bg-white text-black border border-black hover:bg-gray-50';
          return `<a href="${p.href}" class="${base} ${activeClass}">${p.label}</a>`;
        }).join('')}
      </div>
    </nav>
  `;
  const el = document.getElementById('site-nav');
  if (el) el.outerHTML = navHtml;
}

function renderFooter() {
  const html = `
    <footer class="w-full bg-[#f5f5f5] border-t border-[#e5e5e5] mt-auto">
      <div class="max-w-4xl mx-auto px-4 py-8">
        <p class="font-serif text-2xl md:text-3xl text-black">C&G</p>
        <p class="font-sans text-sm text-black/80 mt-1">10.10.26</p>
      </div>
    </footer>
  `;
  const el = document.getElementById('site-footer');
  if (el) el.outerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
});
