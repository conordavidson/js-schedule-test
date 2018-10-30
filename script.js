const snare = new Audio('snare.wav');
const kick = new Audio('kick.wav');
const hat = new Audio('hat.wav');

const playKick = () => {
  kick.play();
  setTimeout(playKick, 1000);
}

const playSnare = () => {
  snare.play();
  setTimeout(playSnare, 1000);
};

const playHat = () => {
  hat.play();
  setTimeout(playHat, 250);
};

const play = () => {
  playHat();
  playKick();
  setTimeout(playSnare, 500);
}
