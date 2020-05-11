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
      <h4>Tipo: </h4>
      <input type="text">
      <h4>Sabor: </h4>
      <input type="text">
      <h4>Tamanho: </h4>
      <input type="text">
      <h3>Pesquisar Bebida</h3>
      <h4>Tipo e Sabor: </h4>
      <select>

      </select>
      <button @click="pesquisar_bebida">Pesquisar</button>
      <button @click="cadastrar_bebida">Cadastrar</button>
      <button @click="alterar_bebida">Alterar</button>
      <button @click="excluir_bebida">Excluir</button>
  </div>
</template>

<script>
export default {
  methods: {
    pesquisar_bebida(){

    },
    cadastrar_bebida(){

    }, 
    alterar_bebida(){
      
    }, 
    excluir_bebida(){
      
    }
  }
}
</script>

<style>

</style>