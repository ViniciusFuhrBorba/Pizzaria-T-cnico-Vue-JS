<template>
  <div>
    <router-link to="/a_cliente">Cliente</router-link>|
    <router-link to="/a_pizza">Pizza</router-link>|
    <router-link to="/a_bebida">Bebida</router-link>|
    <router-link to="/pedido">Pedido</router-link>|
    <router-link to="/c_historia">História</router-link>|
    <router-link to="/c_info_cliente">Informações do Cliente</router-link>|
    <router-link to="/c_cardapio">Cardápio</router-link>
    <div>
      <h3>Pizzas</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pizzas in pizza" :key="pizzas.id">
            <td>{{pizzas.id}}</td>
            <td>{{pizzas.sabor}}</td>
          </tr>
        </tbody>
      </table>
      <h3>Bebidas</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tipo</th>
            <th>Sabor</th>
            <th>Tamanho</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="bebidas in bebida" :key="bebidas.id">
            <td>{{bebidas.id}}</td>
            <td>{{bebidas.tipo}}</td>
            <td>{{bebidas.sabor}}</td>
            <td>{{bebidas.tamanho}}</td>
            <td>R$ {{bebidas.preco}}</td>
          </tr>
        </tbody>
      </table>
      <h3>Bordas</h3>

      <h3>Tamanhos</h3>

      <h5>Observações: pedidos delivery ascrescentam R$ 10,00 no valor final do pedido.</h5>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data: function() {
    return {
      pizza: [],
      bebida: []
    };
  },
  mounted() {
    axios
      .get("http://localhost:64088/api/Pizza")
      .then(p => (this.pizza = p.data));
    axios
      .get("http://localhost:64088/api/Bebida")
      .then(b => (this.bebida = b.data));
  }
};
</script>

<style>
</style>