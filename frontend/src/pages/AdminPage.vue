  <template>
    <div>
    <MenuPage :is-admin="true"/>
    </div>
  </template>
  
  <script>
  import MenuPage from "./MenuPage.vue"
  
  export default {
    name: 'AdminPage',
    components: {MenuPage},
  }
  </script>
  
  <style scoped>
  
  </style>