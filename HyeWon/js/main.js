// Perfume section Swiper
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

// Selection section Swiper
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

// Store section Swiper
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

//  Header (최상단 띠배너) 클릭시 Modal창 오픈
const body = document.querySelector('body');
const headerEl = document.querySelector('.header');
const headerBtn = document.querySelector('.header .header-btn');
const modal = document.querySelector('.header .modal');

const openModal = () => {
  modal.classList.toggle('open');
  if (modal.classList.contains('open')) {
    body.style.overflow = 'hidden';
  }
};

headerBtn.addEventListener('click', openModal);

// Modal button 및 Modal창 외부영역 클릭 시, modal창 닫힘
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

// GNB 각 카테고리 시, 해당 GNB modal창 오픈 및 Header(최상단 띠배너) 사라짐
// Modal elements
// const skinCareModalEl = document.querySelector('.gnb-item .skin-care-modal');
// const bodyHandModalEl = document.querySelector('.gnb-item .body-hand-modal');
// const hairModalEl = document.querySelector('.gnb-item .hair-modal');
// const perfumeModalEl = document.querySelector('.gnb-item .perfume-modal');
// const homeModalEl = document.querySelector('.gnb-item .home-modal');
// const kitModalEl = document.querySelector('.gnb-item .kit-modal');
// const giftModalEl = document.querySelector('.gnb-item .gift-modal');
// const readingModalEl = document.querySelector('.gnb-item .reading-modal');
// const storeModalEl = document.querySelector('.gnb-item .store-modal');
// const searchModalEl = document.querySelector('.gnb-item .search-modal');

// let gnbItemModals = [
//   skinCareModalEl,
//   bodyHandBtnEl,
//   hairBtnEl,
//   perfumeBtnEl,
//   homeBtnEl,
//   kitBtnEl,
//   giftBtnEl,
//   readingBtnEl,
//   storeBtnEl,
//   searchBtnEl,
// ];

const gnbItemEls = document.querySelectorAll('.gnb .gnb-item a');
const gnb = document.querySelector('.gnb');
const gnbContainer = document.querySelector('.gnb .gnb-container');
const gnbItem = gnb.querySelector('.gnb-item');
const closeBtn = gnb.querySelector('.gnb-item.close');

const gnbModals = document.querySelectorAll('.gnb-item .gnb-modal');
const gnbModal = document.querySelector('.gnb-item .gnb-modal');
const header = document.querySelector('.header');

// const openGnbModal = () => {
//   gnbModal.classList.add('open');
//   closeBtn.classList.remove('hidden');
//   if (gnbModal.classList.contains('open')) {
//     body.style.overflow = 'hidden';
//     headerEl.classList.add('hidden');
//     gnbBox.classList.add('open');
//   }
// };

// gnbItem.addEventListener('click', openGnbModal);

//forEach
gnbItemEls.forEach((gnbItemEl, gnbItemIndex) => {
  gnbItemEl.addEventListener('click', () => {
    const gnbItemNextSib = gnbItemEl.nextElementSibling;
    gnbItemNextSib.classList.toggle('open');
    closeBtn.classList.remove('hidden');
    headerEl.classList.add('hidden');
    body.style.overflow = 'hidden';
  });
});

// const gnbItemModals = [];
// gnbItemEls.forEach((gnbItemEl)=>{
//   gnbItemModals.push(gnbItemEl);
// })

// gnbContainer.addEventListener('click', openGnbModal);

// closeBtn.addEventListener('click', closeGnbModal);

// const closeGnbModal = () => {
//   closeBtn.classList.add('hidden');
//   if (closeBtn.classList.contains('hidden')) {
//     gnbModal.classList.remove('open');
//     body.style.overflow = 'scroll';
//     headerEl.classList.remove('hidden');
//   }
// };
// closeBtn.addEventListener('click', closeGnbModal);

// Press the GNB to close a modal window
