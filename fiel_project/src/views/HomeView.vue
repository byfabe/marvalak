<template>
  <div class="home" id="home">
    <div id="dice-box"></div>
    <Inventaire />
    <div class="card">
      <!-- <div class="illustration"></div> -->
      <!-- ICONES DES EVENEMENTS -->
      <div class="logo">
        <img
          class="book animImage"
          v-if="this.event.fight != true"
          src="../assets/images/storyEvent2.png"
          alt=""
          draggable="false"
        />
        <img
          class="sword animImage"
          v-if="this.event.fight === true"
          src="../assets/images/fightEvent.png"
          alt=""
          draggable="false"
        />
      </div>

      <!-- TOUTE LA ZONE TEXTE DEBUT -->
      <div class="text">
        <!-- HISTOIRE // TEXTE D'AMBIANCE -->
        <p class="story" v-if="this.fightTrigger === false">
          {{ event.text }}
        </p>

        <!-- LES CHOIX -->
        <ol>
          <li
            class="choice"
            v-for="item in event.choices"
            :key="item"
            @click="direction(item), fadeText()"
          >
            {{ item.text }}
          </li>
        </ol>

        <!-- AFFICHE LE COMBAT DEBUT-->
        <div class="fight" v-if="this.event.fight === true">
          <p class="fight-name" v-if="this.fightTrigger === false">
            {{ event.name }}
            <i class="fa-solid fa-khanda"></i>
            <i :class="event.strengthDice"></i>
          </p>
          <p class="fight-strength"></p>

          <!-- LANCE LE DES -->
          <p
            v-if="this.fightTrigger != true"
            @click="diceRoll"
            class="roll-dice-text"
          >
            Lancez le <i class="fa-solid fa-dice-d6"></i> !
          </p>

          <!-- RESULTAT DU COMBAT -->
          <div class="result-fight" v-if="this.fightTrigger === true">
            <div class="score-result">
              <span>Vous</span>
              <div class="icon-result">
                <i class="fa-solid fa-khanda"></i>{{ youResult }}
              </div>
            </div>
            <div class="score-result">
              <span>{{ event.name }}</span>
              <div class="icon-result">
                <i class="fa-solid fa-khanda"></i>{{ event.strength }}
              </div>
            </div>

            <!-- CHOIX DE LA VICTOIRE -->
            <p
              class="choice"
              v-if="this.win === true"
              @click="direction(event.result.win), fadeText()"
            >
              {{ event.result.win.text }}
            </p>

            <!-- CHOIX DE LA DEFAITE -->
            <p
              class="choice"
              v-if="this.lose === true"
              @click="direction(event.result.lose), fadeText()"
            >
              {{ event.result.lose.text }}
            </p>
          </div>
        </div>
        <!-- AFFICHE LE COMBAT FIN-->
      </div>
      <!-- TOUTE LA ZONE TEXTE FIN -->
    </div>
    <img class="castle" src="../assets/images/castle.png" alt="" />
    <!-- <Dice @diceValue="diceValueRoll" /> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Inventaire from "@/components/Inventaire.vue";
import Dice from "@/components/Dice.vue";
import * as event from "@/assets/event.js";
import * as bestiary from "@/assets/bestiary.js";
import DiceBox from "@3d-dice/dice-box";

export default {
  name: "HomeView",
  components: {
    Inventaire,
    Dice,
  },
  data() {
    return {
      //current event
      event: event.intro_0_0,

      //Inventory

      //Fight
      fightTrigger: false,
      valueRoll: undefined,
      youResult: undefined,
      win: false,
      lose: false,

      //Audio
      mute: false,
    };
  },
  methods: {
    //Lance le dés, si "valueRoll" n'a pas de valeur, lance fight()
    diceRoll() {
      if (!document.querySelector("canvas")) {
        //Nouvelle instance
        const diceBox = new DiceBox("#dice-box", {
          assetPath: "/assets/dice-box/",
          scale: "4",
        });
        diceBox.init().then(() => {
          diceBox.roll("1d6").then((results) => {
            //Récupère la valeur du dés, lance le résultat du combat après le lancé du dés
            if (this.valueRoll === undefined) {
              this.valueRoll = results[0].value;
              this.fight();
              this.fightTrigger = true;
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
    
    //Importe le nouvel objet dans "this.event" selon la valeur de la clé "direction"
    direction(item) {
      console.log(this.event);
      if (item.direction.includes("intro")) {
        this.event = event[item.direction];
      }
      //Si l'event est un combat
      else if (item.direction.includes("bestiary")) {
        this.event = bestiary[item.direction];
      }

      //Ajoute le stuff dans inventory.objets si item.stuff existe
      if (item.stuff) {
        this.$store.commit("ADD_OBJECTS", item.stuff);
      }

      //Lecture de l'audio de l'event si mute === "false"
      if (this.mute === false && this.event.audio) {
        let audio = new Audio(require("@/assets/sounds/" + this.event.audio));
        audio.play();
      }

      //Reset la value des fight
      this.fightTrigger = false;
      this.valueRoll = undefined;
      this.win = false;
      this.lose = false;
    },

    //Après le lancé de dés calcul le résultat du dés et des caractéristiques du personnage
    //et compare le résultat avec celui de la créature et renvoi true selon la victoire ou la défaite
    fight() {
      this.youResult = this.getInventory.force + this.valueRoll;
      if (this.youResult >= this.event.strength) {
        this.win = true;
      } else {
        this.lose = true;
      }
    },

    //EXEMPLE PARENT/ENFANT
    // diceValueRoll(value) {
    //   if (this.valueRoll === undefined) {
    //     this.valueRoll = value;
    //     this.fight();
    //     this.fightTrigger = true;
    //   }
    // },

    //Fondu du texte pendant les transitions
    fadeText() {
      let p = document.querySelector(".text");
      p.classList.add("anim");

      setTimeout(() => {
        p.classList.remove("anim");
      }, 900);
    },
  },
  computed: {
    ...mapGetters(["getInventory", "getCharacter"]),
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.castle {
  position: absolute;
  z-index: 100;
  width: 20%;
  right: 8%;
  bottom: 10%;
}
#dice-box {
  position: fixed;
  pointer-events: none;
  z-index: 100;
  width: 100%;
  height: 100%;
}
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
  & .card {
    width: 24%;
    height: 65%;
    font-family: Aquifer;
    font-size: 19px;
    color: rgba(0, 0, 0, 0.795);
    & .logo {
      margin: 6% 0;
      & img {
        width: 100%;
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
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 7%;
          & span {
            font-size: 22px;
          }
        }
      }
    }
  }
}
.anim {
  animation: fade 0.9s ease-in-out;
}
.animImage {
  animation: fadeImage 0.9s ease-in-out;
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
</style>