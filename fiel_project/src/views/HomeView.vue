<template>
  <div class="home" id="home">
    <Inventaire />
    <div class="card" @click="fadeText">
      <div class="card-wrapper">
        <div class="title">
          <p>Rencontre avec le diable.</p>
        </div>
        <div class="illustration"></div>
        <div class="text">
          <p class="story">{{ event.text }}</p>
          <p
            class="choice"
            v-for="item in event.choice"
            :key="item"
            @click="direction(item)"
          >
            {{ item.text }}
          </p>
          <!-- AFFICHE LE COMBAT DEBUT-->
          <div class="fight" v-if="this.event.fight === true">
            <p>{{ event.name }}</p>
            <p>Force: {{ event.strength }}</p>
            <p v-if="this.fightTrigger != true">Lancez le dés !</p>
            <p v-if="this.fightTrigger === true">
              Vous de force {{ youResult }} <i class="fa-solid fa-khanda"></i>
              {{ event.name }} de force {{ event.strength }}
            </p>
            <p
              class="choice"
              v-if="this.win === true"
              @click="direction(event.result.win)"
            >
              {{ event.result.win.text }}
            </p>
            <p
              class="choice"
              v-if="this.lose === true"
              @click="direction(event.result.lose)"
            >
              {{ event.result.lose.text }}
            </p>
          </div>
          <!-- AFFICHE LE COMBAT FIN-->
        </div>
      </div>
    </div>
    <Dice @diceValue="diceValueRoll" />
  </div>
</template>

<script>
import Inventaire from "@/components/Inventaire.vue";
import Dice from "@/components/Dice.vue";
import * as event from "@/assets/event.js";
import * as bestiary from "@/assets/bestiary.js";
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
      force: 1,

      //Fight
      fightTrigger: false,
      valueRoll: undefined,
      youResult: undefined,
      win: false,
      lose: false,
    };
  },
  methods: {
    //Importe le nouvel objet dans "this.event" selon la valeur de la clé "direction"
    direction(item) {
      if (item.direction.includes("intro")) {
        this.event = event[item.direction];
      }
      //Si l'event est un combat
      if (item.direction.includes("bestiary")) {
        this.event = bestiary[item.direction];
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
      this.youResult = this.force + this.valueRoll;
      if (this.youResult > this.event.strength) {
        this.win = true;
      }
      if (this.youResult < this.event.strength) {
        this.lose = true;
      }
    },
    //Récupère la valeur du dés, lance le résultat du combat après le lancé du dés
    diceValueRoll(value) {
      if (this.valueRoll === undefined) {
        this.valueRoll = value;
        this.fight();
        this.fightTrigger = true;
      }
    },
    //Fondu du texte pendant les transitions
    fadeText() {
      let p = document.querySelectorAll("p");
      for (const i in p) {
        if (p[i].classList === undefined) {
          return;
        }
        p[i].classList.add("anim");

        setTimeout(() => {
          p[i].classList.remove("anim");
        }, 900);
      }
    },
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
  background-image: url("../assets/back2-1.png");
  background-size: cover;
  & .card {
    // width: 25%;
    // height: 65%;
    width: 480px;
    height: 603px;
    font-family: Aquifer;
    color: #f1f1f1;
    font-size: 18px;
    background: #111111;
    color: rgba(0, 0, 0, 0.795);
    padding: 1%;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    & .card-wrapper {
      height: 100%;
      background: #e8bd74;
      background-image: url("../assets/paper4.jpg");
      background-size: cover;
      border-radius: 3px;
      padding: 2%;
      & .title {
        font-weight: bold;
      }
      & .illustration {
        width: 100%;
        height: 50%;
        background-image: url("../assets/01.jpg");
        background-size: cover;
        background-position: center;
        border: 2px solid #272727;
        margin: 2% 0;
      }
      & .story {
        margin-top: 3%;
      }
      & p {
        white-space: break-spaces;
        margin-left: 0.5%;
      }
      & .choice {
        cursor: pointer;
        margin-top: 2%;
      }
      .anim {
        animation: fade 0.9s ease-in-out;
      }
      & button {
        margin-left: 50px;
      }
    }
  }
}
@keyframes fade {
  0% {
    color: transparent;
  }
  100% {
    color: rgba(0, 0, 0, 0.795);
  }
}
</style>