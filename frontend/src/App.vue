<template>
  <div id="app">
    <NavBar/>
    <div style="margin-top: 60px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import {mapActions} from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions(['loadSections'])
  },
  async mounted(){
    await this.loadSections()    
  },
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
html {
    scroll-behavior: smooth;
}
</style>