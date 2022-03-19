import { useTheme } from "styled-components";
import { useContext, useState } from "react";
import StyledThemeSwitcher from "./styled";
import DarkContext from "../../context/DarkContext";
import switchSoundURL from "../../assets/switch_on.mp3";

const ThemeSwitcher = () => {
  const theme = useTheme(); // useTheme provide the current theme outside of styled components
  const { setIsDark } = useContext(DarkContext);
  const [isAnimate, setIsAnimate] = useState(false);
  const switchSound = new Audio(switchSoundURL);

  const clickHandler = () => {
    switchSound.play();
    setIsAnimate(true);
    setIsDark((prev) => !prev);
  };

  const animationEndHandler = () => {
    setIsAnimate(false);
  };

  return (
    <StyledThemeSwitcher
      isAnimate={isAnimate}
      src={theme.icons.switch}
      alt="theme-swicher"
      onClick={clickHandler}
      onAnimationEnd={animationEndHandler}
    />
  );
};

export default ThemeSwitcher;
