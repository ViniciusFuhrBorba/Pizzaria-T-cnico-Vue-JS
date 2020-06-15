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
          <th>Tamanho e Preço</th>
          <th>Borda</th>
          <th>Bebida e Preço</th>
          <th>Forma de pagamento</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in this.$store.state.pedidoCompleto" :key="item.id">
          <td>{{item.saborUm+" | "+item.saborDois+" | "+item.saborTres+" | "+item.saborQuatro}}</td>
          <td>{{item.tamanho+" | "+"R$ "+item.precoTamanho}}</td>
          <td>{{item.borda}}</td>
          <td>{{item.tamanhoPreco}}</td>
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
const axios = require("axios");
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
      pedidoCompleto: []
    };
  },
  methods: {
    editar_pedido() {
      console.log(this.$store.state.pedidoCompleto)
    },
    finalizar_pedido() {
      alert("Pedido finalizado! Obrigado pela preferência.");
      axios.post("http://localhost:64088/api/Pedido", {
        id_cliente: 1,
        cliente: "Vinicius",
        pizzaTamanhoPreco:
          this.$store.state.pedidoCompleto.tamanho + this.$store.state.pedidoCompleto.precoTamanho,
        sabor1: this.$store.state.pedidoCompleto.saborUm,
        sabor2: this.$store.state.pedidoCompleto.saborDois,
        sabor3: this.$store.state.pedidoCompleto.saborTres,
        sabor4: this.$store.state.pedidoCompleto.saborQuatro,
        borda: this.$store.state.pedidoCompleto.borda,
        bebidaPreco: this.$store.state.pedidoCompleto.tamanhoPreco,
        formaPagamento: this.$store.state.pedidoCompleto.formaPag
      });
      this.$router.push("/c_historia");
    }
  },
  mounted() {}
};
</script>

<style>
</style