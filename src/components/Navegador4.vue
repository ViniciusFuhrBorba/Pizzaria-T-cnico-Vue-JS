<template>
  <div>
      <router-link to="/a_cliente">Cliente</router-link> |
      <router-link to="/a_pizza">Pizza</router-link> |
      <router-link to="/a_bebida">Bebida</router-link> |
      <router-link to="/pedido">Pedido</router-link> | 
      <router-link to="/c_historia">História</router-link> |
      <router-link to="/c_info_cliente">Informações do Cliente</router-link> |
      <router-link to="/c_cardapio">Cardápio</router-link>
      <h3>Dados</h3>
      <h4>ID: </h4>
      <h4>Sabor: </h4>
      <input type="text">
      <h3>Pesquisar Pizza</h3>
      <h4>Sabor: </h4>
      <select>

      </select>
      <button @click="pesquisar_pizza">Pesquisar</button>
      <button @click="cadastrar_pizza">Cadastrar</button>
      <button @click="alterar_pizza">Alterar</button>
      <button @click="excluir_pizza">Excluir</button>
  </div>
</template>

<script>
export default {
  methods: {
    pesquisar_pizza(){

    },
    cadastrar_pizza(){

    }, 
    alterar_pizza(){
      
    }, 
    excluir_pizza(){
      
    }
  }
}
</script>

<style>

</style>