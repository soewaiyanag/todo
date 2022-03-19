import { useTheme } from "styled-components";
import { useContext } from "react";
import DarkContext from "../../context/DarkContext";
import switchSoundURL from "../../assets/switch_on.mp3";

const ThemeSwitcher = () => {
  const theme = useTheme(); // useTheme provide the current theme outside of styled components
  const { setIsDark } = useContext(DarkContext);
  const switchSound = new Audio(switchSoundURL);

  const clickHandler = () => {
    switchSound.play();
    setIsDark((prev) => !prev);
  };

  return (
    <img src={theme.icons.switch} alt="theme-swicher" onClick={clickHandler} />
  );
};

export default ThemeSwitcher;
