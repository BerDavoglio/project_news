<template>
  <div class="w-full max-w-[60rem] m-auto my-10 px-4">
    <div class="mb-4 text-2xl font-semibold">Principais da Semana:</div>
    <div class="">
      <div class="grid gap-2">
        <div v-for="i in useWeeklyStore().getList.slice(0, 5)">
          <ThrendWeekBlock :obj="i" />
        </div>
      </div>
    </div>
    <div @click="goPage('weekly')"
      class="max-w-[24rem] h-fit p-10 bg-red-300 hover:bg-red-400 transform transition duration-50 m-auto rounded-lg mt-4 cursor-pointer">
      <div class="w-fit mx-auto font-bold">
        Descubra mais clicando aqui!
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWeeklyStore } from '../../../store/store';
</script>

<script>
import ThrendWeekBlock from './ThrendWeekBlock.vue';
export default {
  name: 'NewsThrendWeekComponent',
  components: { ThrendWeekBlock, },
  methods: {
    goPage(route) {
      this.$router.push({ name: route });
    },
  },
  async beforeMount() {
    const store = useWeeklyStore();
    await store.requestWeekly(true);
  },
}
</script>
