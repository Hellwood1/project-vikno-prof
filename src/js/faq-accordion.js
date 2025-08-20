import Accordion from 'accordion-js';

new Accordion('.faq-accordion-container', {
  duration: 600,         // час анімації (0.6s)
  showMultiple: false,   // відкривається тільки один
  elementClass: 'ac',    // клас акордеону
  triggerClass: 'faq-btn', // твоя кнопка-тригер
  panelClass: 'ac-panel',
  activeClass: 'is-active'
});