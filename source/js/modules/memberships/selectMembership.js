function selectMembership() {
  const membershipsElements = document.querySelectorAll('.membership__link');

  membershipsElements.forEach((item) =>
    item.addEventListener('click', function () {
      membershipsElements.forEach((element) =>
        element.classList.remove('is-active'));
      item.classList.add('is-active');
    }));
}

export {selectMembership};
