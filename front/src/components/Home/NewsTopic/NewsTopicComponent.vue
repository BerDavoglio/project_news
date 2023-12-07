<template>
  <div v-if="useDailyStore().getList.length > 0" class="m-auto max-w-[55rem] my-10 px-4">
    <div class="mb-4 text-2xl font-semibold">Principais do Dia:</div>
    <div :class="[(useDailyStore().getList.length < 2
      ? ''
      : windowWidth < 768
        ? ''
        : 'grid grid-cols-3')]">
      <div :style="{ backgroundImage: 'url(' + useDailyStore().getList[0].img + ')' }" class="
        col-span-2 h-[30rem] px-6 py-4 bg-no-repeat bg-center bg-cover hover:scale-[105%] transform transition duration-50 hover:z-10
        relative cursor-pointer" @click="goPage(useDailyStore().getList[0].id)">
        <div class="bg-[rgba(0,0,0,0.4)]
        absolute bottom-0 left-0 p-10 max-w-[100%]
        text-white text-xl">
          <div class="line-clamp-3 text-justify">
            {{ useDailyStore().getList[0].text }}
          </div>
        </div>
      </div>
      <div v-if="useDailyStore().getList.length > 3" class="grid grid-rows-3">
        <div v-for="i in useDailyStore().getList.slice(1, 4)">
          <div :style="{ backgroundImage: 'url(' + i.img + ')' }" class="h-[10rem] px-2 py-1 bg-no-repeat bg-center bg-cover hover:scale-[105%] transform transition duration-50 hover:z-10
          relative cursor-pointer" @click="goPage(i.id)">
            <div class="absolute bottom-0 left-0 text-white p-3 truncate max-w-[100%] bg-[rgba(0,0,0,0.4)]">
              {{ i.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDailyStore } from '../../../store/store';
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
  name: 'NewsTopicComponent',
  methods: {
    goPage(idGiven) {
      this.$router.push({ name: 'news', params: { id: idGiven } })
    },
  },
  async beforeMount() {
    const store = useDailyStore();
    await store.requestDaily(true);
  },
}
</script>
