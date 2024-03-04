<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import CahtVue from './components/CahtVue.vue';
import { useStore } from '@/stores/store';
const store = useStore()

function close() {
  store.overlay = false
  store.chatModal = false
}

</script>

<template>
  <div class="bg">
    <div class="circles">
      <div class="circle"></div>
    </div>
  </div>
  <router-view />
  <caht-vue />
  <div class="overlay" v-if="store.overlay" @click="close()"></div>
</template>

<style></style>
