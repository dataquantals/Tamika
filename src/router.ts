import { appointmentPage } from './pages/appointment';
import { collectionPage } from './pages/collection';
import { homePage, setupHomePageInteractions } from './pages/home';
import { kidsPage } from './pages/kids';
import { journalPage } from './pages/journal';
import { lookbookPage } from './pages/lookbook';
import { salaulaPage } from './pages/salaula';
import { servicesPage } from './pages/services';
import { setupSideNavigation } from './pages/shared';
import { setupStorefront, storefrontShell } from './storefront';
import { setupWeddingPageInteractions, weddingPage } from './pages/wedding';

type Route = {
  title: string;
  render: () => string;
  afterRender?: () => void;
};

const routes: Record<string, Route> = {
  '/': {
    title: 'TÀMIKA',
    render: homePage,
    afterRender: setupHomePageInteractions,
  },
  '/collection': {
    title: 'Collection | TÀMIKA',
    render: collectionPage,
  },
  '/kids': {
    title: 'Kids Clothing | TÀMIKA',
    render: kidsPage,
  },
  '/salaula': {
    title: 'Salaula | TÀMIKA',
    render: salaulaPage,
  },
  '/wedding': {
    title: 'Wedding | TÀMIKA',
    render: weddingPage,
    afterRender: setupWeddingPageInteractions,
  },
  '/wedding/bride': {
    title: 'Wedding — Bride | TÀMIKA',
    render: weddingPage,
    afterRender: setupWeddingPageInteractions,
  },
  '/wedding/groom': {
    title: 'Wedding — Groom | TÀMIKA',
    render: weddingPage,
    afterRender: setupWeddingPageInteractions,
  },
  '/wedding/party': {
    title: 'Wedding — Bridesmaids / Groomsmen | TÀMIKA',
    render: weddingPage,
    afterRender: setupWeddingPageInteractions,
  },
  '/wedding/kids': {
    title: 'Wedding — Kids | TÀMIKA',
    render: weddingPage,
    afterRender: setupWeddingPageInteractions,
  },
  '/lookbook': {
    title: 'Lookbook | TÀMIKA',
    render: lookbookPage,
  },
  '/services': {
    title: 'Services | TÀMIKA',
    render: servicesPage,
  },
  '/journal': {
    title: 'Journal | TÀMIKA',
    render: journalPage,
  },
  '/appointment': {
    title: 'Private Viewing | TÀMIKA',
    render: appointmentPage,
  },
};

export function initRouter(): void {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement | null;
    const anchor = target?.closest<HTMLAnchorElement>('a[data-link]');

    if (!anchor) return;

    const url = new URL(anchor.href);

    if (url.origin !== window.location.origin) return;

    event.preventDefault();
    navigateTo(url.pathname);
  });

  window.addEventListener('popstate', renderCurrentRoute);
  renderCurrentRoute();
}

export function navigateTo(pathname: string): void {
  if (window.location.pathname === pathname) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  window.history.pushState({}, '', pathname);
  renderCurrentRoute();
}

function renderCurrentRoute(): void {
  const app = document.querySelector<HTMLDivElement>('#app');

  if (!app) {
    throw new Error('App root element was not found.');
  }

  const route = routes[window.location.pathname] ?? routes['/'];
  document.title = route.title;
  app.innerHTML = route.render() + storefrontShell();
  window.scrollTo({ top: 0 });
  setupSideNavigation();
  setupStorefront();
  route.afterRender?.();
}
