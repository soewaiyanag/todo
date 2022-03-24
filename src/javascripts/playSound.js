export default function playSound(URL) {
  const sound = new Audio(URL);
  sound.currentTime = 0; // to play sound continuously on click
  sound.play();
}
