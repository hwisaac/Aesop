// HEADER-MODAL
const hBtn = document.querySelector('.h-btn');
const hModalCloseBtn = document.querySelector('ul.menu li:last-child');
const modalOpenHeader = document.querySelector('.header');
const hModal = document.querySelector('.header-modal');

hBtn.addEventListener('click', function () {
  document.querySelector('.shipping-banner').style.display = 'none';
  document.querySelector('body').style.overflow = 'hidden';
  hModal.classList.add('open');
  hModalCloseBtn.classList.add('open');
  modalOpenHeader.classList.add('white-version');
});

hModalCloseBtn.addEventListener('click', function () {
  document.querySelector('.shipping-banner').style.display = 'block';
  document.querySelector('body').style.overflow = 'scroll';
  hModal.classList.remove('open');
  hModal;
  hModalCloseBtn.classList.remove('open');
  modalOpenHeader.classList.remove('white-version');
});

// hBtn2.addEventListener('click', function () {
//   document.querySelector('.shipping-banner').style.display = 'none';
//   // document.querySelector('body').style.overflow = 'hidden';
//   hModal.classList.add('header-modal-open');
//   hModalSkin.classList.add('modal-body-open');
//   hModalCloseBtn.classList.add('close-btn-on');
//   modalOpenHeader.classList.add('white-version');
// });

const hBtn1 = document.querySelector('.h-btn.skincare');
const hBtn2 = document.querySelector('.h-btn.body');
const hModalSkin = document.querySelector('#modal-skincare');
const hModalBody = document.querySelector('#modal-body');

hBtn1.addEventListener('click', function () {
  hModalSkin.classList.add('open');
});
hBtn2.addEventListener('click', function () {
  hModalSkin.classList.remove('open');
  hModalBody.classList.add('open');
});
// const arr = [hModalSkin, hModalBody];
// for (i = 0; i < arr.length; i++) {
//   if (arr[i].classList.contains('open')) {
//     arr[i].classList.remove('open');
//   }
// }
