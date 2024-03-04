import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  const overlay = ref(false);
  const chatModal = ref(false);

  return { overlay, chatModal };
});
