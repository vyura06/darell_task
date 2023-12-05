<template>
    <div>
      <SaveForm  @saved="updateDishes()" ref="saveForm" />
      <div v-for="section in processedSections" :key="section.id" class="mt-5">
        <h1 :id="section.id" style="scroll-margin: 60px;" class="text-center">{{section.name}}</h1>
        <h2 class="text-center text-muted" v-if="section.dishes.length===0 && !isAdmin"> В этой категории пока нет блюд</h2>
  
        <b-container>
          <b-row>
          <MenuPosition
            v-for="dish in section.dishes" :key="dish.id"
            :name="dish.name" :description="dish.description" :img-src="dish.img" :price="dish.price"
            style="max-width: 600px;" class="col-12 col-md-6 col-lg-4 text-break" 
          >
            <b-button class="w-100 mt-auto" v-b-modal.my-modal v-if="isAdmin" @click="$refs.saveForm.dish={...dish}">{{dish.fake?'Добавить':'Редактировать'}}</b-button>
          </MenuPosition>
  
          </b-row>
        </b-container>
      </div>
    </div>
  </template>
  
  <script>
  import MenuPosition from "../components/MenuPosition.vue"
  import SaveForm from "../components/SaveForm.vue"
  import {mapActions} from 'vuex'
  
  let empty_dish = {
    id: -1,
    name: "Новое блюдо",
    price: 11000,
    description: "Описание",
    img: "no-image.png",
    fake: true
  }
  export default {
    name: 'MenuPage',
    components: {MenuPosition, SaveForm},
    props:{
      isAdmin:{
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        currentDish: JSON.parse(JSON.stringify(empty_dish)),
        sections:[
        ]
      }
    },
    methods:{
      ...mapActions(['loadDishes']),
      async updateDishes(){
        let dishesBySections = await this.loadDishes()
        this.sections = dishesBySections
      }
    },
    computed:{
      processedSections(){
        
        const processed = []
        for(const section of this.sections){
          const empty_dish_with_section = this.isAdmin? [{section: section.id, ...empty_dish}]:[]
          processed.push({id:section.id, name:section.name, dishes:[...section.dishes, ...empty_dish_with_section]})
        }
        return processed
      }
    },
    async mounted(){
      await this.updateDishes()
    },
  
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>