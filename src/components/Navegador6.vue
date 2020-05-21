<template>
  <div>
    <router-link to="/a_cliente">Cliente</router-link>|
    <router-link to="/a_pizza">Pizza</router-link>|
    <router-link to="/a_bebida">Bebida</router-link>|
    <router-link to="/pedido">Pedido</router-link>|
    <router-link to="/c_historia">História</router-link>|
    <router-link to="/c_info_cliente">Informações do Cliente</router-link>|
    <router-link to="/c_cardapio">Cardápio</router-link>
    <h3>Pesquisar Cliente</h3>
    <h4>CPF:</h4>
    <input type="text" v-model="cpf" />
    <button @click="pesquisar_cliente1">Pesquisar</button>
    <h3>Informações da Pizza</h3>
    <h4>Tamanho:</h4>
    <select></select>
    <h4>Sabor 1:</h4>
    <select></select>
    <h4>Sabor 2:</h4>
    <select></select>
    <h4>Sabor 3:</h4>
    <select></select>
    <h4>Sabor 4:</h4>
    <select></select>
    <h4>Borda:</h4>
    <select></select>
    <h4>Observações do pedido:</h4>
    <input type="text" />
    <h3>Informações da Bebida</h3>
    <h4>Tipo:</h4>
    <select></select>
    <h4>Sabor:</h4>
    <select></select>
    <h4>Tamanho:</h4>
    <select></select>
    <h4>Forma de pagamento:</h4>
    <select></select>
    <input type="checkbox" />
    <h5>Retirar na pizzaria</h5>
    <h4>Valor:</h4>
    <button @click="finalizar_pedido">Finalizar</button>
    <button @click="acrescentar_item">Acrescentar</button>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data: function() {
    return {
      usuarios: [],
      cpf: "",
      dadosUsuario: []
    };
  },
  methods: {
    finalizar_pedido() {
      this.$router.push("Confirmar_Pedido");
    },
    pesquisar_cliente1() {
      this.usuarios.filter(u => {
        if (u.cpf == this.cpf) {
          this.dadosUsuario.push(u);
        }
      });
    },
    acrescentar_item() {}
  },
  mounted() {
    axios
      .get("http://localhost:64088/api/Usuario/")
      .then(u => (this.usuarios = u.data));
  }
};
</script>

<style>
</style>