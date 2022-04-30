export const intro_0_0 = {
  text: "Vous vous réveillez dans ce qui vous semble être une cave, l'odeur de la vinasse, la pénombre et l'humidité de la pierre vous sont familières. Des voix retentissent du haut d'un escalier:",
  choice: {
    choice1: {
      text: "- vous montez ce dernier sans plus attendre -",
      direction: "intro_0_1",
      force: 1,
    },
    conjunction: { text: "ou" },
    choice2: {
      text: "- vous préférez tendre l'oreille. -",
      direction: "intro_0_2",
      object: "Vieux bibelot",
    },
  },
};

export const intro_0_1 = {
  text: "Vous vous",
  test: "test",
  choice: {
    choice1: {
      text: "- vous montez ce dernier sans plus attendre -",
      direction: "intro_0_0",
      force: 1,
    },
    conjunction: { text: "ou" },
    choice2: {
      text: "- vous préférez tendre l'oreille. -",
      direction: "intro_0_0",
      object: "Vieux bibelot",
    },
  },
};

export const intro_0_2 = {
  text: "Vous vous bla",
  choice: {
    choice1: {
      text: "- vous montez ce dernier sans plus attendre -",
      direction: "intro_0_0",
      force: 1,
    },
    conjunction: { text: "ou" },
    choice2: {
      text: "- vous préférez tendre l'oreille. -",
      direction: "intro_0_0",
      object: "Vieux bibelot",
    },
  },
};