function switchTabs() {
  const tabsControls = document.querySelectorAll(".tabs__control")
  const tabsElementsList = document.querySelectorAll(".tabs__elements-list")

  tabsControls.forEach((item) =>
    item.addEventListener("click", function (event) {
      const tabsControlTarget = event.target.getAttribute("data-tab")
      tabsControls.forEach((element) => element.classList.remove("is-active"))
      tabsElementsList.forEach((element) =>
        element.classList.add("tabs__elements-list--hidden"),
      )
      item.classList.add("is-active")
      document
        .getElementById(tabsControlTarget)
        .classList.remove("tabs__elements-list--hidden")
    }),
  )
}

export { switchTabs }
