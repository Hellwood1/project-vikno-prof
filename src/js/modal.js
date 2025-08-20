import { createFocusTrap } from 'focus-trap';

const refs = {
  openBtn: document.querySelector('.mobile-menu-open-btn'),
  closeBtn: document.querySelector('.mobile-menu-close-btn'),
  mobileMenu: document.querySelector('.mobile-menu-wrapper'),
};

let focusTrap = null;

function openMenu() {
  refs.mobileMenu?.classList.add('is-open');

  if (!focusTrap) {
    focusTrap = createFocusTrap(refs.mobileMenu, {
      escapeDeactivates: true,
      clickOutsideDeactivates: true,
      onActivate: () => {
        console.log('On');
      },
      onDeactivate: () => {
        console.log('Off');
      },
    });
  }

  focusTrap.activate();

  refs.mobileMenu?.addEventListener('click', handleMenuItemClick);
}

function closeMenu() {
  refs.mobileMenu?.classList.remove('is-open');
  focusTrap?.deactivate();

  refs.mobileMenu?.removeEventListener('click', handleMenuItemClick);
}

function handleMenuItemClick(event) {
  const clickedEl = event.target;

  if (
    clickedEl.tagName === 'A' ||
    clickedEl.tagName === 'BUTTON' ||
    clickedEl.closest('[data-close]')
  ) {
    closeMenu();
  }
}

refs.openBtn?.addEventListener('click', openMenu);
refs.closeBtn?.addEventListener('click', closeMenu);