<template>
  <div class="home">
    <Inventaire />
    <div class="text">
      <p>{{ text1 }}</p>
    </div>
    <button @click="fadeText">Change</button>
  </div>
</template>

<script>
import Inventaire from '@/components/Inventaire.vue'

export default {
  name: "HomeView",
  components: {
    //HelloWorld
    Inventaire
  },
  data() {
    return {
      text1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur fugiat numquam aliquid esse dolorum inventore qui ab non dolor expedita.",
    };
  },
  methods: {
    fadeText() {
      let p = document.querySelector("p");
      p.classList.add("anim");

      setTimeout(() => {
        p.classList.remove("anim");
      }, 800);
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(43, 42, 42);
  & .text {
    width: 20%;
    color: #f1f1f1;
    font-size: 20px;
    .anim {
      animation: fade 0.8s ease-in-out;
    }
    & button {
      margin-left: 50px;
    }
  }
}
@keyframes fade {
  0% {
    color: transparent;
  }
  100% {
    color: #f1f1f1;
  }
}
</style>