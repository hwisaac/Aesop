// SWIPER
// perfume
new Swiper('.perfume.swiper', {
  loop: false,
  slidesPerView: 4,
  spaceBetween: 50,
  speed: 700,
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    1080: {
      slidesPerView: 3
    },
    1500: {
      slidesPerView: 4
    },
  },
  scrollbar: {
    el: '.perfume .swiper-scrollbar',
    dragSize: 200,
  },
  navigation: {
    nextEl: '.perfume .swiper-button-next',
    prevEl: '.perfume .swiper-button-prev',
  },
});

// SWIPER
// locater
const timer = 700;

const locaterSwiper = new Swiper('.store.swiper', {
  loop: true,
  autoplay: true,
  slidesPerView: 1,
  speed: timer,
  slideToClickedSlide: true,
  rewind: true,
  pagination: {
    el: '.store .swiper-pagination',
    type: "progressbar",
  },
  scrollbar: {
    el: '.store .swiper-scrollbar',
    type: "progressbar",
  },
  navigation: {
    nextEl: '.store .swiper-button-next',
    prevEl: '.store .swiper-button-prev',
  },
});

document.querySelector('.store.swiper').addEventListener('mouseover', function() {
  locaterSwiper.autoplay.stop();
  locaterTxtSwiper.autoplay.stop();
})

document.querySelector('.store.swiper').addEventListener('mouseleave', function() {
  locaterSwiper.autoplay.start();
  locaterTxtSwiper.autoplay.start();
})

const locaterTxtSwiper = new Swiper('.store-locate.swiper', {
  loop: true,
  autoplay: true,
  speed: timer,
  effect: 'fade',
  navigation: {
    nextEl: '.store .swiper-button-next',
    prevEl: '.store .swiper-button-prev',
  },
});

const topBanner = document.querySelector('.shippingBanner-body a');
const panelBackground = document.querySelector('.panelBackground');
const topBannerPanel = document.querySelector('.shippingBanner-body__panel');
const topBannerClose = document.querySelector('.shippingBanner-body__panel .closeBtn')

topBanner.addEventListener('click', () => {
  panelBackground.classList.add('on');
  topBannerPanel.classList.add('on');
  document.querySelector('body').style.overflow = "hidden";
})

topBannerClose.addEventListener('click', () => {
  panelBackground.classList.remove('on');
  topBannerPanel.classList.remove('on');
  document.querySelector('body').style.overflow = "visible";
})

panelBackground.addEventListener('click', () => {
  panelBackground.classList.remove('on');
  topBannerPanel.classList.remove('on');
  document.querySelector('body').style.overflow = "visible";
})