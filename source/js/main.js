import { iosVhFix } from "./utils/ios-vh-fix";
import { initModals } from "./modules/modals/init-modals";
import { Form } from "./modules/form-validate/form";
// ---------------------------------

window.addEventListener("DOMContentLoaded", () => {
  // Utils
  // ---------------------------------

  iosVhFix();
  // Modules
  // ---------------------------------
  // блок GYM

  const video = document.querySelector(".gym__video");
  const playIcon = video.querySelector(".video__play");
  video.addEventListener("click", function () {
    video.insertAdjacentHTML(
      "afterbegin",
      '<iframe src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    );
    playIcon.classList.add("visually-hidden");
  });

  // блок TABS

  const tabsControls = document.querySelectorAll(".tabs__control");
  const tabsElementsList = document.querySelectorAll(".tabs__elements-list");

  tabsControls.forEach((item) =>
    item.addEventListener("click", function (event) {
      const tabsControlTarget = event.target.getAttribute("data-tab");
      tabsControls.forEach((element) => element.classList.remove("is-active"));
      tabsElementsList.forEach((element) =>
        element.classList.add("tabs__elements-list--hidden")
      );
      item.classList.add("is-active");
      document
        .getElementById(tabsControlTarget)
        .classList.remove("tabs__elements-list--hidden");
    })
  );

  // Блок MEMBERSHIP

  const membershipsElements = document.querySelectorAll(".membership");

  membershipsElements.forEach((item) =>
    item.addEventListener("click", function (event) {
      const membershipTarget = event.target.getAttribute("data-membership");
      membershipsElements.forEach((element) =>
        element.classList.remove("is-active")
      );
      item.classList.add("is-active");
    })
  );

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener("load", () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
