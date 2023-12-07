<template>
  <div>
    <div class="w-full min-h-[35rem] h-screen bg-gray-400 pt-10">
      <div class="h-[80%] min-h-[29rem] max-w-[54rem] w-[90%]
      m-auto bg-blue-200
      rounded-xl">
        <div class="grid grid-cols-8 h-full divide-x-2 divide-gray-400">
          <div class="col-span-2 py-6 px-4">
            <img class="w-[80%] ms-auto mx-auto rounded-xl"
              src="https://img.freepik.com/vetores-premium/logo-conceitual-de-reportagem-ao-vivo-ilustracao-vetorial-criada-com-equipamento-de-microfones-e-redacao-de-noticias-ao-vivo_570429-18130.jpg?w=2000">
            <div class="h-[0.025rem] bg-black mt-4"></div>
            <div @click="changeGeral()" class="w-full p-2 mx-auto hover:bg-gray-700 hover:text-white cursor-pointer">
              Geral
            </div>
            <div @click="changeDaily()" class="w-full p-2 mx-auto hover:bg-gray-700 hover:text-white cursor-pointer">
              Daily
            </div>
            <div @click="changeWeekly()" class="w-full p-2 mx-auto hover:bg-gray-700 hover:text-white cursor-pointer">
              Weekly
            </div>
            <div @click="changeMonthly()" class="w-full p-2 mx-auto hover:bg-gray-700 hover:text-white cursor-pointer">
              Monthly
            </div>
            <div @click="changeGlobal()" class="w-full p-2 mx-auto hover:bg-gray-700 hover:text-white cursor-pointer">
              Global
            </div>
            <div class="h-[0.025rem] bg-black mt-4"></div>
            <div class="p-2 hover:bg-gray-700 hover:text-white cursor-pointer">Desconectar</div>
          </div>
          <div v-if="escolheu" class="col-span-6 mt-4 mb-4 mr-2
          overflow-y-scroll scrollbar">
            <div class="w-48 bg-green-400
            hover:bg-green-500
            m-4 py-3 px-4
            rounded-xl cursor-pointer">
              Adicionar Noticia
            </div>
            <div v-for="i in list" class="pb-3 px-4">
              <AdmBlock :obj="i" />
            </div>
          </div>
          <div v-else class="col-span-6 w-full h-full text-center pt-[12rem] text-3xl">
            Selecione uma categoria ao lado!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  useOneStore,
  useDailyStore,
  useWeeklyStore,
  useMonthlyStore,
  useGlobalStore,
} from '../../store/store';
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
import AdmBlock from '../../components/Adm/AdmBlock.vue';

export default {
  components: { AdmBlock, },
  data() {
    return {
      escolheu: false,
      list: [],
    };
  },
  methods: {
    changeGeral() {
      this.list = useOneStore().getList;
      this.escolheu = true;
    },
    changeDaily() {
      this.list = useDailyStore().getList;
      this.escolheu = true;
    },
    changeWeekly() {
      this.list = useWeeklyStore().getList;
      this.escolheu = true;
    },
    changeMonthly() {
      this.list = useMonthlyStore().getList;
      this.escolheu = true;
    },
    changeGlobal() {
      this.list = useGlobalStore().getList;
      this.escolheu = true;
    },
  },
  async beforeMount() {
    const all = useOneStore();
    await all.requestAll();

    const daily = useDailyStore();
    await daily.requestDaily(false);

    const weekly = useWeeklyStore();
    await weekly.requestWeekly(false);

    const monthly = useMonthlyStore();
    await monthly.requestMonthly(false);

    const global = useGlobalStore();
    await global.requestGlobal(false);
  },
};
</script>

<style scoped>
.scrollbar::-webkit-scrollbar {
  width: 5px;
  height: 20px;
}

.scrollbar::-webkit-scrollbar-track {
  border-radius: 100vh;
}

.scrollbar::-webkit-scrollbar-thumb {
  background: #9CA38F;
  border-radius: 100vh;
  border: 3px solid #9CA38F;
}

.scrollbar::-webkit-scrollbar-thumb:hover {
  background: #9CA38F;
}
</style>
