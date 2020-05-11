<template>
 <div>
      <h4 style="margin-left: 25px">Login: </h4>
      <input type="text">
      <h4 style="margin-left: 20px">Senha: </h4>
      <input type="password">
      <input type="checkbox">
      <h5>Mostrar a senha</h5>
      <button @click="navegar_entrar">Entrar</button>
    <h5>Não possui cadastro? Cadastre-se já!</h5>
    <button @click="navegar_cadastro">Cadastrar</button>
 </div>
</template>

<script>
export default {
  methods: {
    navegar_entrar (){
      this.$router.push('A_Cliente')
    },
    navegar_cadastro(){
      this.$router.push('Cadastro_Usuario')
    }
  }
}
</script>

<style>
</style>