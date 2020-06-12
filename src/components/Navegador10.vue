<template>
  <div>
    <div v-if="this.verificar">
      <Menu />
    </div>
    <div v-if="this.verificar2">
      <menu-admin />
    </div>
    <h3>Confirmar Pedido</h3>
    <h4>Pizzas</h4>
    <table>
      <thead>
        <tr>
          <th>Sabores</th>
          <th>Tamanho</th>
          <th>Borda</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in this.$store.state.pedidoCompleto" :key="item.id">
          <td>{{item.saborUm+" | "+item.saborDois+" | "+item.saborTres+" | "+item.saborQuatro}}</td>
          <td>{{item.tamanho+" | "+"R$ "+item.precoTamanho}}</td>
          <td>{{item.borda}}</td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <tr>
          <th>Bebida e Preço</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in this.$store.state.pedidoCompleto" :key="item.id">
          <td>{{item.tamanhoPreco}}</td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <tr>
          <th>Forma de pagamento</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in this.$store.state.pedidoCompleto" :key="item.id">
          <td>{{item.formaPag}}</td>
        </tr>
      </tbody>
    </table>
    <h4>Valor:</h4>
    <button @click="editar_pedido">Editar</button>
    <button @click="finalizar_pedido">Finalizar</button>
  </div>
</template>

<script>
// const axios = require("axios");
import Menu from "../components/Menu.vue";
import MenuAdmin from "../components/MenuAdmin.vue";
export default {
  components: {
    Menu,
    MenuAdmin
  },
  data: function() {
    return {
      verificar: false,
      verificar2: false,
      tamanhoPizza: [],
      pizza: [],
      bordas: [],
      bebida: [],
      tamanhoPrecoBebida: [],
      formaPag: [],
      pedidoCompleto: []
    };
  },
  methods: {
    editar_pedido() {},
    finalizar_pedido() {
      alert("Pedido finalizado! Obrigado pela preferência.");
      this.$router.push("/c_historia");
    }
  },
  mounted() {
  }
};
</script>

<style>
</style>