function showCoachInfo() {
  const coachesElements = document.querySelectorAll('.coach');

  coachesElements.forEach((item) => item.addEventListener('click', function () {
    coachesElements.forEach((element) => element.classList.remove('is-active'));
    item.classList.add('is-active');
  }));
}

export {showCoachInfo};
