import { fallbackWeddingProducts, fetchWeddingProducts, weddingCategories, weddingPrice, type WeddingCategory, type WeddingProduct } from '../data/weddingProducts';
import { bottomNavBar, pageFooter, topAppBar } from './shared';

function getInitialCategory(): WeddingCategory {
  const segment = window.location.pathname.split('/').filter(Boolean).pop();
  if (segment === 'groom' || segment === 'party' || segment === 'kids' || segment === 'bride') return segment;
  return 'bride';
}

function categoryHref(category: WeddingCategory): string {
  return `/wedding/${category}`;
}

export function weddingPage(): string {
  const initialCategory = getInitialCategory();
  const initialProducts = fallbackWeddingProducts.filter((product) => product.category === initialCategory);
  const activeHero = weddingCategories.find((category) => category.id === initialCategory) ?? weddingCategories[0];

  return `
${topAppBar()}
<main class="overflow-x-hidden bg-[#fbf7f1] text-[#2d2926]">
<section data-wedding-hero class="relative min-h-[760px] flex items-center overflow-hidden pt-16">
  <div class="absolute inset-0">
    ${weddingCategories.map((category) => `
      <img data-wedding-hero-image="${category.id}" class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${category.id === initialCategory ? 'opacity-100' : 'opacity-0'}" src="${category.image}" alt="${category.label} wedding campaign" />
    `).join('')}
  </div>
  <div class="absolute inset-0 bg-gradient-to-r from-[#2d2926]/80 via-[#2d2926]/45 to-[#f6ddd8]/10"></div>
  <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#fbf7f1] to-transparent"></div>
  <div class="relative z-10 px-margin-mobile max-w-4xl">
    <span class="font-label-caps text-label-caps tracking-[0.35em] uppercase text-[#e6c88f]">Tamika Wedding Atelier</span>
    <h1 data-wedding-hero-title class="font-display-lg-mobile text-[58px] md:text-[94px] leading-none tracking-tighter text-[#fffaf2] mt-stack-md mb-stack-lg">${activeHero.label}</h1>
    <p data-wedding-hero-copy class="font-body-lg text-body-lg text-[#fffaf2]/85 max-w-2xl">${activeHero.headline}</p>
    <div class="mt-stack-lg flex flex-wrap gap-3">
      <a href="#wedding-edit" class="bg-[#fffaf2] text-[#2d2926] px-10 py-4 font-label-caps text-label-caps uppercase hover:bg-[#e6c88f] transition-colors duration-500">Shop The Edit</a>
      <a href="/appointment" data-link class="border border-[#fffaf2]/70 text-[#fffaf2] px-10 py-4 font-label-caps text-label-caps uppercase hover:bg-[#fffaf2] hover:text-[#2d2926] transition-colors duration-500">Private Fitting</a>
    </div>
  </div>
</section>

<section id="wedding-edit" class="px-margin-mobile py-section-gap">
  <div class="max-w-7xl mx-auto">
    <div class="text-center max-w-3xl mx-auto mb-stack-lg">
      <span class="font-label-caps text-label-caps text-[#b89458] uppercase tracking-[0.3em]">Ceremony Wardrobe</span>
      <h2 class="font-display-lg-mobile text-[46px] md:text-[64px] leading-none text-[#2d2926] mt-stack-md mb-stack-md">A quieter kind of wedding luxury.</h2>
      <p class="font-body-lg text-body-lg text-[#6c625c]">Choose a category to reveal an edited product story. Each switch is designed to feel calm, premium, and editorial.</p>
    </div>

    <div class="flex overflow-x-auto no-scrollbar justify-start md:justify-center gap-3 md:gap-8 border-b border-[#e9d8c8] mb-stack-lg">
      ${weddingCategories.map((category) => `
        <a href="${categoryHref(category.id)}" data-link data-wedding-category="${category.id}" class="wedding-tab relative shrink-0 px-2 pb-4 font-label-caps text-label-caps uppercase tracking-[0.18em] transition-colors ${category.id === initialCategory ? 'text-[#2d2926]' : 'text-[#8b7d73] hover:text-[#2d2926]'}">
          ${category.label}
          <span class="absolute left-0 bottom-[-1px] h-[1px] bg-[#b89458] transition-all duration-500 ${category.id === initialCategory ? 'w-full' : 'w-0'}"></span>
        </a>
      `).join('')}
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">
      <aside class="bg-[#fffaf2]/80 border border-[#eadfd3] p-6 lg:sticky lg:top-24">
        <div class="flex items-center justify-between mb-stack-md">
          <h3 class="font-headline-md text-headline-md text-[#2d2926]">Filters</h3>
          <button type="button" data-wedding-clear class="font-label-caps text-label-caps text-[#b89458] uppercase">Clear</button>
        </div>
        ${filterBlock('Size', 'size', ['XS', 'S', 'M', 'L', 'XL', 'Made-to-measure', 'One size', '2Y', '4Y', '6Y', '8Y'])}
        ${filterBlock('Color', 'color', ['Ivory', 'Pearl', 'Champagne', 'Charcoal', 'Black', 'Blush'])}
        ${filterBlock('Collection', 'collection', ['Ceremony', 'Reception', 'Accessories', 'Formal', 'Destination', 'Wedding Party', 'Little Ceremony'])}
      </aside>

      <section>
        <div class="flex justify-between items-end mb-stack-md">
          <div>
            <p data-wedding-count class="font-label-caps text-label-caps text-[#8b7d73] uppercase">${initialProducts.length} pieces</p>
            <h3 data-wedding-heading class="font-display-lg-mobile text-display-lg-mobile text-[#2d2926]">${activeHero.label}</h3>
          </div>
          <label class="block min-w-[160px]">
            <span class="font-label-caps text-label-caps text-[#8b7d73] uppercase">Sort</span>
            <select data-wedding-sort class="mt-2 w-full bg-transparent border-b border-[#2d2926] py-2 focus:outline-none font-body-md text-body-md">
              <option value="featured">Featured</option>
              <option value="price-asc">Price Low</option>
              <option value="price-desc">Price High</option>
              <option value="name">Name</option>
            </select>
          </label>
        </div>
        <div data-wedding-grid class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-10 transition-all duration-500">
          ${initialProducts.map(weddingProductCard).join('')}
        </div>
      </section>
    </div>
  </div>
</section>

<section class="mx-margin-mobile mb-section-gap bg-[#2d2926] text-[#fffaf2] p-10 md:p-16 text-center">
  <span class="font-label-caps text-label-caps text-[#e6c88f] uppercase tracking-[0.3em]">Concierge Wedding Service</span>
  <h2 class="font-display-lg-mobile text-[44px] md:text-[64px] leading-none mt-stack-md mb-stack-md">From fitting room to final entrance.</h2>
  <p class="font-body-lg text-body-lg text-[#fffaf2]/75 max-w-2xl mx-auto mb-stack-lg">Book a private session for coordinated bridal party styling, made-to-measure notes, and priority ceremony delivery.</p>
  <a href="/appointment" data-link class="inline-flex border border-[#fffaf2] px-10 py-4 font-label-caps text-label-caps uppercase hover:bg-[#fffaf2] hover:text-[#2d2926] transition-colors duration-500">Reserve Consultation</a>
</section>
${pageFooter()}
</main>
${bottomNavBar('collection')}`;
}

function filterBlock(title: string, key: string, options: string[]): string {
  return `
  <details class="group border-t border-[#eadfd3] py-5" open>
    <summary class="flex cursor-pointer list-none items-center justify-between font-label-caps text-label-caps uppercase tracking-[0.18em] text-[#2d2926]">
      ${title}
      <span class="material-symbols-outlined text-[18px] group-open:rotate-180 transition-transform">expand_more</span>
    </summary>
    <div class="mt-4 space-y-3">
      ${options.map((option) => `
        <label class="flex items-center gap-3 font-body-md text-body-md text-[#6c625c]">
          <input data-wedding-filter="${key}" value="${option}" type="checkbox" class="rounded-none border-[#d6bfa3] text-[#b89458] focus:ring-[#b89458]" />
          ${option}
        </label>
      `).join('')}
    </div>
  </details>`;
}

function weddingProductCard(product: WeddingProduct): string {
  return `
  <article data-wedding-product class="group animate-[fadeIn_.45s_ease-out]">
    <div class="aspect-[3/4] bg-[#efe7dc] overflow-hidden relative mb-stack-md">
      ${product.video ? `
      <video
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        src="${product.video}"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      ` : `
      <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="${product.image}" alt="${product.title}" loading="lazy" />
      `}
      <div class="absolute inset-0 bg-[#2d2926]/0 group-hover:bg-[#2d2926]/35 transition-colors duration-500 flex items-center justify-center">
        <button type="button" class="translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 border border-[#fffaf2] bg-[#fffaf2]/15 backdrop-blur-sm text-[#fffaf2] px-8 py-3 font-label-caps text-label-caps uppercase transition-all duration-500">View Details</button>
      </div>
    </div>
    <p class="font-label-caps text-label-caps text-[#b89458] uppercase">${product.collection}</p>
    <div class="flex justify-between gap-4 items-start mt-1">
      <h4 class="font-headline-md text-[24px] leading-tight text-[#2d2926]">${product.title}</h4>
      <p class="font-body-md text-body-md text-[#2d2926] whitespace-nowrap">${weddingPrice(product.price)}</p>
    </div>
    <p class="font-body-md text-body-md text-[#6c625c] mt-2">${product.description}</p>
    <button type="button" class="mt-4 font-label-caps text-label-caps uppercase border-b border-[#b89458] text-[#2d2926] hover:text-[#b89458] transition-colors">Add to wedding edit</button>
  </article>`;
}

export function setupWeddingPageInteractions(): void {
  const grid = document.querySelector<HTMLElement>('[data-wedding-grid]');
  if (!grid) return;

  const initialCategory = getInitialCategory();
  let activeCategory: WeddingCategory = initialCategory;
  let products: WeddingProduct[] = fallbackWeddingProducts.filter((product) => product.category === activeCategory);

  fetchWeddingProducts(activeCategory).then((loadedProducts) => {
    products = loadedProducts;
    renderProducts(products);
  });

  document.querySelectorAll<HTMLInputElement>('[data-wedding-filter]').forEach((input) => input.addEventListener('change', () => renderProducts(products)));
  document.querySelector<HTMLSelectElement>('[data-wedding-sort]')?.addEventListener('change', () => renderProducts(products));
  document.querySelector<HTMLButtonElement>('[data-wedding-clear]')?.addEventListener('click', () => {
    document.querySelectorAll<HTMLInputElement>('[data-wedding-filter]').forEach((input) => { input.checked = false; });
    renderProducts(products);
  });
}

function renderProducts(source: WeddingProduct[]): void {
  const grid = document.querySelector<HTMLElement>('[data-wedding-grid]');
  if (!grid) return;
  const selected = getSelectedFilters();
  const sort = document.querySelector<HTMLSelectElement>('[data-wedding-sort]')?.value ?? 'featured';
  let filtered = source.filter((product) => {
    const sizeMatch = !selected.size.length || product.sizes.some((size) => selected.size.includes(size));
    const colorMatch = !selected.color.length || product.colors.some((color) => selected.color.includes(color));
    const collectionMatch = !selected.collection.length || selected.collection.includes(product.collection);
    return sizeMatch && colorMatch && collectionMatch;
  });

  filtered = [...filtered].sort((a, b) => {
    if (sort === 'price-asc') return a.price - b.price;
    if (sort === 'price-desc') return b.price - a.price;
    if (sort === 'name') return a.title.localeCompare(b.title);
    return 0;
  });

  grid.innerHTML = filtered.length ? filtered.map(weddingProductCard).join('') : `<div class="sm:col-span-2 xl:col-span-3 py-20 text-center"><p class="font-headline-md text-headline-md text-[#2d2926]">No pieces match these filters.</p><p class="font-body-md text-body-md text-[#6c625c] mt-2">Clear filters or explore another wedding category.</p></div>`;
  const count = document.querySelector<HTMLElement>('[data-wedding-count]');
  if (count) count.textContent = `${filtered.length} ${filtered.length === 1 ? 'piece' : 'pieces'}`;
}

function getSelectedFilters(): Record<'size' | 'color' | 'collection', string[]> {
  const selected = { size: [] as string[], color: [] as string[], collection: [] as string[] };
  document.querySelectorAll<HTMLInputElement>('[data-wedding-filter]:checked').forEach((input) => {
    const key = input.dataset.weddingFilter as 'size' | 'color' | 'collection';
    selected[key].push(input.value);
  });
  return selected;
}

function updateHero(categoryId: WeddingCategory): void {
  const category = weddingCategories.find((item) => item.id === categoryId);
  if (!category) return;
  document.querySelectorAll<HTMLElement>('[data-wedding-hero-image]').forEach((image) => {
    image.classList.toggle('opacity-100', image.dataset.weddingHeroImage === categoryId);
    image.classList.toggle('opacity-0', image.dataset.weddingHeroImage !== categoryId);
  });
  const title = document.querySelector<HTMLElement>('[data-wedding-hero-title]');
  const copy = document.querySelector<HTMLElement>('[data-wedding-hero-copy]');
  const heading = document.querySelector<HTMLElement>('[data-wedding-heading]');
  if (title) title.textContent = category.label;
  if (copy) copy.textContent = category.headline;
  if (heading) heading.textContent = category.label;
}

function setActiveTab(categoryId: WeddingCategory): void {
  document.querySelectorAll<HTMLElement>('[data-wedding-category]').forEach((button) => {
    const active = button.dataset.weddingCategory === categoryId;
    button.classList.toggle('text-[#2d2926]', active);
    button.classList.toggle('text-[#8b7d73]', !active);
    const underline = button.querySelector('span');
    underline?.classList.toggle('w-full', active);
    underline?.classList.toggle('w-0', !active);
  });
}
