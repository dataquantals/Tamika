import { formatPrice, getProduct, products, type Product } from './data/products';

type CartItem = {
  productId: string;
  quantity: number;
};

const CART_KEY = 'tamika-cart';
const CUSTOMER_KEY = 'tamika-customer';

function readCart(): CartItem[] {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) ?? '[]') as CartItem[];
  } catch {
    return [];
  }
}

function writeCart(cart: CartItem[]): void {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function getCartProducts(): Array<CartItem & { product: Product }> {
  return readCart()
    .map((item) => ({ ...item, product: getProduct(item.productId) }))
    .filter((item): item is CartItem & { product: Product } => Boolean(item.product));
}

function cartCount(): number {
  return readCart().reduce((total, item) => total + item.quantity, 0);
}

function cartSubtotal(): number {
  return getCartProducts().reduce((total, item) => total + item.product.price * item.quantity, 0);
}

export function storefrontShell(): string {
  return `
<div data-toast class="fixed left-1/2 top-20 z-[90] -translate-x-1/2 translate-y-[-16px] opacity-0 pointer-events-none bg-primary text-on-primary px-5 py-3 font-label-caps text-label-caps uppercase tracking-[0.15em] transition-all duration-300">Added to bag</div>
<div data-search-overlay class="fixed inset-0 z-[75] bg-black/40 opacity-0 pointer-events-none transition-opacity duration-500"></div>
<aside data-search-panel class="fixed top-0 right-0 z-[80] h-dvh w-[92vw] max-w-[520px] translate-x-full bg-surface-container-lowest border-l border-outline-variant/30 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] flex flex-col">
  <div class="h-16 px-margin-mobile flex items-center justify-between border-b border-outline-variant/20">
    <p class="font-label-caps text-label-caps uppercase tracking-[0.25em] text-primary">Search The House</p>
    <button type="button" data-search-close class="text-primary hover:opacity-70" aria-label="Close search"><span class="material-symbols-outlined">close</span></button>
  </div>
  <div class="p-margin-mobile border-b border-outline-variant/20">
    <input data-global-search-input class="w-full bg-transparent border-b border-primary py-4 px-0 focus:outline-none font-body-lg text-body-lg uppercase placeholder:text-on-surface-variant/40" placeholder="Search products" />
  </div>
  <div data-global-search-results class="flex-1 overflow-y-auto p-margin-mobile grid grid-cols-2 gap-gutter-mobile"></div>
</aside>
<div data-cart-overlay class="fixed inset-0 z-[75] bg-black/40 opacity-0 pointer-events-none transition-opacity duration-500"></div>
<aside data-cart-drawer class="fixed top-0 right-0 z-[80] h-dvh w-[92vw] max-w-[480px] translate-x-full bg-surface-container-lowest border-l border-outline-variant/30 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] flex flex-col">
  <div class="h-16 px-margin-mobile flex items-center justify-between border-b border-outline-variant/20">
    <p class="font-label-caps text-label-caps uppercase tracking-[0.25em] text-primary">Shopping Bag <span data-cart-count-label></span></p>
    <button type="button" data-cart-close class="text-primary hover:opacity-70" aria-label="Close cart"><span class="material-symbols-outlined">close</span></button>
  </div>
  <div data-cart-items class="flex-1 overflow-y-auto p-margin-mobile space-y-5"></div>
  <div class="border-t border-outline-variant/20 p-margin-mobile">
    <div class="flex justify-between font-body-lg text-body-lg text-primary mb-stack-md"><span>Subtotal</span><span data-cart-subtotal>ZK 0</span></div>
    <p class="font-body-md text-body-md text-on-surface-variant mb-stack-md">Taxes, shipping, and atelier delivery are calculated at checkout.</p>
    <button type="button" data-checkout class="w-full bg-primary text-on-primary px-8 py-4 font-label-caps text-label-caps uppercase hover:bg-on-surface-variant transition-colors">Checkout</button>
  </div>
</aside>`;
}

export function productCard(product: Product): string {
  return `
  <article class="group cursor-pointer" data-product-card data-product-category="${product.category}" data-product-name="${product.name.toLowerCase()}">
    <div class="aspect-[3/4] mb-stack-md overflow-hidden bg-surface-container relative">
      <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="${product.image}" alt="${product.name}" loading="lazy" />
      ${product.badge ? `<span class="absolute top-3 left-3 bg-surface/90 px-3 py-1 font-label-caps text-[10px] uppercase tracking-[0.15em] text-primary">${product.badge}</span>` : ''}
      <button type="button" data-add-to-cart="${product.id}" class="absolute left-3 right-3 bottom-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 bg-primary text-on-primary px-4 py-3 font-label-caps text-label-caps uppercase transition-all duration-300">Quick Add</button>
    </div>
    <p class="font-label-caps text-label-caps text-on-surface-variant uppercase">${product.category}</p>
    <h4 class="font-body-lg text-body-lg text-primary mt-1">${product.name}</h4>
    <p class="font-body-md text-body-md text-on-surface-variant mt-1">${formatPrice(product.price)}</p>
  </article>`;
}

export function productControls(categories: string[]): string {
  return `
<div class="mb-stack-lg grid grid-cols-1 md:grid-cols-12 gap-gutter-mobile items-end">
  <label class="md:col-span-6 block">
    <span class="font-label-caps text-label-caps text-on-surface-variant uppercase">Search</span>
    <input data-product-search class="mt-2 w-full bg-transparent border-b border-primary py-3 px-0 focus:outline-none font-body-md text-body-md" placeholder="Search collection" />
  </label>
  <label class="md:col-span-3 block">
    <span class="font-label-caps text-label-caps text-on-surface-variant uppercase">Category</span>
    <select data-product-category class="mt-2 w-full bg-transparent border-b border-primary py-3 px-0 focus:outline-none font-body-md text-body-md">
      <option value="all">All</option>
      ${categories.map((category) => `<option value="${category}">${category}</option>`).join('')}
    </select>
  </label>
  <label class="md:col-span-3 block">
    <span class="font-label-caps text-label-caps text-on-surface-variant uppercase">Sort</span>
    <select data-product-sort class="mt-2 w-full bg-transparent border-b border-primary py-3 px-0 focus:outline-none font-body-md text-body-md">
      <option value="featured">Featured</option>
      <option value="price-asc">Price Low</option>
      <option value="price-desc">Price High</option>
      <option value="name">Name</option>
    </select>
  </label>
</div>`;
}

export function setupStorefront(): void {
  document.querySelectorAll<HTMLElement>('[data-cart-open]').forEach((button) => button.addEventListener('click', openCart));
  document.querySelectorAll<HTMLElement>('[data-cart-close]').forEach((button) => button.addEventListener('click', closeCart));
  document.querySelector<HTMLElement>('[data-cart-overlay]')?.addEventListener('click', closeCart);

  document.querySelectorAll<HTMLElement>('[data-search-open]').forEach((button) => button.addEventListener('click', openSearch));
  document.querySelectorAll<HTMLElement>('[data-search-close]').forEach((button) => button.addEventListener('click', closeSearch));
  document.querySelector<HTMLElement>('[data-search-overlay]')?.addEventListener('click', closeSearch);

  document.addEventListener('click', handleStorefrontClick);
  document.querySelector<HTMLInputElement>('[data-global-search-input]')?.addEventListener('input', renderGlobalSearch);
  setupProductFilters();
  updateCartUI();
}

function handleStorefrontClick(event: MouseEvent): void {
  const target = event.target as HTMLElement | null;
  const addButton = target?.closest<HTMLElement>('[data-add-to-cart]');
  const removeButton = target?.closest<HTMLElement>('[data-remove-cart-item]');
  const qtyButton = target?.closest<HTMLElement>('[data-cart-qty]');
  const checkoutButton = target?.closest<HTMLElement>('[data-checkout]');

  if (addButton) {
    addToCart(addButton.dataset.addToCart ?? '');
  }
  if (removeButton) {
    removeFromCart(removeButton.dataset.removeCartItem ?? '');
  }
  if (qtyButton) {
    changeQuantity(qtyButton.dataset.cartQty ?? '', Number(qtyButton.dataset.cartDelta ?? 0));
  }
  if (checkoutButton) {
    saveCustomerSignal('checkout-started');
    alert('Checkout is ready for payment integration. Next step: connect Stripe, Shopify Storefront API, or a custom backend.');
  }
}

function addToCart(productId: string): void {
  if (!getProduct(productId)) return;
  const cart = readCart();
  const existing = cart.find((item) => item.productId === productId);
  if (existing) existing.quantity += 1;
  else cart.push({ productId, quantity: 1 });
  writeCart(cart);
  updateCartUI();
  showToast('Added to bag');
  openCart();
}

function removeFromCart(productId: string): void {
  writeCart(readCart().filter((item) => item.productId !== productId));
  updateCartUI();
}

function changeQuantity(productId: string, delta: number): void {
  const cart = readCart().map((item) => item.productId === productId ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item);
  writeCart(cart);
  updateCartUI();
}

function updateCartUI(): void {
  document.querySelectorAll<HTMLElement>('[data-cart-count], [data-cart-count-label]').forEach((element) => {
    const count = cartCount();
    element.textContent = count ? `(${count})` : '';
  });
  const subtotal = document.querySelector<HTMLElement>('[data-cart-subtotal]');
  if (subtotal) subtotal.textContent = formatPrice(cartSubtotal());
  const items = document.querySelector<HTMLElement>('[data-cart-items]');
  if (!items) return;
  const cartProducts = getCartProducts();
  items.innerHTML = cartProducts.length ? cartProducts.map(cartItem).join('') : emptyCart();
}

function cartItem(item: CartItem & { product: Product }): string {
  return `
  <div class="grid grid-cols-[88px_1fr] gap-4 border-b border-outline-variant/20 pb-5">
    <img src="${item.product.image}" alt="${item.product.name}" class="w-[88px] h-[112px] object-cover bg-surface-container" />
    <div>
      <div class="flex justify-between gap-3"><h4 class="font-body-lg text-body-lg text-primary">${item.product.name}</h4><button type="button" data-remove-cart-item="${item.product.id}" class="text-on-surface-variant hover:text-primary"><span class="material-symbols-outlined text-[18px]">close</span></button></div>
      <p class="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">${item.product.category}</p>
      <p class="font-body-md text-body-md text-primary mt-2">${formatPrice(item.product.price)}</p>
      <div class="inline-flex items-center border border-outline-variant/40 mt-3">
        <button type="button" data-cart-qty="${item.product.id}" data-cart-delta="-1" class="px-3 py-1">−</button>
        <span class="px-3 py-1 font-body-md text-body-md">${item.quantity}</span>
        <button type="button" data-cart-qty="${item.product.id}" data-cart-delta="1" class="px-3 py-1">+</button>
      </div>
    </div>
  </div>`;
}

function emptyCart(): string {
  return `<div class="h-full flex flex-col items-center justify-center text-center"><p class="font-headline-md text-headline-md text-primary">Your bag is empty.</p><p class="font-body-md text-body-md text-on-surface-variant mt-stack-sm">Add pieces from Collection or Salaula to begin.</p></div>`;
}

function openCart(): void {
  document.querySelector<HTMLElement>('[data-cart-drawer]')?.classList.remove('translate-x-full');
  document.querySelector<HTMLElement>('[data-cart-overlay]')?.classList.remove('opacity-0', 'pointer-events-none');
  document.body.classList.add('overflow-hidden');
}

function closeCart(): void {
  document.querySelector<HTMLElement>('[data-cart-drawer]')?.classList.add('translate-x-full');
  document.querySelector<HTMLElement>('[data-cart-overlay]')?.classList.add('opacity-0', 'pointer-events-none');
  document.body.classList.remove('overflow-hidden');
}

function openSearch(): void {
  document.querySelector<HTMLElement>('[data-search-panel]')?.classList.remove('translate-x-full');
  document.querySelector<HTMLElement>('[data-search-overlay]')?.classList.remove('opacity-0', 'pointer-events-none');
  document.body.classList.add('overflow-hidden');
  renderGlobalSearch();
  setTimeout(() => document.querySelector<HTMLInputElement>('[data-global-search-input]')?.focus(), 50);
}

function closeSearch(): void {
  document.querySelector<HTMLElement>('[data-search-panel]')?.classList.add('translate-x-full');
  document.querySelector<HTMLElement>('[data-search-overlay]')?.classList.add('opacity-0', 'pointer-events-none');
  document.body.classList.remove('overflow-hidden');
}

function renderGlobalSearch(): void {
  const input = document.querySelector<HTMLInputElement>('[data-global-search-input]');
  const results = document.querySelector<HTMLElement>('[data-global-search-results]');
  if (!results) return;
  const query = input?.value.toLowerCase().trim() ?? '';
  const matches = products.filter((product) => `${product.name} ${product.category} ${product.type}`.toLowerCase().includes(query)).slice(0, 12);
  results.innerHTML = matches.map((product) => `
    <article>
      <div class="aspect-[3/4] bg-surface-container overflow-hidden mb-3"><img class="w-full h-full object-cover" src="${product.image}" alt="${product.name}" /></div>
      <p class="font-label-caps text-label-caps text-on-surface-variant uppercase">${product.category}</p>
      <h4 class="font-body-md text-body-md text-primary mt-1">${product.name}</h4>
      <button type="button" data-add-to-cart="${product.id}" class="mt-2 font-label-caps text-label-caps border-b border-primary uppercase">Add</button>
    </article>`).join('');
}

function setupProductFilters(): void {
  const search = document.querySelector<HTMLInputElement>('[data-product-search]');
  const category = document.querySelector<HTMLSelectElement>('[data-product-category]');
  const sort = document.querySelector<HTMLSelectElement>('[data-product-sort]');
  const grid = document.querySelector<HTMLElement>('[data-product-grid]');
  if (!grid) return;
  const original = Array.from(grid.children) as HTMLElement[];

  const apply = () => {
    const query = search?.value.toLowerCase().trim() ?? '';
    const selectedCategory = category?.value ?? 'all';
    const sorted = [...original].sort((a, b) => {
      const idA = a.querySelector<HTMLElement>('[data-add-to-cart]')?.dataset.addToCart ?? '';
      const idB = b.querySelector<HTMLElement>('[data-add-to-cart]')?.dataset.addToCart ?? '';
      const productA = getProduct(idA);
      const productB = getProduct(idB);
      if (!productA || !productB) return 0;
      if (sort?.value === 'price-asc') return productA.price - productB.price;
      if (sort?.value === 'price-desc') return productB.price - productA.price;
      if (sort?.value === 'name') return productA.name.localeCompare(productB.name);
      return 0;
    });
    grid.innerHTML = '';
    sorted.forEach((card) => {
      const name = card.dataset.productName ?? '';
      const cardCategory = card.dataset.productCategory ?? '';
      const visible = (!query || name.includes(query)) && (selectedCategory === 'all' || cardCategory === selectedCategory);
      card.classList.toggle('hidden', !visible);
      grid.appendChild(card);
    });
  };

  search?.addEventListener('input', apply);
  category?.addEventListener('change', apply);
  sort?.addEventListener('change', apply);
}

function showToast(message: string): void {
  const toast = document.querySelector<HTMLElement>('[data-toast]');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove('opacity-0', 'translate-y-[-16px]');
  setTimeout(() => toast.classList.add('opacity-0', 'translate-y-[-16px]'), 1800);
}

function saveCustomerSignal(signal: string): void {
  localStorage.setItem(CUSTOMER_KEY, JSON.stringify({ signal, at: new Date().toISOString() }));
}
