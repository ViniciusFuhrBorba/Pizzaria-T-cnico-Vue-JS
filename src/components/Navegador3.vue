<template>
  <div>
    <router-link to="/a_cliente">Cliente</router-link>|
    <router-link to="/a_pizza">Pizza</router-link>|
    <router-link to="/a_bebida">Bebida</router-link>|
    <router-link to="/pedido">Pedido</router-link>|
    <router-link to="/c_historia">História</router-link>|
    <router-link to="/c_info_cliente">Informações do Cliente</router-link>|
    <router-link to="/c_cardapio">Cardápio</router-link>
    <div>
      <h3>Dados Pessoais</h3>
      <h4>Nome:</h4>
      <input type="text" v-model="nome" />
      <h4>CPF:</h4>
      <input type="text" v-model="cpf" />
      <h4>Telefone:</h4>
      <input type="text" v-model="telefone" />
      <h4>Usuário:</h4>
      <input type="text" v-model="usuario" />
      <h4>Senha:</h4>
      <input type="password" v-model="senha" />
      <input type="checkbox" />
      <h5>Mostrar senha</h5>
      <h3>Endereço</h3>
      <h4>CEP:</h4>
      <input type="text" v-model="cep" />
      <h4>Logradouro:</h4>
      <input type="text" v-model="logradouro" />
      <h4>Número:</h4>
      <input type="text" />
      <h4>Complemento:</h4>
      <input type="text" v-model="complemento" />
      <h4>Bairro:</h4>
      <input type="text" v-model="bairro" />
      <h4>Cidade:</h4>
      <input type="text" v-model="cidade" />
      <h4>UF:</h4>
      <input type="text" v-model="uf" />
      <h3>Pesquisar Cliente</h3>
      <h4>CPF:</h4>
      <input type="text" v-model="cpfPesquisar" />
      <button @click="pesquisar_cliente">Pesquisar</button>
      <button @click="cadastrar_cliente">Cadastrar</button>
      <button @click="alterar_cliente">Alterar</button>
      <button @click="excluir_cliente">Excluir</button>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data: function() {
    return {
      nome: "",
      cpf: "",
      telefone: "",
      usuario: "",
      senha: "",
      cep: "",
      logradouro: "",
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "",
      numero: "",
      cpfPesquisar: "",
      pegaId: "",
      pegaId2: "",
      usuarioPesquisado: []
    };
  },
  methods: {
    pesquisar_cliente: function() {
      this.$store.state.pessoasBanco.filter(p => {
        if (p.cpf == this.cpfPesquisar) {
          this.nome = p.nome;
          this.cpf = p.cpf;
          this.telefone = p.telefone;
          this.usuario = p.usuario;
          this.senha = p.senha;
          this.cep = p.cep;
          this.logradouro = p.logradouro;
          this.complemento = p.complemento;
          this.bairro = p.bairro;
          this.cidade = p.cidade;
          this.uf = p.uf;
          this.usuarioPesquisado.push(p);
        }
        if (this.usuarioPesquisado.length > 1) {
          this.usuarioPesquisado.splice(0);
          if (p.cpf == this.cpfPesquisar) {
            this.nome = p.nome;
            this.cpf = p.cpf;
            this.telefone = p.telefone;
            this.usuario = p.usuario;
            this.senha = p.senha;
            this.cep = p.cep;
            this.logradouro = p.logradouro;
            this.complemento = p.complemento;
            this.bairro = p.bairro;
            this.cidade = p.cidade;
            this.uf = p.uf;
            this.usuarioPesquisado.push(p);
          }
        }
      });
    },
    cadastrar_cliente() {
      axios.post("http://localhost:64088/api/Usuario/", {
        nome: this.nome,
        cpf: this.cpf,
        telefone: this.telefone,
        usuario: this.usuario,
        senha: this.senha,
        cep: this.cep,
        logradouro: this.logradouro,
        complemento: this.complemento,
        bairro: this.bairro,
        cidade: this.cidade,
        uf: this.uf
      }).then(u =>{
        console.log(u.data)
      });
    },
    alterar_cliente() {
      this.usuarioPesquisado.filter(u => {
        this.pegaId2 = u.id;
      });
      axios.put("http://localhost:64088/api/Usuario/" + this.pegaId2, {
        nome: this.nome,
        cpf: this.cpf,
        telefone: this.telefone,
        usuario: this.usuario,
        senha: this.senha,
        cep: this.cep,
        logradouro: this.logradouro,
        complemento: this.complemento,
        bairro: this.bairro,
        cidade: this.cidade,
        uf: this.uf
      }).then(u => {
        console.log(u.data)
      });
    },
    excluir_cliente: function() {
      this.$store.state.usuarioLogado.filter(u => {
        this.pegaId = u.id;
      });
      axios
        .delete("http://localhost:64088/api/Usuario/" + this.pegaId)
        .then(u => {
          u.id == this.pegaId;
          console.log(u.data);
        });
    }
  }
};
</script>

<style>
</style>