<template>
  <div>
    <h4>Login:</h4>
    <input type="text" v-model="login" />
    <h4>Senha:</h4>
    <input type="password" v-model="senha" />
    <input type="checkbox" />
    <h5>Mostrar a senha</h5>
    <button @click="entrar">Entrar</button>
    <h5>Não possui cadastro? Cadastre-se já!</h5>
    <button @click="navegar_cadastro">Cadastrar</button>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data: function() {
    return {
      usuario: [],
      login: "",
      senha: "",
      admins: [],
      entregadores: []
    };
  },
  methods: {
    entrar() {
      this.usuario.filter(u => {
        if (u.usuario == this.login && u.senha == this.senha) {
          this.$store.state.usuarioLogado.push(u);
          sessionStorage.setItem("usuarioLogado", JSON.stringify(u));
          this.$router.push("C_Historia");
        }
      });
      this.admins.filter(a => {
        if (a.usuario == this.login && a.senha == this.senha) {
          this.$store.state.usuarioLogado.push(a);
          sessionStorage.setItem("usuarioLogado", JSON.stringify(a));
          this.$router.push("C_Historia");
        }
      });
      this.entregadores.filter(e => {
        if (e.usuario == this.login && e.senha == this.senha) {
          this.$store.state.usuarioLogado.push(e);
          sessionStorage.setItem("usuarioLogado", JSON.stringify(e));
          this.$router.push("Entregas");
        }
      });
    },
    navegar_cadastro() {
      this.$router.push("Cadastro_Usuario");
    }
  },
  mounted() {
    axios
      .get("http://localhost:64088/api/Usuario")
      .then(usuario => (this.usuario = usuario.data));
    axios
      .get("http://localhost:64088/api/Adm")
      .then(adm => (this.admins = adm.data));
    axios
      .get("http://localhost:64088/api/Entregador")
      .then(entregador => (this.entregadores = entregador.data));
    
  }
};
</script>

<style>
</style>