// HEADER-MODAL
const hBtn = document.querySelector('.h-btn:first-child');
const hModal = document.getElementById('modal-skincare');

hBtn.addEventListener('click', function () {
  hModal.classList.add('modal-skincare-open');
});
