<template>
  <div>
    <div v-if="this.verificar">
      <Menu />
    </div>
    <div v-if="this.verificar2">
      <menu-admin />
    </div>
    <h3>História</h3>
    <h5>
      Estamos a mais de 10 anos atuando no mercado, comandada pela família
      Escobar. A pizzaria Julubom tornou-se uma das mais famosas e procuradas
      pelos turistas que visitam a cidade de Blumenau e também seus nativos.
      Almejamos logo em breve levar a nossa tradição adiante por todo estado de Santa Catarina.
      Zelamos pelo melhor atendimento ao cliente, sempre aberto a crítica e sugestões.
      Obrigada por escolher a nossa família para alimentar a sua.
      Contamos com seu feedback, abraços da família Escobar!
    </h5>
    <h3>Endereço</h3>
    <h5>Rua 7 de agosto, 1379</h5>
    <h5>Blumenau - Santa Catarina - Brasil</h5>
    <h3>Horário de Atendimento</h3>
    <h5>Dias: Terça à Domingo</h5>
    <h5>Horário: À partir das 18h até as 02h</h5>
  </div>
</template>

<script>
const axios = require("axios");
import Menu from "../components/Menu.vue";
import MenuAdmin from "../components/MenuAdmin.vue";
export default {
  components: {
    Menu,
    MenuAdmin
  },
  data: function() {
    return {
      verificar: false,
      verificar2: false
    };
  },
  mounted() {
    axios
      .get("http://localhost:64088/api/Usuario")
      .then(usuario => (this.$store.state.pessoasBanco = usuario.data));
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
    console.log(this.$store.state.entregas)
  }
};
</script>

<style>
</style>