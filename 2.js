const SEQUENCE_LENGTH = 4;
let stopped = true;

const snare = new Audio('snare.wav');
const kick = new Audio('kick.wav');
const hat = new Audio('hat.wav');

const snareTrack = {
  sound: snare,
  sequence: [false, false, true, false]
};

const kickTrack = {
  sound: kick,
  sequence: [true, false, false, false]
};

const hatTrack = {
  sound: hat,
  sequence: [true, true, true, true]
};

const tracks = [snareTrack, kickTrack, hatTrack];

const play = noteIndex => {
  if (stopped) return;

  tracks.forEach(track => {
    if (track.sequence[noteIndex]) {
      track.sound.play();
    }
  });

  return setTimeout(() => {
    return noteIndex == SEQUENCE_LENGTH - 1 ? play(0) : play(noteIndex + 1);
  }, 250);
};

const play2 = () => {
  stopped = false;
  play(0);
};

const stop2 = () => {
  stopped = true;
};
