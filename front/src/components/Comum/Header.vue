<template>
  <div>
    <div :class="['w-full h-auto grid ' + (windowWidth < 768 ? 'grid-cols-2' : 'grid-cols-4')]">
      <div class="cols-1 w-full py-2">
        <img class="h-40 ms-auto cursor-pointer mx-auto
        hover:scale-[110%] transform transition duration-50 hover:z-10" @click="goPage('home', false)"
          src="https://img.freepik.com/vetores-premium/logo-conceitual-de-reportagem-ao-vivo-ilustracao-vetorial-criada-com-equipamento-de-microfones-e-redacao-de-noticias-ao-vivo_570429-18130.jpg?w=2000">
      </div>
      <div v-if="windowWidth >= 768" class="my-auto inline-block ml-10">
        <div class="text-3xl font-semibold">Site Notícia</div>
        <div class="text-lg">Seu canal principal de Notícias</div>
      </div>
      <div v-if="windowWidth >= 768" class="my-auto px-4">
        Pesquise:
        <div class="grid grid-cols-7">
          <input class="border-2 w-full h-8 p-2 col-span-6" type="text" v-model="searchMessage">
          <v-icon class="ml-2 cursor-pointer my-auto" @click="search" name="bi-search" />
        </div>
      </div>
      <div class="text-3xl m-auto inline-block">
        <v-icon v-show="!menu" class="cursor-pointer" @click="changeMenu" name="gi-hamburger-menu" scale="3" />
        <v-icon v-show="menu" class="cursor-pointer" @click="changeMenu" name="io-close" scale="3" />
      </div>
    </div>
    <div v-show="menu" class="border-[1px] mb-4 mx-[8rem]"></div>
    <div v-show="menu" class="w-fit m-auto h-auto mb-4">
      <div v-if="windowWidth < 768" class="my-auto px-4">
        Pesquise:
        <div class="grid grid-cols-7">
          <input class="border-2 w-full h-8 p-2 col-span-6" type="text" v-model="searchMessage">
          <v-icon class="ml-2 cursor-pointer my-auto" @click="search" name="bi-search" />
        </div>
      </div>
      <div @click="goPage('daily', true)" class="w-fit mx-auto cursor-pointer text-lg font-semibold hover:font-bold my-2">
        Noticias do dia</div>
      <div @click="goPage('weekly', true)" class="w-fit mx-auto cursor-pointer text-lg font-semibold hover:font-bold my-2">
        Noticias da semana</div>
      <div @click="goPage('monthly', true)" class="w-fit mx-auto cursor-pointer text-lg font-semibold hover:font-bold my-2">
        Noticias do mês</div>
      <div @click="goPage('global', true)" class="w-fit mx-auto cursor-pointer text-lg font-semibold hover:font-bold my-2">
        Noticias globais</div>
    </div>
  </div>
</template>

<script setup>
import { useSearchStore } from '../../store/store';
import { ref, onMounted, onUnmounted } from 'vue';

const windowWidth = ref(window.innerWidth);
const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<script>
export default {
  name: 'Header',
  data() {
    return {
      menu: false,
      searchMessage: '',
    };
  },
  methods: {
    changeMenu() {
      this.menu = !this.menu
    },
    goPage(route, isMenu) {
      this.$router.push({ name: route });
      if (isMenu){
        this.changeMenu();
      }
    },
    async search() {
      const store = useSearchStore();
      await store.requestSearch(this.searchMessage);
      this.$router.push({ name: 'search', params: { id: this.searchMessage } })
    },
  }
}
</script>
