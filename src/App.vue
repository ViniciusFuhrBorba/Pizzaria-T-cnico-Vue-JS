<template>
  <div id="app">
    <div id="nav" v-show="false">
      <router-link to="/">Login</router-link>|
      <router-link to="/a_bebida">Bebida</router-link>|
      <router-link to="/a_cliente">Cliente</router-link>|
      <router-link to="/a_pizza">Pizza</router-link>|
      <router-link to="/c_cardapio">Cardápio</router-link>|
      <router-link to="/c_historia">História</router-link>|
      <router-link to="/c_info_cliente">Informações do Cliente</router-link>|
      <router-link to="/cadastro_usuario">Cadastro do Usuário</router-link>|
      <router-link to="/pedido">Pedido</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  mounted() {
    var pessoaLogado = localStorage.getItem("usuarioLogado");
    if (this.$store.state.usuarioLogado != null) {
      this.$store.state.usuarioLogado.splice(0);
      this.$store.state.usuarioLogado.push(JSON.parse(pessoaLogado));
    }
    window.onbeforeunload = function(){
      localStorage.removeItem('usuarioLogado');
    }
  }
};
</script>