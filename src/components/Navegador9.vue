<template>
  <div>
    <div>
      <div v-if="this.verificar">
        <Menu />
      </div>
      <div v-if="this.verificar2">
        <menu-admin />
      </div>
      <div class="caixa-pizza">
        <h3>Pizzas</h3>
        <table border="1px" class="table-pizza">
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
        <table border="1px" class="table-pizza">
          <thead>
            <tr>
              <th>ID</th>
              <th>Bebida</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="bebidas in bebida" :key="bebidas.id">
              <td>{{bebidas.id}}</td>
              <td>{{bebidas.bebida}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="caixa-bordas">
        <h3>Bordas</h3>
        <table border="1px" class="table-bordas">
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
import Menu from "../components/Menu.vue";
import MenuAdmin from "../components/MenuAdmin.vue";
const axios = require("axios");
export default {
  data: function() {
    return {
      pizza: [],
      bebida: [],
      usuario: [],
      borda: [],
      verificar: false,
      verificar2: false
    };
  },
  components: {
    Menu,
    MenuAdmin
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
.caixa-pizza {
  height: 250px;
  width: 245px;
  position: absolute;
  overflow-x: auto;
}
.caixa-bebidas {
  height: 250px;
  width: 210px;
  position: absolute;
  margin-left: 300px;
  overflow-x: auto;
}
.caixa-bordas {
  height: 250px;
  width: 312px;
  position: absolute;
  margin-left: 550px;
  overflow-x: auto;
}
h3 {
  text-align: center;
}
h5 {
  position: absolute;
  margin-top: 500px;
  margin-left: 260px;
}
::-webkit-scrollbar {
  width: 7px;
}
::-webkit-scrollbar-track {
  background: white;
}
::-webkit-scrollbar-thumb {
  background: rgba(90, 87, 87, 0.562);
  border-radius: 10px;
}
</style>