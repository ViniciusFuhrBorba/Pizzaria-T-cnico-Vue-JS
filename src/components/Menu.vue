<template>
  <div id="app">
    <div id="nav">
      <button @click="irInfoCliente">Informações Cliente</button>
      <button @click="irCardapio">Cardápio</button>
      <button @click="irPedido">Pedido</button>
      <button @click="irHistoria">História</button>
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
      this.$store.state.usuarioLogado =  []
      sessionStorage.removeItem("usuarioLogado");
      this.$router.push("/");
    }, 
    irHistoria: function(){
      this.$router.push("/c_historia")
    },
    irInfoCliente : function(){
      this.$router.push("/c_info_cliente")
    },irCardapio : function(){
      this.$router.push("/c_cardapio")
    }


  }
};
</script>

<style>
</style>