// Swiper for Coaches
new Swiper(".swiper-coaches", {
  direction: "horizontal",
  loop: true,
  mousewheel: true,
  allowPageScroll: "vertical",
  keyboard: {
        enabled: true,
    },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next--coaches",
    prevEl: ".swiper-button-prev--coaches",
  },
});


// Swiper for Testimonials
new Swiper(".testimonials__swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  keyboard: {
        enabled: true,
    },
  loop: false,
  navigation: {
    nextEl: ".testimonials__swiper-button--next",
    prevEl: ".testimonials__swiper-button--prev",
  },
});

var startScroll, touchStart, touchCurrent;
swiper.slides.on('touchstart', function (e) {
    startScroll = this.scrollTop;
    touchStart = e.targetTouches[0].pageY;
}, true);
swiper.slides.on('touchmove', function (e) {
    touchCurrent = e.targetTouches[0].pageY;
    var touchesDiff = touchCurrent - touchStart;
    var slide = this;
    var onlyScrolling =
            ( slide.scrollHeight > slide.offsetHeight ) && //allow only when slide is scrollable
            (
                ( touchesDiff < 0 && startScroll === 0 ) || //start from top edge to scroll bottom
                ( touchesDiff > 0 && startScroll === ( slide.scrollHeight - slide.offsetHeight ) ) || //start from bottom edge to scroll top
                ( startScroll > 0 && startScroll < ( slide.scrollHeight - slide.offsetHeight ) ) //start from the middle
            );
    if (onlyScrolling) {
        e.stopPropagation();
    }
}, true);
