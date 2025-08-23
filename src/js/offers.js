document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.offers-nav-btns button');
  const cardsBlocks = document.querySelectorAll('.offers-cards');

  function showCards(targetClass) {
    cardsBlocks.forEach(block => {
      block.classList.remove('active');
      block.style.display = 'none';
    });

    const target = document.querySelector(`.${targetClass}`);
    target.style.display = 'flex';

    setTimeout(() => target.classList.add('active'), 10);

    buttons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.${targetClass.split('-')[0]}-btn`).classList.add('active');
  }

  showCards('diagnostics-cards');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.classList.contains('diagnostics-btn')) {
        showCards('diagnostics-cards');
      } else if (button.classList.contains('repair-btn')) {
        showCards('repair-cards');
      } else if (button.classList.contains('replacement-btn')) {
        showCards('replacement-cards');
      }
    });
  });
});