<template>
  <div class="container-inventory">
    <!-- CHARACTER SHEET -->
    <div class="inventory">
      <h2>Feuille du personnage</h2>
      <div class="name">
        <span>{{ getCharacter.name }} {{ getCharacter.title }}</span>
        <ul>
          <li>
            <i class="fa-solid fa-shield-heart"></i> Point de vie:
            <span class="pv">{{ getInventory.pv }}</span>
          </li>
          <li>
            <i class="fa-solid fa-coins"></i> Pièce d'or:
            <span>{{ getInventory.gold }}</span>
          </li>
        </ul>
      </div>
      <div class="caracteristique">
        <ul>
          <h3>Caractéristiques</h3>
          <li>
            <i class="fa-solid fa-khanda"></i> Force:
            <span>{{ getInventory.force }}</span>
          </li>
          <li>
            <i class="fa-solid fa-bacon"></i> Dextérité:
            <span>{{ getInventory.dexterity }}</span>
          </li>
          <li>
            <i class="fa-solid fa-hat-wizard"></i> Concentration:
            <span>{{ getInventory.concentration }}</span>
          </li>
          <li>
            <i class="fa-solid fa-book-journal-whills"></i> Érudition:
            <span>{{ getInventory.erudition }}</span>
          </li>
        </ul>
        <div class="humeur">
          <h3>Humeur</h3>
          <i class="fa-solid fa-face-smile"></i
          ><span>{{ getInventory.humeur }}</span>
        </div>
      </div>
      <div class="arrow">
        <img
          src="../assets/images/arrow.png"
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
      <div class="stuff">
        <h3><i class="ri-sword-fill"></i> Armes</h3>
        <span v-for="item in getInventory.armes" :key="item">{{ item }}</span>
      </div>
      <div class="stuff">
        <h3><i class="fa-solid fa-shield"></i> Armures</h3>
        <span v-for="item in getInventory.armures" :key="item">{{ item }}</span>
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
        <span v-for="item in getInventory.clef" :key="item">{{ item }}</span>
      </div>
      <div class="arrow">
        <img
          src="../assets/images/arrow.png"
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
      let inventory = this.$store.state.inventory;
      inventory[key.categoryEffect] =
        inventory[key.categoryEffect] + key.effect;
      inventory[key.categoryObject].splice(index, 1);
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
  font-family: Aquifer;
  color: rgba(0, 0, 0, 0.795);
  transform: rotate(-2deg) translateX(-80%);
  transition: 0.3s ease-in-out;
  &:hover {
    transform: translateX(0) rotate(0deg);
    transition: 0.3s ease-in-out;
  }
  .arrow {
    position: absolute;
    bottom: 7%;
    left: 40%;
    & img {
      width: 70px;
      //cursor: pointer;
    }
  }
  & .inventory {
    width: 85%;
    height: 75%;
    margin-left: 10%;
    & h2 {
      font-size: clamp(5px, 2.5vw, 22px);
    }
    & .name {
      display: block;
      margin: 8% 0;
      & span {
        font-weight: bold;
        font-family: antiqua;
      }
      & ul {
        margin-top: 3%;
        & li {
          margin: 3% 0;
        }
      }
      & .pv {
        font-weight: bold;
      }
      & i {
        display: inline-block;
        width: 8%;
      }
    }
    & .caracteristique {
      & ul {
        & li {
          margin: 3% 0;
        }
        & span {
          font-weight: bold;
        }
        & i {
          display: inline-block;
          width: 8%;
        }
      }
      & .humeur {
        margin-top: 10%;
        & h3 {
          margin-bottom: 3%;
        }
        & i {
          display: inline-block;
          width: 8%;
        }
      }
    }
  }
  & .inventory-backpack {
    width: 85%;
    height: 75%;
    margin-left: 10%;
    & h2 {
      font-size: clamp(5px, 2.5vw, 22px);
      margin-bottom: 8%;
    }
    & .stuff {
      margin-top: 5%;
      & h3 {
        margin-bottom: 10px;
      }
      & span {
        display: inline-block;
        //font-weight: bold;
        margin-right: 15px;
        //cursor: pointer;
        font-family: antiqua;
        font-size: 19px;
      }
      :deep(.popper) {
        width: 50%;
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
.hidden {
  display: none;
}
.anim {
  animation: fade 0.5s ease-in-out;
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