<template>
 <div>
      <h4>Login: </h4>
      <input type="text" v-model="login">
      <h4>Senha: </h4>
      <input type="password" v-model="senha">
      <input type="checkbox">
      <h5>Mostrar a senha</h5>
      <button @click="entrar">Entrar</button>
    <h5>Não possui cadastro? Cadastre-se já!</h5>
    <button @click="navegar_cadastro">Cadastrar</button>
 </div>
</template>

<script>
export default {
  methods: {
    entrar (){
       if(this.login == "Vinicius" && this.senha == "123"){
          this.$router.push('A_Cliente', {name: 'Pedido'})
        }
    },
    navegar_cadastro(){
      this.$router.push('Cadastro_Usuario')
    }
  }, data: function(){
      return {
          login: '',
          senha: ''
      }
    }
}

</script>

<style>
</style>