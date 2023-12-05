<template>
    <b-modal id="my-modal" ok-title="Save" @ok="savePosition">
      <b-form ref="form">
          <b-form-group
            id="input-group-1"
            label="Название блюда:"
            label-for="input-1"
          >
            <b-form-input
                id="input-1"
                type="text"
                required
                name="name"
                v-model="dish.name"
            />
          </b-form-group>
  
  
          <b-form-group
            id="input-group-2"
            label="Цена:"
            label-for="input-2"
          >
            <b-form-input
                id="input-2"
                type="number"
                name="price"
                v-model="dish.price"
                required
            />
          </b-form-group>
  
  
          <b-form-group
            id="input-group-3"
            label="Описание:"
            label-for="input-3"
          >
            <b-form-textarea
                id="input-3"
                type="text"
                name="description"
                v-model="dish.description"
                required
            />
          </b-form-group>
  
          <b-form-group
            id="input-group-4"
            label="Картинка:"
            label-for="input-4"
          >
            <b-form-file
                id="input-4"
                required
                name="image"
            />
          </b-form-group>
          <b-form-group
            id="input-group-5"
            label="Категория:"
            label-for="input-5"
          >
            <b-form-select
                id="input-5"
                :options="options"
                required
                name="section"
                v-model="dish.section"
            />
          </b-form-group>
          <b-form-input
                v-show="false"
                id="input-6"
                type="number"
                name="id"
                v-model="dish.id"
                required
            />
      </b-form>
    </b-modal>
  
  </template>
  
  
  <script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'SaveForm',
    data(){
      return{
        dish: {}
      }
    },
    computed:{
      ...mapGetters(['sections']),
      options(){
        return this.sections.map(s=> {return {value:s.htmlId, text:s.name}})
      }
    },
  
    methods:{
      ...mapActions(['sendForm']),
      async savePosition(){
        const formData = new FormData(this.$refs.form)
        await this.sendForm(formData)
        this.$emit('saved')
      }
    },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>