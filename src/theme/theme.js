import darkBg from '../assets/bg-desktop-dark.jpg';
import lightBg from '../assets/bg-desktop-light.jpg';

const sharedTheme = {
  breakpoint: {
    sm: '498px',
  },
  sizes: {
    headerHeight: '17rem',
    borderRadius: '5px',
    gap: '18px',
  },
  transition: {
    timingFunc: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export const darkTheme = {
  ...sharedTheme,
  images: {
    headerBg: darkBg,
  },
  colors: {
    main: 'hsl(235, 21%, 11%)',
    box: 'hsl(235, 24%, 19%)',
    border: 'hsl(233, 14%, 35%)',
    primaryText: 'hsl(234, 39%, 85%)',
    secText: 'hsl(234, 11%, 52%)',
  },
};

export const lightTheme = {
  ...sharedTheme,
  images: {
    headerBg: lightBg,
  },
  colors: {
    main: 'hsl(236, 33%, 92%)',
    box: 'hsl(0, 0%, 98%)',
    border: 'hsl(233, 11%, 84%)',
    primaryText: 'hsl(235, 19%, 35%)',
    secText: 'hsl(236, 9%, 61%)',
  },
};
