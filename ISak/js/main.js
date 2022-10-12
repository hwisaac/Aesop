console.log("hello");

// HEADER
window.__scrollPosition = document.documentElement.scrollTop || 0;
const headerEl = document.querySelector("#header");

//section2 버튼
const s2_prevBtn = document.querySelector(".section2 .prev-btn");
const s2_nextBtn = document.querySelector(".section2 .next-btn");

//윈도우 스크롤 감지해서 헤더 작동시키기
window.addEventListener(
  "scroll",
  _.throttle(function () {
    let _documentY = document.documentElement.scrollTop;
    let _direction = _documentY - window.__scrollPosition >= 0 ? "down" : "up";
    console.log(_direction, window.scrollY); // 콘솔창에 스크롤 방향을 출력
    if (window.scrollY >= 400 && window.scrollY <= 900) {
      //   gsap.to(s2_prevBtn, {
      //     x: 0,
      //   });
      //   gsap.to(s2_nextBtn, {
      //     x: 0,
      //   });
    } else {
      s2_nextBtn.classList.remove("show");
      s2_prevBtn.classList.remove("show");
    }

    if (window.scrollY === 0) {
      headerEl.classList.remove("header--white");
      headerEl.classList.remove("header--fixed");
      // gsap.to(headerEl, {
      //   y: 0,
      // });
    } else if (_direction === "down" && window.scrollY > 100) {
      headerEl.classList.add("header--white");
      gsap.to(headerEl, 0.2, {
        y: -120,
      });
    } else if (_direction === "up" && window.scrollY > 40) {
      // 스크롤 올리면 fixed로 등장
      headerEl.classList.add("header--fixed");
      gsap.to(headerEl, 0.2, {
        y: 0,
      });
    } else if (_direction === "up" && window.scrollY <= 40) {
      headerEl.classList.remove("header--fixed");
    }

    window.__scrollPosition = _documentY; // Update scrollY
  }, 100)
);

// Section 2

// section2 slides
const s2_swiper = new Swiper(".section2 .swiper", {
  loop: false,
  slidesPerView: 3,
  navigation: {
    nextEl: ".section2 .next-btn",
    prevEl: ".section2 .prev-btn",
  },
  scrollbar: {
    el: ".section2 .pagination-bar",
  },
});

// section2 row에 마우스 올리면 버튼 나타나기
const s2_rowEl = document.querySelector(".section2 .row");

s2_rowEl.addEventListener("mouseover", () => {
  s2_nextBtn.classList.add("show");
  s2_prevBtn.classList.add("show");
});

//sectino 5 스와이퍼
const s5_swiper = new Swiper(".section5 .swiper", {
  autoplay: true,
  loop: false,
  slidesPerView: 3,
  navigation: {
    nextEl: ".section5 .next-btn",
    prevEl: ".section5 .prev-btn",
  },
  scrollbar: {
    el: ".section5 .pagination-bars",
  },
});

const nextBtn = 3;

nextBtn.addEventListener("click", () => {
  s5_swiper.slideNext(500);
});

//section 6 스와이퍼
const s6_swiper = new Swiper(".section6 .col-right .swiper", {
  // observer: true,
  // observeParents: true,
  autoplay: true,
  // loop: true,
  slidesPerView: 1,
  // navigation: {
  //   nextEl: ".section6 .next-btn",
  //   prevEl: ".section6 .prev-btn",
  // },
  scrollbar: {
    el: ".section6 .pagination-bars",
  },
  pagination: {
    el: ".section6 .pagination-name",
    type: "custom",
  },
});

//body test
const bodyEl = document.querySelector("body");
