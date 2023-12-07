<template>
  <div>
    <div v-if="useSearchStore().getList.length > 0" class="grid gap-2 mt-4">
      <div v-for="i in useSearchStore().getList">
        <SearchBlock :obj="i" />
      </div>
    </div>
    <div v-else class="h-[65vh] w-full pt-20">
      <div class="text-3xl text-center">
        Infelizmente não exite notícia com '<strong>{{ this.$route.params.id }}</strong>' no Título.
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSearchStore } from '../../store/store';
</script>

<script>
import SearchBlock from '../../components/Search/SearchBlock.vue';

export default {
  name: 'SearchView',
  components: { SearchBlock, },
  methods: {
    goPage(route) {
      this.$router.push({ name: route });
    },
  },
  async beforeMount() {
    const store = useSearchStore();
    await store.requestSearch(this.$route.params.id);
  },
}
</script>

<style scoped></style>