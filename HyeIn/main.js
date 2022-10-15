/* GNB */
const header = document.querySelector(".head-bottom");
const gnbWrap = document.querySelector(".head-gnb-wrap");
const gnbDepth = document.querySelector(".gnb-main");
const main = document.querySelector("main");

gnbWrap.addEventListener("click", (e) => {
  gnbDepth.classList.add("open");

  header.style.zIndex = 100000000;
  header.style.position = "fixed";
  header.style.top = 0;

  body.style.overflowY = "hidden";

  let selectLi = e.target;
  console.log(selectLi);
  if (selectLi == document.querySelector(".head-skin")) {
    document.querySelector(".gnb-main-area.skin").style.zIndex = 10;
  } else {
    document.querySelector(".gnb-main-area.skin").style.zIndex = 0;
  }
  if (selectLi == document.querySelector(".head-body")) {
    document.querySelector(".gnb-main-area.body").style.zIndex = 10;
  } else {
    document.querySelector(".gnb-main-area.body").style.zIndex = 0;
  }
  if (selectLi == document.querySelector(".head-hair")) {
    document.querySelector(".gnb-main-area.hair").style.zIndex = 10;
  } else {
    document.querySelector(".gnb-main-area.hair").style.zIndex = 0;
  }
});

/* HEADER-SCROLL */
let lastScrollY = 0;

addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  if (scrollY < lastScrollY && scrollY > 40) {
    lastScrollY = scrollY;
    console.log("스크롤업");
    header.classList.add("scroll-up");
  } else {
    lastScrollY = scrollY;
    console.log("스크롤다운");
    header.classList.remove("scroll-up");
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

/* https://code-study.tistory.com/23
const gnb = document.querySelector(".head-bottom");
let lastScrollTop = 0;
let delta = 5;
let fixBox = document.querySelector(".bottomNav");
let gnbHeight = gnb.offsetHeight;
let didScroll;
console.log(gnbHeight); 
*/
/* setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var nowScrollTop = window.scrollY;
  if (Math.abs(lastScrollTop - nowScrollTop) <= delta) {
    return;
  }
  if (nowScrollTop > lastScrollTop && nowScrollTop > fixBoxHeight) {
    //Scroll down (하단 고정메뉴 숨김)
    fixBox.classList.remove("show");
  } else {
    if (nowScrollTop + window.innerHeight < document.body.offsetHeight) {
      //Scroll up (하단 고정메뉴 보임)
      fixBox.classList.add("show");
    }
  }
  lastScrollTop = nowScrollTop;
} */

/* 스크롤 이벤트
document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY === 125) {
    console.log("여기!");
  }
});
 */
/* console.log(gnb.getBoundingClientRect().bottom); */
/* if (window.scrollY === 125) {
  console.log("125");
}
console.log(window.scrollY); */
