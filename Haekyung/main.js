new Swiper('.sec2 .swiper', {
  observe: true,
  observeParents: true,
  loop: false,
  slidesPerView: 3.2,
  spaceBetween: 15,

  navigation: {
    nextEl: '.sec2 .inner .swiper-button-next',
    prevEl: '.sec2 .inner .swiper-button-prev',
  },

  scrollbar: {
    el: '.sec2 .swiper-scrollbar',
  },
});

new Swiper('.sec5 .swiper', {
  observe: true,
  observeParents: true,
  loop: false,
  slidesPerView: 3.2,
  spaceBetween: 42,

  navigation: {
    nextEl: '.sec5 .swiper-button-next',
    prevEl: '.sec5 .swiper-button-prev',
  },

  scrollbar: {
    el: '.sec5 .inner .swiper .swiper-scrollbar',
  },
});

new Swiper('.sec6 .inner .swiper', {
  observe: true,
  observeParents: true,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,

  navigation: {
    nextEl: '.sec6 .swiper-button-next',
    prevEl: '.sec6 .swiper-button-prev',
  },

  scrollbar: {
    el: '.sec6 .inner .swiper .swiper-scrollbar',
  },
});
