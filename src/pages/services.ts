import { bottomNavBar, pageFooter, pageHero, topAppBar } from './shared';

export function servicesPage(): string {
  return `
${topAppBar()}
<main class="overflow-x-hidden">
${pageHero('Private Atelier', 'Services', 'Personal guidance, made-to-measure refinement, and quiet concierge care for the full TÀMIKA wardrobe experience.')}
<section class="px-margin-mobile py-section-gap bg-surface">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 border border-outline-variant/30">
    ${service('styler', 'Personal Styling', 'A private wardrobe edit with silhouettes selected around your proportions, calendar, and pace.', '01')}
    ${service('straighten', 'Made To Measure', 'Signature pieces adjusted in length, structure, and finishing by our partner ateliers.', '02')}
    ${service('local_shipping', 'Concierge Delivery', 'Priority handling, careful packaging, and appointment-based delivery for collector clients.', '03', false)}
  </div>
</section>
<section class="px-margin-mobile pb-section-gap">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter-mobile items-center">
    <div class="md:col-span-6 h-[560px] bg-surface-container overflow-hidden">
      <img class="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=1100&q=80" alt="Private fashion atelier fitting" />
    </div>
    <div class="md:col-span-6 md:pl-12">
      <span class="font-label-caps text-label-caps text-on-surface-variant/70 uppercase tracking-[0.25em]">How It Works</span>
      <h3 class="font-display-lg-mobile text-[44px] leading-tight text-primary mt-stack-md mb-stack-lg">A slower, more considered way to dress.</h3>
      <div class="space-y-6">
        ${step('I', 'Consultation', 'We begin with proportion, use-case, and your existing wardrobe language.')}
        ${step('II', 'Selection', 'A precise edit is prepared from seasonal and permanent pieces.')}
        ${step('III', 'Refinement', 'Fit notes, alterations, and delivery are handled through one dedicated advisor.')}
      </div>
      <a class="inline-flex mt-stack-lg bg-primary text-on-primary px-10 py-4 font-label-caps text-label-caps uppercase hover:bg-on-surface-variant transition-colors duration-500" href="/appointment" data-link>Book Appointment</a>
    </div>
  </div>
</section>
${pageFooter()}
</main>
${bottomNavBar('appointment')}`;
}

function service(icon: string, title: string, text: string, number: string, border = true): string {
  return `
  <article class="p-8 ${border ? 'border-b md:border-b-0 md:border-r' : ''} border-outline-variant/30">
    <div class="flex justify-between items-start mb-stack-md">
      <span class="material-symbols-outlined text-[32px] text-primary">${icon}</span>
      <span class="font-label-caps text-label-caps text-on-surface-variant/40 uppercase">${number}</span>
    </div>
    <h3 class="font-headline-md text-headline-md text-primary mb-stack-sm">${title}</h3>
    <p class="font-body-md text-body-md text-on-surface-variant">${text}</p>
  </article>`;
}

function step(number: string, title: string, text: string): string {
  return `
  <div class="flex gap-5 border-t border-outline-variant/30 pt-5">
    <span class="font-label-caps text-label-caps text-on-surface-variant uppercase w-10">${number}</span>
    <div>
      <h4 class="font-body-lg text-body-lg text-primary">${title}</h4>
      <p class="font-body-md text-body-md text-on-surface-variant mt-1">${text}</p>
    </div>
  </div>`;
}
