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
  pagination: {
    el: ".section2 .pagination-bar",
    type: "progressbar",
  },
});

// section2 row에 마우스 올리면 버튼 나타나기
const s2_rowEl = document.querySelector(".section2 .row");

s2_rowEl.addEventListener("mouseover", () => {
  s2_nextBtn.classList.add("show");
  s2_prevBtn.classList.add("show");
});

//body test
const bodyEl = document.querySelector("body");
