function showVideo() {
  const video = document.querySelector(".gym__video")
  const playIcon = video.querySelector(".video__play")
  video.addEventListener("click", function () {
    video.insertAdjacentHTML(
      "afterbegin",
      '<iframe src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    )
    playIcon.classList.add("visually-hidden")
  })
}

export { showVideo }
