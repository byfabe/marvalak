<template>
  <div class="container-inventory">
    <!-- CHARACTER SHEET -->
    <div class="inventory">
      <h2>Feuille du personnage</h2>
      <div class="name">
        <span>{{ name }}</span>
        <ul>
          <li>
            <i class="fa-solid fa-shield-heart"></i> Point de vie:
            <span class="pv">20</span>
          </li>
          <li><i class="fa-solid fa-coins"></i> Pièce d'or: <span>0</span></li>
        </ul>
      </div>
      <div class="caracteristique">
        <ul>
          <h3>Caractéristiques</h3>
          <li><i class="fa-solid fa-khanda"></i> Force: <span>1</span></li>
          <li><i class="fa-solid fa-bacon"></i> Dextérité: <span>3</span></li>
          <li>
            <i class="fa-solid fa-hat-wizard"></i> Concentration: <span>1</span>
          </li>
          <li>
            <i class="fa-solid fa-book-journal-whills"></i> Érudition:
            <span>2</span>
          </li>
        </ul>
        <div class="humeur">
          <h3>Humeur</h3>
          <i class="fa-solid fa-face-smile"></i><span> Calme</span>
        </div>
      </div>
      <div class="arrow">
        <img
          src="../assets/arrow.png"
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
        <span>Arc d'os +2 -</span>
      </div>
      <div class="stuff">
        <h3><i class="fa-solid fa-shield"></i> Armures</h3>
        <span>Casque de cuir +1 -</span>
        <span>Armure elfique +3 -</span>
      </div>
      <div class="stuff">
        <h3><i class="fa-solid fa-chess"></i> Objets</h3>
        <span>Médaillon sacrée -</span>
        <span>Ragoût nain -</span>
      </div>
      <div class="stuff">
        <h3><i class="ri-key-2-fill"></i> Clef</h3>
        <span>Clef démoniaque -</span>
      </div>
      <div class="arrow">
        <img
          src="../assets/arrow.png"
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
export default {
  data() {
    return {
      name: "Gurthang ~ le fer de la mort",
    };
  },
  methods: {
    //Switch l'affichage de l'inventaire
    hiddenSwitch() {
      let inventory = document.querySelector(".inventory");
      let backpack = document.querySelector(".inventory-backpack");
      inventory.classList.toggle("hidden");
      backpack.classList.toggle("hidden");
    },
    //Fondu du texte pendant les transitions
    fadeText() {
      let inventory = document.querySelector(".inventory");
      let backpack = document.querySelector(".inventory-backpack");
      inventory.classList.add("anim");
      backpack.classList.add("anim");
    },
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
  background-image: url("../assets/oldpaper2.png");
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
      cursor: pointer;
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