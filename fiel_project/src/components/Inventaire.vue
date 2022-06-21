<template>
  <div class="container-inventory">
    <!-- CHARACTER SHEET -->
    <div class="inventory">
      <h2>Feuille du personnage</h2>
      <!-- <img
        class="banner"
        src="../assets/images/banniere.png"
        alt=""
        draggable="false"
      /> -->
      <div class="name">
        <span class="text-name">{{ getCharacter.name }} {{ getCharacter.title }}</span>
        <div class="pv-coin">
          <div>
            <i class="fa-solid fa-shield-heart"></i> Point de vie
            <span class="pv">{{ getInventory.pv }}</span>
          </div>
          <div>
            <i class="fa-solid fa-coins"></i> Pièce d'or
            <span>{{ getInventory.gold }}</span>
          </div>
        </div>
      </div>

      <!-- <h3>Caractéristiques</h3> -->
      <div class="caracteristique">
        <div class="caracteristique-title">
          <div class="line"></div>
        </div>
        <div class="carateristique-wrapper">
          <div>
            <i class="fa-solid fa-khanda"></i> Force
            <span>{{ getInventory.force }}</span>
          </div>
          <div>
            <i class="fa-solid fa-bacon"></i> Dextérité
            <span>{{ getInventory.dexterity }}</span>
          </div>
          <div>
            <i class="fa-solid fa-hat-wizard"></i> Perception
            <span>{{ getInventory.perception }}</span>
          </div>
          <div>
            <i class="fa-solid fa-book-journal-whills"></i> Érudition
            <span>{{ getInventory.erudition }}</span>
          </div>
        </div>
      </div>

      <div class="arrow">
        <img
          src="../assets/images/arrow500.png"
          alt=""
          @click="
            hiddenSwitch();
            fadeText();
          "
        />
      </div>
    </div>
    <!-- BACKPACK -->
    <div class="inventory-backpack hidden">
      <h2>Sac à dos</h2>
      <div class="stuff-wrapper">
        <div class="stuff">
          <h3><i class="ri-sword-fill"></i> Armes</h3>
          <span
            v-for="(item, index) in getInventory.armes"
            :key="item"
            @click="useObject(item, index)"
            ><Popper :content="item.description" hover="true" placement="top">{{
              item.name
            }}</Popper></span
          >
        </div>
        <div class="stuff">
          <h3><i class="fa-solid fa-shield"></i> Armures</h3>
          <span
            v-for="(item, index) in getInventory.armures"
            :key="item"
            @click="useObject(item, index)"
            ><Popper :content="item.description" hover="true" placement="top">{{
              item.name
            }}</Popper></span
          >
        </div>
        <div class="stuff">
          <h3><i class="fa-solid fa-chess"></i> Objets</h3>
          <span
            v-for="(item, index) in getInventory.objets"
            :key="item"
            @click="useObject(item, index)"
          >
            <Popper :content="item.description" hover="true" placement="top">
              {{ item.name }}
            </Popper></span
          >
        </div>
        <div class="stuff">
          <h3><i class="ri-key-2-fill"></i> Clef</h3>
          <span
            v-for="(item, index) in getInventory.clef"
            :key="item"
            @click="useObject(item, index)"
            ><Popper :content="item.description" hover="true" placement="top">{{
              item.name
            }}</Popper></span
          >
        </div>
      </div>
      <div class="arrow">
        <img
          src="../assets/images/arrow500.png"
          alt=""
          @click="
            hiddenSwitch();
            fadeText();
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Popper from "vue3-popper";
export default {
  components: {
    Popper,
  },

  data() {
    return {};
  },

  methods: {
    //Switch l'affichage de l'inventaire
    hiddenSwitch() {
      let inventory = document.querySelector(".inventory");
      let backpack = document.querySelector(".inventory-backpack");
      inventory.classList.toggle("hidden");
      backpack.classList.toggle("hidden");
    },

    //Fondu du texte pendant les transitions de l'inventaire
    fadeText() {
      let inventory = document.querySelector(".inventory");
      let backpack = document.querySelector(".inventory-backpack");
      inventory.classList.add("anim");
      backpack.classList.add("anim");
    },

    //Utilisation d'un objet
    //Supprime l'objet selectionné en fonction de son index
    useObject(key, index) {
      if (key.categoryObject === "objets" || key.categoryObject === "clef") {
        let inventory = this.$store.state.inventory;
        inventory[key.categoryEffect] += key.effect;
        inventory[key.categoryObject].splice(index, 1);
      }
    },
  },

  computed: {
    ...mapGetters(["getInventory", "getCharacter"]),
  },
};
</script>

<style lang="scss" scoped>
.container-inventory {
  position: absolute;
  left: -1%;
  bottom: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  min-width: 250px;
  height: 80%;
  min-height: 450px;
  margin-left: 1%;
  background-image: url("../assets/images/oldpaper.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  font-family: antiqua;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.74);
  transform: rotate(-2deg) translateX(-80%);
  transition: 0.3s ease-in-out;
  &:hover {
    transform: translateX(0) rotate(0deg);
    transition: 0.3s ease-in-out;
  }
  & span {
    font-size: clamp(5px, 2.5vw, 22px);
  }
  //INVENTORY\\
  & .inventory {
    width: 85%;
    height: 75%;
    & h2 {
      font-size: clamp(5px, 2.8vw, 26px);
      text-align: center;
    }
    & .banner {
      width: 80%;
      margin: 0 auto;
    }
    & .name {
      display: block;
      margin: 5% 0;
      text-align: center;
      & .text-name {
        display: inline-block;
        margin: 5% 0;
      }
      & .pv-coin {
        display: flex;
        margin: 8% 0 0 1%;
        & div {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-grow: 1;
          font-size: clamp(5px, 1vw, 20px);
        }
      }
    }
    & .caracteristique {
      display: flex;
      flex-direction: column;
      align-items: center;
      & .caracteristique-title {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        & h3 {
          text-align: center;
          font-size: clamp(5px, 2.5vw, 22px);
        }
        & .line {
          width: 65%;
          height: 54px;
          background: url("../assets/images/line10.png");
          background-size: 100%;
          background-repeat: no-repeat;
          opacity: 0.8;
        }
      }
      & .carateristique-wrapper {
        display: flex;
        flex-wrap: wrap;
        width: 80%;
        margin: 2% 0;
        & div {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-basis: 50%;
          margin-bottom: 10%;
          font-size: clamp(5px, 1vw, 20px);
        }
      }
    }
  }

  //BACK-PACK\\
  & .inventory-backpack {
    width: 85%;
    height: 75%;
    & h2 {
      font-size: clamp(5px, 2.8vw, 26px);
      margin-bottom: 8%;
      text-align: center;
    }
    & .stuff-wrapper {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: 100%;
      & .stuff {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        height: 40%;
        overflow: auto;
        & h3 {
          margin-bottom: 8%;
          text-align: center;
        }
        & span {
          display: inline-block;
          margin-right: 15px;
          font-family: antiqua;
          font-size: 19px;
          margin-bottom: 2%;
        }
        :deep(.popper) {
          max-width: 50%;
          padding: 10px;
          background: #cbb592;
          border: 1px solid rgba(0, 0, 0, 0.733);
          border-radius: 5px;
          font-size: 14px;
          font-weight: bold;
        }
      }
    }
  }
}

.arrow {
  position: absolute;
  bottom: 7%;
  left: 35%;
  & img {
    width: 50%;
    cursor: url("../assets/images/use.cur"), auto;
  }
}

.hidden {
  display: none;
}
.anim {
  animation: fade 0.5s ease-in-out;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>