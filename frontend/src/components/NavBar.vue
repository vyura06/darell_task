<template>
    <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
        <b-navbar-brand href="#">Меню</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item :href="'#'+section.htmlId" v-for="section in sections" :key="section.htmlId">{{section.name}}</b-nav-item>
            
   
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>
  
<script>
import {mapGetters} from 'vuex'
export default {
    name: 'NavBar',
    computed:{
       ...mapGetters(['sections'])
    },

    async mounted(){
      
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>