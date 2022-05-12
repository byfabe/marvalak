export const bestiary_0_0 = {
  audio: "heavyDoorOpen.mp3",
  text: "Une créature aux dents longues s'avance vers vous, le combat commence. ",
  choice: {
    choice1: {
      text: "֎ vous tentez de prendre la fuite.",
      direction: "bestiary_0_1",
    },
    conjunction: { text: "ou" },
    choice2: {
      text: "֎ vous vous préparez au combat.",
      direction: "bestiary_0_2",
    },
  },
};

export const bestiary_0_1 = {
  text: "La fuite.",
  result: {
    win: {
      text: "֎ Fuite ok",
      direction: "intro_0_1",
    },
    conjunction: { text: "ou" },
    lose: {
      text: "֎ fuite ko",
      direction: "intro_0_2",
    },
  },
};

export const bestiary_0_2 = {
  audio: "Violin.wav",
  text: "Combat",
  name: "Chimère aux dents longues",
  strength: 4,
  fight: true,
  result: {
    win: {
      text: "֎ win ok",
      direction: "intro_0_1",
    },
    lose: {
      text: "֎ win ko",
      direction: "intro_0_1",
    },
  },
};
