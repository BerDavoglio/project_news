<template>
  <div @click="goPage()">
    <div :style="{ backgroundImage: 'url(' + this.obj.img + ')' }" class="
        max-w-[26rem] mx-auto h-[26rem] rounded-md
        bg-no-repeat bg-center bg-cover 
        hover:scale-[110%] transform transition duration-50 hover:z-10
        cursor-pointer relative">
      <div class="absolute bottom-0 left-0 text-white p-2 max-w-[100%] bg-[rgba(0,0,0,0.4)] m-2">
        <div class="text-2xl font-bold">
          {{ this.obj.title }}
        </div>
        <div class="line-clamp-3 text-justify">
          {{ this.obj.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListBlockComponent',
  props: ['obj'],
  methods: {
    goPage(){
      this.$router.push({ name: 'news', params: { id: this.obj.id } })
    },
  },
}
</script>
