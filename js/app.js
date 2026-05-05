/* Shared nav/header/footer renderer for the WB Pension DD prototype */

const WB_NAV_ITEMS = [
  { href: 'index.html', label: 'Dashboard' },
  { href: 'pipeline.html', label: 'DD Pipeline' },
  { href: 'agents.html', label: 'Agent Console' },
  { href: 'risk.html', label: 'Risk Scoring' },
  { href: 'documentation.html', label: 'Documentation' },
  { href: 'governance.html', label: 'Governance / IC' },
  { href: 'monitoring.html', label: 'Monitoring' },
  { href: 'standards.html', label: 'Standards Library' },
  { href: 'roadmap.html', label: 'Implementation' }
];

function renderHeader(activeFile) {
  const wbLogoSvg = `
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="#002244"/>
      <g fill="#FFFFFF">
        <rect x="14" y="34" width="36" height="3"/>
        <rect x="16" y="22" width="2" height="12"/>
        <rect x="22" y="18" width="2" height="16"/>
        <rect x="28" y="14" width="2" height="20"/>
        <rect x="34" y="18" width="2" height="16"/>
        <rect x="40" y="22" width="2" height="12"/>
        <rect x="46" y="26" width="2" height="8"/>
        <polygon points="16,22 19,18 19,22"/>
        <polygon points="22,18 25,14 25,18"/>
        <polygon points="28,14 31,10 31,14"/>
        <polygon points="34,18 37,14 37,18"/>
        <polygon points="40,22 43,18 43,22"/>
        <polygon points="46,26 49,22 49,26"/>
        <rect x="14" y="38" width="36" height="2"/>
        <rect x="14" y="42" width="36" height="1"/>
      </g>
    </svg>
  `;

  const banner = `
    <div class="prototype-banner">
      <div class="prototype-banner-inner">
        <span>⚠</span> PROTOTYPE &middot; SIMULATION &middot; FOR DEMO PURPOSES ONLY <span>⚠</span> NOT AN OFFICIAL WORLD BANK SYSTEM <span>⚠</span>
      </div>
    </div>
  `;

  const header = `
    <header class="wb-header">
      <div class="wb-logo">
        <div class="wb-logo-mark">${wbLogoSvg}</div>
        <div class="wb-logo-text">
          <div class="org">The World Bank Group</div>
          <div class="name">Pension Fund Due Diligence Platform</div>
          <div class="group">Treasury &middot; Pensions &middot; Investment Risk &amp; Governance</div>
        </div>
      </div>
      <div class="wb-header-right">
        <div class="user-pill">
          <span class="user-avatar">JL</span>
          <span>Jim Liew &middot; Senior Investment Officer</span>
        </div>
      </div>
    </header>
  `;

  const navLinks = WB_NAV_ITEMS.map(item => {
    const active = item.href === activeFile ? ' class="active"' : '';
    return `<a href="${item.href}"${active}>${item.label}</a>`;
  }).join('');

  const nav = `<nav class="wb-nav">${navLinks}</nav>`;

  return banner + header + nav;
}

function renderFooter() {
  return `
    <footer class="wb-footer">
      <div class="disclaimer">
        ⚠ PROTOTYPE &middot; SIMULATION &middot; FOR DEMO PURPOSES ONLY &middot; NOT AN OFFICIAL WORLD BANK PRODUCT ⚠
      </div>
      <div>The World Bank Group &middot; Treasury &middot; Pension &amp; Endowment Department</div>
      <div style="margin-top:6px;opacity:0.75;">All fund data shown is illustrative, derived from public filings (Form ADV, 10-K, annual reports) and synthesized for demonstration. Not investment advice. Not affiliated with the named funds.</div>
    </footer>
    <div class="watermark">Prototype</div>
  `;
}

function mountChrome(activeFile) {
  const container = document.getElementById('wb-chrome-top');
  if (container) container.innerHTML = renderHeader(activeFile);
  const footer = document.getElementById('wb-chrome-bottom');
  if (footer) footer.innerHTML = renderFooter();
}

// Tabs
function initTabs() {
  document.querySelectorAll('.tabs').forEach(tabsEl => {
    const tabs = tabsEl.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.target;
        const parent = tabsEl.parentElement;
        parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        parent.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        const targetEl = parent.querySelector('#' + target);
        if (targetEl) targetEl.classList.add('active');
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const activeFile = (document.body.dataset.page) || 'index.html';
  mountChrome(activeFile);
  initTabs();
});
