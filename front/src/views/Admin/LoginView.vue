<template>
  <div>
    <div class="w-full h-screen pt-10
  bg-gray-400">
      <div class="max-w-[20rem] w-[90%] h-[24rem] m-auto
    bg-white rounded-md border border-cyan-500">
        <div class="w-full h-42">
          <img class="h-40 ms-auto mx-auto"
            src="https://img.freepik.com/vetores-premium/logo-conceitual-de-reportagem-ao-vivo-ilustracao-vetorial-criada-com-equipamento-de-microfones-e-redacao-de-noticias-ao-vivo_570429-18130.jpg?w=2000">
        </div>
        <div class="p-2">
          <input class="border-2 w-full h-12 p-2 mb-2" placeholder="E-mail" type="text" v-model="email">
          <input class="border-2 w-full h-12 p-2" placeholder="Senha" type="password" v-model="password">
        </div>
        <div class="mx-auto w-20 h-10 mt-6 p-2
      bg-green-500 hover:bg-green-600
      border border-green-700 rounded-xl
      cursor-pointer">
          <div class="w-fit m-auto" @click="enterData()">Enter</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    enterData() {
      console.log(this.email)
      console.log(this.password)
    },
  },
}
</script>
