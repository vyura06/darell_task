<template>
    <div class="mb-3">
    <b-card  style="height: 100%" class="rounded " no-body>
      <b-card-body class="text-center  d-flex flex-column h-100">
        <img :src="fullImageSrc"/>
        <h2 class="card-title">{{name}}</h2>
        <h4>Цена: {{price}} руб.</h4>
        <b-card-text class="text-center">
          {{description}}
        </b-card-text>
        <slot></slot>
      </b-card-body>
  </b-card>
  </div>
  
</template>

<script>
export default {
  name: 'MenuPosition',
  props:{
    name: String,
    price: Number,
    description: String,
    imgSrc: String,
  },
  computed:{
    fullImageSrc(){
      return '/img/'+this.imgSrc
    }
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  width: 100%;
  /* height: 300px; */
  max-width: 600px;
}
</style>