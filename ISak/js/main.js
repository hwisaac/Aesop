console.log("hello");

// HEADER
window.__scrollPosition = document.documentElement.scrollTop || 0;
const headerEl = document.querySelector(".header");

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
      gsap.to(headerEl, {
        y: 0,
      });
    } else if (_direction === "down" && window.scrollY > 300) {
      headerEl.classList.add("header--white");
      gsap.to(headerEl, 0.2, {
        y: -120,
      });
    } else if (_direction === "up" && window.scrollY > 0) {
      // 스크롤 올리면 fixed로 등장
      headerEl.classList.add("header--fixed");
      gsap.to(headerEl, 0.2, {
        y: -40,
      });
    }

    window.__scrollPosition = _documentY; // Update scrollY
  }, 100)
);
