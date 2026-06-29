export type BottomNavItem = 'home' | 'collection' | 'lookbook' | 'journal' | 'appointment';

export function topAppBar(): string {
  return `
<header class="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl transition-all duration-300 ease-in-out h-16 flex justify-between items-center px-margin-mobile border-b border-outline-variant/20">
  <div class="flex items-center">
    <button type="button" data-nav-open class="text-primary hover:opacity-70 transition-opacity" aria-label="Open navigation menu">
      <span class="material-symbols-outlined" data-icon="menu">menu</span>
    </button>
  </div>
  <a href="/" data-link class="font-display-lg-mobile text-display-lg-mobile tracking-widest uppercase text-primary">TÀMIKA</a>
  <div class="flex items-center">
    <a href="/appointment" data-link class="text-primary hover:opacity-70 transition-opacity" aria-label="Book appointment">
      <span class="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
    </a>
  </div>
</header>
${sideNavDrawer()}`;
}

export function sideNavDrawer(): string {
  return `
<div data-nav-overlay class="fixed inset-0 z-[60] bg-black/40 opacity-0 pointer-events-none transition-opacity duration-500"></div>
<aside data-nav-drawer class="fixed top-0 left-0 z-[70] h-dvh w-[86vw] max-w-[420px] -translate-x-full bg-surface-container-lowest border-r border-outline-variant/30 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] flex flex-col">
  <div class="h-16 px-margin-mobile flex items-center justify-between border-b border-outline-variant/20">
    <a href="/" data-link class="font-display-lg-mobile text-display-lg-mobile tracking-widest uppercase text-primary">TÀMIKA</a>
    <button type="button" data-nav-close class="text-primary hover:opacity-70 transition-opacity" aria-label="Close navigation menu">
      <span class="material-symbols-outlined">close</span>
    </button>
  </div>
  <nav class="flex-1 px-margin-mobile py-section-gap flex flex-col justify-center gap-5">
    ${drawerLink('01', 'Home', '/')}
    ${drawerLink('02', 'Collection', '/collection')}
    ${drawerLink('03', 'Salaula', '/salaula')}
    ${drawerLink('04', 'Lookbook', '/lookbook')}
    ${drawerLink('05', 'Services', '/services')}
    ${drawerLink('06', 'Journal', '/journal')}
    ${drawerLink('07', 'Appointment', '/appointment')}
  </nav>
  <div class="px-margin-mobile pb-10 pt-6 border-t border-outline-variant/20">
    <p class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-[0.25em] mb-stack-sm">Autumn / Winter 2024</p>
    <p class="font-body-md text-body-md text-on-surface-variant">Quiet luxury, architectural restraint, and curated pre-loved pieces.</p>
  </div>
</aside>`;
}

function drawerLink(number: string, label: string, href: string): string {
  return `
  <a href="${href}" data-link data-nav-item class="group flex items-baseline gap-5 text-primary hover:opacity-60 transition-opacity">
    <span class="font-label-caps text-label-caps text-on-surface-variant/50 uppercase w-8">${number}</span>
    <span class="font-display-lg-mobile text-[38px] leading-none tracking-tight">${label}</span>
  </a>`;
}

export function setupSideNavigation(): void {
  const drawer = document.querySelector<HTMLElement>('[data-nav-drawer]');
  const overlay = document.querySelector<HTMLElement>('[data-nav-overlay]');
  const openButtons = document.querySelectorAll<HTMLElement>('[data-nav-open]');
  const closeButtons = document.querySelectorAll<HTMLElement>('[data-nav-close], [data-nav-item]');

  if (!drawer || !overlay) return;

  const open = () => {
    drawer.classList.remove('-translate-x-full');
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    document.body.classList.add('overflow-hidden');
  };

  const close = () => {
    drawer.classList.add('-translate-x-full');
    overlay.classList.add('opacity-0', 'pointer-events-none');
    document.body.classList.remove('overflow-hidden');
  };

  openButtons.forEach((button) => button.addEventListener('click', open));
  closeButtons.forEach((button) => button.addEventListener('click', close));
  overlay.addEventListener('click', close);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  }, { once: true });
}

export function bottomNavBar(active: BottomNavItem = 'home'): string {
  const activeClass = 'text-primary scale-110';
  const inactiveClass = 'text-on-surface-variant/50 hover:text-primary';

  return `
<nav class="fixed bottom-0 left-0 w-full flex justify-around items-center px-6 py-4 pb-8 bg-surface/90 backdrop-blur-md border-t border-outline-variant/30 z-50">
  <a class="flex items-center justify-center ${active === 'home' ? activeClass : inactiveClass} active:scale-95 transition-all duration-200" href="/" data-link aria-label="Home">
    <span class="material-symbols-outlined" data-icon="home" ${active === 'home' ? "style=\"font-variation-settings: 'FILL' 1;\"" : ''}>home</span>
  </a>
  <a class="flex items-center justify-center ${active === 'collection' ? activeClass : inactiveClass} active:scale-95 transition-all duration-200" href="/collection" data-link aria-label="Collection">
    <span class="material-symbols-outlined" data-icon="search" ${active === 'collection' ? "style=\"font-variation-settings: 'FILL' 1;\"" : ''}>search</span>
  </a>
  <a class="flex items-center justify-center ${active === 'lookbook' ? activeClass : inactiveClass} active:scale-95 transition-all duration-200" href="/lookbook" data-link aria-label="Lookbook">
    <span class="material-symbols-outlined" data-icon="favorite" ${active === 'lookbook' ? "style=\"font-variation-settings: 'FILL' 1;\"" : ''}>favorite</span>
  </a>
  <a class="flex items-center justify-center ${active === 'appointment' ? activeClass : inactiveClass} active:scale-95 transition-all duration-200" href="/appointment" data-link aria-label="Appointment">
    <span class="material-symbols-outlined" data-icon="person" ${active === 'appointment' ? "style=\"font-variation-settings: 'FILL' 1;\"" : ''}>person</span>
  </a>
</nav>`;
}

export function pageFooter(): string {
  return `
<section class="bg-surface-container-low py-section-gap px-margin-mobile text-center border-t border-outline-variant/20">
  <h4 class="font-display-lg-mobile text-display-lg-mobile text-primary mb-stack-md uppercase tracking-tight">The Circle</h4>
  <p class="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-md mx-auto">Join our private list for exclusive early access and editorial insights.</p>
  <form class="max-w-md mx-auto relative">
    <input class="w-full bg-transparent border-b border-primary py-4 px-0 focus:outline-none focus:border-primary font-label-caps text-label-caps placeholder:text-on-surface-variant/50 uppercase" placeholder="YOUR EMAIL ADDRESS" type="email"/>
    <button class="absolute right-0 bottom-4 font-label-caps text-label-caps text-primary hover:opacity-50 transition-opacity uppercase" type="submit">Subscribe</button>
  </form>
  <div class="mt-section-gap opacity-30">
    <p class="font-label-caps text-[10px] tracking-widest uppercase">© 2024 TÀMIKA ATELIER. ALL RIGHTS RESERVED.</p>
  </div>
</section>
<div class="h-24"></div>`;
}

export function pageHero(kicker: string, title: string, intro: string): string {
  return `
<section class="pt-32 pb-section-gap px-margin-mobile bg-surface-container-low border-b border-outline-variant/20">
  <div class="max-w-5xl mx-auto text-center">
    <span class="font-label-caps text-label-caps text-on-surface-variant/70 uppercase tracking-[0.3em]">${kicker}</span>
    <h2 class="font-display-lg-mobile text-[54px] md:text-[72px] leading-none tracking-tighter text-primary mt-stack-md mb-stack-lg">${title}</h2>
    <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">${intro}</p>
  </div>
</section>`;
}
