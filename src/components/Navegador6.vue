<template>
  <div>
    <div v-show="this.verificar">
      <Menu />
    </div>
    <div v-show="this.verificar2">
      <menu-admin />
    </div>
    <h3>Pesquisar Cliente</h3>
    <h4>CPF:</h4>
    <input type="text" v-model="cpf" />
    <button @click="pesquisar_cliente1">Pesquisar</button>
    <h3>Informações da Pizza</h3>
    <h4>Tamanho:</h4>
    <select v-model="tamanhoSel">
      <option value="0" selected disabled>Selecione o Tamanho da Pizza</option>
      <option
        v-for="tamanho in tamanhos"
        :key="tamanho.id"
        :value="tamanho.id"
      >{{"Tamanho: "+tamanho.tamanho+" | Preço: "+"R$ "+tamanho.preco_tamanho}}</option>
    </select>
    <div class="sabor">
      <h4>Sabor 1:</h4>
      <select v-model="sabor1" class="select">
        <option value="0" selected disabled>Selecione o Sabor da Pizza</option>
        <option v-for="pizza in pizzas" :key="pizza.id" :value="pizza.id">{{pizza.sabor}}</option>
      </select>
      <h4>Sabor 2:</h4>
      <select v-model="sabor2" class="select">
        <option value="0" selected disabled>Selecione o Sabor da Pizza</option>
        <option v-for="pizza in pizzas" :key="pizza.id" :value="pizza.id">{{pizza.sabor}}</option>
      </select>
      <h4>Sabor 3:</h4>
      <select v-model="sabor3" class="select">
        <option value="0" selected disabled>Selecione o Sabor da Pizza</option>
        <option v-for="pizza in pizzas" :key="pizza.id" :value="pizza.id">{{pizza.sabor}}</option>
      </select>
      <h4>Sabor 4:</h4>
      <select v-model="sabor4" class="select">
        <option value="0" selected disabled>Selecione o Sabor da Pizza</option>
        <option v-for="pizza in pizzas" :key="pizza.id" :value="pizza.id">{{pizza.sabor}}</option>
      </select>
    </div>
    <h4>Borda:</h4>
    <select v-model="bordaSel" class="select">
      <option value="0" selected disabled>Selecione a Borda da Pizza</option>
      <option
        v-for="borda in bordas"
        :key="borda.id"
        :value="borda.id"
      >{{borda.borda+" | Preço: "+"R$ "+borda.preco_borda}}</option>
    </select>
    <h4>Observações do pedido:</h4>
    <input type="text" />
    <h3>Informações da Bebida</h3>
    <h4>Bebida:</h4>
    <select v-model="bebidaSel">
      <option value="0" selected disabled>Selecione a Bebida</option>
      <option v-for="bebida in bebidas" :key="bebida.id" :value="bebida.id">{{bebida.bebida}}</option>
    </select>
    <h4>Tamanho e Preço:</h4>
    <select v-model="tamonhoPrecoBebida">
      <option value="0" selected disabled>Selecione o Tamanho da Bebida</option>
      <option
        v-for="tamanhoPreco in precosBebidas"
        :key="tamanhoPreco.id"
        :value="tamanhoPreco.id"
      >{{tamanhoPreco.tamanho+" | Preço: "+"R$ "+tamanhoPreco.preco}}</option>
    </select>
    <h4>Forma de pagamento:</h4>
    <select v-model="pagSel">
      <option value="0" selected disabled>Selecione a Forma de Pagamento</option>
      <option v-for="forma in formasPag" :key="forma.id" :value="forma.id">{{forma.tipo_pagamento}}</option>
    </select>
    <h5>Retirar na pizzaria</h5>
    <input type="checkbox" />
    <h4>Valor:</h4>
    <button @click="finalizar_pedido">Finalizar</button>
    <button @click="acrescentar_item">Acrescentar</button>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import MenuAdmin from "../components/MenuAdmin.vue";
const axios = require("axios");
export default {
  data: function() {
    return {
      usuarios: [],
      cpf: "",
      dadosUsuario: [],
      verificar: false,
      verificar2: false,
      tamanhoSel: 0,
      sabor1: 0,
      sabor2: 0,
      sabor3: 0,
      sabor4: 0,
      bordaSel: 0,
      bebidaSel: 0,
      pagSel: 0,
      tamonhoPrecoBebida: 0,
      tamanhos: [],
      pizzas: [],
      bordas: [],
      bebidas: [],
      formasPag: [],
      precosBebidas: [],
      pedido: [],
      itensPedido: []
    };
  },
  components: {
    Menu,
    MenuAdmin
  },
  methods: {
    finalizar_pedido() {
      var pedidoCompleto = this.pedido
      this.$store.state.pedidoCompleto = pedidoCompleto
      this.$router.push('/confirmar_pedido');
    },
    pesquisar_cliente1() {
      this.usuarios.filter(u => {
        if (u.cpf == this.cpf) {
          if (this.dadosUsuario == null) {
            this.dadosUsuario.push(u);
          }
          if (this.dadosUsuario.length != null) {
            this.dadosUsuario.splice(0);
            this.dadosUsuario.push(u);
          }
        }
      });
    },
    acrescentar_item() {
      this.itensPedido = []
      this.tamanhos.filter(f => {
        if (f.id == this.tamanhoSel) {
          this.itensPedido.tamanho = f.tamanho;
          this.itensPedido.precoTamanho = f.preco_tamanho
          console.log(this.itensPedido)
        }
      });
      this.pizzas.filter(p => {
        if (p.id == this.sabor1) {
          this.itensPedido.saborUm = p.sabor;
        }
        if (p.id == this.sabor2) {
          this.itensPedido.saborDois = p.sabor;
        }
        if (p.id == this.sabor3) {
          this.itensPedido.saborTres = p.sabor;
        }
        if (p.id == this.sabor4) {
          this.itensPedido.saborQuatro = p.sabor;
        } 
      });
      this.bordas.filter(b => {
        if (b.id == this.bordaSel) {
          this.itensPedido.borda = b.borda;
        }
      });
      this.bebidas.filter(be => {
        if (be.id == this.bebidaSel) {
          this.itensPedido.bebida = be.bebida;
        }
      });
      this.precosBebidas.filter(pb => {
        if (pb.id == this.tamonhoPrecoBebida) {
          this.itensPedido.tamanhoPreco = pb.tamanho+" | "+" R$ "+pb.preco;
        }
      });
      this.formasPag.filter(fp => {
        if (fp.id == this.pagSel) {
          this.itensPedido.formaPag = fp.tipo_pagamento;
        }
      });
      this.pedido.push(this.itensPedido)
      console.log(this.pedido);
    }
  },
  mounted() {
    axios
      .get("http://localhost:64088/api/Usuario/")
      .then(u => (this.usuarios = u.data));
    axios
      .get("http://localhost:64088/api/TamanhoPizza/")
      .then(t => (this.tamanhos = t.data));
    axios
      .get("http://localhost:64088/api/Pizza/")
      .then(p => (this.pizzas = p.data));
    axios
      .get("http://localhost:64088/api/Borda/")
      .then(b => (this.bordas = b.data));
    axios
      .get("http://localhost:64088/api/FormaPagamento/")
      .then(f => (this.formasPag = f.data));
    axios
      .get("http://localhost:64088/api/Bebida/")
      .then(be => (this.bebidas = be.data));
    axios
      .get("http://localhost:64088/api/PrecoTamanhoBebidas/")
      .then(ptb => (this.precosBebidas = ptb.data));

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
.sabor {
  width: auto;
  height: 20px;
  display: flex;
  margin: 20px 0px 20px 0px;
}
h4 {
  margin: 0;
  padding: 0;
}
.select {
  margin: 0 10px 0 0px;
}
</style>