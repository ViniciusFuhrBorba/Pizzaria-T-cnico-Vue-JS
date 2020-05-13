<template>
 <div>
<<<<<<< HEAD
      <h4 style="margin-left: 25px">Login: </h4>
      <input type="text" v-model="login">
      <h4 style="margin-left: 20px">Senha: </h4>
=======
      <h4>Login: </h4>
      <input type="text" v-model="login">
      <h4>Senha: </h4>
>>>>>>> 68fc66023f62d1f0b1c1a7d9506ff77c18d94d4c
      <input type="password" v-model="senha">
      <input type="checkbox">
      <h5>Mostrar a senha</h5>
      <button @click="entrar">Entrar</button>
    <h5>Não possui cadastro? Cadastre-se já!</h5>
    <button @click="navegar_cadastro">Cadastrar</button>
 </div>
</template>

<script>
const axios = require('axios')
export default {
  data: function(){
      return {
        usuario: [],
        login: '',
        senha: ''
      }
  },
  methods: {
    navegar_entrar (){
      this.$store.state.pessoasBanco.push(this.usuario)
      this.usuario.filter(u => {
        if(u.usuario == this.login && u.senha == this.senha){
            this.$store.state.usuarioLogado.push(u)
            this.$router.push('C_Historia')
        }
      })
      
    },
    navegar_cadastro(){
      this.$router.push('Cadastro_Usuario')
    }
  }, mounted(){
    axios.get("http://localhost:64088/api/Usuario").then(usuario => this.usuario = usuario.data)
  }
}
</script>

<style>
</style>