<template>
  <div class="home">
    <Inventaire />
    <div class="text" @click="fadeText">
      <p>{{ event.text }}</p>
      <p
        class="choix"
        v-for="item in event.choice"
        :key="item"
        @click="direction(item)"
      >
        {{ item.text }}
      </p>
    </div>
  </div>
</template>

<script>
import Inventaire from "@/components/Inventaire.vue";
import * as event from "@/assets/event.js";
export default {
  name: "HomeView",
  components: {
    Inventaire,
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
.testevent {
  position: absolute;
  top: 0;
}
.home {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #412407;
  & .text {
    width: 35%;
    font-family: Aquifer;
    color: #f1f1f1;
    font-size: 20px;
    background: #e8bd74;
    color: rgba(0, 0, 0, 0.795);
    padding: 2%;
    & p {
      white-space: break-spaces;
    }
    & .choix {
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
@keyframes fade {
  0% {
    color: transparent;
  }
  100% {
    color: rgba(0, 0, 0, 0.795);
  }
}
</style>