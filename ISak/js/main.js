console.log("hello");
// SUPER-HEADER
const superHeaderEl = document.querySelector(".super-header");
const superHeaderModalEl = document.querySelector(".super-header-modal");
const superHeaderModalCloseEl = document.querySelector(
  ".super-header-modal .close-container .material-symbols-outlined"
);

let superHeaderModalBool = false;
const bodyEl = document.querySelector("body");
bodyEl.addEventListener("click", (e) => {
  if (e.x > 600 && superHeaderModalBool && e.y > 40) {
    superHeaderModalEl.classList.remove("show");
    superHeaderModalBool = false;
  }
});
superHeaderEl.addEventListener("click", () => {
  if (superHeaderModalBool) {
    // 열려있는 경우 닫아주기
    console.log("열려있는 경우 닫아주기");
    superHeaderModalEl.classList.remove("show");
    superHeaderModalBool = false;
  } else {
    //닫혀 있는 경우 열어주기
    console.log("열려있는 경우 닫아주기");
    superHeaderModalEl.classList.add("show");
    superHeaderModalBool = true;
  }
  console.log(superHeaderModalBool);
});
superHeaderModalCloseEl.addEventListener("click", () => {
  superHeaderModalEl.classList.remove("show");
  superHeaderModalBool = false;
});

// HEADER
window.__scrollPosition = document.documentElement.scrollTop || 0;
const headerEl = document.querySelector("#header");

//윈도우 스크롤 감지해서 헤더 작동시키기
window.addEventListener(
  "scroll",
  _.throttle(function () {
    let _documentY = document.documentElement.scrollTop;
    let _direction = _documentY - window.__scrollPosition >= 0 ? "down" : "up";
    console.log(_direction, window.scrollY); // 콘솔창에 스크롤 방향을 출력

    if (window.scrollY === 0) {
      headerEl.classList.remove("header--white");
      headerEl.classList.remove("header--fixed");
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

//section2 버튼
const s2_prevBtn = document.querySelector(".section2 .prev-btn");
const s2_nextBtn = document.querySelector(".section2 .next-btn");

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
    dragSize: 170,
  },
});

// section2 row에 마우스 올리면 버튼 나타나기
const s2_El = document.querySelector(".section2");

s2_El.addEventListener("mouseover", () => {
  s2_nextBtn.classList.add("show");
  s2_prevBtn.classList.add("show");
});
s2_El.addEventListener("mouseout", () => {
  s2_nextBtn.classList.remove("show");
  s2_prevBtn.classList.remove("show");
});
// section 5 버튼 등장 토글
const s5_el = document.querySelector(".section5");
const s5_prevBtn = document.querySelector(".section5 .prev-btn");
const s5_nextBtn = document.querySelector(".section5 .next-btn");

s5_el.addEventListener("mouseover", () => {
  console.log("s5에 올라옴!");

  s5_nextBtn.classList.add("show");
  s5_prevBtn.classList.add("show");
});

s5_el.addEventListener("mouseout", () => {
  console.log("s5에서 나감!");
  s5_nextBtn.classList.remove("show");
  s5_prevBtn.classList.remove("show");
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
    dragSize: 400,
  },
});

//section 6 스와이퍼
const s6_paginationNameEl = document.querySelector(
  ".section6 .pagination-name"
);
const s6_nextBtnEl = document.querySelector(".section6 .next-btn");
const s6_prevBtnEl = document.querySelector(".section6 .prev-btn");

console.log("s6 swiper");
const s6_swiper = new Swiper(".section6 .swiper", {
  // observer: true,
  // observeParents: true,
  rewind: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".section6 .next-btn",
    prevEl: ".section6 .prev-btn",
  },
  scrollbar: {
    el: ".section6 .pagination-bars",
  },
  pagination: {
    el: ".section6 .pagination-name",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      let text;
      switch (current) {
        case 1:
          text = "이솝 파르나스";
          break;
        case 2:
          text = "이솝 성수";
          break;
        case 3:
          text = "이솝 한남";
          break;
        default:
          text = "None";
          break;
      }
      gsap.to(s6_paginationNameEl, 0.2, {
        opacity: 0,
      });
      setTimeout(() => {
        s6_paginationNameEl.textContent = text;
        gsap.to(s6_paginationNameEl, 0.2, {
          opacity: 1,
        });
      }, 300);
    },
  },
});

// section6 버튼 등장
const s6_colRight = document.querySelector(".section6 .col-right");
s6_colRight.addEventListener("mouseover", () => {
  console.log("colRight 에 올라옴! ");
  s6_nextBtnEl.classList.add("show");
  s6_prevBtnEl.classList.add("show");
});

s6_colRight.addEventListener("mouseout", () => {
  s6_nextBtnEl.classList.remove("show");
  s6_prevBtnEl.classList.remove("show");
});
