<template>
  <div class="home">
    HONE
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import NavFooter from '../components/NavFooter.vue'
import NavHeader from '../components/NavHeader.vue'

export default {
  name: 'nav-home',
  components: {
    NavHeader,
    NavFooter
  }
}
</script>
