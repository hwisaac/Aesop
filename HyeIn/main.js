new Swiper(".section1 .swiper", {
  // Optional parameters
  slidesPerView: 4,
  /* spaceBetween: 50, */ // 슬라이드 사이 여백

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: false,
  },
});
