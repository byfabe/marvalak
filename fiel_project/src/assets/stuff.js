class stuff {
  constructor(
    name,
    description,
    categoryObject,
    categoryEffect,
    effect,
    color
  ) {
    this.name = name;
    this.description = description;
    this.categoryObject = categoryObject;
    this.categoryEffect = categoryEffect;
    this.effect = effect;
    this.color = color;
  }
}

//   export const objectHere = new stuff(
//       //name
//       //description
//       //categoryObject
//       //categoryEffect
//       //effect
//       //color
//   )

//#region FIOLE DE VIE
export const fioleDeVie = new stuff(
  //name
  "fiole de vie",
  //description
  "Une petite fiole en verre contenant un liquide rougeâtre.",
  //categoryObject
  "objets",
  //categoryEffect
  "pv",
  //effect
  +1,
  //color
  "rgb(46, 4, 24);"
);
//#endregion

//#region BOURSE2
export const bourse2 = new stuff(
  //name
  "bourse",
  //description
  "Une bourse en cuir.",
  //categoryObject
  "objets",
  //categoryEffect
  "gold",
  //effect
  +2,
  //color
  "rgb(46, 4, 24);"
);
//#endregion

//#region CLEF A GORGES
export const clef_gorges = new stuff(
  //name
  "Clef à gorges",
  //description
  "Elle ouvre des portes.",
  //categoryObject
  "clef",
  //categoryEffect
  "",
  //effect
  "",
  //color
  "rgb(46, 4, 24);"
);
//#endregion

//#region BAGUE DE PERCEPTION +2
export const anneau_neuf_sens = new stuff(
  //name
  "Anneau neuf sens",
  //description
  "Un anneau ésotérique qui s'adpate à la taille de votre doigt. Il augmente la perception.",
  //categoryObject
  "armures",
  //categoryEffect
  "perception",
  //effect
  +2,
  //color
  "rgb(46, 4, 24);"
);
//#endregion