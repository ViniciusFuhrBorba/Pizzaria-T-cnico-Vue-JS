<template>
  <div>
      <router-link to="/a_cliente">Cliente</router-link> |
      <router-link to="/a_pizza">Pizza</router-link> |
      <router-link to="/a_bebida">Bebida</router-link> |
      <router-link to="/pedido">Pedido</router-link> | 
      <router-link to="/c_historia">História</router-link> |
      <router-link to="/c_info_cliente">Informações do Cliente</router-link> |
      <router-link to="/c_cardapio">Cardápio</router-link>
      <h3>Dados Pessoais</h3>
      <h4>Nome: </h4>
      <input type="text">
      <h4>CPF: </h4>
      <input type="number">
      <h4>Telefone: </h4>
      <input type="number">
      <h4>Usuário: </h4>
      <input type="text">
      <h4>Senha: </h4>
      <input type="password">
      <input type="checkbox">
      <h5>Mostrar senha</h5>
      <h3>Endereço</h3>
      <h4>CEP: </h4>
      <input type="number">
      <h4>Logradouro: </h4>
      <input type="text">
      <h4>Número: </h4>
      <input type="number">
      <h4>Complemento: </h4>
      <input type="text">
      <h4>Bairro: </h4>
      <input type="text">
      <h4>Cidade: </h4>
      <input type="text">
      <h4>UF: </h4>
      <input type="text">
      <button @click="alterar_cliente1">Alterar</button>
  </div>
</template>

<script>
export default {
  methods:{
    alterar_cliente1(){
      
    }
  }
}
</script>

<style>

</style>