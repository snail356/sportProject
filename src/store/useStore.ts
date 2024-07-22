import { defineStore } from "pinia";

// 定義狀態的類型
interface UserState {
  useComponent: string;
}

export const useStore = defineStore("useStore", {
  state: (): UserState => ({
    useComponent: "InputPage",
  }),
  actions: {
    getConponent(name: string) {
      this.useComponent = name;
    },
    setConponent(name: string) {
      this.useComponent = name;
    },
  },
});
