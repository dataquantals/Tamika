import { bottomNavBar, pageFooter, pageHero, topAppBar } from './shared';

export function collectionPage(): string {
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
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter-mobile">
      ${productCard('Sculpted Wool Blazer', 'Tailoring', 'ZK 1,250', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqe-MRpxzg_fcGGpUdx5aer0PUEKTOdoCuAQeIq0mbjIYkjqUgP5VTW1HPLqaEjrosZDerurAMK-wVHMDOQkq2vN-Mohq-2sIdlP9dRVDSXyDFEX5hN0GZ1D1l10_krMIg7jTrEn9FXubRJPizyrU9WCmsQ6PeuRoTV00EEaYPq2c4QFN1fKzxPpQ25n6mrhZVODozLbQ1H_bfw1tg1-gX9cnwotjfnqlqQD0MIlbUtha8D2N5gFchiHcvdsR2snN1J_4O-4yHDUuE')}
      ${productCard('Monolith Tote Bag', 'Accessories', 'ZK 2,400', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEBtFeVezR9dvJaO3ft2VxcMtytEWeibmT98QFRKkTlnOj5xXvrzp5ceZK6cWCjo_wndlaRmmRvFZ2wN2eBCzAdzGXNTL3-4HsSez6DqBZ3rsFf-I8TRpLMrE_trCV4AGReHUDKQFpBn0sEi_BuTYI7pFnxb3GRQ2QiNIEobQDC_hTGu2TqTccuV3Leb60seEPedQCEOLSXrxlVvrmC4N05keFwdGY0bs-qfp9h7zLx6wOX4nSfjV-JU6NfwySJL1x9al8vbwQnyIa')}
      ${productCard('Urban Chelsea Boot', 'Footwear', 'ZK 890', 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1uXHvS21tsdlJnNJ5mhy4uciZGw_cg5llfC35gf0muZQS6Yjd_RU9qe8-OUbWI5cNnOmFmZR_LV014R-W_nbMdXizeIH1ixagCnKfeFQ1eB0qU4JlSD1IZXxnYmUVMRq8W1nhfTXxmVAhT7lwNLz3vnHhzwnMUZDll-SyjhytsbKr6ZrXdu0Nds31L89bLOY54-Jbvx7C8X31x_dTZwi_5GGR0bMGRq09-EpkIKnEn-XH4okWpgJZk8OxFmAJcoxhYfnolwuF7_sE')}
      ${productCard('Cashmere Column Knit', 'Knitwear', 'ZK 1,080', 'https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?auto=format&fit=crop&w=900&q=80')}
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

function productCard(name: string, category: string, price: string, image: string): string {
  return `
  <article class="group cursor-pointer">
    <div class="aspect-[3/4] mb-stack-md overflow-hidden bg-surface-container">
      <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="${image}" alt="${name}" />
    </div>
    <p class="font-label-caps text-label-caps text-on-surface-variant uppercase">${category}</p>
    <h4 class="font-body-lg text-body-lg text-primary mt-1">${name}</h4>
    <p class="font-body-md text-body-md text-on-surface-variant mt-1">${price}</p>
  </article>`;
}
