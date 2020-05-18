<template>
  <div>
    <router-link to="/a_cliente">Cliente</router-link>|
    <router-link to="/a_pizza">Pizza</router-link>|
    <router-link to="/a_bebida">Bebida</router-link>|
    <router-link to="/pedido">Pedido</router-link>|
    <router-link to="/c_historia">História</router-link>|
    <router-link to="/c_info_cliente">Informações do Cliente</router-link>|
    <router-link to="/c_cardapio">Cardápio</router-link>
    <h3>Dados</h3>
    <h4>Sabor:</h4>
    <input type="text" v-model="saborPizza" />
    <h3>Pesquisar Pizza</h3>
    <h4>Sabor:</h4>
    <select v-model="pizzaSel">
      <option value="0" selected disabled>Sabores</option>
      <option v-for="pizza in pizzas" :key="pizza.indice" :value="pizza.id">{{pizza.sabor}}</option>
    </select>
    <button @click="pesquisar_pizza">Pesquisar</button>
    <button @click="cadastrar_pizza">Cadastrar</button>
    <button @click="alterar_pizza">Alterar</button>
    <button @click="excluir_pizza">Excluir</button>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data: function() {
    return {
      id: "",
      sabor: "",
      pizzas: [],
      pegaID: "",
      pegaID2: "",
      pizzaSel: 0,
      saborPizza: ""
    };
  },
  methods: {
    pesquisar_pizza: function() {
      this.pizzas.filter(u => {
        if (u.id == this.pizzaSel) {
          this.saborPizza = u.sabor;
        }
      });
    },
    cadastrar_pizza() {
      axios
        .post("http://localhost:64088/api/Pizza/", {
          sabor: this.saborPizza
        })
        .then(p => {
          console.log(p.data);
        });
    },
    alterar_pizza() {
      this.pizzas.filter(u => {
        if (u.id == this.pizzaSel) {
          this.pegaID = u.id;
        }
      });
      axios
        .put("http://localhost:64088/api/Pizza/" + this.pegaID, {
          sabor: this.saborPizza
        })
        .then(p => {
          console.log(p.data);
        });
    },
    excluir_pizza: function() {
      this.pizzas.filter(u => {
        if (u.id == this.pizzaSel) {
          this.pegaID2 = u.id;
        }
      });
      axios
        .delete("http://localhost:64088/api/Pizza/" + this.pegaID2)
        .then(u => {
          u.id == this.pegaID2;
          console.log(u.data);
        });
      this.saborPizza = "";
    }
  },
  mounted() {
    axios
      .get("http://localhost:64088/api/Pizza")
      .then(p => (this.pizzas = p.data));
  },
  computed: {
    carregarCombo: function() {
      return this.pizzas;
    }
  }
};
</script>

<style>
</style>