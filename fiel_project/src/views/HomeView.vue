<template>
  <div class="home" id="home">
    <div id="dice-box"></div>
    <Inventaire />
    <img class="map" src="@/assets/images/map2.png" alt="" draggable="false" />
    <div class="card">
      <!-- <div class="illustration"></div> -->
      <!-- ICONES DES EVENEMENTS -->
      <div class="logo">
        <!-- LOGO BOOK EVENT -->
        <img
          class="book animImage"
          v-if="this.event.fight != true && this.event.timerTrue != true"
          src="../assets/images/storyEvent2.png"
          alt=""
          draggable="false"
        />

        <!-- LOGO FIGHT EVENT -->
        <img
          class="sword animImage"
          v-if="this.event.fight === true"
          src="../assets/images/fightEvent.png"
          alt=""
          draggable="false"
        />

        <!-- AFFICHE LE TIMER SI L'EVENT CONTIENT LE MOT CLEE "TIMER" -->
        <p class="timer anim time" v-if="this.event.timerTrue === true"></p>
      </div>

      <!-- TOUTE LA ZONE TEXTE DEBUT -->
      <div class="text">
        <!-- HISTOIRE // TEXTE D'AMBIANCE -->
        <p
          class="story"
          v-html="this.event.text"
          v-if="this.fightTrigger === false"
        ></p>

        <!-- AFFICHE LES IMAGES SI IL Y A LA CLEE "IMAGES" DANS L'OBJET -->
        <div class="box-img" v-if="this.event.timerTrue === true">
          <img
            v-for="image in this.event.images"
            :key="image"
            :src="require('@/assets/cards/' + image)"
            alt=""
            draggable="false"
          />
        </div>

        <!-- LES TYPES DE CHOIX -->
        <ol v-if="event.test != true">
          <!-- CHOIX CLASSIQUE-->
          <li
            v-html="item.text"
            class="choice"
            :class="item.class"
            v-for="item in event.choices"
            :key="item"
            @click="direction(item), fadeText()"
          ></li>

          <!-- CHOIX IMAGES -->
          <div class="choice-img" v-if="this.event.timerTrue === true">
            <li
              v-for="item in event.choicesImg"
              :key="item"
              @click="direction(item), fadeText()"
            >
              <img
                class="cursor-select animImage"
                :src="require('@/assets/cards/' + item.image)"
                alt=""
                draggable="false"
              />
            </li>
          </div>

          <!-- CHOIX VEROUILLE -->
          <li
            v-html="item.text"
            class="choice"
            :class="item.lock"
            v-for="item in event.lock"
            :key="item"
            @click="lock(item, $event)"
          ></li>

          <!-- CHOIX TEST // MULTITEST-->
          <li
            v-html="item.text"
            class="choice"
            v-for="item in event.test"
            :key="item"
            @click="diceRollTest(item)"
          ></li>
        </ol>

        <!-- AFFICHE LE COMBAT DEBUT-->
        <div class="fight" v-if="this.event.fight === true">
          <p class="fight-name" v-if="this.fightTrigger === false">
            {{ event.name }}
            <i class="fa-solid fa-khanda"></i>{{ event.strength }}
          </p>
          <p class="fight-strength"></p>

          <!-- LANCE LE DES -->
          <p
            v-if="this.fightTrigger != true"
            @click="diceRoll"
            class="roll-dice-text choice"
          >
            Lancez le <i class="fa-solid fa-dice-d6"></i> !
          </p>

          <!-- RESULTAT DU COMBAT -->
          <div class="result-fight" v-if="this.fightTrigger === true">
            <div class="score-result">
              <div class="icon-result">
                <span>Vous:</span>
                <i class="fa-solid fa-khanda"></i>{{ getInventory.force }} +
                <i class="fa-solid fa-dice-d6"></i>{{ valueRoll }}
              </div>
              <p>{{ youResult }}</p>
            </div>
            <div class="score-result">
              <div class="icon-result">
                <span>{{ event.name }}:</span>
                <i class="fa-solid fa-khanda"></i>{{ event.strength }} +
                <i class="fa-solid fa-dice-d6"></i>{{ valueRollEnnemy }}
              </div>
              <p>{{ ennemyResult }}</p>
            </div>

            <!-- CHOIX DE LA VICTOIRE -->
            <p
              class="choice"
              v-html="event.result.win.text"
              v-if="this.win === true"
              @click="
                direction(event.result.win),
                  fadeText(),
                  effect(event.result.win),
                  addObject(event.result.win)
              "
            ></p>

            <!-- CHOIX DE LA DEFAITE -->
            <p
              class="choice"
              v-html="event.result.lose.text"
              v-if="this.lose === true"
              @click="
                direction(event.result.lose),
                  fadeText(),
                  effect(event.result.lose),
                  addObject(event.result.lose)
              "
            ></p>
          </div>
        </div>
        <!-- AFFICHE LE COMBAT FIN-->
      </div>
      <!-- TOUTE LA ZONE TEXTE FIN -->
    </div>

    <!-- ILLUSTRATION BOARD -->
    <img
      class="castle"
      src="../assets/images/castle.png"
      alt=""
      draggable="false"
    />
    <!-- <Dice @diceValue="diceValueRoll" /> -->
  </div>
</template>

<script>
import Popper from "vue3-popper";
import { mapGetters } from "vuex";
import Inventaire from "@/components/Inventaire.vue";
import * as event from "@/assets/event.js";
import * as bestiary from "@/assets/bestiary.js";
import DiceBox from "@3d-dice/dice-box";

export default {
  name: "HomeView",
  components: {
    Inventaire,
    Popper,
  },
  data() {
    return {
      //current event
      event: event.intro_0_0,

      //Inventory

      //Fight
      fightTrigger: false,
      valueRoll: undefined,
      valueRollEnnemy: undefined,
      youResult: undefined,
      ennemyResult: undefined,
      win: false,
      lose: false,

      //test
      valueRollTest: undefined,
      youResultTest: undefined,

      //Audio
      mute: false,

      //timer
      timer: null,
    };
  },
  methods: {
    //Importe le nouvel objet dans "this.event" selon la valeur de la clé "direction"
    direction(item) {
      if (item.direction.includes("bestiary")) {
        this.event = bestiary[item.direction];
      } else {
        this.event = event[item.direction];
      }

      // Si il y a un timer se dirige vers la direction au bout de 10s
      if (this.event.timerTrue === true) {
        this.runTimer();
      }

      //ajoute un objet à l'inventaire si stuff existe
      this.addObject(item);

      //Modifie les stat
      this.effect(item);

      //Lecture de l'audio de l'event si mute === "false"
      if (this.mute === false && this.event.audio) {
        let audio = new Audio(require("@/assets/sounds/" + this.event.audio));
        audio.play();
      }

      //Reset la value des fight
      this.fightTrigger = false;
      this.valueRoll = undefined;
      this.valueRollTest = undefined;
      this.win = false;
      this.lose = false;
      if (this.event.timerTrue === undefined) {
        clearTimeout(this.timer);
      }
    },

    //Clear le setTimeout si il y a un timer d'actif
    //Lance un nouveau setTimeout avec run()
    //Retire la classe "timer" pour reset l'animation
    runTimer() {
      let classTime = document.querySelector(".time");
      if (this.timer !== null) {
        clearTimeout(this.timer);
        this.timer = null;
        classTime.classList.remove("timer", "anim");
      }
      this.run(classTime);
    },

    //Timer de 10s > se dirige vers l'event "directionTimer"
    //Ajoute la classe "timer" pour relancer de zéro l'animation
    run(classTime) {
      this.timer = setTimeout(() => {
        this.event = event[this.event.directionTimer];
        this.fadeText();
      }, 10000);
      setTimeout(() => {
        if (this.timer == null) {
          classTime.classList.add("timer", "anim");
        }
      }, 100);
    },

    //Roll ennemy
    diceRollEnnemy() {
      //Nouvelle instance
      const diceBox = new DiceBox("#dice-box", {
        assetPath: "/assets/dice-box/",
        scale: "4",
        theme: "diceOfRolling",
      });
      diceBox.init().then(() => {
        diceBox.roll("1d6").then((results) => {
          //Récupère la valeur du dés, lance le résultat du combat après le lancé du dés
          //Si plusieurs dés, la boucle for additionne tous les results.value
          let total = 0;
          for (const i in results) {
            total += results[i].value;
          }
          this.valueRollEnnemy = total;
          this.fight();
          this.fightTrigger = true;
          this.fadeText();
        });
      });
      //Efface le dés après 5s
      setTimeout(() => {
        let canvas = document.querySelector("canvas");
        canvas.remove();
      }, 5000);

      //Lecture de l'audio
      if (this.mute === false) {
        let audio = new Audio(require("@/assets/sounds/dice.mp3"));
        audio.play();
      }
    },

    //Lance le dés si "valueRoll" n'a pas de valeur
    diceRoll() {
      if (!document.querySelector("canvas")) {
        //Nouvelle instance
        const diceBox = new DiceBox("#dice-box", {
          assetPath: "/assets/dice-box/",
          scale: "4",
          theme: "wooden",
        });
        diceBox.init().then(() => {
          diceBox.roll("1d6").then((results) => {
            //Récupère la valeur du dés, lance le résultat du combat après le lancé du dés
            //Si plusieurs dés, la boucle for additionne tous les results.value
            if (this.valueRoll === undefined) {
              let total = 0;
              for (const i in results) {
                total += results[i].value;
              }
              this.valueRoll = total;
              this.diceRollEnnemy();
            }
          });
        });
        //Efface le dés après 5s
        setTimeout(() => {
          let canvas = document.querySelector("canvas");
          canvas.remove();
        }, 5000);

        //Lecture de l'audio
        if (this.mute === false) {
          let audio = new Audio(require("@/assets/sounds/dice.mp3"));
          audio.play();
        }
      }
    },

    //Ajoute le stuff dans inventory.objets si item.stuff existe
    addObject(item) {
      if (
        (item.stuff && item.stuff.categoryObject === "objets") ||
        (item.stuff && item.stuff.categoryObject === "clef")
      ) {
        this.$store.commit("ADD_OBJECTS", item.stuff);
      } else if (
        (item.stuff && item.stuff.categoryObject === "armes") ||
        (item.stuff && item.stuff.categoryObject === "armures")
      ) {
        this.$store.commit("ADD_EQUIPMENT", item.stuff);
        this.getInventory[item.stuff.categoryEffect] += item.stuff.effect;
      }
    },

    //Modifie les stat du personnage si il existe un effect
    effect(item) {
      if (item.effect) {
        this.getInventory[item.categoryEffect] += item.effect;
      }
    },

    //Après le lancé de dés calcul le résultat du dés et des caractéristiques du personnage
    //et compare le résultat avec celui de la créature et renvoi true selon la victoire ou la défaite
    fight() {
      this.youResult = this.getInventory.force + this.valueRoll;
      this.ennemyResult = this.event.strength + this.valueRollEnnemy;
      if (this.youResult >= this.ennemyResult) {
        this.win = true;
      } else {
        this.lose = true;
      }
    },

    //lance un dés de 20
    diceRollTest(item) {
      if (!document.querySelector("canvas")) {
        //Nouvelle instance
        const diceBox = new DiceBox("#dice-box", {
          assetPath: "/assets/dice-box/",
          scale: "4",
          theme: this.event.dice,
        });
        diceBox.init().then(() => {
          diceBox.roll(this.event.diceNumber).then((results) => {
            if (this.valueRollTest === undefined) {
              this.valueRollTest = results[0].value;
              this.test(item);
              this.fadeText();
            }
          });
        });
        //Efface le dés après 5s
        setTimeout(() => {
          let canvas = document.querySelector("canvas");
          canvas.remove();
        }, 5000);

        //Lecture de l'audio
        if (this.mute === false) {
          let audio = new Audio(require("@/assets/sounds/dice.mp3"));
          audio.play();
        }
      }
    },

    //Compare le dés de test et l'habilité du personnage
    //Redirige vers direction success ou missed
    test(item) {
      this.youResultTest =
        this.getInventory[item.hability] + this.valueRollTest;
      //Success
      if (this.youResultTest >= item.valueTest) {
        this.direction(item.success);
        //Missed
      } else {
        this.direction(item.missed);
      }
    },

    //Si le bon objet est dans l'inventaire, déverouille le choix
    lock(item, event) {
      let icon = document.querySelectorAll(".lock-icon");
      if (this.getInventory.clef.includes(item.object)) {
        event.target.classList.remove("lock");

        //Change l'icone de vérrou
        icon.forEach((i) => i.classList.toggle("hide"));

        //Envoi sur le prochain event
        setTimeout(() => {
          this.direction(item);
          this.fadeText();
        }, 1100);
      } else {
        console.log("ko");
      }
    },

    //Fondu du texte pendant les transitions
    fadeText() {
      let p = document.querySelector(".text");
      p.classList.add("animImage");

      setTimeout(() => {
        p.classList.remove("animImage");
      }, 900);
    },

    //EXEMPLE PARENT/ENFANT
    // diceValueRoll(value) {
    //   if (this.valueRoll === undefined) {
    //     this.valueRoll = value;
    //     this.fight();
    //     this.fightTrigger = true;
    //   }
    // },
  },
  computed: {
    ...mapGetters(["getInventory", "getCharacter"]),
  },
  mounted() {
    //DISABLE RIGHT CLICK
    // window.addEventListener(
    //   "contextmenu",
    //   function (e) {
    //     // do something here...
    //     e.preventDefault();
    //   },
    //   false
    // );
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #412407;
  background-image: url("../assets/images/bg50.png");
  background-size: 100% 100vh;
  background-position: center;
  & .map {
    position: absolute;
    z-index: 200;
    top: -95%;
    transform: rotate(10deg);
    width: 60%;
    transition: all 0.5s ease-in-out;
    &:hover {
      top: 0;
      transform: rotate(0deg);
      transition: all 0.4s ease-in-out;
    }
  }
  & .card {
    width: 24%;
    height: 65%;
    font-family: Aquifer;
    font-size: 19px;
    color: rgba(0, 0, 0, 0.795);
    & .logo {
      display: flex;
      justify-content: center;
      margin: 6% 0;
      & img {
        width: 80%;
      }
    }
    & .illustration {
      width: 100%;
      height: 50%;
      //background-image: url("../assets/01.jpg");
      background-size: cover;
      background-position: center;
      border: 2px solid #272727;
      margin: 2% 0;
    }
    & .story {
      margin: 10% 0;
      line-height: 25px;
      white-space: pre-line;
    }
    & .box-img {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 10%;
      padding: 0 4%;
    }
    & p,
    ol {
      padding: 0 4%;
    }
    & .choice {
      cursor: url("../assets/images/use.cur"), auto;
      margin-top: 2%;
      font-weight: bold;
      line-height: 25px;
    }
    & .choice-img {
      display: flex;
      justify-content: space-between;
      & img {
        width: 80%;
      }
    }
    & .lock {
      color: rgba(0, 0, 0, 0.336);
    }
    & :deep .hide {
      display: none;
    }
    & .fight {
      & .roll-dice-text {
        margin: 5% 0;
        //cursor: pointer;
        font-weight: bold;
      }
      & .result-fight {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 5% 0;
        & .score-result {
          text-align: center;
          margin-bottom: 7%;
          & .icon-result {
            width: 100vw;
            margin: 20px 0;
            & span {
              font-size: 22px;
              margin-right: 5px;
            }
          }
          & p {
            font-size: 30px;
            font-weight: bold;
          }
        }
      }
    }
  }
}
:deep(.anim) {
  animation: fade 0.9s ease-in-out;
}
.animImage {
  animation: fadeImage 0.9s ease-in-out;
}
.timer {
  height: 25px;
  font-weight: bold;
  font-size: 24px;
  font-family: "Font Awesome 5 Free";
  &::after {
    content: "";
    animation: countdown 10s forwards;
  }
}
.cursor-select {
  cursor: url("../assets/images/use.cur"), auto;
}
.pointer-event {
  pointer-events: none;
}
@keyframes fade {
  0% {
    color: transparent;
  }
  100% {
    color: rgba(0, 0, 0, 0.795);
  }
}
@keyframes fadeImage {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes countdown {
  0% {
    content: "\f525  \f525  \f525  \f525  \f525  \f525  \f525  \f525  \f525  \f525";
  }
  10% {
    content: "\f525  \f525  \f525  \f525  \f525  \f525  \f525  \f525  \f525  \f0c8";
  }
  20% {
    content: "\f525  \f525  \f525  \f525  \f525  \f525  \f525  \f525  \f0c8  \f0c8";
  }
  30% {
    content: "\f525  \f525  \f525  \f525  \f525  \f525  \f525  \f0c8  \f0c8  \f0c8";
  }
  40% {
    content: "\f525  \f525  \f525  \f525  \f525  \f525  \f0c8  \f0c8  \f0c8  \f0c8";
  }
  50% {
    content: "\f525  \f525  \f525  \f525  \f525  \f0c8  \f0c8  \f0c8  \f0c8  \f0c8";
  }
  60% {
    content: "\f525  \f525  \f525  \f525  \f0c8  \f0c8  \f0c8  \f0c8  \f0c8  \f0c8";
  }
  70% {
    content: "\f525  \f525  \f525  \f0c8  \f0c8  \f0c8  \f0c8  \f0c8  \f0c8  \f0c8";
  }
  80% {
    content: "\f525  \f525  \f0c8  \f0c8  \f0c8  \f0c8  \f0c8  \f0c8  \f0c8  \f0c8";
  }
  90% {
    content: "\f525  \f0c8  \f0c8  \f0c8  \f0c8  \f0c8  \f0c8  \f0c8  \f0c8  \f0c8";
  }
  100% {
    content: "\f54c";
  }
}
.castle {
  position: fixed;
  z-index: 100;
  width: 20%;
  right: 8%;
  bottom: 10%;
}
#dice-box {
  position: fixed;
  pointer-events: none;
  z-index: 101;
  width: 100%;
  height: 100%;
}
//Tooltip sur les mots mis en évidence - version courte
:deep(.tooltip) {
  position: relative;
  display: inline;
  cursor: url("../assets/images/use.cur"), auto;
  &:before {
    content: attr(data-text);
    position: absolute;

    /* vertically center */
    top: -100%;
    transform: translateY(-100%);

    /* move to right */
    left: 0;

    /* basic styles */
    white-space: pre;
    padding: 10px;
    background: #cbb592;
    border: 2px solid rgba(0, 0, 0, 0.733);
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.795);
    font-family: antiqua;

    display: none;
  }
  &:hover:before {
    display: block;
  }
}
//Tooltip sur les mots mis en évidence - version longue
:deep(.tooltip-xl) {
  position: relative;
  display: inline;
  cursor: url("../assets/images/use.cur"), auto;
  &:before {
    content: attr(data-text);
    position: absolute;
    z-index: 200;

    /* vertically center */
    top: -100%;
    transform: translateY(-100%);

    /* move to right */
    left: 0;

    /* basic styles */
    width: 25vw;
    padding: 10px;
    background: #cbb592;
    border: 2px solid rgba(0, 0, 0, 0.733);
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.795);
    font-family: antiqua;

    display: none;
  }
  &:hover:before {
    display: block;
  }
}
</style>