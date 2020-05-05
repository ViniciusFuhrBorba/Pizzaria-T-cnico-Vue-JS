import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import A_Bebida from '../views/A_Bebida.vue'
import A_Cliente from '../views/A_Cliente.vue'
import A_Pizza from '../views/A_Pizza.vue'
import C_Cardapio from '../views/C_Cardapio.vue'
import C_Historia from '../views/C_Historia.vue'
import C_Info_Cliente from '../views/C_Info_Cliente.vue'
import Cadastro_Usuario from '../views/Cadastro_Usuario.vue'
import Pedido from '../views/Pedido.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/a_bebida',
    name: 'A_Bebida',
    component: A_Bebida
  },
  {
    path: '/a_cliente',
    name: 'A_Cliente',
    component: A_Cliente
  },
  {
    path: '/a_pizza',
    name: 'A_Pizza',
    component: A_Pizza
  },
  {
    path: '/c_cardapio',
    name: 'C_Cardapio',
    component: C_Cardapio
  },
  {
    path: '/c_historia',
    name: 'C_Historia',
    component: C_Historia
  },
  {
    path: '/c_info_cliente',
    name: 'C_Info_Cliente',
    component: C_Info_Cliente
  },
  {
    path: '/cadastro_usuario',
    name: 'Cadastro_Usuario',
    component: Cadastro_Usuario
  },
  {
    path: '/pedido',
    name: 'Pedido',
    component: Pedido
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
