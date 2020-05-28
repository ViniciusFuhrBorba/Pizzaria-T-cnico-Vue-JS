<template>
  <div id="app">
    <div id="nav" >
      <router-link to="/"></router-link>
      <router-link to="/a_bebida"></router-link>
      <router-link to="/a_cliente"></router-link>
      <router-link to="/a_pizza"></router-link>
      <router-link to="/c_cardapio"></router-link>
      <router-link to="/c_historia"></router-link>
      <router-link to="/c_info_cliente"></router-link>
      <router-link to="/cadastro_usuario"></router-link>
      <router-link to="/pedido"></router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  mounted() {
    // var pessoaLogado = sessionStorage.getItem("usuarioLogado");
    // console.log(this.$store.state.usuarioLogado)
    // if (this.$store.state.usuarioLogado != null) {
    //   console.log("entrei")
    //   this.$store.state.usuarioLogado.splice(0);
    //   this.$store.state.usuarioLogado.push(JSON.parse(pessoaLogado));
    // }
  }
};
</script>