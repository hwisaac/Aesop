/* GNB */
const header = document.querySelector(".head-bottom");
/* const gnbWrapLi = document.querySelectorAll(".head-gnb-wrap li"); */
const gnbDepth = document.querySelector(".gnb-main");
const gnbDepthAll = document.querySelectorAll(".gnb-main div");
const main = document.querySelector("main");

const gnbSkin = document.querySelector(".head-skin");
const gnbSkinCont = document.querySelector(".gnb-main-area.skin");
const gnbBody = document.querySelector(".head-body");
const gnbBodyCont = document.querySelector(".gnb-main-area.body");
const gnbHair = document.querySelector(".head-hair");
const gnbHairCont = document.querySelector(".gnb-main-area.hair");
const gnbPerfume = document.querySelector(".head-perfume");
const gnbPerfumeCont = document.querySelector(".gnb-main-area.perfume");
const gnbHome = document.querySelector(".head-home");
const gnbHomeCont = document.querySelector(".gnb-main-area.home");
const gnbKit = document.querySelector(".head-kit");
const gnbKitCont = document.querySelector(".gnb-main-area.kit");
const gnbGift = document.querySelector(".head-gift");
const gnbGiftCont = document.querySelector(".gnb-main-area.gift");
const gnbRead = document.querySelector(".head-read");
const gnbReadCont = document.querySelector(".gnb-main-area.read");
const gnbStore = document.querySelector(".head-store");
const gnbStoreCont = document.querySelector(".gnb-main-area.store");
const gnbSearch = document.querySelector(".head-search");
const gnbSearchCont = document.querySelector(".gnb-main-area.search");
const gnbCloseBtn = document.querySelector(".head-close-btn");

gnbSkin.addEventListener("click", (e) => {
  body.style.overflow = "hidden";

  gnbDepthAll.forEach((each) => {
    each.classList.remove("up");
  });
  if (e.target == gnbSkin) {
    header.classList.add("fixed");
    gnbDepth.classList.add("open");
    gnbSkinCont.classList.add("up");
  } else {
    header.classList.remove("fixed");
    gnbDepth.classList.remove("open");
  }
});
gnbBody.addEventListener("click", (e) => {
  gnbDepthAll.forEach((each) => {
    each.classList.remove("up");
  });
  if (e.target == gnbBody) {
    header.classList.add("fixed");
    gnbDepth.classList.add("open");
    gnbBodyCont.classList.add("up");
  } else {
    header.classList.remove("fixed");
    gnbDepth.classList.remove("open");
  }
});
gnbHair.addEventListener("click", (e) => {
  gnbDepthAll.forEach((each) => {
    each.classList.remove("up");
  });
  if (e.target == gnbHair) {
    header.classList.add("fixed");
    gnbDepth.classList.add("open");
    gnbHairCont.classList.add("up");
  } else {
    header.classList.remove("fixed");
    gnbDepth.classList.remove("open");
  }
});
gnbPerfume.addEventListener("click", (e) => {
  gnbDepthAll.forEach((each) => {
    each.classList.remove("up");
  });
  if (e.target == gnbPerfume) {
    header.classList.add("fixed");
    gnbDepth.classList.add("open");
    gnbPerfumeCont.classList.add("up");
  } else {
    header.classList.remove("fixed");
    gnbDepth.classList.remove("open");
  }
});
gnbHome.addEventListener("click", (e) => {
  gnbDepthAll.forEach((each) => {
    each.classList.remove("up");
  });
  if (e.target == gnbHome) {
    header.classList.add("fixed");
    gnbDepth.classList.add("open");
    gnbPerfumeCont.classList.add("up");
  } else {
    header.classList.remove("fixed");
    gnbDepth.classList.remove("open");
  }
});
gnbKit.addEventListener("click", (e) => {
  gnbDepthAll.forEach((each) => {
    each.classList.remove("up");
  });
  if (e.target == gnbKit) {
    header.classList.add("fixed");
    gnbDepth.classList.add("open");
    gnbKitCont.classList.add("up");
  } else {
    header.classList.remove("fixed");
    gnbDepth.classList.remove("open");
  }
});
gnbGift.addEventListener("click", (e) => {
  gnbDepthAll.forEach((each) => {
    each.classList.remove("up");
  });
  if (e.target == gnbGift) {
    header.classList.add("fixed");
    gnbDepth.classList.add("open");
    gnbGiftCont.classList.add("up");
  } else {
    header.classList.remove("fixed");
    gnbDepth.classList.remove("open");
  }
});
gnbRead.addEventListener("click", (e) => {
  gnbDepthAll.forEach((each) => {
    each.classList.remove("up");
  });
  if (e.target == gnbRead) {
    header.classList.add("fixed");
    gnbDepth.classList.add("open");
    gnbReadCont.classList.add("up");
  } else {
    header.classList.remove("fixed");
    gnbDepth.classList.remove("open");
  }
});
gnbStore.addEventListener("click", (e) => {
  gnbDepthAll.forEach((each) => {
    each.classList.remove("up");
  });
  if (e.target == gnbStore) {
    header.classList.add("fixed");
    gnbDepth.classList.add("open");
    gnbStoreCont.classList.add("up");
  } else {
    header.classList.remove("fixed");
    gnbDepth.classList.remove("open");
  }
});
gnbSearch.addEventListener("click", (e) => {
  gnbDepthAll.forEach((each) => {
    each.classList.remove("up");
  });
  if (e.target == gnbSearch) {
    header.classList.add("fixed");
    gnbDepth.classList.add("open");
    gnbSearchCont.classList.add("up");
  } else {
    header.classList.remove("fixed");
    gnbDepth.classList.remove("open");
  }
});

gnbCloseBtn.addEventListener("click", (e) => {
  header.classList.remove("fixed");
  gnbDepth.classList.remove("open");
});

/* HEADER-SCROLL */
let lastScrollY = 0;

addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  if (scrollY < lastScrollY && scrollY > 40) {
    lastScrollY = scrollY;
    console.log("스크롤업");
    header.classList.add("fixed");
  } else {
    lastScrollY = scrollY;
    console.log("스크롤다운");
    header.classList.remove("fixed");
  }
  console.log(lastScrollY);
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
  body.style.overflow = "hidden";
});
modalCloseBtn.addEventListener("click", () => {
  modalBg.style.opacity = 0;
  modalBg.style.zIndex = -10;
  modalArea.style.left = -50 + "vw";
  body.style.overflow = "visible";
});
body.addEventListener("click", (e) => {
  const selected = e.target;
  let state = window.getComputedStyle(selected).display;
  if (state === "block" && !selected.closest(".modal-wrap")) {
    modalBg.style.opacity = 0;
    modalBg.style.zIndex = -10;
    modalArea.style.left = -50 + "vw";
    body.style.overflow = "visible";
  }
});

/* SWIPER */
new Swiper(".section1 .swiper", {
  slidesPerView: 4.2,

  navigation: {
    nextEl: ".section1 .swiper-button-next",
    prevEl: ".section1 .swiper-button-prev",
  },

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
  slidesPerView: 4,

  navigation: {
    nextEl: ".section4 .swiper-button-next",
    prevEl: ".section4 .swiper-button-prev",
  },

  scrollbar: {
    el: ".section4 .swiper-scrollbar",
    draggable: false,
    dragSize: 900,
    snapOnRelease: true,
  },
});

new Swiper(".section5 .swiper", {
  autoplay: true,
  rewind: true,

  navigation: {
    nextEl: ".section5 .swiper-button-next",
    prevEl: ".section5 .swiper-button-prev",
  },

  scrollbar: {
    el: ".section5 .swiper-scrollbar",
    draggable: false,
    dragSize: 330,
    snapOnRelease: true,
  },
});
