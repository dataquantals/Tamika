export type BottomNavItem = 'home' | 'collection' | 'lookbook' | 'journal' | 'appointment';

type MegaColumn = {
  title: string;
  items: Array<{ label: string; href: string }>;
};

type MegaTile = {
  label: string;
  href: string;
  image: string;
};

type NavItem = {
  label: string;
  href: string;
  accent?: boolean;
  columns: MegaColumn[];
  tiles: MegaTile[];
};

const navItems: NavItem[] = [
  {
    label: 'Kids',
    href: '/kids',
    columns: [
      { title: 'New Arrivals', items: [{ label: 'Girls', href: '/kids' }, { label: 'Boys', href: '/kids' }, { label: 'Baby', href: '/kids' }, { label: 'Occasion', href: '/kids' }] },
      { title: 'Clothing', items: [{ label: 'Dresses', href: '/kids' }, { label: 'Tops', href: '/kids' }, { label: 'Bottoms', href: '/kids' }, { label: 'Knitwear', href: '/kids' }, { label: 'Outerwear', href: '/kids' }] },
      { title: 'Shoes', items: [{ label: 'Formal', href: '/kids' }, { label: 'Sandals', href: '/kids' }, { label: 'Sneakers', href: '/kids' }] },
    ],
    tiles: [
      { label: 'Girls Edit', href: '/kids', image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=240&q=80' },
      { label: 'Boys Edit', href: '/kids', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=240&q=80' },
      { label: 'Baby Softs', href: '/kids', image: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?auto=format&fit=crop&w=240&q=80' },
    ],
  },
  {
    label: 'Jewelry',
    href: '/collection',
    columns: [
      { title: 'Fine Details', items: [{ label: 'Earrings', href: '/collection' }, { label: 'Necklaces', href: '/collection' }, { label: 'Bracelets', href: '/collection' }, { label: 'Rings', href: '/collection' }] },
      { title: 'Occasion', items: [{ label: 'Wedding Jewelry', href: '/wedding' }, { label: 'Pearl Edit', href: '/wedding' }, { label: 'Evening Gold', href: '/collection' }] },
      { title: 'Materials', items: [{ label: 'Pearl', href: '/collection' }, { label: 'Gold Tone', href: '/collection' }, { label: 'Silver Tone', href: '/collection' }] },
    ],
    tiles: [
      { label: 'Pearl Veils', href: '/wedding', image: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=240&q=80' },
      { label: 'Champagne Gold', href: '/collection', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=240&q=80' },
      { label: 'Quiet Sparkle', href: '/collection', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=240&q=80' },
    ],
  },
  {
    label: 'Shoes',
    href: '/collection',
    columns: [
      { title: 'Women', items: [{ label: 'Heels', href: '/collection' }, { label: 'Flats', href: '/collection' }, { label: 'Boots', href: '/collection' }, { label: 'Sandals', href: '/collection' }] },
      { title: 'Men', items: [{ label: 'Formal', href: '/collection' }, { label: 'Loafers', href: '/collection' }, { label: 'Chelsea Boots', href: '/collection' }] },
      { title: 'Wedding', items: [{ label: 'Bride', href: '/wedding/bride' }, { label: 'Groom', href: '/wedding/groom' }, { label: 'Kids', href: '/wedding/kids' }] },
    ],
    tiles: [
      { label: 'Urban Boot', href: '/collection', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1uXHvS21tsdlJnNJ5mhy4uciZGw_cg5llfC35gf0muZQS6Yjd_RU9qe8-OUbWI5cNnOmFmZR_LV014R-W_nbMdXizeIH1ixagCnKfeFQ1eB0qU4JlSD1IZXxnYmUVMRq8W1nhfTXxmVAhT7lwNLz3vnHhzwnMUZDll-SyjhytsbKr6ZrXdu0Nds31L89bLOY54-Jbvx7C8X31x_dTZwi_5GGR0bMGRq09-EpkIKnEn-XH4okWpgJZk8OxFmAJcoxhYfnolwuF7_sE' },
      { label: 'Ceremony Heel', href: '/wedding', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=240&q=80' },
      { label: 'Formal Polish', href: '/wedding', image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=240&q=80' },
    ],
  },
  {
    label: 'Salaula',
    href: '/salaula',
    columns: [
      { title: 'Latest Finds', items: [{ label: 'Drop 01', href: '/salaula' }, { label: 'Outerwear', href: '/salaula' }, { label: 'Tailoring', href: '/salaula' }, { label: 'Accessories', href: '/salaula' }] },
      { title: 'Circular Wardrobe', items: [{ label: 'Curated', href: '/salaula' }, { label: 'Restored', href: '/salaula' }, { label: 'Styled', href: '/salaula' }] },
    ],
    tiles: [
      { label: 'The Found Edit', href: '/salaula', image: '/assets/salaula/item-01.jpeg' },
      { label: 'Archive Piece', href: '/salaula', image: '/assets/salaula/item-02.jpeg' },
      { label: 'Pre-loved Luxury', href: '/salaula', image: '/assets/salaula/item-03.jpeg' },
    ],
  },
  {
    label: 'Collection',
    href: '/collection',
    columns: [
      { title: 'Shop', items: [{ label: 'New Arrivals', href: '/collection' }, { label: 'Tailoring', href: '/collection' }, { label: 'Evening', href: '/collection' }, { label: 'Objects', href: '/collection' }] },
      { title: 'Stories', items: [{ label: 'Lookbook', href: '/lookbook' }, { label: 'Journal', href: '/journal' }, { label: 'Services', href: '/services' }] },
    ],
    tiles: [
      { label: 'Tailoring', href: '/collection', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=240&q=80' },
      { label: 'Evening', href: '/collection', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=240&q=80' },
      { label: 'Objects', href: '/collection', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=240&q=80' },
    ],
  },
  {
    label: 'Wedding',
    href: '/wedding',
    columns: [
      { title: 'Wedding Categories', items: [{ label: 'Bride', href: '/wedding/bride' }, { label: 'Groom', href: '/wedding/groom' }, { label: 'Bridesmaids / Groomsmen', href: '/wedding/party' }, { label: 'Kids', href: '/wedding/kids' }] },
      { title: 'Services', items: [{ label: 'Private Fitting', href: '/appointment' }, { label: 'Made To Measure', href: '/services' }, { label: 'Concierge Delivery', href: '/services' }] },
    ],
    tiles: [
      { label: 'Bride', href: '/wedding/bride', image: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=240&q=80' },
      { label: 'Groom', href: '/wedding/groom', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=240&q=80' },
      { label: 'Party', href: '/wedding/party', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=240&q=80' },
      { label: 'Kids Wedding', href: '/wedding/kids', image: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?auto=format&fit=crop&w=240&q=80' },
    ],
  },
];

export function topAppBar(): string {
  return `
<header class="fixed top-0 w-full z-50 bg-[#fffaf2]/95 backdrop-blur-xl border-b border-[#eadfd3] text-[#2d2926]">
  <div class="h-16 px-margin-mobile grid grid-cols-[1fr_auto_1fr] items-center gap-4">
    <div class="flex items-center gap-3 min-w-0">
      <button type="button" data-nav-open class="lg:hidden text-[#2d2926] hover:text-[#b89458] transition-colors" aria-label="Open navigation menu">
        <span class="material-symbols-outlined" data-icon="menu">menu</span>
      </button>
      <button type="button" data-search-open class="hidden sm:flex w-full max-w-[320px] items-center gap-2 border border-[#d8c7b8] bg-white/70 px-4 py-2 text-left text-[#6c625c] hover:border-[#b89458] transition-colors" aria-label="Search products">
        <span class="material-symbols-outlined text-[20px]">search</span>
        <span class="font-body-md text-body-md truncate">Search for products and brands</span>
      </button>
    </div>
    <a href="/" data-link class="font-display-lg-mobile text-[28px] md:text-[34px] tracking-widest uppercase text-[#0f5132]">TÀMIKA</a>
    <div class="flex items-center justify-end gap-4">
      <a href="/appointment" data-link class="hidden lg:inline font-label-caps text-[11px] uppercase tracking-[0.16em] text-[#2d2926]">Open a T+ account today! <span class="text-[#0f8f54]">Apply Now</span></a>
      <button type="button" data-search-open class="sm:hidden text-[#2d2926] hover:text-[#b89458] transition-colors" aria-label="Search products"><span class="material-symbols-outlined">search</span></button>
      <a href="/appointment" data-link class="text-[#2d2926] hover:text-[#b89458] transition-colors" aria-label="Account"><span class="material-symbols-outlined">person</span></a>
      <a href="/lookbook" data-link class="hidden sm:inline text-[#2d2926] hover:text-[#b89458] transition-colors" aria-label="Wishlist"><span class="material-symbols-outlined">favorite</span></a>
      <button type="button" data-cart-open class="relative text-[#2d2926] hover:text-[#b89458] transition-colors" aria-label="Open shopping bag">
        <span class="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
        <span data-cart-count class="absolute -right-3 -top-2 font-label-caps text-[10px] leading-none"></span>
      </button>
    </div>
  </div>
  <div class="hidden lg:flex h-12 px-margin-mobile items-center justify-center gap-10 border-t border-[#eadfd3]/70 bg-[#fffaf2]/90">
    ${navItems.map(megaNavItem).join('')}
    <a href="/collection" data-link class="font-label-caps text-label-caps uppercase text-[#b44b4b] hover:text-[#2d2926] transition-colors">Sale</a>
  </div>
</header>
${sideNavDrawer()}`;
}

function megaNavItem(item: NavItem): string {
  return `
  <div class="group/nav h-full flex items-center">
    <a href="${item.href}" data-link class="relative h-full flex items-center font-label-caps text-label-caps uppercase tracking-[0.08em] ${item.accent ? 'text-[#b44b4b]' : 'text-[#2d2926]'} hover:text-[#b89458] transition-colors">
      ${item.label}
      <span class="absolute left-0 bottom-0 h-[2px] w-0 bg-[#b89458] transition-all duration-300 group-hover/nav:w-full"></span>
    </a>
    <div class="absolute left-0 right-0 top-[112px] hidden group-hover/nav:block bg-[#fffaf2] border-y border-[#eadfd3] shadow-[0_24px_60px_rgba(45,41,38,0.12)]">
      <div class="px-margin-mobile py-8 grid grid-cols-[1fr_340px] gap-12 max-w-7xl mx-auto">
        <div class="grid grid-cols-3 gap-10">
          ${item.columns.map((column) => `
            <div>
              <h3 class="font-label-caps text-label-caps uppercase text-[#2d2926] mb-4">${column.title}</h3>
              <div class="space-y-3">
                ${column.items.map((link) => `<a href="${link.href}" data-link class="block font-body-md text-body-md text-[#6c625c] hover:text-[#b89458] transition-colors">${link.label}</a>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
        <div>
          <h3 class="font-label-caps text-label-caps uppercase text-[#2d2926] mb-4">Shop the edit</h3>
          <div class="grid grid-cols-4 gap-4">
            ${item.tiles.map((tile) => `
              <a href="${tile.href}" data-link class="group/tile text-center">
                <img class="w-16 h-16 rounded-full object-cover mx-auto mb-3 grayscale group-hover/tile:grayscale-0 transition-all duration-500" src="${tile.image}" alt="${tile.label}" loading="lazy" />
                <span class="font-label-caps text-[10px] leading-4 uppercase text-[#2d2926] group-hover/tile:text-[#b89458] transition-colors">${tile.label}</span>
              </a>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

export function sideNavDrawer(): string {
  return `
<div data-nav-overlay class="fixed inset-0 z-[60] bg-black/40 opacity-0 pointer-events-none transition-opacity duration-500"></div>
<aside data-nav-drawer class="fixed top-0 left-0 z-[70] h-dvh w-[86vw] max-w-[420px] -translate-x-full bg-[#fffaf2] border-r border-[#eadfd3] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] flex flex-col">
  <div class="h-16 px-margin-mobile flex items-center justify-between border-b border-[#eadfd3]">
    <a href="/" data-link class="font-display-lg-mobile text-[28px] tracking-widest uppercase text-[#0f5132]">TÀMIKA</a>
    <button type="button" data-nav-close class="text-[#2d2926] hover:text-[#b89458] transition-colors" aria-label="Close navigation menu">
      <span class="material-symbols-outlined">close</span>
    </button>
  </div>
  <nav class="flex-1 px-margin-mobile py-section-gap overflow-y-auto flex flex-col gap-5">
    ${drawerLink('01', 'Home', '/')}
    ${drawerLink('02', 'Kids', '/kids')}
    ${drawerLink('03', 'Jewelry', '/collection')}
    ${drawerLink('04', 'Shoes', '/collection')}
    ${drawerLink('05', 'Salaula', '/salaula')}
    ${drawerLink('06', 'Collection', '/collection')}
    ${drawerLink('07', 'Wedding', '/wedding')}
    ${drawerLink('08', 'Lookbook', '/lookbook')}
    ${drawerLink('09', 'Services', '/services')}
    ${drawerLink('10', 'Journal', '/journal')}
    ${drawerLink('11', 'Appointment', '/appointment')}
  </nav>
  <div class="px-margin-mobile pb-10 pt-6 border-t border-[#eadfd3]">
    <p class="font-label-caps text-label-caps text-[#b89458] uppercase tracking-[0.25em] mb-stack-sm">Autumn / Winter 2024</p>
    <p class="font-body-md text-body-md text-[#6c625c]">Quiet luxury, architectural restraint, curated Salaula, and wedding atelier services.</p>
  </div>
</aside>`;
}

function drawerLink(number: string, label: string, href: string): string {
  return `
  <a href="${href}" data-link data-nav-item class="group flex items-baseline gap-5 text-[#2d2926] hover:text-[#b89458] transition-colors">
    <span class="font-label-caps text-label-caps text-[#8b7d73] uppercase w-8">${number}</span>
    <span class="font-display-lg-mobile text-[34px] leading-none tracking-tight">${label}</span>
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
<nav class="fixed bottom-0 left-0 w-full flex justify-around items-center px-6 py-4 pb-8 bg-surface/90 backdrop-blur-md border-t border-outline-variant/30 z-50 lg:hidden">
  <a class="flex items-center justify-center ${active === 'home' ? activeClass : inactiveClass} active:scale-95 transition-all duration-200" href="/" data-link aria-label="Home">
    <span class="material-symbols-outlined" data-icon="home" ${active === 'home' ? "style=\"font-variation-settings: 'FILL' 1;\"" : ''}>home</span>
  </a>
  <button type="button" data-search-open class="flex items-center justify-center ${active === 'collection' ? activeClass : inactiveClass} active:scale-95 transition-all duration-200" aria-label="Search products">
    <span class="material-symbols-outlined" data-icon="search" ${active === 'collection' ? "style=\"font-variation-settings: 'FILL' 1;\"" : ''}>search</span>
  </button>
  <a class="flex items-center justify-center ${active === 'lookbook' ? activeClass : inactiveClass} active:scale-95 transition-all duration-200" href="/lookbook" data-link aria-label="Lookbook">
    <span class="material-symbols-outlined" data-icon="favorite" ${active === 'lookbook' ? "style=\"font-variation-settings: 'FILL' 1;\"" : ''}>favorite</span>
  </a>
  <button type="button" data-cart-open class="relative flex items-center justify-center ${active === 'appointment' ? activeClass : inactiveClass} active:scale-95 transition-all duration-200" aria-label="Open shopping bag">
    <span class="material-symbols-outlined" data-icon="shopping_bag" ${active === 'appointment' ? "style=\"font-variation-settings: 'FILL' 1;\"" : ''}>shopping_bag</span>
    <span data-cart-count class="absolute -right-3 -top-2 font-label-caps text-[10px] leading-none"></span>
  </button>
</nav>`;
}

export function pageFooter(): string {
  return `
<section class="bg-surface-container-low py-section-gap px-margin-mobile text-center border-t border-outline-variant/20">
  <h4 class="font-display-lg-mobile text-display-lg-mobile text-primary mb-stack-md uppercase tracking-tight">The Circle</h4>
  <p class="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-md mx-auto">Join our private list for exclusive early access and editorial insights.</p>
  <form data-newsletter-form class="max-w-md mx-auto relative">
    <input name="email" class="w-full bg-transparent border-b border-primary py-4 px-0 focus:outline-none focus:border-primary font-label-caps text-label-caps placeholder:text-on-surface-variant/50 uppercase" placeholder="YOUR EMAIL ADDRESS" type="email" required />
    <button class="absolute right-0 bottom-4 font-label-caps text-label-caps text-primary hover:opacity-50 transition-opacity uppercase" type="submit">Subscribe</button>
  </form>
  <div class="mt-section-gap opacity-30">
    <p class="font-label-caps text-[10px] tracking-widest uppercase">© 2024 TÀMIKA ATELIER. ALL RIGHTS RESERVED.</p>
  </div>
</section>
<div class="h-24 lg:h-0"></div>`;
}

export function pageHero(kicker: string, title: string, intro: string): string {
  return `
<section class="pt-40 pb-section-gap px-margin-mobile bg-surface-container-low border-b border-outline-variant/20">
  <div class="max-w-5xl mx-auto text-center">
    <span class="font-label-caps text-label-caps text-on-surface-variant/70 uppercase tracking-[0.3em]">${kicker}</span>
    <h2 class="font-display-lg-mobile text-[54px] md:text-[72px] leading-none tracking-tighter text-primary mt-stack-md mb-stack-lg">${title}</h2>
    <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">${intro}</p>
  </div>
</section>`;
}
