import { useContext, useState } from 'react';
import StyledThemeSwitcher, {
  ThemeSwitcherWrapper,
} from './StyledThemeSwitcher';
import DarkContext from 'context/DarkContext';
import switchSoundURL from 'assets/switch_on.mp3';
import lightSwitch from 'assets/icon-moon.svg';
import darkSwitch from 'assets/icon-sun.svg';
import { zoomInAnimation, zoomOutAnimation } from 'shared/animation';
import playSound from 'javascripts/playSound';

const ThemeSwitcher = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkContext);
  const [switchIco, setSwitchIco] = useState(
    isDarkMode ? darkSwitch : lightSwitch
  );
  const [animation, setAnimation] = useState(zoomOutAnimation);

  const clickHandler = () => {
    playSound(switchSoundURL);
    setAnimation(zoomInAnimation);
    setIsDarkMode((prev) => !prev);
  };

  const animationEndHandler = () => {
    setSwitchIco(isDarkMode ? darkSwitch : lightSwitch);
    setAnimation(zoomOutAnimation);
  };

  return (
    <ThemeSwitcherWrapper>
      <StyledThemeSwitcher
        animationDuration={'150ms'}
        animation={animation}
        src={switchIco}
        alt="theme-swicher"
        onClick={clickHandler}
        onAnimationEnd={animationEndHandler}
      />
    </ThemeSwitcherWrapper>
  );
};

export default ThemeSwitcher;
