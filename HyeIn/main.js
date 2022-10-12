new Swiper(".section1 .swiper", {
  // Optional parameters
  slidesPerView: 4.2,

  // Navigation arrows
  navigation: {
    nextEl: ".section1 .swiper-button-next",
    prevEl: ".section1 .swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".section1 .swiper-scrollbar",
    draggable: false,
    dragSize: 200,
    snapOnRelease: true,
  },
});

new Swiper(".section4 .swiper", {
  // Optional parameters
  slidesPerView: 4,

  // Navigation arrows
  navigation: {
    nextEl: ".section4 .swiper-button-next",
    prevEl: ".section4 .swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".section4 .swiper-scrollbar",
    draggable: false,
    dragSize: 200,
    snapOnRelease: true,
  },
});

new Swiper(".section5 .swiper", {
  // Optional parameters
  autoplay: true,

  // Navigation arrows
  navigation: {
    nextEl: ".section5 .swiper-button-next",
    prevEl: ".section5 .swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".section5 .swiper-scrollbar",
    draggable: false,
    dragSize: 200,
    snapOnRelease: true,
  },
});
