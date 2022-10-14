// SWIPER
// perfume
new Swiper('.perfume.swiper', {
  loop: false,
  slidesPerView: 4,
  spaceBetween: 50,
  speed: 700,
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    1080: {
      slidesPerView: 3
    },
    1500: {
      slidesPerView: 4
    },
  },
  scrollbar: {
    el: '.perfume .swiper-scrollbar',
    dragSize: 200,
  },
  navigation: {
    nextEl: '.perfume .swiper-button-next',
    prevEl: '.perfume .swiper-button-prev',
  },
});

// SWIPER
// locater
const timer = 700;
const locateTxt = document.querySelector('.store-locate')

const locaterSwiper = new Swiper('.store.swiper', {
  // loop: true,
  autoplay: true,
  slidesPerView: 1,
  speed: timer,
  slideToClickedSlide: true,
  rewind: true,
  navigation: {
    nextEl: '.store .swiper-button-next',
    prevEl: '.store .swiper-button-prev',
  },
  // pagination: {
  //   el: '.store .swiper-pagination',
  //   type: "progressbar",
  // },
  // scrollbar: {
  //   el: '.store .swiper-scrollbar',
  //   type: "progressbar",
  // },
  pagination: {
    el: locateTxt,
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
      gsap.to(locateTxt, 0.5, {
        opacity: 0,
      });
      setTimeout(() => {
        locateTxt.textContent = text;
        gsap.to(locateTxt, 0.5, {
          opacity: 1,
        });
      }, 500);
    },
  },
  scrollbar: {
    el: '.store .swiper-scrollbar',
    type: "custom",
    
  },
});

document.querySelector('.store.swiper').addEventListener('mouseover', function() {
  locaterSwiper.autoplay.stop();
  // locaterTxtSwiper.autoplay.stop();
})

document.querySelector('.store.swiper').addEventListener('mouseleave', function() {
  locaterSwiper.autoplay.start();
  // locaterTxtSwiper.autoplay.start();
})

// const locaterTxtSwiper = new Swiper('.store-locate.swiper', {
//   loop: true,
//   autoplay: true,
//   speed: timer,
//   effect: 'fade',
//   navigation: {
//     nextEl: '.store .swiper-button-next',
//     prevEl: '.store .swiper-button-prev',
//   },
// });


// TOP BANNER LEFT PANEL
const topBanner = document.querySelector('.shippingBanner-body a');
const panelBackground = document.querySelector('.panelBackground');
const topBannerPanel = document.querySelector('.shippingBanner-body__panel');
const topBannerClose = document.querySelector('.shippingBanner-body__panel .closeBtn')

topBanner.addEventListener('click', () => {
  panelBackground.classList.add('on');
  topBannerPanel.classList.add('on');
  document.querySelector('body').style.overflow = "hidden";
})

topBannerClose.addEventListener('click', () => {
  panelBackground.classList.remove('on');
  topBannerPanel.classList.remove('on');
  document.querySelector('body').style.overflow = "visible";
})

panelBackground.addEventListener('click', () => {
  panelBackground.classList.remove('on');
  topBannerPanel.classList.remove('on');
  document.querySelector('body').style.overflow = "visible";
})

// NAV
// jquery
$(document).ready(function() {
  let mainMenu = $('.main-menu')
  let mainMenuLi = mainMenu.find('> li > a');
  let mainMenuPanel = mainMenu.find('.nav-panel');
  let mainMenuCloseBtn = $('header .header__closeBtn');

  mainMenuLi.on('click', function() {
    mainMenu.children('li').removeClass('on');
    $(this).parent('li').addClass('on');
    mainMenuPanel.fadeOut(500);
    // mainMenuPanel.find('.flex ul').fadeOut(500);
    mainMenuPanel.find('.nav__image').fadeOut(500);
    $('header').addClass('on');

    if($(this).parent('li').hasClass('on')) {
      $(this).siblings('.nav-panel').show();
      $(this).siblings('.nav-panel').find('.flex ul').fadeIn(500);
      $(this).siblings('.nav-panel').find('.nav__image').fadeIn(500);
    }

    if($('header').hasClass('on')) {
      $('body').css('overflow-y', 'hidden')
    }

  })

  mainMenuCloseBtn.on('click', function() {
    $('header').removeClass('on');
    mainMenuPanel.fadeOut(500);

    if(! $('header').hasClass('on')) {
      $('body').css('overflow-y', 'visible')
    }

  })
})