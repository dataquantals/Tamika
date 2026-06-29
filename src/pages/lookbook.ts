import { bottomNavBar, pageFooter, topAppBar } from './shared';

export function lookbookPage(): string {
  return `
${topAppBar()}
<main class="overflow-x-hidden bg-primary text-on-primary">
<section class="relative min-h-screen flex items-center overflow-hidden">
  <div class="absolute inset-0 opacity-50">
    <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1800&q=80" alt="Monochrome luxury fashion lookbook" />
  </div>
  <div class="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
  <div class="relative z-10 px-margin-mobile max-w-3xl pt-24">
    <span class="font-label-caps text-label-caps tracking-[0.3em] uppercase text-on-primary/70">Lookbook / 2024</span>
    <h2 class="font-display-lg-mobile text-[64px] md:text-[92px] leading-none mt-stack-md mb-stack-lg">Forms in Motion</h2>
    <p class="font-body-lg text-body-lg text-on-primary/80 mb-stack-lg max-w-xl">A study in long lines, sculptural shoulders, and soft tension. The season moves between city shadow and atelier light.</p>
    <a class="inline-flex items-center gap-3 border border-on-primary px-8 py-4 font-label-caps text-label-caps uppercase hover:bg-on-primary hover:text-primary transition-colors duration-500" href="/collection" data-link>Shop The Edit <span class="material-symbols-outlined text-[16px]">arrow_forward</span></a>
  </div>
</section>
<section class="px-margin-mobile py-section-gap bg-background text-on-background">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter-mobile items-start">
    <div class="md:col-span-4 md:sticky md:top-24">
      <span class="font-label-caps text-label-caps text-on-surface-variant/70 uppercase tracking-[0.25em]">Campaign Notes</span>
      <h3 class="font-display-lg-mobile text-display-lg-mobile text-primary mt-stack-md">Light, tension, restraint.</h3>
      <p class="font-body-lg text-body-lg text-on-surface-variant mt-stack-md">The lookbook frames garments as architecture: strict from a distance, tactile up close.</p>
    </div>
    <div class="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-gutter-mobile">
      ${look('01', 'The Long Coat', 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80')}
      ${look('02', 'Silk Column', 'https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=900&q=80', 'sm:mt-16')}
      ${look('03', 'Shadow Suiting', 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80')}
      ${look('04', 'After-Dark Knit', 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80', 'sm:mt-16')}
    </div>
  </div>
</section>
${pageFooter()}
</main>
${bottomNavBar('lookbook')}`;
}

function look(number: string, title: string, image: string, offset = ''): string {
  return `
  <article class="${offset}">
    <div class="aspect-[3/4] overflow-hidden bg-surface-container mb-stack-md">
      <img class="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700" src="${image}" alt="${title}" />
    </div>
    <p class="font-label-caps text-label-caps text-on-surface-variant uppercase">Look ${number}</p>
    <h4 class="font-headline-md text-headline-md text-primary mt-1">${title}</h4>
  </article>`;
}
