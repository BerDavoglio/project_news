<template>
  <div @click="goPage()">
    <div class="h-40 p-3 w-[82.5%] mx-auto
      hover:bg-pink-200 transform transition duration-50 cursor-pointer 
      border border-cyan-500 rounded-md
      grid grid-cols-5">
      <div class="m-auto inline-block col-span-2">
        <img class="mx-auto h-[8rem] w-[20rem]" style="object-fit: cover;" :src="obj.img">
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
  name: 'SearchBlock',
  props: ['obj'],
  methods: {
    goPage(){
      this.$router.push({ name: 'news', params: { id: this.obj.id } })
    },
  },
}
</script>
