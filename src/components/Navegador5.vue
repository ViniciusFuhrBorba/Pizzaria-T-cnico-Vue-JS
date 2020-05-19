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
    <h4>Bebida:</h4>
    <input type="text" v-model="bebida" />
    <h4>Tamanho:</h4>
    <input type="text" v-model="tamanho" />
    <h4>Preço:</h4>
    <input type="text" v-model="preco" />
    <h3>Pesquisar Bebida</h3>
    <h4>Bebidas</h4>
    <select v-model="bebidasSel">
      <option value="0" selected disabled>Bebidas</option>
      <option v-for="bebida in bebidas" :key="bebida.indice" :value="bebida.id">{{bebida.bebida}}</option>
    </select>
    <button @click="pesquisar_bebida">Pesquisar</button>
    <button @click="cadastrar_bebida">Cadastrar</button>
    <button @click="alterar_bebida">Alterar</button>
    <button @click="excluir_bebida">Excluir</button>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data: function() {
    return {
      bebidas: [],
      bebida: "",
      tamanho: "",
      preco: "",
      bebidasSel: 0,
      pegaID1: "",
      pegaID2: ""
    };
  },
  methods: {
    pesquisar_bebida: function() {
      this.bebidas.filter(u => {
        if (u.id == this.bebidasSel) {
          (this.bebida = u.bebida),
            (this.tamanho = u.tamanho),
            (this.preco = u.preco);
        }
      });
    },
    cadastrar_bebida: function() {
      axios
        .post("http://localhost:64088/api/Bebida/", {
          bebida: this.bebida,
          tamanho: this.tamanho,
          preco: this.preco
        })
        .then(p => {
          console.log(p.data);
        });
    },
    alterar_bebida: function() {
      this.bebidas.filter(u => {
        if (u.id == this.bebidasSel) {
          this.pegaID1 = u.id;
        }
      });
      axios
        .put("http://localhost:64088/api/Bebida/" + this.pegaID1, {
          bebida: this.bebida,
          tamanho: this.tamanho,
          preco: this.preco
        })
        .then(p => {
          console.log(p.data);
        });
    },
    excluir_bebida: function() {
      this.bebidas.filter(u => {
        if (u.id == this.bebidasSel) {
          this.pegaID2 = u.id;
        }
      });
      axios
        .delete("http://localhost:64088/api/Bebida/" + this.pegaID2)
        .then(u => {
          u.id == this.pegaID2;
          console.log(u.data);
        });
      this.bebida = "";
      this.tamanho = "";
      this.preco = "";
    }
  },
  mounted() {
    axios
      .get("http://localhost:64088/api/Bebida")
      .then(p => (this.bebidas = p.data));
  },
  computed: {
    carregarCombo: function() {
      return this.bebidas;
    }
  }
};
</script>

<style>
</style>