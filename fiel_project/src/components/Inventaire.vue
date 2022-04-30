<template>
  <div class="container-inventory">
    <div class="inventory">
      <h2>Feuille du personnage</h2>
      <div class="name">
        <span>Gurthang ~ le fer de la mort</span>
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
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-inventory {
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18%;
  min-width: 250px;
  height: 60%;
  min-height: 450px;
  margin-left: 1%;
  background-image: url("../assets/inventorybg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  font-family: Aquifer;
  color: rgba(0, 0, 0, 0.795);
  & .inventory {
    width: 85%;
    height: 75%;
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
}
</style>