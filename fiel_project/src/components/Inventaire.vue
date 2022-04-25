<template>
  <div class="container-inventory">
    <div class="inventory">
      <h2>Fiche personnage</h2>
      <div class="caracteristique">
        <ul>
          <li><i class="fa-solid fa-khanda"></i> Force: <span>1</span></li>
          <li><i class="fa-solid fa-bacon"></i> Dextérité: <span>3</span></li>
          <li>
            <i class="fa-solid fa-hat-wizard"></i> Concentration: <span>1</span>
          </li>
          <li>
            <i class="fa-solid fa-book-journal-whills"></i> Erudition:
            <span>2</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@font-face {
  font-family: Aquifer;
  src: url("../assets/Aquifer.otf");
}

.container-inventory {
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18%;
  min-width: 250px;
  height: 60%;
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
      text-align: center;
      font-size: clamp(5px, 2.5vw, 22px);
    }
    & ul {
      margin-top: 15%;
      & li {
        margin: 3% 0;
      }
    }
    & ul {
      & span {
        font-weight: bold;
      }
      & i {
        display: inline-block;
        width: 8%;
      }
    }
  }
}
</style>