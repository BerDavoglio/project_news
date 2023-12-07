<template>
  <div v-if="!verify">
    <Header />
    <div class="border-[1px] mx-[8rem]"></div>
    <RouterView />
    <div class="border-[1px] mx-[8rem]"></div>
    <Footer />
  </div>
  <div v-else>
    <RouterView />
  </div>
</template>
  
<script setup>
import { RouterView, useRoute } from 'vue-router';

const verify = window.location.href.includes('adm');
</script>

<script>
import Header from './components/Comum/Header.vue';
import Footer from './components/Comum/Footer.vue';
export default {
  components: { Header, Footer, }
}
</script>

<style scoped>
</style>
