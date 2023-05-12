export default function playSound(URL) {
  const sound = new Audio(URL);
  sound.preload = 'auto';
  // to play sound continuously on click
  sound.currentTime = 0;
  // Wait for the audio file to finish preloading
  sound.addEventListener('canplaythrough', () => {
    sound.play();
  });
}
