//import store from '../store/index'
//console.log(store.state.name);

//export const direction = {};

//event retroactif, stocker event dans perso
//composant pour chaque cartes, on est sur Vue !

import * as stuff from "@/assets/stuff.js";
import * as tooltip from "@/assets/tooltip.js";

class event {
  constructor(text, choices) {
    this.text = text;
    this.choices = choices;
  }
}

class test {
  constructor(text, test, dice, diceNumber) {
    this.text = text;
    this.test = test;
    this.dice = dice;
    this.diceNumber = diceNumber;
  }
}

class eventMultiTest extends event {
  constructor(text, choices, test, dice, diceNumber) {
    super(text, choices);
    this.test = test;
    this.dice = dice;
    this.diceNumber = diceNumber;
  }
}

class eventMultiTestLock extends event {
  constructor(text, choices, lock, test) {
    super(text, choices);
    this.lock = lock;
    this.test = test;
  }
}

class eventTimer {
  constructor(text, choicesImg, directionTimer, images, timerTrue) {
    this.text = text;
    this.choicesImg = choicesImg;
    this.directionTimer = directionTimer;
    this.images = images;
    this.timerTrue = timerTrue;
  }
}

class eventAudio extends event {
  constructor(text, choices, audio) {
    super(text, choices);
    this.audio = audio;
  }
}

//#region LA CHUTE 0_0 DEBUT
export const intro_0_0 = new event(
  //Story
  `Vos yeux s’ouvrent, vous ne distinguez autour de vous que le néant, aucune pesanteur, aucun souvenir, vous ne ressentez que l'inéluctable sensation d’être aspiré vers un fond infini.`,

  //Choices
  {
    choice1: {
      text: "Vous essayez malgré tout de vous débattre",
      direction: "intro_0_1",
    },
    choice2: {
      text: "Vous vous laissez emporter et acceptez votre sort.",
      direction: "intro_0_2",
    },
  }
);

export const intro_0_1 = new event(
  //Story
  "Vous agitez les bras, comme vous le feriez pour remonter à la surface de l’eau, mais plus vous faites de mouvements, plus la force qui vous attire s'intensifie.",

  //Choices
  {
    choice1: {
      text: "Vous ne pouvez rien faire, vous vous laissez emporter vers le fond.",
      direction: "intro_1_0",
    },
  }
);

export const intro_0_2 = new event(
  //Story
  "Vous acceptez de ne plus être, cette force qui vous attire est votre guide, votre volonté de voir au-delà du gouffre.",

  //choices
  {
    choice1: {
      text: "Vous vous laissez envahir par le vide en toute quiétude.",
      direction: "intro_1_0",
    },
  }
);

export const intro_1_0 = new event(
  //Story
  `Votre chute continue, vous ressentez peu à peu la dureté de vos os, puis votre chair et les battements de votre cœur. 
  C’est ensuite l’air qui s’emplit de vos poumons, s’ensuit une lueur dans vos yeux, la lumière, les couleurs, vous ressentez le poids, le temps, l’univers qui vous entoure.`,

  //choices
  {
    choice1: {
      text: "Vous êtes en vie.",
      direction: "intro_2_0",
    },
  }
);
//#endregion LA CHUTE FIN

//#region ACHILDA MORTEPEAU 2_0 DEBUT
export const intro_2_0 = new event(
  //Story
  `“Ah, encore vous !” s’exclame une vieille femme aux yeux noirs, les marques sur son visage laissent deviner son grand âge. 
  Une grande capuche recouvre son corps voûté, elle tend vers vous sa main frêle et squelettique:`,

  //choices
  {
    choice1: {
      text: `Vous repoussez sa main et faites un pas en arrière`,
      direction: "intro_2_1",
    },
    choice2: {
      text: "Vous laissez la vieille femme vous agripper le poignet.",
      direction: "intro_2_2",
    },
  }
);

export const intro_2_1 = new event(
  //Story
  `"Soyez sans crainte, je suis Achilda Mortepeau, je n’ai guère d’autres intérêt que pour les potions et les incantations en tout genre, vous vous trouvez dans ma demeure, une pauvre petite bicoque clouée au fin fond de la <p data-text="${tooltip.esperance.text}" class="tooltip-xl anim" style="color: ${tooltip.esperance.color}">${tooltip.esperance.name}.</p>” vous dit-elle d’un ton plutôt rassurant.`,
  //choices
  {
    choice1: {
      text: "Continuer",
      direction: "intro_2_1_next",
    },
  }
);

export const intro_2_1_next = new event(
  //Story
  `“Je connais votre situation, vous devez partir au plus vite et surtout ne posez pas trop de questions, un regard démoniaque s’est abattu sur chacun de nous. Partez vers le nord, après cinq jours de marche vous trouverez le château de Marvalak, allez y trouver des réponses. Notre temps à tous est compté.
  Prenez cette concoction, elle vous sera utile durant votre périple.`,

  //choices
  {
    choice1: {
      text: `Vous prenez la <p data-text="${stuff.fioleDeVie.description}" class="tooltip anim" style="color: ${stuff.fioleDeVie.color}">${stuff.fioleDeVie.name}</p> et vous quittez la demeure`,
      direction: "intro_3_0",
      stuff: stuff.fioleDeVie,
    },
    choice2: {
      text: "Vous préférez mépriser les paroles de la vieille femme et refuser son offre.",
      direction: "intro_3_0",
    },
  }
);

export const intro_2_2 = new event(
  //Story
  `La vieille femme vous saisit le poignet, sa peau est froide comme les neiges des montagnes du nord, vous sentez ses paroles s'immiscer dans votre esprit, les mots sont d’une langue non commune mais vous en comprenez le sens : “Je me nomme Achilda Mortepeau la nécromancienne, l’une des cinq soeurs de la création, nous sommes ici dans ma demeure, une petite bicoque située dans la <p data-text="${tooltip.esperance.text}" class="tooltip-xl anim" style="color: ${tooltip.esperance.color}">${tooltip.esperance.name}.</p>.`,

  //choices
  {
    choice1: {
      text: "Continuer",
      direction: "intro_2_2_next",
    },
  }
);

export const intro_2_2_next = new event(
  "Je ressens des interrogations en vous, mais je ne peux vous en dire plus, cela serait dangereux. Un mal profond s’est logé en chacun de nous. Partez vers le nord, après cinq jours de marche vous trouverez le château de Marvalak, allez y trouver des réponses. Notre temps à tous est compté. Prenez cette concoction, elle vous sera utile durant votre périple.",

  //choices
  {
    choice1: {
      text: `Vous prenez la <p data-text="${stuff.fioleDeVie.description}" class="tooltip anim" style="color: ${stuff.fioleDeVie.color}">${stuff.fioleDeVie.name}</p> et vous quittez la demeure`,
      direction: "intro_3_0",
      stuff: stuff.fioleDeVie,
    },
    choice2: {
      text: "vous préférez ne pas prendre la concoction et vous quittez les lieux.",
      direction: "intro_3_0",
    },
  }
);
//#endregion ACHILDA MORTEPEAU FIN

//#region TEST PERCEPTION 3_0 DEBUT
export const intro_3_0 = new event(
  //Story
  `Vous vous éloignez de la maisonnette et vous suivez un sentier en direction du nord. Autour de vous la forêt est dense, quelques rayons de soleil percent le feuillages, le sifflement des oiseaux habille généreusement l’atmosphère et l’odeur terreuse de l’humus se fait ressentir de toute part.`,

  //choices
  {
    choice1: {
      text: "Vous décidez de contempler la nature béant d’admiration",
      direction: "intro_3_1",
    },
    choice2: {
      text: "Vous continuez votre chemin.",
      direction: "intro_test_meet_1",
    },
  }
);

export const intro_3_1 = new test(
  //Story
  `Vous prenez le temps d’observer les arbres et la végétation qui vous entourent.`,
  //test
  {
    test1: {
      text: "Faites un test de perception 10.",
      hability: "perception",
      valueTest: 10,
      success: {
        direction: "intro_3_1_success",
      },
      missed: {
        direction: "intro_3_1_missed",
      },
    },
  },
  //dice
  "wooden",
  //diceNumber
  "1d20"
);

export const intro_3_1_success = new event(
  //text
  `Vous remarquez à quelques pieds de vous une souche d’arbre rongé par les termites, en son creux se cache une <p data-text="${stuff.bourse2.description}" class="tooltip anim" style="color: ${stuff.bourse2.color}">${stuff.bourse2.name}</p>`,
  //choices
  {
    choice1: {
      text: "Vous prenez la bourse.",
      direction: "intro_test_meet_1",
      stuff: stuff.bourse2,
    },
  }
);

export const intro_3_1_missed = new event(
  //text
  "Cette pause vous a revigorée.",
  //choices
  {
    choice1: {
      text: "Vous continuez votre route.",
      direction: "intro_test_meet_1",
    },
  }
);
//#endregion TEST PERCEPTION FIN

//#region TEST RENCONTRE | 1-2-3 rencontre | 4-5-6 rien
export const intro_test_meet_1 = new test(
  //Story
  `Confrontez votre destinée.`,
  //test
  {
    test1: {
      text: "Faites un test de rencontre 6.",
      hability: "meetTest",
      valueTest: 4,
      success: {
        direction: "intro_4_0",
      },
      missed: {
        direction: "bestiary_voyou_des_bois",
      },
    },
  },
  //dice
  "gemstoneMarble",
  //diceNumber
  "1d6"
);
//#endregion

//#region RENCONTRE AVEC LE BARDE 4_0 DEBUT
export const intro_4_0 = new event(
  //Story
  `<p>Vous marchez encore pendant un long moment, le soleil dans le ciel est à son point le plus haut, au loin vous reconnaissez le son d’un luth, la mélodie est accompagné d’une voix, un barde chantonne des paroles adossé sur un arbre.</p>
  `,
  //choices
  {
    choice1: {
      text: "Continuer",
      direction: "intro_4_0_next",
    },
  }
);

export const intro_4_0_next = new event(
  //Story
  `<p>Il vous voit avancer et continue sa ballade avec plus d’ardeur:</p>
   <p>“Ô Bromélia, toi mon insomnie,</p>
   <p>Ô Bromélia, toi la maîtresse de mes nuits,</p>
   <p>Ô Bromélia, toi la lune qui me…”</p>
  `,
  {
    choice1: {
      text: "“...sourit.”",
      direction: "intro_4_1",
    },
    choice2: {
      text: "“...défit.”",
      direction: "intro_4_2",
    },
    choice3: {
      text: "“...fuit.”",
      direction: "intro_4_3",
    },
  }
);

export const intro_4_1 = new event(
  //Story
  `“Oui, le sourire !” s’exclame le barde, “Sourire un jour, sourire toujours, sourire pour nous autres pauvres damnés, merci jeune personne de m’avoir redonné le sourire en cette belle journée, dans cette forêt si remarquable, que dis-je, si majestueuse ! Laissez moi vous conter l’histoire d’un barde dénommé Algus ~ le sempiternel conteur de fables, qui n’est d’autre que moi même, ouvrez grands vos oreilles jeune personne et délectez vous de la magnificence de mon récit !”`,
  //choice
  {
    choice1: {
      text: "Vous écoutez le barde et son histoire… assommante.",
      direction: "intro_4_1_1",
    },
  }
);

export const intro_4_1_1 = new eventMultiTest(
  //Story
  `Algus vous accable inlassablement de ses récits, le sauvetage du chat d’un quelconque bourgmestre coincé dans un pigeonnier ou bien sa prétendue découverte d’une antre mystique peuplée de korrigan complotistes à la chevelure dorée.`,
  //choice
  {
    choice1: {
      text: "Laisser le barde s’adonner à ses histoires.",
      direction: "intro_4_1_1_1",
    },
  },
  //test
  {
    test1: {
      text: "Tenter de mettre fin à la discussion avec un test d’érudition 14.",
      hability: "erudition",
      valueTest: 14,
      success: {
        direction: "intro_4_1_1_2_success",
      },
      missed: {
        direction: "intro_4_1_1_2_missed",
      },
    },
  },
  //dice
  "wooden",
  //diceNumber
  "1d20"
);

export const intro_4_1_1_1 = new event(
  //Story
  `Et sinon jeune personne, vous ai-je parlé de la fois où j’ai bravé monts et marais pour retrouver le sceau perdu d’un seigneur dépravé ?`,
  //choice
  {
    choice1: {
      text: "Vous écoutez pendant des heures les fastidieuses aventures du barde.",
      direction: "intro_5_0",
    },
  }
);

export const intro_4_1_1_2_success = new event(
  //Story
  `Avec une pirouette verbale des plus élégante vous arrivez à vous extirper du monologue d’Algus.`,
  //choice
  {
    choice1: {
      text: "Continuez votre route.",
      direction: "intro_5_0",
    },
  }
);

export const intro_4_1_1_2_missed = new event(
  //Story
  `Vous tentez en vain d’interrompre Algus…`,
  //choice
  {
    choice1: {
      text: "Vous écoutez la suite de de ses récits.",
      direction: "intro_4_1_1_1",
    },
  }
);

export const intro_4_2 = new event(
  //Story
  `“Le défi ? Alors soyez sur vos gardes jeune personne à qui les mots font défauts”`,
  //choice
  {
    choice1: {
      text: "Vous affrontez le barde dans une séance de bourres-pifs.",
      direction: "bestiary_barde_event_4_2",
    },
  }
);

export const intro_4_3 = new event(
  //Story
  `Vous partez en courant, laissant le barde sans voix. “Couard !” crie-t-il avant de vous voir prendre le large.`,
  //choice
  {
    choice1: {
      text: "Continuez votre route.",
      direction: "intro_test_meet_2",
    },
  }
);
//#endregion RECONTRE AVEC LE BARDE FIN

//#region TEST RENCONTRE JOUEUSE DE CARTES
export const intro_test_meet_2 = new test(
  //Story
  `Confrontez votre destinée.`,
  //test
  {
    test1: {
      text: "Faites un test de rencontre 6.",
      hability: "meetTest",
      valueTest: 4,
      success: {
        direction: "intro_5_0",
      },
      missed: {
        direction: "intro_cards_player_1",
      },
    },
  },
  //dice
  "gemstoneMarble",
  //diceNumber
  "1d6"
);

export const intro_cards_player_1 = new eventTimer(
  //Text
  `Une joueuse de cartes solitaire s'approche de vous: “Trouverez-vous la solution ?”`,
  //choicesImg
  {
    choice1: {
      direction: "intro_cards_player_1_missed",
      image: "5pique.png",
    },
    choice2: {
      direction: "intro_cards_player_1_success_0",
      image: "4pique.png",
    },
    choice3: {
      direction: "intro_cards_player_1_missed",
      image: "8pique.png",
    },
  },
  //directionTimer
  "intro_cards_player_1_missed",

  //Images
  ["1pique.png", "2pique.png", "3pique.png", "blank.png"],
  //timerTrue
  true
);

export const intro_cards_player_1_success_0 = new eventTimer(
  //Text
  `“Continuons.”`,
  //choicesImg
  {
    choice1: {
      direction: "intro_cards_player_1_success_1",
      image: "damecarreau.png",
    },
    choice2: {
      direction: "intro_cards_player_1_missed",
      image: "1trefle.png",
    },
    choice3: {
      direction: "intro_cards_player_1_missed",
      image: "valetcarreau.png",
    },
  },
  //directionTimer
  "intro_cards_player_1_missed",

  //Images
  ["roitrefle.png", "blank.png", "valetpique.png", "10coeur.png"],
  //timerTrue
  true
);

export const intro_cards_player_1_success_1 = new eventTimer(

  //Text
  `“Et pour finir.”`,

  //choicesImg
  {
    choice1: {
      direction: "intro_cards_player_1_missed",
      image: "4pique.png",
    },
    choice2: {
      direction: "intro_cards_player_1_missed",
      image: "2coeur.png",
    },
    choice3: {
      direction: "intro_cards_player_1_success_2",
      image: "2carreau.png",
    },
  },
  //directionTimer
  "intro_cards_player_1_missed",
  //Images
  ["blank.png", "3carreau.png", "2pique.png", "3pique.png"],
  //timerTrue
  true
);

export const intro_cards_player_1_success_2 = new event(
  //Text
  `“Un esprit fin dans un corps de lâche, quelle journée fabuleuse. <p>Prenez cet anneau en gage de récompense.”</p> La joueuse de cartes s'éloigne de vous jusqu'à disparaître.`,
  //Choices
  {
    choice1: {
      text: `Vous prenez l'<p data-text="${stuff.anneau_neuf_sens.description}" class="tooltip anim cursor-select" style="color: ${stuff.anneau_neuf_sens.color}">${stuff.anneau_neuf_sens.name}.</p>`,
      direction: "intro_5_0",
      stuff: stuff.anneau_neuf_sens,
    },
  }
);

export const intro_cards_player_1_missed = new event(
  //Text
  `“C'est un échec lourd de conséquences.”, dit la joueuse de cartes en s'éloignant de vous.`,
  //Choices
  {
    choice1: {
      text: "Continuez votre route.",
      direction: "intro_5_0",
    },
  }
);
//#endregion

export const intro_5_0 = new event("event_5_0", {
  choix1: { text: "le test", direction: "intro_test_timer" },
});

//#region EXEMPLE eventMultiTestLock

// export const intro_5_0 = new eventMultiTestLock(
//   //Story
//   "Multiple test",
//   //choices
//   {
//     choice1: {
//       text: "choix 1",
//       direction: "intro_5_0",
//     },
//     choice2: {
//       text: "choix 2",
//       direction: "intro_0_0",
//     },
//   },
//   //lock
//   {
//     choice3: {
//       text: `<i class="fa-solid fa-lock lock-icon"></i> <i class="fa-solid fa-lock-open hide lock-icon"></i> Vous avez la clef sombre pour ouvrir cette porte.`,
//       direction: "intro_0_0",
//       lock: "lock",
//       object: "clef sombre"
//     },
//   },
//   //test
//   {
//     test1: {
//       text: "test1",
//       hability: "perception",
//       valueTest: 10,
//       success: {
//         direction: "intro_5_test_perception_success",
//       },
//       missed: {
//         direction: "intro_5_test_perception_missed",
//       },
//     },
//     test2: {
//       text: "test2",
//       hability: "force",
//       valueTest: 10,
//       success: {
//         direction: "intro_5_test_force_success",
//       },
//       missed: {
//         direction: "intro_5_test_force_missed",
//       },
//     },
//   },
//   //multiTest
//   true,
// );

// export const intro_5_test_perception_success = new eventMultiTest(
//   "test perception réussi",
//   {
//     choice1: {
//       text: "Continuez",
//       direction: "test_0_0",
//     },
//   }
// )

// export const intro_5_test_perception_missed = new eventMultiTest(
//   "test perception échec",
//   {
//     choice1: {
//       text: "Continuez",
//       direction: "test_0_0",
//     },
//   }
// )

// export const intro_5_test_force_success = new eventMultiTest(
//   "test force réussi",
//   {
//     choice1: {
//       text: "Continuez",
//       direction: "test_0_0",
//     },
//   }
// )

// export const intro_5_test_force_missed = new eventMultiTest(
//   "test force échec",
//   {
//     choice1: {
//       text: "Continuez",
//       direction: "test_0_0",
//     },
//   }
// )
// #endregion

//#region EXEMPLE eventTimer
// export const intro_test_timer = new eventTimer(
//   `Trouver la solution.`,
//   {
//     choice1: {
//       direction: "intro_test_missed",
//       image: "5pique.png",
//     },
//     choice2: {
//       direction: "intro_test_success",
//       image: "4pique.png",
//     },
//     choice3: {
//       direction: "intro_test_missed",
//       image: "8pique.png",
//     },
//   },
//   "intro_test_missed",
//   "timer",
//   ["1pique.png", "2pique.png", "3pique.png", "blank.png"],
//   true
// );

// export const intro_test_success = new event("Timer réussi !");

// export const intro_test_missed = new event("Timer échec !");

//#endregion
