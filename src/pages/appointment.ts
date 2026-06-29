import { bottomNavBar, pageFooter, pageHero, topAppBar } from './shared';

export function appointmentPage(): string {
  return `
${topAppBar()}
<main class="overflow-x-hidden">
${pageHero('Invitation', 'Private Viewing', 'Reserve a dedicated appointment with a TÀMIKA advisor for styling, made-to-measure notes, and seasonal pre-order access.')}
<section class="px-margin-mobile py-section-gap">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter-mobile items-start">
    <div class="md:col-span-5 bg-surface-container-high border border-outline-variant/30 p-8">
      <span class="font-label-caps text-label-caps text-on-surface-variant/70 uppercase tracking-[0.25em]">Appointment Types</span>
      <h3 class="font-display-lg-mobile text-[40px] leading-tight text-primary mt-stack-md mb-stack-lg">Choose your viewing format.</h3>
      <div class="space-y-5">
        ${option('Atelier Visit', 'A private in-person viewing with fit notes and styling direction.')}
        ${option('Digital Appointment', 'A remote wardrobe edit and seasonal selection call.')}
        ${option('Collector Preview', 'Early access to limited pieces and pre-order silhouettes.')}
      </div>
    </div>
    <form class="md:col-span-7 border border-outline-variant/30 p-8 bg-surface-container-lowest">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter-mobile">
        ${field('Full Name', 'text')}
        ${field('Email Address', 'email')}
        ${field('Phone', 'tel')}
        <label class="block">
          <span class="font-label-caps text-label-caps text-on-surface-variant uppercase">Appointment</span>
          <select class="mt-2 w-full bg-transparent border-b border-primary py-4 px-0 focus:outline-none font-body-md text-body-md">
            <option>Atelier Visit</option>
            <option>Digital Appointment</option>
            <option>Collector Preview</option>
          </select>
        </label>
      </div>
      <label class="block mt-stack-lg">
        <span class="font-label-caps text-label-caps text-on-surface-variant uppercase">Notes</span>
        <textarea rows="5" class="mt-2 w-full bg-transparent border border-outline-variant/50 p-4 focus:outline-none focus:border-primary font-body-md text-body-md" placeholder="Tell us what you are looking for."></textarea>
      </label>
      <button type="submit" class="mt-stack-lg bg-primary text-on-primary px-12 py-4 font-label-caps text-label-caps hover:bg-on-surface-variant transition-colors duration-500 uppercase">Request Appointment</button>
    </form>
  </div>
</section>
${pageFooter()}
</main>
${bottomNavBar('appointment')}`;
}

function option(title: string, text: string): string {
  return `
  <div class="border-t border-outline-variant/30 pt-5">
    <h4 class="font-body-lg text-body-lg text-primary">${title}</h4>
    <p class="font-body-md text-body-md text-on-surface-variant mt-1">${text}</p>
  </div>`;
}

function field(label: string, type: string): string {
  return `
  <label class="block">
    <span class="font-label-caps text-label-caps text-on-surface-variant uppercase">${label}</span>
    <input type="${type}" class="mt-2 w-full bg-transparent border-b border-primary py-4 px-0 focus:outline-none font-body-md text-body-md" />
  </label>`;
}
