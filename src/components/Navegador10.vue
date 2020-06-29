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
          <th>ID Cliente</th>
          <th>Nome Cliente</th>
          <th>Sabores</th>
          <th>Tamanho e Preço</th>
          <th>Borda</th>
          <th>Bebida e Preço</th>
          <th>Forma de pagamento</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in this.$store.state.pedidoCompleto" :key="item.id">
          <td>{{item.id_cliente}}</td>
          <td>{{item.nomeCliente}}</td>
          <td>{{item.saborUm+" | "+item.saborDois+" | "+item.saborTres+" | "+item.saborQuatro}}</td>
          <td>{{item.tamanho+" | "+"R$ "+item.precoTamanho}}</td>
          <td>{{item.borda}}</td>
          <td>{{item.bebida+" "+item.tamanhoPreco}}</td>
          <td>{{item.formaPag}}</td>
        </tr>
      </tbody>
    </table>
    <h4>Valor:</h4>
    <!-- <input type="text" v-model="totalPedido"> -->
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
      pedidoCompleto: [],
      pedidoFinalizado: [],
      totalPedido: 0
    };
  },
  methods: {
    editar_pedido() {
      console.log(this.$store.state.pedidoCompleto);
    },
    finalizar_pedido() {
      this.$store.state.pedidoCompleto.forEach(el => {
        axios
          .post("http://localhost:64088/api/Pedido", {
            id_cliente: el.id_cliente,
            cliente: el.nomeCliente,
            sabor1: el.saborUm,
            sabor2: el.saborDois,
            sabor3: el.saborTres,
            sabor4: el.saborQuatro,
            borda: el.borda,
            formaPagamento: el.formaPag,
            pizzaTamanhoPreco: el.tamanho + " R$" + el.precoTamanho,
            bebida: el.bebida,
            bebidaPrecoTamanho: el.tamanhoPreco
          })
          .then(r => {
            console.log(r.data);
          });
      });
      this.$router.push("/c_historia");
    }
  },
  mounted() {
  }
};
</script>
<style>
</style