<template>
  <div>
    <button>Home</button>
    <button @click="irCadastroCliente">Cadastro Cliente</button>
    <button @click="irInfoCliente">Informações Cliente</button>
    <button @click="irCardapio">Cardápio</button>
    <button @click="irPizzas">Pizzas</button>
    <button @click="irBebidas">Bebidas</button>
    <button @click="irPedido">Pedido</button>
    <button @click="irEntregas">Entregas</button>
    <button @click="irHistoria">História</button>
    <button @click="irSair">Sair</button>
  </div>
</template>

<script>
export default {
  methods: {
    irPedido: function() {
      this.$router.push("/pedido");
    },
    irInfoCliente: function() {
      this.$router.push("/c_info_cliente");
    },
    irCardapio: function() {
      this.$router.push("/c_cardapio");
    },
    irPizzas: function() {
      this.$router.push("/a_pizza");
    },
    irBebidas: function() {
      this.$router.push("/a_bebida");
    },
    irEntregas: function() {
      this.$router.push('/Entregas')
    },
    irHistoria: function(){
      this.$router.push('/c_historia')
    },
    irSair: function(){
      this.$router.push('/')
      this.$store.state.usuarioLogado.splice(0);
    },
    irCadastroCliente: function(){
      this.$router.push('/cadastro_usuario')
    }
  }
};
</script>

<style>
</style>