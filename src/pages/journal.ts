import { bottomNavBar, pageFooter, pageHero, topAppBar } from './shared';

export function journalPage(): string {
  return `
${topAppBar()}
<main class="overflow-x-hidden">
${pageHero('Notes From The House', 'Journal', 'Essays on material, shape, restraint, city movement, and the studio decisions behind the collection.')}
<section class="px-margin-mobile py-section-gap">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter-mobile">
    <article class="md:col-span-7 group">
      <div class="h-[560px] bg-surface-container overflow-hidden mb-stack-md">
        <img class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1523194258983-4ef0203f0c47?auto=format&fit=crop&w=1200&q=80" alt="Editorial fashion studio" />
      </div>
      <p class="font-label-caps text-label-caps text-on-surface-variant uppercase mb-stack-sm">Featured / Studio</p>
      <h3 class="font-display-lg-mobile text-[42px] leading-tight text-primary">Inside the fitting room: restraint as a discipline.</h3>
      <p class="font-body-lg text-body-lg text-on-surface-variant mt-stack-sm">How removal, not addition, defines the final silhouette.</p>
    </article>
    <div class="md:col-span-5 flex flex-col gap-stack-lg">
      ${article('Material', 'Why wool holds architecture better than trend.', 'An atelier note on density, drape, and the permanence of a precise shoulder.')}
      ${article('Travel', 'A compact wardrobe for colder city light.', 'Five pieces, three textures, and one tonal language.')}
      ${article('Craft', 'The hidden value of hand-finished seams.', 'A closer look at the details that never announce themselves.')}
      ${article('Culture', 'Quiet luxury after the algorithm.', 'Why the strongest clothes are often the least performative.')}
    </div>
  </div>
</section>
${pageFooter()}
</main>
${bottomNavBar('journal')}`;
}

function article(category: string, title: string, text: string): string {
  return `
  <article class="border-t border-outline-variant/40 pt-stack-md">
    <p class="font-label-caps text-label-caps text-on-surface-variant uppercase mb-stack-sm">${category}</p>
    <h4 class="font-headline-md text-headline-md text-primary mb-stack-sm">${title}</h4>
    <p class="font-body-md text-body-md text-on-surface-variant">${text}</p>
    <a href="#" class="font-label-caps text-label-caps mt-stack-md inline-flex items-center gap-2 text-primary uppercase">Read More <span class="material-symbols-outlined text-[16px]">arrow_forward</span></a>
  </article>`;
}
