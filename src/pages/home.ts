import { sideNavDrawer } from './shared';

export function homePage(): string {
  return `
<!-- TopAppBar -->
<header class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl transition-all duration-300 ease-in-out h-16 flex justify-between items-center px-margin-mobile">
<div class="flex items-center">
<button type="button" data-nav-open class="text-primary hover:opacity-70 transition-opacity" aria-label="Open navigation menu">
<span class="material-symbols-outlined" data-icon="menu">menu</span>
</button>
</div>
<a href="/" data-link class="font-display-lg-mobile text-display-lg-mobile tracking-widest uppercase text-primary">TÀMIKA</a>
<div class="flex items-center">
<a href="/appointment" data-link class="text-primary hover:opacity-70 transition-opacity" aria-label="Book appointment">
<span class="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
</a>
</div>
</header>
${sideNavDrawer()}
<main class="pt-0 overflow-x-hidden">
<!-- Hero Section (Parallax-Ready) -->
<section class="relative h-[795px] w-full flex items-center justify-center overflow-hidden bg-surface-container-low" id="hero">
<!-- Background Layer -->
<div class="absolute inset-0 z-0 parallax-layer" id="hero-bg">
<div class="w-full h-full bg-cover bg-center opacity-90 scale-110" data-alt="A cinematic, high-fashion portrait of a model in a structured architectural black coat standing against a minimalist concrete Brutalist building. The lighting is harsh afternoon sun creating dramatic high-contrast shadows. The color palette is strictly monochromatic with deep blacks and stark whites, echoing a luxury editorial aesthetic. The composition is off-center to allow for typographic breathing room." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0meieFhMGuFst02V2mfkF0dCEd6GAyEA9QPLVBQ6gQRmi4qnn32Z43AMCowjXSF0RE6xPo9iCunyaO24n9RTq-h19i3kxuM63hCL0zzttE9N5i5iEMToIcmxKtss0sG_w-SRO4r46KvsHV1vAtfHVvQYqD1oh19N6M4GsoqvSLazVJP44yH_p9j8cqkTCpUIMYkcFR3GBD1fqOGV8H93EXFsbhgATSg9PmCuFLtAg1AWm3kW8a1c-5pERWO6sSJh6bn0ZZF-_1Y9n')">
</div>
</div>
<!-- Mid Layer (Abstract Shapes/Overlay) -->
<div class="absolute inset-0 z-10 pointer-events-none mix-blend-overlay opacity-30 parallax-layer" id="hero-mid">
<div class="absolute top-1/4 -left-20 w-96 h-96 bg-primary blur-[120px] rounded-full"></div>
<div class="absolute bottom-1/4 -right-20 w-96 h-96 bg-on-primary-container blur-[120px] rounded-full"></div>
</div>
<!-- Content Layer -->
<div class="relative z-20 text-center px-margin-mobile flex flex-col items-center">
<span class="font-label-caps text-label-caps mb-stack-md text-primary/60 tracking-[0.3em] uppercase">Autumn / Winter 2024</span>
<h2 class="font-display-lg-mobile text-[52px] leading-tight mb-stack-lg tracking-tighter text-primary">THE ART OF<br/>RESTRAINT</h2>
<div class="editorial-line h-[1px] bg-primary mb-stack-lg" id="hero-line"></div>
<a href="/collection" data-link class="bg-primary text-on-primary px-12 py-4 font-label-caps text-label-caps hover:bg-on-surface-variant transition-colors duration-500 uppercase">
                    Explore Collection
                </a>
</div>
</section>
<!-- New Arrivals Header -->
<section class="px-margin-mobile mt-section-gap mb-stack-lg">
<div class="flex justify-between items-end">
<div>
<span class="font-label-caps text-label-caps text-on-surface-variant/70 block mb-stack-sm uppercase">Curated</span>
<h3 class="font-display-lg-mobile text-display-lg-mobile text-primary">New Arrivals</h3>
</div>
<a class="font-label-caps text-label-caps border-b border-primary pb-1 hover:opacity-50 transition-opacity uppercase" href="/collection" data-link>View All</a>
</div>
</section>
<!-- Horizontal Scroll Arrivals -->
<section class="overflow-x-auto no-scrollbar flex gap-gutter-mobile px-margin-mobile pb-stack-lg">
<!-- Product 1 -->
<div class="min-w-[280px] group cursor-pointer">
<div class="aspect-[3/4] mb-stack-md overflow-hidden bg-surface-container">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A minimalist full-length shot of an avant-garde oversized wool blazer in charcoal grey. The garment features sharp, architectural shoulders and hidden buttons. The lighting is soft and diffused, highlighting the rich texture of the fabric against a clean, warm-toned studio background. High-end fashion editorial style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqe-MRpxzg_fcGGpUdx5aer0PUEKTOdoCuAQeIq0mbjIYkjqUgP5VTW1HPLqaEjrosZDerurAMK-wVHMDOQkq2vN-Mohq-2sIdlP9dRVDSXyDFEX5hN0GZ1D1l10_krMIg7jTrEn9FXubRJPizyrU9WCmsQ6PeuRoTV00EEaYPq2c4QFN1fKzxPpQ25n6mrhZVODozLbQ1H_bfw1tg1-gX9cnwotjfnqlqQD0MIlbUtha8D2N5gFchiHcvdsR2snN1J_4O-4yHDUuE"/>
</div>
<p class="font-label-caps text-label-caps text-on-surface-variant uppercase">Tailoring</p>
<h4 class="font-body-lg text-body-lg text-primary mt-1">Sculpted Wool Blazer</h4>
<p class="font-body-md text-body-md text-on-surface-variant mt-1">ZK 1,250</p>
</div>
<!-- Product 2 -->
<div class="min-w-[280px] group cursor-pointer">
<div class="aspect-[3/4] mb-stack-md overflow-hidden bg-surface-container">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Close-up of a luxury leather handbag in deep espresso brown with gold hardware. The bag is placed on a reflective marble surface, creating a subtle mirrored effect. The composition is tight and focused, emphasizing the craftsmanship and premium grain of the leather. Elegant, expensive lighting with soft golden highlights." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEBtFeVezR9dvJaO3ft2VxcMtytEWeibmT98QFRKkTlnOj5xXvrzp5ceZK6cWCjo_wndlaRmmRvFZ2wN2eBCzAdzGXNTL3-4HsSez6DqBZ3rsFf-I8TRpLMrE_trCV4AGReHUDKQFpBn0sEi_BuTYI7pFnxb3GRQ2QiNIEobQDC_hTGu2TqTccuV3Leb60seEPedQCEOLSXrxlVvrmC4N05keFwdGY0bs-qfp9h7zLx6wOX4nSfjV-JU6NfwySJL1x9al8vbwQnyIa"/>
</div>
<p class="font-label-caps text-label-caps text-on-surface-variant uppercase">Accessories</p>
<h4 class="font-body-lg text-body-lg text-primary mt-1">Monolith Tote Bag</h4>
<p class="font-body-md text-body-md text-on-surface-variant mt-1">ZK 2,400</p>
</div>
<!-- Product 3 -->
<div class="min-w-[280px] group cursor-pointer">
<div class="aspect-[3/4] mb-stack-md overflow-hidden bg-surface-container">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Fashion photography featuring a pair of sleek, minimalist leather Chelsea boots in polished black. The boots are shown in a dynamic stride on a wet cobblestone street at night, with blurred city lights in the background creating a bokeh effect. The focus is sharp on the boots, capturing the high-gloss finish and clean lines." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1uXHvS21tsdlJnNJ5mhy4uciZGw_cg5llfC35gf0muZQS6Yjd_RU9qe8-OUbWI5cNnOmFmZR_LV014R-W_nbMdXizeIH1ixagCnKfeFQ1eB0qU4JlSD1IZXxnYmUVMRq8W1nhfTXxmVAhT7lwNLz3vnHhzwnMUZDll-SyjhytsbKr6ZrXdu0Nds31L89bLOY54-Jbvx7C8X31x_dTZwi_5GGR0bMGRq09-EpkIKnEn-XH4okWpgJZk8OxFmAJcoxhYfnolwuF7_sE"/>
</div>
<p class="font-label-caps text-label-caps text-on-surface-variant uppercase">Footwear</p>
<h4 class="font-body-lg text-body-lg text-primary mt-1">Urban Chelsea Boot</h4>
<p class="font-body-md text-body-md text-on-surface-variant mt-1">ZK 890</p>
</div>
</section>
<!-- Editorial Feature (Bento Style) -->
<section class="px-margin-mobile mt-section-gap mb-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter-mobile">
<div class="md:col-span-12 mb-stack-lg">
<h3 class="font-display-lg-mobile text-display-lg-mobile text-primary text-center">Stories</h3>
</div>
<div class="md:col-span-7 h-[500px] relative overflow-hidden group">
<div class="absolute inset-0 bg-cover bg-center" data-alt="A wide-angle landscape shot of a model walking through a field of tall, dry grass at dusk. The sky is a gradient of deep indigo and soft violet. The model wears a long, flowing silk dress that catches the wind. The mood is ethereal, poetic, and serene, representing the brand's connection to nature and movement." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCiLtoIndEVWfgTwHeS0uVFBV1i7B2Uk0ZCyev70Y-_lmk6SGn8qiBwzHuvqKlCVgtcAKGGWQHwBgarQFzhZCrwL4bMDTMVecK2XZiZfGEH8pu6RwZBg1_J0qjeGIFDXOiyEHD1rmm9lpVvye5zb5Cwv6J9FMlWxj06wY591PVFGT8wckynusvCZMyaQklInPayvIV7b0qNyyzrBEbuvjSdjuMRaSi2dZeBNnoNOPzP-ciflx7srkwqaX0aXuoCsHtUuR64Ouc4IVWn')">
</div>
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div class="absolute bottom-8 left-8">
<span class="font-label-caps text-label-caps text-on-primary mb-2 block uppercase">Volume I</span>
<h4 class="font-display-lg text-[32px] text-on-primary leading-tight">THE SILK<br/>CHRONICLES</h4>
</div>
</div>
<div class="md:col-span-5 flex flex-col gap-gutter-mobile">
<div class="h-[240px] bg-surface-container-high p-8 flex flex-col justify-center border border-outline-variant/30">
<h5 class="font-headline-md text-headline-md mb-stack-sm text-primary">SUSTAINABILITY</h5>
<p class="font-body-md text-body-md text-on-surface-variant line-clamp-3">Discover our commitment to zero-waste production and ethically sourced materials for the 2024 season.</p>
<a class="font-label-caps text-label-caps mt-stack-md inline-flex items-center gap-2 text-primary uppercase" href="/journal" data-link>Read More <span class="material-symbols-outlined text-[16px]" data-icon="arrow_forward">arrow_forward</span></a>
</div>
<div class="h-[240px] relative overflow-hidden group">
<div class="absolute inset-0 bg-cover bg-center" data-alt="A close-up studio shot focusing on the tactile texture of a heavy-knit cashmere sweater in cream white. A hand with minimalist rings gently brushes the fabric. The lighting is warm and inviting, emphasizing the luxurious softness and high quality of the fibers. Minimalist, clean-girl aesthetic." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCgrMx7uUHZm9b3S_0aVWW0O5z8_t9A81fUsYEMezL9BJA3xZZ141fEHvvTCwG27h_PdCUW0fk-48AGMxpRhOWGR0mgaEq_r53n0huerxaJKnWVmNBbeY_WBY7ApABsZ5jjoRUCVd0wVGWug7VLsJnRgLvii7qqsl_Zi2HHyUot-EZtz47sE5E_5Uqq38FCyIHBcioygtBJjR0ZWl0Otukrc3_jOZ2a-G1h3O6r1xOPLWJ_YkjJC8MFXe0IYRCj_mhlV-XfIyMMvWMW')">
</div>
<div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
<div class="absolute inset-0 flex items-center justify-center">
<span class="font-label-caps text-label-caps text-on-primary border border-on-primary px-6 py-2 uppercase">Craftsmanship</span>
</div>
</div>
</div>
</section>

<!-- Brand Manifesto -->
<section class="px-margin-mobile py-section-gap border-y border-outline-variant/20 bg-surface-container-lowest">
<div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter-mobile items-center">
<div class="md:col-span-5">
<span class="font-label-caps text-label-caps text-on-surface-variant/70 uppercase tracking-[0.25em]">Maison Code</span>
<h3 class="font-display-lg-mobile text-[42px] leading-tight text-primary mt-stack-md">Quiet luxury, cut with architectural intent.</h3>
</div>
<div class="md:col-span-7 md:pl-12">
<p class="font-body-lg text-body-lg text-on-surface-variant">TÀMIKA is built around edited silhouettes, tactile materials, and pieces designed to hold their shape across seasons. Each garment is considered from the first line sketch to the final hand-finished seam.</p>
<div class="grid grid-cols-3 gap-gutter-mobile mt-stack-lg pt-stack-lg border-t border-outline-variant/30">
<div><p class="font-display-lg-mobile text-[32px] text-primary">42</p><p class="font-label-caps text-label-caps text-on-surface-variant uppercase">Looks</p></div>
<div><p class="font-display-lg-mobile text-[32px] text-primary">09</p><p class="font-label-caps text-label-caps text-on-surface-variant uppercase">Ateliers</p></div>
<div><p class="font-display-lg-mobile text-[32px] text-primary">100%</p><p class="font-label-caps text-label-caps text-on-surface-variant uppercase">Traceable</p></div>
</div>
</div>
</div>
</section>

<!-- Collection Categories -->
<section class="px-margin-mobile mt-section-gap mb-section-gap">
<div class="flex justify-between items-end mb-stack-lg">
<div>
<span class="font-label-caps text-label-caps text-on-surface-variant/70 block mb-stack-sm uppercase">Shop By Mood</span>
<h3 class="font-display-lg-mobile text-display-lg-mobile text-primary">The Collection</h3>
</div>
<a class="font-label-caps text-label-caps border-b border-primary pb-1 hover:opacity-50 transition-opacity uppercase" href="/collection" data-link>All Categories</a>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter-mobile">
<a href="/collection" data-link class="group block">
<div class="h-[420px] bg-surface-container overflow-hidden relative">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80" alt="Editorial tailoring collection" />
<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div class="absolute bottom-6 left-6 text-on-primary"><p class="font-label-caps text-label-caps uppercase mb-2">01</p><h4 class="font-display-lg text-[32px] leading-none">Tailoring</h4></div>
</div>
</a>
<a href="/collection" data-link class="group block md:mt-12">
<div class="h-[420px] bg-surface-container overflow-hidden relative">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80" alt="Luxury evening wear collection" />
<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div class="absolute bottom-6 left-6 text-on-primary"><p class="font-label-caps text-label-caps uppercase mb-2">02</p><h4 class="font-display-lg text-[32px] leading-none">Evening</h4></div>
</div>
</a>
<a href="/collection" data-link class="group block">
<div class="h-[420px] bg-surface-container overflow-hidden relative">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80" alt="Minimal accessories editorial" />
<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div class="absolute bottom-6 left-6 text-on-primary"><p class="font-label-caps text-label-caps uppercase mb-2">03</p><h4 class="font-display-lg text-[32px] leading-none">Objects</h4></div>
</div>
</a>
</div>
</section>

<!-- Lookbook Feature -->
<section class="relative min-h-[680px] bg-primary text-on-primary flex items-center overflow-hidden">
<div class="absolute inset-0 opacity-45">
<img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80" alt="Monochrome luxury fashion lookbook" />
</div>
<div class="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
<div class="relative z-10 px-margin-mobile max-w-2xl">
<span class="font-label-caps text-label-caps tracking-[0.3em] uppercase text-on-primary/70">Lookbook / 2024</span>
<h3 class="font-display-lg-mobile text-[56px] leading-none mt-stack-md mb-stack-lg">Forms in Motion</h3>
<p class="font-body-lg text-body-lg text-on-primary/80 mb-stack-lg">A study in long lines, sculptural shoulders, and soft tension. The season moves between city shadow and atelier light.</p>
<a class="inline-flex items-center gap-3 border border-on-primary px-8 py-4 font-label-caps text-label-caps uppercase hover:bg-on-primary hover:text-primary transition-colors duration-500" href="/lookbook" data-link>Open Lookbook <span class="material-symbols-outlined text-[16px]">arrow_forward</span></a>
</div>
</section>

<!-- Client Services -->
<section class="px-margin-mobile py-section-gap bg-surface">
<div class="max-w-6xl mx-auto">
<div class="text-center mb-stack-lg">
<span class="font-label-caps text-label-caps text-on-surface-variant/70 uppercase tracking-[0.25em]">Private Atelier</span>
<h3 class="font-display-lg-mobile text-display-lg-mobile text-primary mt-stack-sm">Services</h3>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 border border-outline-variant/30">
<div class="p-8 border-b md:border-b-0 md:border-r border-outline-variant/30">
<span class="material-symbols-outlined text-[32px] mb-stack-md text-primary">styler</span>
<h4 class="font-headline-md text-headline-md text-primary mb-stack-sm">Personal Styling</h4>
<p class="font-body-md text-body-md text-on-surface-variant">A private wardrobe edit with silhouettes selected around your proportions, calendar, and pace.</p>
</div>
<div class="p-8 border-b md:border-b-0 md:border-r border-outline-variant/30">
<span class="material-symbols-outlined text-[32px] mb-stack-md text-primary">straighten</span>
<h4 class="font-headline-md text-headline-md text-primary mb-stack-sm">Made To Measure</h4>
<p class="font-body-md text-body-md text-on-surface-variant">Signature pieces adjusted in length, structure, and finishing by our partner ateliers.</p>
</div>
<div class="p-8">
<span class="material-symbols-outlined text-[32px] mb-stack-md text-primary">local_shipping</span>
<h4 class="font-headline-md text-headline-md text-primary mb-stack-sm">Concierge Delivery</h4>
<p class="font-body-md text-body-md text-on-surface-variant">Priority handling, careful packaging, and appointment-based delivery for collector clients.</p>
</div>
</div>
</div>
</section>

<!-- Journal -->
<section class="px-margin-mobile mb-section-gap">
<div class="flex justify-between items-end mb-stack-lg">
<div>
<span class="font-label-caps text-label-caps text-on-surface-variant/70 block mb-stack-sm uppercase">Notes From The House</span>
<h3 class="font-display-lg-mobile text-display-lg-mobile text-primary">Journal</h3>
</div>
<a class="font-label-caps text-label-caps border-b border-primary pb-1 hover:opacity-50 transition-opacity uppercase" href="/journal" data-link>Read All</a>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter-mobile">
<article class="border-t border-outline-variant/40 pt-stack-md">
<p class="font-label-caps text-label-caps text-on-surface-variant uppercase mb-stack-sm">Material</p>
<h4 class="font-headline-md text-headline-md text-primary mb-stack-sm">Why wool holds architecture better than trend.</h4>
<p class="font-body-md text-body-md text-on-surface-variant">An atelier note on density, drape, and the permanence of a precise shoulder.</p>
</article>
<article class="border-t border-outline-variant/40 pt-stack-md">
<p class="font-label-caps text-label-caps text-on-surface-variant uppercase mb-stack-sm">Studio</p>
<h4 class="font-headline-md text-headline-md text-primary mb-stack-sm">Inside the fitting room: restraint as a discipline.</h4>
<p class="font-body-md text-body-md text-on-surface-variant">How removal, not addition, defines the final silhouette.</p>
</article>
<article class="border-t border-outline-variant/40 pt-stack-md">
<p class="font-label-caps text-label-caps text-on-surface-variant uppercase mb-stack-sm">Travel</p>
<h4 class="font-headline-md text-headline-md text-primary mb-stack-sm">A compact wardrobe for colder city light.</h4>
<p class="font-body-md text-body-md text-on-surface-variant">Five pieces, three textures, and one tonal language.</p>
</article>
</div>
</section>

<!-- Appointment CTA -->
<section class="mx-margin-mobile mb-section-gap bg-surface-container-high border border-outline-variant/30 px-8 py-12 text-center">
<span class="font-label-caps text-label-caps text-on-surface-variant/70 uppercase tracking-[0.25em]">Invitation</span>
<h3 class="font-display-lg-mobile text-[42px] leading-tight text-primary mt-stack-sm mb-stack-md">Reserve a private viewing.</h3>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-stack-lg">Experience the collection with a dedicated style advisor, available in person or by digital appointment.</p>
<a class="inline-flex bg-primary text-on-primary px-10 py-4 font-label-caps text-label-caps uppercase hover:bg-on-surface-variant transition-colors duration-500" href="/appointment" data-link>Book Appointment</a>
</section>

<!-- Newsletter / Footer -->
<section class="bg-surface-container-low py-section-gap px-margin-mobile text-center border-t border-outline-variant/20">
<h4 class="font-display-lg-mobile text-display-lg-mobile text-primary mb-stack-md uppercase tracking-tight">The Circle</h4>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-md mx-auto">Join our private list for exclusive early access and editorial insights.</p>
<form class="max-w-md mx-auto relative">
<input class="w-full bg-transparent border-b border-primary py-4 px-0 focus:outline-none focus:border-primary font-label-caps text-label-caps placeholder:text-on-surface-variant/50 uppercase" placeholder="YOUR EMAIL ADDRESS" type="email"/>
<button class="absolute right-0 bottom-4 font-label-caps text-label-caps text-primary hover:opacity-50 transition-opacity uppercase" type="submit">Subscribe</button>
</form>
<div class="mt-section-gap opacity-30">
<p class="font-label-caps text-[10px] tracking-widest uppercase">© 2024 TÀMIKA ATELIER. ALL RIGHTS RESERVED.</p>
</div>
</section>
<!-- Spacer for BottomNavBar -->
<div class="h-24"></div>
</main>
<!-- BottomNavBar -->
<nav class="fixed bottom-0 left-0 w-full flex justify-around items-center px-6 py-4 pb-8 bg-surface/90 backdrop-blur-md border-t border-outline-variant/30 z-50">
<a class="flex items-center justify-center text-primary scale-110 active:scale-95 transition-transform duration-200" href="/" data-link>
<span class="material-symbols-outlined" data-icon="home" style="font-variation-settings: 'FILL' 1;">home</span>
</a>
<a class="flex items-center justify-center text-on-surface-variant/50 hover:text-primary active:scale-95 transition-all duration-200" href="/collection" data-link>
<span class="material-symbols-outlined" data-icon="search">search</span>
</a>
<a class="flex items-center justify-center text-on-surface-variant/50 hover:text-primary active:scale-95 transition-all duration-200" href="/lookbook" data-link>
<span class="material-symbols-outlined" data-icon="favorite">favorite</span>
</a>
<a class="flex items-center justify-center text-on-surface-variant/50 hover:text-primary active:scale-95 transition-all duration-200" href="/appointment" data-link>
<span class="material-symbols-outlined" data-icon="person">person</span>
</a>
</nav>
`;
}

export function setupHomePageInteractions(): void {
  // Parallax Effect
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBg = document.getElementById('hero-bg');
    const heroMid = document.getElementById('hero-mid');

    if (heroBg) {
      heroBg.style.transform = 'translateY(' + scrolled * 0.4 + 'px)';
    }
    if (heroMid) {
      heroMid.style.transform = 'translateY(' + scrolled * 0.2 + 'px)';
    }
  });

  // Intersection Observer for Animation
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.id === 'hero-line') {
          entry.target.classList.add('active');
        }
      }
    });
  }, observerOptions);

  const heroLine = document.getElementById('hero-line');
  if (heroLine) observer.observe(heroLine);

  // Subtle header scroll effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (!header) return;

    if (window.scrollY > 50) {
      header.classList.add('h-14', 'bg-surface/95', 'shadow-sm');
      header.classList.remove('h-16', 'bg-surface/80');
    } else {
      header.classList.add('h-16', 'bg-surface/80');
      header.classList.remove('h-14', 'bg-surface/95', 'shadow-sm');
    }
  });
}

