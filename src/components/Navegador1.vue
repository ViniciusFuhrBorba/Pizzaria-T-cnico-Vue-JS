<template>
<<<<<<< HEAD
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
=======
 <div class="inferior">
    <div class="superior">
      <img src="../assets/logo.png" class="imagem">
      <h3 class="text1">Contato:</h3>
      <div class="textos">
        <h4 class="text2">Telefone: (47) 3323-9656</h4>
        <h4 class="text2">E-mail: pizzariajulubom@gmail.com</h4>
      </div>
    </div>
    <div id="caixa_login">
      <h4 class="text2" style="margin-left: 25px">Login: </h4>
      <input class="inputs" type="text" v-model="login"><br>
      <h4 class="text2" style="margin-left: 20px">Senha: </h4>
      <input class="inputs" type="password" v-model="senha"><br>
      <input id="cb" type="checkbox">
      <h5 class="text2">Mostrar a senha</h5>
      <button id="botao" @click="entrar">Entrar</button>
      <h5 id="text3">Não possui cadastro? Cadastre-se já!</h5>
      <button class="botaos">Cadastrar</button>
    </div>
>>>>>>> 89748a923a45649ef88e7c82ba4bca1a9589ffd3
 </div>
</template>

<script>
export default {
<<<<<<< HEAD
  methods: {
    navegar_entrar (){
      this.$router.push('A_Cliente')
    },
    navegar_cadastro(){
      this.$router.push('Cadastro_Usuario')
    }
  }
}
=======
    data: function(){
      return {
          login: '',
          senha: ''
      }
    }, methods: {
        entrar: function(){
            if(this.login == "Vinicius" && this.senha == "123"){
                console.log("Entrou")
                this.$router.push({name: 'Pedido'})
            }
        }
    }
} 
>>>>>>> 89748a923a45649ef88e7c82ba4bca1a9589ffd3
</script>

<style>
</style>