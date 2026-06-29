import { bottomNavBar, pageFooter, pageHero, topAppBar } from './shared';

const salaulaItems = Array.from({ length: 25 }, (_, index) => {
  const number = index + 1;
  const names = [
    'Curated Salaula Find',
    'Archive Market Piece',
    'Pre-Loved Statement',
    'Restored Everyday Essential',
    'Found Wardrobe Edit',
  ];
  const categories = ['Outerwear', 'Dresses', 'Tops', 'Tailoring', 'Accessories'];

  return {
    image: `/assets/salaula/item-${String(number).padStart(2, '0')}.jpeg`,
    name: `${names[index % names.length]} ${String(number).padStart(2, '0')}`,
    category: categories[index % categories.length],
    price: `ZK ${[240, 310, 390, 460, 520][index % 5]}`,
  };
});

export function salaulaPage(): string {
  return `
${topAppBar()}
<main class="overflow-x-hidden">
${pageHero('Curated Pre-Loved', 'Salaula', 'A refined take on Zambian second-hand culture: authenticated, edited, repaired, and styled through the TÀMIKA lens.')}
<section class="px-margin-mobile py-section-gap">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter-mobile items-center">
    <div class="md:col-span-7 h-[620px] bg-surface-container overflow-hidden relative group">
      <img class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="/assets/salaula/item-01.jpeg" alt="Curated Salaula clothing" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div class="absolute bottom-8 left-8 text-on-primary">
        <span class="font-label-caps text-label-caps uppercase block mb-stack-sm">Drop 01</span>
        <h3 class="font-display-lg text-[38px] leading-tight">The Found Edit</h3>
      </div>
    </div>
    <div class="md:col-span-5 md:pl-10">
      <span class="font-label-caps text-label-caps text-on-surface-variant/70 uppercase tracking-[0.25em]">Why Salaula</span>
      <h3 class="font-display-lg-mobile text-[44px] leading-tight text-primary mt-stack-md mb-stack-lg">Pre-loved, but never careless.</h3>
      <p class="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg">Salaula brings the intelligence of second-hand discovery into a quieter luxury environment. Each piece is selected for fabric, silhouette, condition, and styling potential.</p>
      <div class="space-y-5">
        ${principle('01', 'Curated', 'No endless racks. Just a deliberate edit.')}
        ${principle('02', 'Restored', 'Cleaned, repaired, pressed, and prepared for another life.')}
        ${principle('03', 'Styled', 'Shown as complete looks, not isolated finds.')}
      </div>
    </div>
  </div>
</section>
<section class="px-margin-mobile pb-section-gap bg-surface">
  <div class="max-w-6xl mx-auto">
    <div class="flex justify-between items-end mb-stack-lg">
      <div>
        <span class="font-label-caps text-label-caps text-on-surface-variant/70 block mb-stack-sm uppercase">Latest Finds</span>
        <h3 class="font-display-lg-mobile text-display-lg-mobile text-primary">Salaula Drop</h3>
      </div>
      <a class="font-label-caps text-label-caps border-b border-primary pb-1 hover:opacity-50 transition-opacity uppercase" href="/appointment" data-link>Request Sourcing</a>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter-mobile">
      ${salaulaItems.map((item) => findCard(item.name, item.category, item.price, item.image)).join('')}
    </div>
  </div>
</section>
<section class="mx-margin-mobile mb-section-gap bg-primary text-on-primary p-10 md:p-14 text-center">
  <span class="font-label-caps text-label-caps text-on-primary/70 uppercase tracking-[0.25em]">Circular Wardrobe</span>
  <h3 class="font-display-lg-mobile text-[42px] leading-tight mt-stack-md mb-stack-md">Bring us what no longer serves you.</h3>
  <p class="font-body-lg text-body-lg text-on-primary/75 max-w-2xl mx-auto mb-stack-lg">Selected garments can be restored, resold, or reworked through future Salaula drops.</p>
  <a href="/appointment" data-link class="inline-flex border border-on-primary px-8 py-4 font-label-caps text-label-caps uppercase hover:bg-on-primary hover:text-primary transition-colors duration-500">Start Consignment</a>
</section>
${pageFooter()}
</main>
${bottomNavBar('collection')}`;
}

function principle(number: string, title: string, text: string): string {
  return `
  <div class="flex gap-5 border-t border-outline-variant/30 pt-5">
    <span class="font-label-caps text-label-caps text-on-surface-variant/50 uppercase w-10">${number}</span>
    <div>
      <h4 class="font-body-lg text-body-lg text-primary">${title}</h4>
      <p class="font-body-md text-body-md text-on-surface-variant mt-1">${text}</p>
    </div>
  </div>`;
}

function findCard(name: string, category: string, price: string, image: string): string {
  return `
  <article class="group cursor-pointer">
    <div class="aspect-[3/4] mb-stack-md overflow-hidden bg-surface-container">
      <img class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="${image}" alt="${name}" loading="lazy" />
    </div>
    <p class="font-label-caps text-label-caps text-on-surface-variant uppercase">${category}</p>
    <h4 class="font-body-lg text-body-lg text-primary mt-1">${name}</h4>
    <p class="font-body-md text-body-md text-on-surface-variant mt-1">${price}</p>
  </article>`;
}
