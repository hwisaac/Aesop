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
new Swiper('.locater .swiper', {
  loop: true,
  autoplay: true,
  slidesPerView: 1,
  speed: 700,
  pagination: {
    el: '.locater .swiper-pagination',
    type: "progressbar",
  },
  navigation: {
    nextEl: '.locater .swiper-button-next',
    prevEl: '.locater .swiper-button-prev',
  },
  on: {
    init: function() {
      console.log('dd')
    }
  }
});

const storeLocate = document.querySelectorAll('.store-locate li');