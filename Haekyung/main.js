console.log('d');
new Swiper('.sec2 .swiper', {
  observe: true,
  observeParents: true,
  loop: false,
  slidesPerView: 4,
  // autoplay: true,
  spaceBetween: 20,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
