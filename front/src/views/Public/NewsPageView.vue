<template>
  <div>
    <div class="mt-10">
      <img class="mx-auto h-[20rem] w-[34rem] place-content-center" style="object-fit: cover;" :src="useOneStore().getObj.data.img" />
    </div>
    <div class="ml-[15rem] mt-8
    text-4xl font-semibold text-justify">
      {{ useOneStore().getObj.data.title }}
    </div>
    <div class="mx-[15rem] mt-5 mb-16 text-justify">
      {{ useOneStore().getObj.data.text }}
    </div>
  </div>
</template>

<script setup>
import { useOneStore } from '../../store/store'
</script>

<script>
export default {
  name: 'NewsPageView',
  async beforeMount() {
    const store = useOneStore();
    await store.requestOne(this.$route.params.id);
  },
}
</script>

<style lang="scss" scoped></style>