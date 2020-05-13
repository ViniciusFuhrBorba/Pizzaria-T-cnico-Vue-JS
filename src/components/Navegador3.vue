<template>
  <div>
    <router-link to="/a_cliente">Cliente</router-link>|
    <router-link to="/a_pizza">Pizza</router-link>|
    <router-link to="/a_bebida">Bebida</router-link>|
    <router-link to="/pedido">Pedido</router-link>|
    <router-link to="/c_historia">História</router-link>|
    <router-link to="/c_info_cliente">Informações do Cliente</router-link>|
    <router-link to="/c_cardapio">Cardápio</router-link>
    <div>
      <h3>Dados Pessoais</h3>
      <h4>Nome:</h4>
      <input type="text" v-model="nome"/>
      <h4>CPF:</h4>
      <input type="text" v-model="cpf"/>
      <h4>Telefone:</h4>
      <input type="text" v-model="telefone"/>
      <h4>Usuário:</h4>
      <input type="text" v-model="usuario"/>
      <h4>Senha:</h4>
      <input type="password" v-model="senha"/>
      <input type="checkbox"/>
      <h5>Mostrar senha</h5>
      <h3>Endereço</h3>
      <h4>CEP:</h4>
      <input type="text" v-model="cep"/>
      <h4>Logradouro:</h4>
      <input type="text" v-model="logradouro"/>
      <h4>Número:</h4>
      <input type="text" />
      <h4>Complemento:</h4>
      <input type="text" v-model="complemento"/>
      <h4>Bairro:</h4>
      <input type="text" v-model="bairro"/>
      <h4>Cidade:</h4>
      <input type="text" v-model="cidade"/>
      <h4>UF:</h4>
      <input type="text" v-model="uf"/>
      <h3>Pesquisar Cliente</h3>
      <h4>CPF:</h4>
      <input type="text" v-model="cpfPesquisar" />
      <button @click="pesquisar_cliente">Pesquisar</button>
      <button @click="cadastrar_cliente">Cadastrar</button>
      <button @click="alterar_cliente">Alterar</button>
      <button @click="excluir_cliente">Excluir</button>
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
      numero: "",
      cpfPesquisar: ""
    };
  },
  methods: {
    pesquisar_cliente: function() {
      this.$store.state.pessoasBanco.filter(p => {
        if (p.cpf == this.cpfPesquisar) {
          this.nome = p.nome;
          this.cpf = p.cpf;
          this.telefone = p.telefone;
          this.usuario = p.usuario;
          this.senha = p.senha;
          this.cep = p.cep;
          this.logradouro = p.logradouro;
          this.complemento = p.complemento;
          this.bairro = p.bairro;
          this.cidade = p.cidade;
          this.uf = p.uf;
        }
      });
    },
    cadastrar_cliente() {
      console.log(this.$store.state.pessoasBanco)
    },
    alterar_cliente() {},
    excluir_cliente() {}
  }
};
</script>

<style>
</style>