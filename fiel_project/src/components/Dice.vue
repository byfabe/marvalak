<template>
  <div class="container-dice">
    <div class="dice-wrapper">
      <img :src="require(`@/assets/dice6/${srcDice}`)" alt="" />
    </div>
    <button @click="rollDice">Lancer le dés</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        srcDice: "inverted-dice-1.svg"
    };
  },
  methods: {
      rollDice() {
          let dice = [
              "inverted-dice-1.svg",
              "inverted-dice-2.svg",
              "inverted-dice-3.svg",
              "inverted-dice-4.svg",
              "inverted-dice-5.svg",
              "inverted-dice-6.svg",
          ]
          let diceResult = dice[Math.floor(Math.random() * dice.length)];
          this.srcDice = diceResult;
          console.log(diceResult);
      },
  },
};
</script>

<style lang="scss" scoped>
.container-dice {
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
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
}
</style>