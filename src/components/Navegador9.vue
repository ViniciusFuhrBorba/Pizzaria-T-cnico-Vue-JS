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
      <div class="caixa-pizza">
        <h3>Pizzas</h3>
        <table border="2px" class="table-pizza">
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
      </div>
      <div class="caixa-bebidas">
        <h3>Bebidas</h3>
        <table border="2px" class="table-pizza">
          <thead>
            <tr>
              <th>ID</th>
              <th>Bebida</th>
              <th>Tamanho</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="bebidas in bebida" :key="bebidas.id">
              <td>{{bebidas.id}}</td>
              <td>{{bebidas.bebida}}</td>
              <td>{{bebidas.tamanho}}</td>
              <td>R$ {{bebidas.preco}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="caixa-bordas">
        <h3>Bordas</h3>
        <table border="2px" class="table-bordas">
          <thead>
            <tr>
              <th>ID</th>
              <th>Borda</th>
              <th>Preço da Borba</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="bordas in borda" :key="bordas.id">
              <td>{{bordas.id}}</td>
              <td>{{bordas.borda}}</td>
              <td>R$ {{bordas.preco_borda}}</td>
            </tr>
          </tbody>
        </table>
      </div>
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
      bebida: [],
      usuario: [],
      borda: []
    };
  },
  mounted() {
    axios
      .get("http://localhost:64088/api/Pizza")
      .then(p => (this.pizza = p.data));
    axios
      .get("http://localhost:64088/api/Bebida")
      .then(b => (this.bebida = b.data));
    axios
      .get("http://localhost:64088/api/Borda")
      .then(b => (this.borda = b.data));
  }
};
</script>

<style>
.caixa-pizza{
  border: 2px solid black;
  height: table-pizza;
  width: 245px;
  position: absolute;
}
.caixa-bebidas{
  border: 2px solid black;
  height: table-pizza;
  width: 310px;
  position: absolute;
  margin-left: 300px;
}
.caixa-bordas{
border: 2px solid black;
  height: table-bordas;
  width: 312px;
  position: absolute;
  margin-left: 660px;
}
h3{
  text-align: center;
}
h5{
  position: absolute;
  margin-top: 500px;
  margin-left: 260px;
}
</style>