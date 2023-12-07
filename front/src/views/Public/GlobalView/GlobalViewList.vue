<template>
  <div>
    <div class="text-3xl w-full font-bold mt-2">
      <div class="w-fit m-auto">{{ useGlobalStore().getName }}</div>
    </div>
    <div :class="['gap-6 my-6 mx-auto grid ' + (windowWidth > 768 ? 'grid-cols-2 w-[60%]' : 'w-[80%]')]">
      <div v-for="i in useGlobalStore().getList">
        <ListBlockComponent :obj="i" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGlobalStore } from '../../../store/store';
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
import ListBlockComponent from '../../../components/Comum/ListBlockComponent.vue';

export default {
  name: 'GlobalViewList',
  components: { ListBlockComponent },
  async beforeMount() {
    const store = useGlobalStore();
    await store.requestGlobal(true);
  },
}
</script>
