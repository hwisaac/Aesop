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
    dragSize: 300,
    snapOnRelease: true,
  },

  // 반응형 : width값으로 조정(해당값 이상 일때)
  /* breakpoints: {
    768: {
      slidesPerView: 1,
    },
  }, */
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
    dragSize: 900,
    snapOnRelease: true,
  },
});

new Swiper(".section5 .swiper", {
  // Optional parameters
  autoplay: true,
  rewind: true,

  // Navigation arrows
  navigation: {
    nextEl: ".section5 .swiper-button-next",
    prevEl: ".section5 .swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".section5 .swiper-scrollbar",
    draggable: false,
    dragSize: 330,
    snapOnRelease: true,
  },
});

/* MODAL */
const modalBtn = document.querySelector(".head-top-wrap");
const modalBg = document.querySelector(".modal-bg");
const modalArea = document.querySelector(".modal-wrap");
const modalCloseBtn = document.querySelector(".modal-close");
const body = document.querySelector("body");

modalBtn.addEventListener("click", () => {
  modalBg.style.opacity = 1;
  modalBg.style.zIndex = 1000;
  modalBg.style.transition = 1 + "s";
  modalArea.style.left = 0;
  modalArea.style.zIndex = 1001;
  modalArea.style.transition = 1 + "s";
});
modalCloseBtn.addEventListener("click", () => {
  modalBg.style.opacity = 0;
  modalBg.style.zIndex = -10;
  modalArea.style.left = -50 + "vw";
});
body.addEventListener("click", (e) => {
  const selected = e.target;
  let state = window.getComputedStyle(selected).display;
  if (state === "block" && !selected.closest(".modal-wrap")) {
    modalBg.style.opacity = 0;
    modalBg.style.zIndex = -10;
    modalArea.style.left = -50 + "vw";
  }
});
