<template>
  <div>
      <router-link to="/a_cliente">Cliente</router-link> |
      <router-link to="/a_pizza">Pizza</router-link> |
      <router-link to="/a_bebida">Bebida</router-link> |
      <router-link to="/pedido">Pedido</router-link> | 
      <router-link to="/c_historia">História</router-link> |
      <router-link to="/c_info_cliente">Informações do Cliente</router-link> |
      <router-link to="/c_cardapio">Cardápio</router-link>
      <h3>História</h3>
      <h5>Estamos a mais de 10 anos atuando no mercado, comandada pela família
        Escobar. A pizzaria Julubom tornou-se uma das mais famosas e procuradas
        pelos turistas que visitam a cidade de Blumenau e também seus nativos.
        Almejamos logo em breve levar a nossa tradição adiante por todo estado de Santa Catarina.
        Zelamos pelo melhor atendimento ao cliente, sempre aberto a crítica e sugestões.
        Obrigada por escolher a nossa família para alimentar a sua, obrigada pela escolha.
        Contamos com seu feedback, abraços da família Escobar!
      </h5>
      <h3>Endereço</h3>
      <h5>Rua 7 de agosto, 1379</h5>
      <h5>Blumenau - Santa Catarina - Brasil</h5>
      <h3>Horário de Atendimento</h3>
      <h5>Dias: Terça à Domingo</h5>
      <h5>Horário: À partir das 18h até as 02h</h5>
  </div>
</template>

<script>
const axios = require('axios')
export default {
  mounted(){
      axios.get("http://localhost:64088/api/Usuario").then(usuario => this.$store.state.pessoasBanco = usuario.data)
  }
}
</script>

<style>

</style>