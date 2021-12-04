(function () {
  const toggle = document.querySelector(".theme-swicher");
  const body = document.body;

  toggle.src = "./images/icon-sun.svg";

  toggle.addEventListener("click", () => {
    if (body.className == "dark-theme") {
      body.className = "light-theme";
      toggle.src = "./images/icon-moon.svg";
    } else {
      body.className = "dark-theme";
      toggle.src = "./images/icon-sun.svg";
    }
  });
})();
