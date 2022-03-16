import switch_on from "../switch_on.mp3";
const switch_on_sound = new Audio(switch_on);
(function () {
  const toggle = document.querySelector(".theme-swicher");
  const body = document.body;

  toggle.src = "./images/icon-sun.svg";

  toggle.addEventListener("click", () => {
    switch_on_sound.currentTime = 0;
    switch_on_sound.play();
    if (body.className == "dark-theme") {
      body.className = "light-theme";
      toggle.src = "./images/icon-moon.svg";
    } else {
      body.className = "dark-theme";
      toggle.src = "./images/icon-sun.svg";
    }
  });
})();
