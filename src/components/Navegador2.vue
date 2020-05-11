<template>
  <div>
      <h3>Dados Pessoais</h3>
      <h4>Nome: </h4>
      <input type="text">
      <h4>CPF: </h4>
      <input type="number">
      <h4>Telefone: </h4>
      <input type="number">
      <h4>Usuário: </h4>
      <input type="text">
      <h4>Senha: </h4>
      <input type="password">
      <input type="checkbox">
      <h5>Mostrar senha</h5>
      <h3>Endereço</h3>
      <h4>CEP: </h4>
      <input type="number">
      <h4>Logradouro: </h4>
      <input type="text">
      <h4>Número: </h4>
      <input type="number">
      <h4>Complemento: </h4>
      <input type="text">
      <h4>Bairro: </h4>
      <input type="text">
      <h4>Cidade: </h4>
      <input type="text">
      <h4>UF: </h4>
      <input type="text">
      <button @click="navegar_login">Cadastrar</button>
  </div>
</template>

<script>
export default {
  methods: {
    navegar_login (){
      alert('Salvo com sucesso!')
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>