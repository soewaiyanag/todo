import darkBg from "../assets/bg-desktop-dark.jpg";
import lightBg from "../assets/bg-desktop-light.jpg";
import lightSwitch from "../assets/icon-moon.svg";
import darkSwitch from "../assets/icon-sun.svg";

export const staticTheme = {
  sizes: {
    headerHeight: "14rem",
    borderRadius: "5px",
    gap: "18px",
  },
  transition: {
    timingFunc: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
};

export const darkTheme = {
  icons: {
    headerBg: darkBg,
    switch: darkSwitch,
  },
  colors: {
    main: "hsl(235, 21%, 11%)",
    box: "hsl(235, 24%, 19%)",
    border: "hsl(233, 14%, 35%)",
    primaryText: "hsl(234, 39%, 85%)",
    secText: "hsl(234, 11%, 52%)",
  },
};

export const lightTheme = {
  icons: {
    headerBg: lightBg,
    switch: lightSwitch,
  },
  colors: {
    main: "hsl(236, 33%, 92%)",
    box: "hsl(0, 0%, 98%)",
    border: "hsl(233, 11%, 84%)",
    primaryText: "hsl(235, 19%, 35%)",
    secText: "hsl(236, 9%, 61%)",
  },
};