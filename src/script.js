const modalOverlay = document.getElementById('modal-overlay');
const modalOpen = document.getElementById('open-modal');
const modalClose = document.querySelector('.modal-close-button');
const modalAcceptBtn = document.querySelector('.modal-accept-button');

modalOpen.addEventListener('click', (event) => {
    modalOverlay.style.display = 'block';
});

modalClose.addEventListener('click', (event) => {
    modalOverlay.style.display = 'none';
  });

modalAcceptBtn.addEventListener('click', (event) => {
     modalOverlay.style.display = 'none';
});