<template>
  <div class="home">
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
        </div>
      </div>
    </div>
    <Dice />
  </div>
</template>

<script>
import Inventaire from "@/components/Inventaire.vue";
import Dice from "@/components/Dice.vue";
import * as event from "@/assets/event.js";
export default {
  name: "HomeView",
  components: {
    Inventaire,
    Dice,
  },
  data() {
    return {
      event: event.intro_0_0,
    };
  },
  methods: {
    //Importe le nouvel objet dans "this.event" selon la valeur de la clé "direction"
    direction(item) {
      this.event = event[item.direction];
      if (this.event.test) {
        console.log("trigger");
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
  & .card {
    width: 25%;
    height: 65%;
    font-family: Aquifer;
    color: #f1f1f1;
    font-size: 18px;
    background: #111111;
    color: rgba(0, 0, 0, 0.795);
    padding: 1%;
    border-radius: 15px;
    & .card-wrapper {
      height: 100%;
      background: #e8bd74;
      border-radius: 1px;
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