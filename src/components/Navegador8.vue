<template>
  <div>
    <div v-if="this.verificar">
      <Menu />
    </div>
    <div v-if="this.verificar2">
      <menu-admin />
    </div>
    <div v-for="(pessoa, index) in carregar" :key="index">
      <h3>Dados Pessoais</h3>
      <h4>Nome:</h4>
      <input type="text" v-model="pessoa.nome" />
      <h4>CPF:</h4>
      <input type="text" v-model="pessoa.cpf" />
      <h4>Telefone:</h4>
      <input type="text" v-model="pessoa.telefone" />
      <h4>Usuário:</h4>
      <input type="text" v-model="pessoa.usuario" />
      <h4>Senha:</h4>
      <input type="password" v-model="pessoa.senha" />
      <input type="checkbox" />
      <h5>Mostrar senha</h5>
      <h3>Endereço</h3>
      <h4>CEP:</h4>
      <input type="text" v-model="pessoa.cep" />
      <h4>Logradouro:</h4>
      <input type="text" v-model="pessoa.logradouro" />
      <h4>Número:</h4>
      <input type="text" />
      <h4>Complemento:</h4>
      <input type="text" v-model="pessoa.complemento" />
      <h4>Bairro:</h4>
      <input type="text" v-model="pessoa.bairro" />
      <h4>Cidade:</h4>
      <input type="text" v-model="pessoa.cidade" />
      <h4>UF:</h4>
      <input type="text" v-model="pessoa.uf" />
      <button @click="alterar_cliente1">Alterar</button>
    </div>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue'
import MenuAdmin from '../components/MenuAdmin.vue'
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
      verificar: false,
      verificar2: false
    };
  }, components: {
    Menu,
    MenuAdmin
  },
  methods: {
    alterar_cliente1() {}
  },
  computed: {
    carregar: function() {
      return this.$store.state.usuarioLogado;
    }
  }, mounted() {
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