const div = document.querySelector('[data-cor]');

div.dataset.heigth = 1000;

delete div.dataset.width;

div.dataset.totalHeight = 2000;

console.log(div.dataset.cor)
