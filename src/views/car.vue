<template>
  <div class="car">
    <order-header></order-header>
    car
    <nav-footer></nav-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import OrderHeader from '../components/OrderHeader.vue'
import NavFooter from '../components/NavFooter.vue'

export default {
  name: 'car',
  components: {
    OrderHeader,
    NavFooter
  }
}
</script>
