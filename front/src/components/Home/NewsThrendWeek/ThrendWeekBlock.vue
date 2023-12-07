<template>
  <div @click="goPage()">
    <div class="h-40 p-3 grid grid-cols-5
      bg-pink-50 hover:bg-pink-200 border border-cyan-500 rounded-md
      transform transition duration-50 cursor-pointer">
      <div class="m-auto inline-block col-span-2">
        <img class="h-[8rem] w-[20rem]" style="object-fit: cover;" :src="obj.img">
      </div>
      <div class="col-span-3 grid grid-rows-4 h-8 pl-2">
        <div class="row-span-1 text-xl font-bold">
          <div class="line-clamp-1">
            {{ obj.title }}
          </div>
        </div>
        <div class="row-span-3 mt-6">
          <div class="line-clamp-4 text-justify">{{ obj.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThrendWeekBlock',
  props: ['obj'],
  methods: {
    goPage() {
      this.$router.push({ name: 'news', params: { id: this.obj.id } })
    },
  },
}
</script>
