// HEADER-MODAL
const hBtn = document.querySelector('.h-btn');
const hModalCloseBtn = document.querySelector('ul.menu li:last-child');
const modalOpenHeader = document.querySelector('.header');
const hModal = document.querySelector('.header-modal');

function openSetting(name) {
  document.querySelector('.shipping-banner').style.display = 'none';
  document.querySelector('body').style.overflow = 'hidden';
  hModal.classList.add('open');
  name.classList.add('open');
  hModalCloseBtn.classList.add('open');
  modalOpenHeader.classList.add('white-version');
}

const hBtn1 = document.querySelector('.h-btn.skincare');
const hBtn2 = document.querySelector('.h-btn.body');
const hBtn3 = document.querySelector('.h-btn.hair');
const hBtn4 = document.querySelector('.h-btn.perfume');
const hBtn5 = document.querySelector('.h-btn.home');
const hBtn6 = document.querySelector('.h-btn.kit');
const hBtn7 = document.querySelector('.h-btn.gift');
const hBtn8 = document.querySelector('.h-btn.read');

const hModalSkin = document.querySelector('#modal-skincare');
const hModalBody = document.querySelector('#modal-body');
const hModalHair = document.querySelector('#modal-hair');
const hModalPerfume = document.querySelector('#modal-perfume');
const hModalHome = document.querySelector('#modal-home');
const hModalKit = document.querySelector('#modal-kit');
const hModalGift = document.querySelector('#modal-gift');
const hModalRead = document.querySelector('#modal-read');

const arr = [];
for (i = 1; i < 9; i++) {
  arr.push.hBtn[i];
}

console.log(arr);
// switch ()
