// new Swiper('선택자', 옵션);
new Swiper('#perfume-section .swiper', {
  // autoplay: true,
  slidesPerView: 3,
  spaceBetween: 20,
  scrollbar: {
    el: '#perfume-section .swiper-scrollbar',
    dragSize: 200,
    snapOnRelease: true,
  },
  navigation: {
    prevEl: '#perfume-section .swiper-button-prev',
    nextEl: '#perfume-section .swiper-button-next',
  },
});

new Swiper('#selection-section .swiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  scrollbar: {
    el: '#selection-section .swiper-scrollbar',
    dragSize: 883,
    snapOnRelease: true,
  },
  navigation: {
    prevEl: '#selection-section .swiper-button-prev',
    nextEl: '#selection-section .swiper-button-next',
  },
});

const paginationEl = document.querySelector('#store-section .swiper-pagination');
new Swiper('#store-section .swiper', {
  // loop: true,
  rewind: true,
  autoplay: {
    delay: 3000,
    // disableOnInteraction: false,
  },
  slidesPerView: 1,
  scrollbar: {
    el: '#store-section .swiper-scrollbar',
    dragSize: 370,
    // snapOnRelease: true,
  },
  pagination: {
    el: '#store-section .swiper-pagination',
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      let text;
      // current : 슬라이드 순서
      switch (current) {
        case 1:
          text = '이솝 파르나스';
          break;
        case 2:
          text = '이솝 성수';
          break;
        case 3:
          text = '이솝 한남';
          break;
        default:
          text = 'None';
          break;
      }
      // gsap.to(요소, 지속시간, 옵션);
      gsap.to(paginationEl, 0.1, {
        opacity: 0,
      });
      setTimeout(() => {
        paginationEl.textContent = text;
        gsap.to(paginationEl, 0.1, {
          opacity: 1,
        });
      }, 300);
    },
  },
  navigation: {
    prevEl: '#store-section .swiper-button-prev',
    nextEl: '#store-section .swiper-button-next',
  },
});

//  Header
const headerEl = document.querySelector('.header');

// Press the Header button to open a modal window
const body = document.querySelector('body');
const headerBtn = document.querySelector('.header .header-btn');
const modal = document.querySelector('.header .modal');

const openModal = () => {
  modal.classList.toggle('open');
  if (modal.classList.contains('open')) {
    body.style.overflow = 'hidden';
  }
};

headerBtn.addEventListener('click', openModal);

// Close the modal window by pressing the Modal button
const overlay = document.querySelector('.modal .modal__overlay');
const modalBtn = document.querySelector('.modal .modal-btn');

const closeModal = () => {
  modal.classList.remove('open');
  if (!modal.classList.contains('open')) {
    body.style.overflow = 'scroll';
  }
};

overlay.addEventListener('click', closeModal);
modalBtn.addEventListener('click', closeModal);

// Press the GNB to open a modal window
const gnbItems = document.querySelectorAll('.gnb .gnb-item');
const gnb = document.querySelector('.gnb');
const gnbBox = document.querySelector('.gnb .gnb-box');
const gnbItem = gnb.querySelector('.gnb-item');
const closeBtn = gnb.querySelector('.gnb-item.close');

const gnbModals = document.querySelectorAll('.gnb-item .gnb-modal');
const gnbModal = document.querySelector('.gnb-item .gnb-modal');
const header = document.querySelector('.header');

const openGnbModal = () => {
  gnbModal.classList.add('open');
  closeBtn.classList.remove('hidden');
  if (gnbModal.classList.contains('open')) {
    body.style.overflow = 'hidden';
    headerEl.classList.add('hidden');
    gnbBox.classList.add('open');
  }
};

gnbItem.addEventListener('click', openGnbModal);

// gnbItems.forEach((gnbItem, gindex) => {
//   gnbModals.forEach((gnbModal, mindex) => {
//     if (gindex === mindex) {
//       gnbItem.addEventListener('click', openGnbModal);
//     }
//   });
// });

const closeGnbModal = () => {
  closeBtn.classList.add('hidden');
  if (closeBtn.classList.contains('hidden')) {
    gnbModal.classList.remove('open');
    body.style.overflow = 'scroll';
    headerEl.classList.remove('hidden');
  }
};
closeBtn.addEventListener('click', closeGnbModal);

// Press the GNB to close a modal window
