import * as stuff from "@/assets/stuff.js";

class test {
  constructor(text, choices, test, hability, valueTest, result) {
    this.text = text;
    this.choices = choices;
    this.test = test;
    this.hability = hability;
    this.valueTest = valueTest;
    this.result = result;
  }
}

class result {
  constructor(text, choices) {
    this.text = text;
    this.choices = choices;
  }
}

export const test_0_0 = new test(
  //Story
  `Vous prenez le temps d’observer les arbres et la végétation qui vous entourent.`,
  //choices
  {
    choice1: {
      text: "Faites un test de perception 10.",
    },
  },
  //test
  true,
  //hability
  "perception",
  //value test
  10,
  //result
  {
    win: {
      text: "Vous gagnez le combat.",
      direction: "test_0_success",
    },
    lose: {
      text: "Vous perdez le combat.",
      direction: "test_0_missed",
    },
  }
);

export const test_0_success = new result(
  //text
  `Vous remarquez à quelques pieds de vous une souche d’arbre rongé par les termites, en son creux se cache une <p data-text="${stuff.bourse2.description}" class="tooltip anim" style="color: ${stuff.bourse2.color}">${stuff.bourse2.name}</p>`,
  //choices
  {
    choice1: {
      text: "Vous décidez de contempler la nature béant d’admiration",
      direction: "intro_0_0",
      stuff: stuff.bourse2,
    },
  }
);

export const test_0_missed = new result(
  //text
  "Cette pause vous a revigorée.",
  //choices
  {
    choice1: {
      text: "4_0",
      direction: "test_4_0",
    },
    choice2: {
      text: "4_0",
      direction: "intro_4_0",
    },
  }
);
