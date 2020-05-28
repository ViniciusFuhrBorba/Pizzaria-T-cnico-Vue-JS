<template>
  <div>
    <div v-if="this.verificar">
      <Menu />
    </div>
    <div v-if="this.verificar2">
      <menu-admin />
    </div>
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
import Menu from '../components/Menu.vue'
import MenuAdmin from '../components/MenuAdmin.vue'
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
      saborPizza: "",
      verificar: false,
      verificar2: false
    };
  }, components: {
    Menu,
    MenuAdmin
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
          location.reload();
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
          location.reload();
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
          location.reload();
        });
      this.saborPizza = "";
    }
  },
  mounted() {
    axios
      .get("http://localhost:64088/api/Pizza")
      .then(p => (this.pizzas = p.data));
   if (this.$store.state.usuarioLogado != null) {
      this.$store.state.usuarioLogado.splice(0)
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