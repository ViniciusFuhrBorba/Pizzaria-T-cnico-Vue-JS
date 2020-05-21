<template>
  <div>
    <router-link to="/a_cliente">Cliente</router-link>|
    <router-link to="/a_pizza">Pizza</router-link>|
    <router-link to="/a_bebida">Bebida</router-link>|
    <router-link to="/pedido">Pedido</router-link>|
    <router-link to="/c_historia">História</router-link>|
    <router-link to="/c_info_cliente">Informações do Cliente</router-link>|
    <router-link to="/c_cardapio">Cardápio</router-link>

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
      numero: ""
    };
  },
  methods: {
    alterar_cliente1() {}
  },
  computed: {
    carregar: function() {
      return this.$store.state.usuarioLogado;
    }
  }
};
</script>

<style>
</style>