<template>
  <div>
    <div class="h-40 p-3 w-[95%] mx-auto
      border border-cyan-500 rounded-md
      grid grid-cols-7">
      <div class="m-auto inline-block col-span-2">
        <img class="mx-auto h-[8rem] w-[20rem]" style="object-fit: cover;" :src="obj.img">
      </div>
      <div class="col-span-3 grid grid-rows-4 h-8 pl-2">
        <div class="row-span-1 text-xl font-bold">
          <div class="line-clamp-1">
            {{ obj.title }}
          </div>
        </div>
        <div class="row-span-2 mt-6">
          <div class="line-clamp-2 text-justify"><strong>Texto</strong>: {{ obj.text }}</div>
        </div>
        <div class="row-span-1 mt-[3.5rem]">
          <div class="text-justify"><strong>Tag</strong>: "{{ obj.tag }}"</div>
          <div class="text-justify"><strong>Esta Aparecendo</strong>: "{{ obj.ischoosen }}"</div>
        </div>
      </div>
      <div class="col-span-2">
        <div class="w-full h-[50%]">
          <div class="w-[5rem] m-auto p-3
          bg-yellow-400 rounded-xl text-center
          hover:bg-yellow-600 hover:text-white
          cursor-pointer">
          Editar
        </div>
        </div>
        <div class="w-full h-[50%]">
          <div class="w-[5rem] m-auto p-3
          bg-red-400 rounded-xl text-center
          hover:bg-red-600 hover:text-white
          cursor-pointer">
            Deletar
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdmBlock',
  props: ['obj'],
  methods: {
    goPage() {
      this.$router.push({ name: 'news', params: { id: this.obj.id } })
    },
  },
}
</script>
