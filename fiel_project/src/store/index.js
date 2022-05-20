import { createStore } from "vuex";

export default createStore({
  state: {
    character: { name: "Gurthang", title: "~ le fer de la mort" },

    inventory: {
      pv: 20,
      gold: 0,
      force: 1,
      dexterity: 1,
      concentration: 1,
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
      state.inventory.objets.push(data);
    },
    ADD_PV(state, data) {
      state.inventory.pv = data
    },
  },
  actions: {},
  modules: {},
});
