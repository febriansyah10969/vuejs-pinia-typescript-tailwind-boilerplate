import { defineStore } from "pinia";

export const useCounterStore = defineStore("main", {
  state: () => ({
    name: "Lucas",
    counter: 0,
  }),
  getters: {
    doubleCounter: (state) => state.counter * 2,
    tripleCounter: (state) => state.counter * 3,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
