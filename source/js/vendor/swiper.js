// Swiper for Coaches
new Swiper(".swiper-coaches", {
  direction: "horizontal",
  loop: true,
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
  loop: false,
  navigation: {
    nextEl: ".testimonials__swiper-button--next",
    prevEl: ".testimonials__swiper-button--prev",
  },
});
