import { getCategories, getProductsByType } from '../data/products';
import { productCard, productControls } from '../storefront';
import { bottomNavBar, pageFooter, pageHero, topAppBar } from './shared';

export function collectionPage(): string {
  const atelierProducts = getProductsByType('atelier');

  return `
${topAppBar()}
<main class="overflow-x-hidden">
${pageHero('Shop By Mood', 'The Collection', 'A complete edit of tailoring, evening silhouettes, accessories, and objects designed with restraint, tactility, and long-term wear in mind.')}
<section class="px-margin-mobile py-section-gap">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-gutter-mobile">
    ${categoryCard('01', 'Tailoring', 'Structured jackets, long coats, precise trousers, and architectural layers.', 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80')}
    ${categoryCard('02', 'Evening', 'Fluid silk, controlled volume, and quiet pieces made for after-dark movement.', 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80', 'md:mt-12')}
    ${categoryCard('03', 'Objects', 'Bags, footwear, belts, and small forms with the same edited house language.', 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80')}
  </div>
</section>
<section class="px-margin-mobile pb-section-gap">
  <div class="max-w-6xl mx-auto">
    <div class="flex justify-between items-end mb-stack-lg">
      <div>
        <span class="font-label-caps text-label-caps text-on-surface-variant/70 block mb-stack-sm uppercase">Available Now</span>
        <h3 class="font-display-lg-mobile text-display-lg-mobile text-primary">Signature Pieces</h3>
      </div>
      <a class="font-label-caps text-label-caps border-b border-primary pb-1 hover:opacity-50 transition-opacity uppercase" href="/appointment" data-link>Private Order</a>
    </div>
    ${productControls(getCategories('atelier'))}
    <div data-product-grid class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter-mobile">
      ${atelierProducts.map(productCard).join('')}
    </div>
  </div>
</section>
${pageFooter()}
</main>
${bottomNavBar('collection')}`;
}

function categoryCard(number: string, title: string, text: string, image: string, offset = ''): string {
  return `
  <article class="group ${offset}">
    <div class="h-[460px] bg-surface-container overflow-hidden relative">
      <img class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="${image}" alt="${title}" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div class="absolute bottom-6 left-6 right-6 text-on-primary">
        <p class="font-label-caps text-label-caps uppercase mb-2">${number}</p>
        <h3 class="font-display-lg text-[34px] leading-none mb-stack-sm">${title}</h3>
        <p class="font-body-md text-body-md text-on-primary/80">${text}</p>
      </div>
    </div>
  </article>`;
}
