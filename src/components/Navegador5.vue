<template>
  <div>
    <div v-show="this.verificar">
      <Menu />
    </div>
    <div v-show="this.verificar2">
      <menu-admin />
    </div>
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
import Menu from '../components/Menu.vue'
import MenuAdmin from '../components/MenuAdmin.vue'
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
      pegaID2: "",
      verificar: false,
      verificar2: false
    };
  }, components: {
    Menu,
    MenuAdmin
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
      return this.bebidas;
    }
  }
};
</script>

<style>
</style>