<template>
  <div>
    <div v-show="this.verificar">
      <Menu />
    </div>
    <div v-show="this.verificar2">
      <menu-admin />
    </div>
    <table>
      <thead>
        <tr>
          <th>ID Cliente</th>
          <th>Nome Cliente</th>
          <th>Tamanho Pizza e Preço Pizza</th>
          <th>Sabores</th>
          <th>Borda</th>
          <th>Bebida</th>
          <th>Tamanho e Preço da Bebida</th>
          <th>Forma de Pagamento</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in entregas" :key="item.id">
          <td>{{item.id_cliente}}</td>
          <td>{{item.cliente}}</td>
          <td>{{item.pizzaTamanhoPreco}}</td>
          <td>{{item.sabor1+" , "+item.sabor2+" , "+item.sabor3+" , "+item.sabor4}}</td>
          <td>{{item.borda}}</td>
          <td>{{item.bebida}}</td>
          <td>{{item.bebidaPrecoTamanho}}</td>
          <td>{{item.formaPagamento}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const axios = require('axios')
import Menu from "../components/Menu.vue";
import MenuAdmin from "../components/MenuAdmin.vue";
export default {
  components: {
    Menu,
    MenuAdmin
  },data: function() {
    return {
      verificar: false,
      verificar2: false,
      entregas: []
    };
  },mounted() {
    axios.get("http://localhost:64088/api/Pedido").then(p => this.entregas = p.data)
    console.log(this.entregas); 
    if (this.$store.state.usuarioLogado != null) {
      this.$store.state.usuarioLogado.splice(0);
      var usuarioSession = sessionStorage.getItem("usuarioLogado");
      this.$store.state.usuarioLogado.push(JSON.parse(usuarioSession));
    }
    this.$store.state.usuarioLogado.filter(u => {
      if (u.tipo_usuario == 1) {
        this.verificar = true;
      }
      if (u.tipo_usuario == 2) {
        this.verificar2 = true;
      }
    });
  }
};
</script>

<style>
</style>