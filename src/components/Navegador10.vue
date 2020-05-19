<template>
  <div>
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
        <tbody>
          
        </tbody>
      </table>
      <h4>Bebidas</h4>
      <table>
        <thead>
          <tr>
            <th>Bebida</th>
            <th>Tamanho</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
      <h4>Forma de pagamento: </h4>
      <h4>Valor: </h4>
      <button @click="editar_pedido">Editar</button>
        <button @click="finalizar_pedido">Finalizar</button>
  </div>
</template>

<script>
export default {
    methods: {
        editar_pedido(){

        },
        finalizar_pedido(){
            alert("Pedido finalizado! Obrigado pela preferência.")
            this.$router.push('/c_historia')
        }
    }
}
</script>

<style>

</style>