import * as stuff from "@/assets/stuff.js";

// export const bestiary_0_0 = {
//   audio: "heavyDoorOpen.mp3",
//   text: "Une créature aux dents longues s'avance vers vous, le combat commence. ",
//   choices: {
//     choice1: {
//       text: "vous tentez de prendre la fuite",
//       direction: "bestiary_0_1",
//     },
//     conjunction: { text: "ou" },
//     choice2: {
//       text: "vous vous préparez au combat.",
//       direction: "bestiary_0_2",
//     },
//   },
// };

// export const bestiary_0_1 = {
//   text: "La fuite.",
//   result: {
//     win: {
//       text: "֎ Fuite ok",
//       direction: "intro_0_1",
//     },
//     conjunction: { text: "ou" },
//     lose: {
//       text: "֎ fuite ko",
//       direction: "intro_0_2",
//     },
//   },
// };

// export const bestiary_0_2 = {
//   text: "Vous vous préparez au combat.",
//   name: "Chimère aux dents longues",
//   strength: 1,
//   fight: true,
//   result: {
//     win: {
//       text: "Vous gagnez le combat.",
//       direction: "intro_0_1",
//     },
//     lose: {
//       text: "Vous perdez le combat.",
//       direction: "intro_0_1",
//     },
//   },
// };

class fight {
  constructor(text, name, strength, result) {
    this.text = text;
    this.name = name;
    this.strength = strength;
    this.result = result;
    this.fight = true;
  }
}

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
      direction: "intro_5_0",
    },
    lose: {
      text: `Dans une flopée de coups bas en tout genre, le barde vous assène le coup fatal, une chiquenaude sur le front, quelle humiliation… <p>Vous perdez 1<i class="fa-solid fa-shield-heart">.</p>`,
      direction: "intro_5_0",
      categoryEffect: "pv",
      effect: -1,
    },
  }
);
//#endregion



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