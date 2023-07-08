// init Swiper:
new Swiper(".swiper", {
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

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
