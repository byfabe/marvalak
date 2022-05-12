//import store from '../store/index'
//console.log(store.state.name);

//export const direction = {};

export const intro_0_0 = {
  audio: "Violin.wav",
  text: "Vous vous réveillez dans ce qui vous semble être une cave, l'odeur de la vinasse, la pénombre et l'humidité de la pierre vous sont familières. Des voix retentissent du haut d'un escalier:",
  choice: {
    choice1: {
      text: "֎ vous montez ce dernier sans plus attendre",
      direction: "bestiary_0_0",
      force: 1,
    },
    conjunction: { text: "ou" },
    choice2: {
      text: "֎ vous préférez tendre l'oreille.",
      direction: "intro_0_2",
      object: "Vieux bibelot",
    },
  },
};

export const intro_0_1 = {
  text: "Vous continuez votre route",
};

//event retroactif, stocker event dans perso
//composant pour chaque cartes, on est sur Vue !

class event {
  constructor(text, choice1, choice2, choice3) {
    this.text = text;
    this.choice1 = choice1;
    this.choice2 = choice2;
    this.choice3 = choice3;
    this.choice = {
      choice1: { text: this.choice1 },
      choice2: { text: this.choice2 },
      choice3: { text: this.choice3 },
    };
  }
}

class eventAudio extends event {
  constructor(text, choice1, choice2, choice3, audio) {
    super(text, choice1, choice2, choice3);
    this.audio = audio;
  }
}

export let intro_0_2 = new eventAudio(
  //Story
  "Nouveau texte",

  //Choice 1
  "Choix1",

  //Choix 2
  "Choix2",

  //Choix3
  "Choix3",

  //Audio
  "heavyDoorOpen.mp3"
);
