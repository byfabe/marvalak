//import store from '../store/index'
//console.log(store.state.name);

//export const direction = {};

//event retroactif, stocker event dans perso
//composant pour chaque cartes, on est sur Vue !
import * as stuff from "@/assets/stuff.js";

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
  `"Soyez sans crainte, je suis Achilda Mortepeau, je n’ai guère d’autres intérêt que pour les potions et les incantations en tout genre, vous vous trouvez dans ma demeure, une pauvre petite bicoque clouée au fin fond de la forêt d’Espérance .” vous dit-elle d’un ton plutôt rassurant.`,
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
  "La vieille femme vous saisit le poignet, sa peau est froide comme les neiges des montagnes du nord, vous sentez ses paroles s'immiscer dans votre esprit, les mots sont d’une langue non commune mais vous en comprenez le sens : “Je me nomme Achilda Mortepeau la nécromancienne, l’une des cinq soeurs de la création, nous sommes ici dans ma demeure, une petite bicoque située dans la forêt d’Espérance.",

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

export const intro_3_0 = new event(
  //Story
  `Vous vous éloignez de la maisonnette et vous suivez un sentier en direction du nord. Autour de vous la forêt est dense, quelques rayons de soleil percent le feuillages, le sifflement des oiseaux habille généreusement l’atmosphère et l’odeur terreuse de l’humus se fait ressentir de toute part.`,

  //choices
  {
    choice1: {
      text: "Vous décidez de contempler la nature béant d’admiration",
      direction: "test_0_0",
    },
    choice2: {
      text: "Vous continuez votre chemin.",
      direction: "intro_4_0",
    },
  }
);


