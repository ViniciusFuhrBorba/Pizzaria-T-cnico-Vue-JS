<template>
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
      <input class="inputs" type="text">
      <h4 class="text2" style="margin-left: 20px">Senha: </h4>
      <input class="inputs" type="password">
      <input id="cb" type="checkbox">
      <h5 class="text2">Mostrar a senha</h5>
      <button id="botao">Entrar</button>
    </div>
    <h5 id="text3">Não possui cadastro? Cadastre-se já!</h5>
    <button class="botaos">Cadastrar</button>
 </div>
 
</template>

<script>
export default {

}
</script>

<style>
.superior{
  width: 100%;
  height: 100px;
  background-color: rgb(151, 84, 6);
  display: flex;
  margin: 0;
}

.inferior{
width: 100%;
height: 605px;
background-color: rgb(172, 101, 8);
margin: 0;
}
.text1{
  color: white;
  font-family: cursive;
  font-size: 25px;
  margin-left: 40%;
  line-height: 50px;
}
.text2{
   color: white;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 15px;
  margin: 0 10px;
}
.textos{
  width: 100%;
  height: 100%;
  margin-left: 5%;
  margin-top: 35px;
}
#caixa_login{
  width: 260px;
  height: 200px;
  margin: 70px auto;
  background-color: rgba(192, 124, 22, 0.849);
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  border: 2px solid rgb(151, 84, 6);
  padding: 30px 20px ;
}
.inputs{
  width: 150px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid rgb(151, 84, 6);
  margin: -4px 20px 10px 0;
  outline: none;
  padding: 2px;
}
#botao{
  width: 120px;
  height: 40px;
  background-color: rgb(172, 101, 8);
  color: white;
  font-family:monospace;
  border-radius: 50px;
  border: 2px solid rgb(151, 84, 6);
  margin: 10px auto;
  font-size: 15px;
  outline: none;
}

#cb{
  width: 15px;
  height: 15px;
  margin: 2px 10px 0 80px;
}
.imagem{
  margin: 20px 0;
  block-size: 300px;
}
.botaos{
  width: 120px;
  height: 40px;
  background-color: rgba(192, 124, 22, 0.849);
  color: white;
  font-family:monospace;
  border-radius: 50px;
  border: 2px solid rgb(151, 84, 6);
  margin: 20px 0 100px 1050px;
  font-size: 15px;
  outline: none;
}
#text3{
  color: white;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 15px;
  margin: -250px 0 0 980px;
}
</style>