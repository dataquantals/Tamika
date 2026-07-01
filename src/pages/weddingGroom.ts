import { fallbackWeddingProducts, weddingPrice, type WeddingProduct } from '../data/weddingProducts';
import { bottomNavBar, pageFooter, topAppBar } from './shared';

const groomProducts = fallbackWeddingProducts.filter((product) => product.category === 'groom');

export function weddingGroomPage(): string {
  return `
${topAppBar()}
<main class="overflow-x-hidden bg-[#fbf7f1] text-[#2d2926]">
<section class="relative min-h-[720px] pt-28 flex items-center overflow-hidden">
  <div class="absolute inset-0">
    <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1800&q=85" alt="Luxury groom wedding tailoring" />
  </div>
  <div class="absolute inset-0 bg-gradient-to-r from-[#2d2926]/85 via-[#2d2926]/50 to-transparent"></div>
  <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#fbf7f1] to-transparent"></div>
  <div class="relative z-10 px-margin-mobile max-w-3xl">
    <span class="font-label-caps text-label-caps tracking-[0.35em] uppercase text-[#e6c88f]">Wedding / Groom Atelier</span>
    <h1 class="font-display-lg-mobile text-[58px] md:text-[92px] leading-none tracking-tighter text-[#fffaf2] mt-stack-md mb-stack-lg">Groom</h1>
    <p class="font-body-lg text-body-lg text-[#fffaf2]/85 max-w-2xl">Formal wedding tailoring, ceremony accessories, and private fitting services for the groom — built for buying online or booking an atelier consultation.</p>
    <div class="mt-stack-lg flex flex-wrap gap-3">
      <a href="#groom-products" class="bg-[#fffaf2] text-[#2d2926] px-10 py-4 font-label-caps text-label-caps uppercase hover:bg-[#e6c88f] transition-colors duration-500">Shop Groom Edit</a>
      <a href="/appointment" data-link class="border border-[#fffaf2]/70 text-[#fffaf2] px-10 py-4 font-label-caps text-label-caps uppercase hover:bg-[#fffaf2] hover:text-[#2d2926] transition-colors duration-500">Book Groom Fitting</a>
    </div>
  </div>
</section>

<section class="px-margin-mobile py-section-gap">
  <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-10 items-start">
    <aside class="lg:sticky lg:top-32 bg-[#fffaf2]/80 border border-[#eadfd3] p-8">
      <span class="font-label-caps text-label-caps text-[#b89458] uppercase tracking-[0.25em]">Private Service</span>
      <h2 class="font-display-lg-mobile text-[42px] leading-tight text-[#2d2926] mt-stack-md mb-stack-md">Buy the look or reserve a fitting.</h2>
      <p class="font-body-md text-body-md text-[#6c625c] mb-stack-lg">Select ready-to-wear formal pieces online, or book a made-to-measure groom appointment for fit notes, fabric selection, and concierge delivery.</p>
      <div class="space-y-5 border-t border-[#eadfd3] pt-5">
        ${servicePoint('01', 'Online Purchase', 'Add ready pieces and accessories to your bag.')}
        ${servicePoint('02', 'Private Fitting', 'Book measurements and styling with an advisor.')}
        ${servicePoint('03', 'Concierge Delivery', 'Priority handling with Yango, In-Drive, or appointment delivery.')}
      </div>
      <a href="/appointment" data-link class="mt-stack-lg inline-flex w-full justify-center bg-[#2d2926] text-[#fffaf2] px-8 py-4 font-label-caps text-label-caps uppercase hover:bg-[#b89458] transition-colors duration-500">Book Appointment</a>
    </aside>

    <section id="groom-products">
      <div class="flex justify-between items-end mb-stack-lg">
        <div>
          <span class="font-label-caps text-label-caps text-[#b89458] uppercase tracking-[0.25em]">Ceremony Tailoring</span>
          <h2 class="font-display-lg-mobile text-display-lg-mobile text-[#2d2926] mt-stack-sm">Groom Wedding Pieces</h2>
        </div>
        <a href="/wedding" data-link class="font-label-caps text-label-caps border-b border-[#b89458] text-[#2d2926] uppercase hover:text-[#b89458] transition-colors">All Wedding</a>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-10">
        ${groomProducts.map(groomCard).join('')}
      </div>
    </section>
  </div>
</section>
${pageFooter()}
</main>
${bottomNavBar('collection')}`;
}

function servicePoint(number: string, title: string, text: string): string {
  return `
  <div class="flex gap-4">
    <span class="font-label-caps text-label-caps text-[#b89458] w-8">${number}</span>
    <div>
      <h3 class="font-body-lg text-body-lg text-[#2d2926]">${title}</h3>
      <p class="font-body-md text-body-md text-[#6c625c] mt-1">${text}</p>
    </div>
  </div>`;
}

function groomCard(product: WeddingProduct): string {
  return `
  <article class="group">
    <div class="aspect-[3/4] bg-[#efe7dc] overflow-hidden relative mb-stack-md">
      <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="${product.image}" alt="${product.title}" loading="lazy" />
      <div class="absolute inset-0 bg-[#2d2926]/0 group-hover:bg-[#2d2926]/35 transition-colors duration-500 flex items-center justify-center">
        <div class="translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 flex flex-col gap-3 transition-all duration-500">
          <button type="button" data-add-to-cart="${product.id}" class="border border-[#fffaf2] bg-[#fffaf2] text-[#2d2926] px-8 py-3 font-label-caps text-label-caps uppercase hover:bg-[#e6c88f] transition-colors">Buy Now</button>
          <a href="/appointment" data-link class="border border-[#fffaf2] bg-[#fffaf2]/15 backdrop-blur-sm text-[#fffaf2] px-8 py-3 font-label-caps text-label-caps uppercase text-center hover:bg-[#fffaf2] hover:text-[#2d2926] transition-colors">Book Fitting</a>
        </div>
      </div>
    </div>
    <p class="font-label-caps text-label-caps text-[#b89458] uppercase">${product.collection}</p>
    <div class="flex justify-between gap-4 items-start mt-1">
      <h3 class="font-headline-md text-[24px] leading-tight text-[#2d2926]">${product.title}</h3>
      <p class="font-body-md text-body-md text-[#2d2926] whitespace-nowrap">${weddingPrice(product.price)}</p>
    </div>
    <p class="font-body-md text-body-md text-[#6c625c] mt-2">${product.description}</p>
    <p class="font-label-caps text-[10px] leading-4 text-[#8b7d73] uppercase mt-3">Sizes: ${product.sizes.join(', ')}</p>
  </article>`;
}
