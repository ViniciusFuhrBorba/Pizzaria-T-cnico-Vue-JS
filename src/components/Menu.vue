<template>
  <div id="app">
    <div id="nav">
      <button @click="irPedido">Home</button>
      <button @click="irPedido">Informações Cliente</button>
      <button @click="irPedido">Cardápio</button>
      <button @click="irPedido">Pedido</button>
      <button @click="irPedido">História</button>
      <button @click="irLogin">Sair</button>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    irPedido: function() {
      this.$router.push("Pedido");
    },
    irLogin: function() {
      sessionStorage.removeItem("usuarioLogado");
      this.$router.push("/");
    }
  }
};
</script>

<style>
</style>