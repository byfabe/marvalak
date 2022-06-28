import * as stuff from "@/assets/stuff.js";

//#region MODEL BESTIARY
// export const beastHere = new fight(
//   //text
//   `Vous vous préparez au combat.`,
//   //name
//   ``,
//   //strength
//   0,
//   //result
//   {
//     win: {
//       text: ``,
//       direction: "",
//     },
//     lose: {
//       text: `Vous perdez 0<i class="fa-solid fa-shield-heart">.`,
//       direction: "",
//       categoryEffect: "pv",
//       effect: -0,
//     },
//   }
// );
//#endregion

class fight {
  constructor(text, name, strength, result) {
    this.text = text;
    this.name = name;
    this.strength = strength;
    this.result = result;
    this.fight = true;
  }
}
class fightEvent {
  constructor(text, choices) {
    this.text = text;
    this.choices = choices;
  }
}
//#region exemple stuff/effect
// {
//   win: {
//     text: "Vous étalez le barde, le dépossédant au passage de quelques chicots.",
//     direction: "intro_5_0",
//     stuff : stuff.bourse2
//   },
//   lose: {
//     text: "Dans une flopée de coups bas en tout genre, le barde vous assène le coup fatal, une chiquenaude sur le front, quelle humiliation…",
//     direction: "intro_4_2_lose",
//     categoryEffect: "pv",
//     effect: -1,
//   }
// },
//#endregion

//#region BARDE EVENT 4_2 DEBUT
export const bestiary_barde_event_4_2 = new fight(
  //text
  `Vous vous préparez au combat.`,
  //name
  `Algus le barde`,
  //strength
  1,
  //result
  {
    win: {
      text: "Vous étalez le barde, le dépossédant au passage de quelques chicots.",
      direction: "intro_test_meet_2",
    },
    lose: {
      text: `Dans une flopée de coups bas en tout genre, le barde vous assène le coup fatal, une chiquenaude sur le front, quelle humiliation… <p>Vous perdez 1<i class="fa-solid fa-shield-heart">.</p>`,
      direction: "intro_test_meet_2",
      categoryEffect: "pv",
      effect: -1,
    },
  }
);
//#endregion

//#region VOYOU DES BOIS
export const bestiary_voyou_des_bois = new fight(
  //text
  `Vous vous préparez au combat.`,
  //name
  `Voyou des bois`,
  //strength
  2,
  //result
  {
    win: {
      text: `Vous arrachez la fripouille à la vie. Dans ses poches se trouve une <p data-text="${stuff.clef_gorges.description}" class="tooltip anim cursor-select" style="color: ${stuff.clef_gorges.color}">${stuff.clef_gorges.name}.</p>`,
      direction: "intro_4_0",
      stuff: stuff.clef_gorges,
    },
    lose: {
      text: `Vous perdez 1<i class="fa-solid fa-shield-heart">.`,
      direction: "intro_4_0",
      categoryEffect: "pv",
      effect: -1,
    },
  }
);
//#endregion

//#region VIEIL OURS
export const bestiary_vieil_ours = new fight(
  //text
  `Vous vous préparez au combat.`,
  //name
  `Vieil ours`,
  //strength
  3,
  //result
  {
    win: {
      text: `Vous annihilez la volonté de l'ours, il s'enfuit.`,
      direction: "intro_4_0",
    },
    lose: {
      text: `Vous perdez 2<i class="fa-solid fa-shield-heart">.`,
      direction: "intro_4_0",
      categoryEffect: "pv",
      effect: -2,
    },
  }
);
//#endregion

//#region BOA EMERAUDE
export const bestiary_boa_emeraude = new fight(
  //text
  `Vous vous préparez au combat.`,
  //name
  `Boa émeraude`,
  //strength
  1,
  //result
  {
    win: {
      text: `Vous vous apprêtez à arracher la tête du serpent, mais ce dernier émet un petit son.`,
      direction: "bestiary_boa_emeraude_1",
    },
    lose: {
      text: `Vous perdez 1<i class="fa-solid fa-shield-heart">.`,
      direction: "intro_5_0",
      categoryEffect: "pv",
      effect: -1,
    },
  }
);

export const bestiary_boa_emeraude_1 = new fightEvent(
  //story
  `“Par pitsssié, ne me tsssué pas, dit le boa, je vais vous révéler un sssecret si vous me laisssez en vie.”`,
  //choices
  {
    choice1: {
      text: "Faire confiance au boa.",
      direction: "bestiary_boa_emeraude_2"
    },
    choice2: {
      text: "Briser les os du serpent.",
      direction: "intro_5_0"
    }
  }
)

export const bestiary_boa_emeraude_2 = new fightEvent(
  //story
  `Vous détendez vos mains pour relâcher la pression émise sur le serpent, ce dernier se trémousse frénétiquement et vous mord:  “Ssstupide !, s'exclame t-il avant de s'enfuir.”`,
  //choices
  {
    choice1: {
      text: `Vous perdez 1<i class="fa-solid fa-shield-heart">.`,
      direction: "intro_5_0",
      categoryEffect: "pv",
      effect: -1,
    },
  }
)
//#endregion