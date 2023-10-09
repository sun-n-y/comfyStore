import { getElement } from './utils.js';

const sidebarBtn = getElement('.sidebar-toggle');
const sidebarCloseBtn = getElement('.sidebar-close-btn');
const sidebarOverlay = getElement('.sidebar');

sidebarBtn.addEventListener('click', function () {
  sidebarOverlay.classList.add('show-sidebar');
});

sidebarCloseBtn.addEventListener('click', function () {
  sidebarOverlay.classList.remove('show-sidebar');
});
