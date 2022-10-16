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
