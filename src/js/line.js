const marqueeLine = document.querySelector('.marquee-line');
const span = marqueeLine.querySelector('span');
const targetWidth = 4079;

const textWidth = span.offsetWidth + 36;
const repeatCount = Math.ceil(targetWidth / textWidth);

let html = '';
for (let i = 0; i < repeatCount; i++) {
  html += `<span>${span.textContent}</span>`;
}
marqueeLine.innerHTML = html;

let pos = 0;

function animateLine() {
  pos -= 1;
  if (pos <= -textWidth) pos = 0;
  marqueeLine.style.transform = `translateX(${pos}px)`;
  requestAnimationFrame(animateLine);
}

animateLine();