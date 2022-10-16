// HEADER-MODAL
// const hBtn = document.querySelector('.h-btn');
const hBtn1 = document.querySelector('.h-btn.skincare');
const hBtn2 = document.querySelector('.h-btn.body');
const hBtn3 = document.querySelector('.h-btn.hair');
const hBtn4 = document.querySelector('.h-btn.perfume');
const hBtn5 = document.querySelector('.h-btn.home');
const hBtn6 = document.querySelector('.h-btn.kit');
const hBtn7 = document.querySelector('.h-btn.gift');
const hBtn8 = document.querySelector('.h-btn.read');

const hModalCloseBtn = document.querySelector('.h-btn.h-close');
const modalOpenHeader = document.querySelector('.header');

const hModal = document.querySelector('.header-modal');
const hModalMenu = document.querySelector('.header-modal-menu');
const hModalSkin = document.querySelector('#modal-skincare');
const hModalBody = document.querySelector('#modal-body');
const hModalHair = document.querySelector('#modal-hair');
const hModalPerfume = document.querySelector('#modal-perfume');
const hModalHome = document.querySelector('#modal-home');
const hModalKit = document.querySelector('#modal-kit');
const hModalGift = document.querySelector('#modal-gift');
const hModalRead = document.querySelector('#modal-read');

// const remove = hModalMenu.forEach((elem) => {
//   elem.classList.remove('open');
// });
const removeOpens = function (except) {
  var opens = document.querySelectorAll('.open');
  [].forEach.call(opens, function (open) {
    open.classList.remove('open');
  });
  except.classList.add('open');
};

hBtn1.addEventListener('click', function () {
  document.querySelector('.shipping-banner').style.display = 'none';
  document.querySelector('body').style.overflow = 'hidden';
  hModal.classList.add('on');
  removeOpens(hModalSkin);
  hModalCloseBtn.classList.add('open');
  modalOpenHeader.classList.add('white-version');
});
hBtn2.addEventListener('click', function () {
  document.querySelector('.shipping-banner').style.display = 'none';
  document.querySelector('body').style.overflow = 'hidden';
  hModal.classList.add('on');
  removeOpens(hModalBody);
  hModalCloseBtn.classList.add('open');
  modalOpenHeader.classList.add('white-version');
});
hBtn3.addEventListener('click', function () {
  document.querySelector('.shipping-banner').style.display = 'none';
  document.querySelector('body').style.overflow = 'hidden';
  hModal.classList.add('on');
  removeOpens(hModalHair);
  hModalCloseBtn.classList.add('open');
  modalOpenHeader.classList.add('white-version');
});
hBtn4.addEventListener('click', function () {
  document.querySelector('.shipping-banner').style.display = 'none';
  document.querySelector('body').style.overflow = 'hidden';
  hModal.classList.add('on');
  removeOpens(hModalPerfume);
  hModalCloseBtn.classList.add('open');
  modalOpenHeader.classList.add('white-version');
});
hBtn5.addEventListener('click', function () {
  document.querySelector('.shipping-banner').style.display = 'none';
  document.querySelector('body').style.overflow = 'hidden';
  hModal.classList.add('on');
  removeOpens(hModalHome);
  hModalCloseBtn.classList.add('open');
  modalOpenHeader.classList.add('white-version');
});
hBtn6.addEventListener('click', function () {
  document.querySelector('.shipping-banner').style.display = 'none';
  document.querySelector('body').style.overflow = 'hidden';
  hModal.classList.add('on');
  removeOpens(hModalKit);
  hModalCloseBtn.classList.add('open');
  modalOpenHeader.classList.add('white-version');
});
hBtn7.addEventListener('click', function () {
  document.querySelector('.shipping-banner').style.display = 'none';
  document.querySelector('body').style.overflow = 'hidden';
  hModal.classList.add('on');
  removeOpens(hModalGift);
  hModalCloseBtn.classList.add('open');
  modalOpenHeader.classList.add('white-version');
});
hBtn8.addEventListener('click', function () {
  document.querySelector('.shipping-banner').style.display = 'none';
  document.querySelector('body').style.overflow = 'hidden';
  hModal.classList.add('on');
  removeOpens(hModalRead);
  hModalCloseBtn.classList.add('open');
  modalOpenHeader.classList.add('white-version');
});

// function openSetting(menu) {
//   document.querySelector('.shipping-banner').style.display = 'none';
//   document.querySelector('body').style.overflow = 'hidden';
//   hModal.classList.add('on');
//   removeOpens(menu);
//   hModalCloseBtn.classList.add('open');
//   modalOpenHeader.classList.add('white-version');
// }

// hBtn1.addEventListener('click', openSetting(hModalSkin));
// hBtn2.addEventListener('click', openSetting(hModalBody));
// hBtn3.addEventListener('click', openSetting(hModalHair));
// hBtn4.addEventListener('click', openSetting(hModalPerfume));
// hBtn5.addEventListener('click', openSetting(hModalHome));
// hBtn6.addEventListener('click', openSetting(hModalKit));
// hBtn7.addEventListener('click', openSetting(hModalGift));
// hBtn8.addEventListener('click', openSetting(hModalRead));

hModalCloseBtn.addEventListener('click', function () {
  document.querySelector('.shipping-banner').style.display = 'block';
  document.querySelector('body').style.overflow = 'scroll';
  hModal.classList.remove('on');
  hModalMenu.classList.remove('open');
  hModalCloseBtn.classList.remove('open');
  modalOpenHeader.classList.remove('white-version');
});

// SCROLL - HEADER
// const prevScroll = window.scrollY;
// window.onscroll = function () {
//   const currentScroll = window.scrollY;
//   if (prevScroll > currentScroll) {
//     modalOpenHeader.classList.add('white-version');
//     document.querySelector('.header.white-version').style.top = '0';
//   } else {
//     modalOpenHeader.classList.remove('white-version');
//     document.getElementById('navbar').style.top = '-80px';
//   }
//   prevScroll = currentScroll;
// };

let before = [];

window.addEventListener('scroll', (ev) => {
  if (before.pop() < window.scrollY) console.log('Down Scroll');
  else console.log('Up Scroll');
  before.push(window.scrollY);
});
