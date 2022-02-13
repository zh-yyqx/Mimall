import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import Index from './views/index'
import Product from './views/product'
import Detail from './views/detail'
import Car from './views/car'
import Order from './views/order'
import OrderConfirm from './views/orderConfirm'
import OrderList from './views/orderList'
import OrderPay from './views/orderPay'
import AliPay from './views/aliPay'



Vue.use(Router)

export default new Router({
  routes:[
    {
      path:'/',
      name:'Home',
      component:Home,
      redirect:'./index',
      children:[
        {
          path:'/index',
          name:'index',
          component:Index,
        },
        {
          path:'/product/:id',
          name:'product',
          component:Product,
        },
        {
          path:'/detail/:id',
          name:'detail',
          component:Detail,
        }
      ]
    },
    {
      path:'/car',
      name:'car',
      component:Car,
    },
    {
      path:'/order',
      name:'order',
      component:Order,
      children:[
        {
          path:'confirm',
          name:'order-confirm',
          component:OrderConfirm,
        },
        {
          path:'list',
          name:'order-list',
          component:OrderList,
        },
        {
          path:'pay',
          name:'order-pay',
          component:OrderPay,
        },
        {
          path:'aliPay',
          name:'aliPay',
          component:AliPay,
        }
      ]
    }
    
  ]
})