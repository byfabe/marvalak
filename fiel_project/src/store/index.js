import { createStore } from "vuex";

export default createStore({
  state: {

    character: { name: "Vous", title: "~ l'inculte" },

    inventory: {

      //Stat pour le jet de rencontre 
      meetTest: 0,

      pv: 10,
      gold: 0,
      force: 1,
      celerite: 1,
      perception: 1,
      erudition: 1,
      humeur: "calme",
      armes: [],
      armures: [],
      objets: [],
      clef: [],
    },

  },
  getters: {
    getInventory: (state) => state.inventory,
    getCharacter: (state) => state.character,
  },

  mutations: {
    ADD_OBJECTS(state, data) {
      state.inventory[data.categoryObject].push(data);
    },
    ADD_EQUIPMENT(state, data) {
      state.inventory[data.categoryObject].push(data);
    },
    ADD_PV(state, data) {
      state.inventory.pv = data;
    },
  },

  actions: {},
  modules: {},
});
