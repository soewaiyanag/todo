import { useContext, useState } from "react";
import StyledThemeSwitcher from "./styled";
import DarkContext from "context/DarkContext";
import switchSoundURL from "assets/switch_on.mp3";
import lightSwitch from "assets/icon-moon.svg";
import darkSwitch from "assets/icon-sun.svg";
import { zoomInAnimation, zoomOutAnimation } from "shared/animation";

const ThemeSwitcher = () => {
  const { isDark, setIsDark } = useContext(DarkContext);
  const [switchIco, setSwitchIco] = useState(isDark ? darkSwitch : lightSwitch);
  const [animation, setAnimation] = useState(zoomOutAnimation);
  const switchSound = new Audio(switchSoundURL);

  const clickHandler = () => {
    switchSound.play();
    setAnimation(zoomInAnimation);
    setIsDark((prev) => !prev);
  };

  const animationEndHandler = () => {
    setSwitchIco(isDark ? darkSwitch : lightSwitch);
    setAnimation(zoomOutAnimation);
  };

  return (
    <StyledThemeSwitcher
      animationDuration={"200ms"}
      animation={animation}
      src={switchIco}
      alt="theme-swicher"
      onClick={clickHandler}
      onAnimationEnd={animationEndHandler}
    />
  );
};

export default ThemeSwitcher;
