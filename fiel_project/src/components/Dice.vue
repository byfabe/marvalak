<template>
  <div class="container-dice">
    <div class="dice-wrapper">
      <img
        :src="require(`@/assets/dice6/inverted-dice-${resultDice}.svg`)"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);
export default {
  data() {
    return {
      resultDice: 1,
    };
  },
  methods: {
    //Fonction pour avoir un chiffre aléatoire entre 1 et 6  
    rollDice() {
      let dice = [1, 2, 3, 4, 5, 6];
      let diceResult = dice[Math.floor(Math.random() * dice.length)];
      this.resultDice = diceResult;
    },
    //Rend le dés draggable et à la fin du drag lance la fonction rollDice
    diceDraggable() {
      Draggable.create(".container-dice", {
        type: "x,y",
        edgeResistance: 1,
        bounds: document.getElementById("home"),
        inertia: true,
        onClick: function () {
          console.log("clicked");
        },
        onDragEnd: () => {
          const tl = gsap.timeline();
          tl.from(".container-dice", {
            opacity: 0.5,
            scale: 0.8,
            ease: "bounce",
            duration: 0.5,
          });
          this.rollDice();
          this.$emit("diceValue", this.resultDice);
        },
      });
    },
  },
  mounted() {
    this.diceDraggable();
  },
};
</script>

<style lang="scss" scoped>
.container-dice {
  position: absolute;
  bottom: 0;
  left: 0;
  & .dice-wrapper {
    width: 85px;
    height: 85px;
    overflow: hidden;
    & img {
      width: 80px;
      border-radius: 10px;
      margin: 5px;
    }
  }
  & button {
    margin: 10% 0;
    background: none;
    border: none;
    font-size: 30px;
  }
}
</style>