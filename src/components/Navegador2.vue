<template>
  <div>
    <div v-if="this.verificar">
      <Menu />
    </div>
    <div v-if="this.verificar2">
      <menu-admin />
    </div>
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
    <input type="text" v-model="numero" />
    <h4>Complemento:</h4>
    <input type="text" v-model="complemento" />
    <h4>Bairro:</h4>
    <input type="text" v-model="bairro" />
    <h4>Cidade:</h4>
    <input type="text" v-model="cidade" />
    <h4>UF:</h4>
    <input type="text" v-model="uf" />
    <button @click="cadastrar">Cadastrar</button>
    <button @click="navegar_login">Ir para Tela de Login</button>
  </div>
</template>

<script>
const axios = require("axios");
import Menu from "../components/Menu.vue";
import MenuAdmin from "../components/MenuAdmin.vue"
export default {
  components: {
    Menu,
    MenuAdmin
  },
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
      usuarios: [],
      verificar: false,
      verificar2: false
    };
  },
  methods: {
    cadastrar: function() {
      var contador = 0;
      this.usuarios.filter(u => {
        if (this.usuario == u.usuario) {
          contador += 1;
          alert("Usuario já Cadastrado");
        }
        console.log(contador);
      });
      if (contador == 0) {
        axios
          .post("http://localhost:64088/api/Usuario/", {
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
          })
          .then(u => {
            console.log(u.data);
          });
      }
    },
    navegar_login: function() {
      this.$router.push("/");
    }
  },
  mounted() {
    axios
      .get("http://localhost:64088/api/Usuario/")
      .then(u => (this.usuarios = u.data));
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
  }
};
</script>

<style>
</style>

          
