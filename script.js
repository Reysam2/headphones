 document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('#menu-btn');
  const closeBtn = document.querySelector('#close-btn');
  const ul = document.querySelector('#ul');

  // initial state
  closeBtn.style.visibility = 'hidden';
  ul.style.visibility = 'hidden';

  function menuButton() {
    menuBtn.style.visibility = 'hidden';
    ul.style.visibility = 'visible';
    closeBtn.style.visibility = 'visible';
  }

  function closeButton() {
    closeBtn.style.visibility = 'hidden';
    ul.style.visibility = 'hidden';
    menuBtn.style.visibility = 'visible';
  }

  menuBtn.addEventListener('click', menuButton);
  closeBtn.addEventListener('click', closeButton);
});