import { getCategories, getProductsByType } from '../data/products';
import { productCard, productControls } from '../storefront';
import { bottomNavBar, pageFooter, topAppBar } from './shared';

export function kidsPage(): string {
  const kidsProducts = getProductsByType('kids');

  return `
${topAppBar()}
<main class="overflow-x-hidden">
<section class="pt-36 pb-section-gap px-margin-mobile bg-[#fff4df] border-b border-[#eadfd3]">
  <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-end">
    <div>
      <span class="font-label-caps text-label-caps text-[#0f8f54] uppercase tracking-[0.3em]">Kids Everyday</span>
      <h1 class="font-display-lg-mobile text-[58px] md:text-[82px] leading-none tracking-tighter text-[#0f5132] mt-stack-md mb-stack-lg">Kids Clothing</h1>
      <p class="font-body-lg text-body-lg text-[#6c625c] max-w-xl">Normal kids clothes for school days, birthdays, weekends, travel, and everyday comfort — separate from the wedding kids collection.</p>
      <div class="mt-stack-lg flex flex-wrap gap-3">
        <a href="#kids-products" class="bg-[#0f5132] text-white px-6 py-3 font-label-caps text-label-caps uppercase tracking-[0.14em] hover:bg-[#2d2926] transition-colors">Shop Kids</a>
        <a href="/wedding/kids" data-link class="border border-[#0f5132] text-[#0f5132] px-6 py-3 font-label-caps text-label-caps uppercase tracking-[0.14em] hover:bg-white transition-colors">Wedding Kids</a>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <img class="h-[360px] md:h-[460px] w-full object-cover rounded-t-full" src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80" alt="Child wearing casual kids clothing" />
      <img class="h-[300px] md:h-[400px] w-full object-cover mt-12 rounded-b-full" src="https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80" alt="Kids everyday fashion" />
    </div>
  </div>
</section>
<section class="px-margin-mobile py-section-gap">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-gutter-mobile">
    ${editCard('Girls', 'Dresses, pinafores, tops, knitwear, and playful everyday layers.', 'https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=900&q=80')}
    ${editCard('Boys', 'Camp shirts, chinos, soft tailoring, tees, jackets, and sneakers.', 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=80', 'md:mt-10')}
    ${editCard('Baby', 'Gentle cotton rompers, tiny sets, cosy knits, and easy changing pieces.', 'https://images.unsplash.com/photo-1522771772219-e6f0d344d2e3?auto=format&fit=crop&w=900&q=80')}
  </div>
</section>
<section id="kids-products" class="px-margin-mobile pb-section-gap">
  <div class="max-w-6xl mx-auto">
    <div class="flex justify-between items-end mb-stack-lg">
      <div>
        <span class="font-label-caps text-label-caps text-on-surface-variant/70 block mb-stack-sm uppercase">Available Now</span>
        <h2 class="font-display-lg-mobile text-display-lg-mobile text-primary">Normal Kids Clothes</h2>
      </div>
      <a class="font-label-caps text-label-caps border-b border-primary pb-1 hover:opacity-50 transition-opacity uppercase" href="/wedding/kids" data-link>Need Wedding Kids?</a>
    </div>
    ${productControls(getCategories('kids'))}
    <div data-product-grid class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter-mobile">
      ${kidsProducts.map(productCard).join('')}
    </div>
  </div>
</section>
${pageFooter()}
</main>
${bottomNavBar('collection')}`;
}

function editCard(title: string, text: string, image: string, offset = ''): string {
  return `
  <article class="group ${offset}">
    <div class="h-[420px] bg-surface-container overflow-hidden relative">
      <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="${image}" alt="${title} kids clothing" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div class="absolute bottom-6 left-6 right-6 text-white">
        <h3 class="font-display-lg text-[34px] leading-none mb-stack-sm">${title}</h3>
        <p class="font-body-md text-body-md text-white/85">${text}</p>
      </div>
    </div>
  </article>`;
}
