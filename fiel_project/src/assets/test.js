import * as stuff from "@/assets/stuff.js";

class test {
  constructor(text, test) {
    this.text = text;
    this.test = test;
  }
}

class result {
  constructor(text, choices) {
    this.text = text;
    this.choices = choices;
  }
}

export const test_3_1 = new test(
  //Story
  `Vous prenez le temps d’observer les arbres et la végétation qui vous entourent.`,
  //test
  {
    test1: {
      text: "Faites un test de perception 10.",
      hability: "perception",
      valueTest: 10,
      success: {
        direction: "test_3_1_success",
      },
      missed: {
        direction: "test_3_1_missed",
      },
    },
  }
);

export const test_3_1_success = new result(
  //text
  `Vous remarquez à quelques pieds de vous une souche d’arbre rongé par les termites, en son creux se cache une <p data-text="${stuff.bourse2.description}" class="tooltip anim" style="color: ${stuff.bourse2.color}">${stuff.bourse2.name}</p>`,
  //choices
  {
    choice1: {
      text: "Vous prenez la bourse.",
      direction: "intro_4_0",
      stuff: stuff.bourse2,
    },
  }
);

export const test_3_1_missed = new result(
  //text
  "Cette pause vous a revigorée.",
  //choices
  {
    choice1: {
      text: "Vous continuez votre route.",
      direction: "test_4_0",
    },
  }
);
//
