class stuff {
  constructor(name, description, categoryObject, categoryEffect, effect, color) {
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
//   )

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
