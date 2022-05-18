//import store from '../store/index'
//console.log(store.state.name);

//export const direction = {};

//event retroactif, stocker event dans perso
//composant pour chaque cartes, on est sur Vue !

class event {
  constructor(text, choices) {
    this.text = text;
    this.choices = choices;
  }
}

class eventAudio extends event {
  constructor(text, choices, audio) {
    super(text, choices);
    this.audio = audio;
  }
}

export const intro_0_0 = new event(
  //Story
  "Vous vous réveillez dans ce qui vous semble être une cave, l'odeur de la vinasse, la pénombre et l'humidité de la pierre vous sont familières. Des voix retentissent du haut d'un escalier:",

  //Choices
  {
    choice1: {
      text: "vous montez ce dernier sans plus attendre",
      direction: "bestiary_0_0",
    },
    conjunction: { text: "ou" },
    choice2: {
      text: "vous préférez tendre l'oreille.",
      direction: "intro_0_2",
    },
  }
);

export const intro_0_1 = {
  text: "Vous continuez votre route",
};

export const intro_0_2 = new eventAudio(
  //Story
  "Nouveau texte",

  //choices
  { choice1: { text: "choix1" }, choice2: { text: "choix2" } },

  //Audio
  "heavyDoorOpen.mp3"
);
