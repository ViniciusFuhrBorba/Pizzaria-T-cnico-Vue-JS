<template>
  <div>
    <div v-if="this.verificar">
      <Menu />
    </div>
    <div v-if="this.verificar2">
      <menu-admin />
    </div>
    <h3>Confirmar Pedido</h3>
    <h4>Pizzas</h4>
    <table>
      <thead>
        <tr>
          <th>Sabor</th>
          <th>Tamanho</th>
          <th>Borda</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
    <h4>Bebidas</h4>
    <table>
      <thead>
        <tr>
          <th>Bebida</th>
          <th>Tamanho</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
    <h4>Forma de pagamento:</h4>
    <h4>Valor:</h4>
    <button @click="editar_pedido">Editar</button>
    <button @click="finalizar_pedido">Finalizar</button>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import MenuAdmin from "../components/MenuAdmin.vue";
export default {
  components: {
    Menu,
    MenuAdmin
  },
  methods: {
    editar_pedido() {},
    finalizar_pedido() {
      alert("Pedido finalizado! Obrigado pela preferência.");
      this.$router.push("/c_historia");
    }
  },
  mounted() {
    if (this.$store.state.usuarioLogado != null) {
      this.$store.state.usuarioLogado.splice(0);
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