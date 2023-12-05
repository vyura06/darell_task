import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'



Vue.use(Vuex)

let sections = [
  {htmlId:'snaks', name: 'Закуски'},
  {htmlId:'hot', name: 'Горячие блюда'},
]
export default new Vuex.Store({
  state: {
    sections,
    sectionIds: sections.map(x=>x.htmlId)
  },
  getters: {
    sections(state){
      return state.sections
    },
    sectionIds(state){
      return state.sectionIds
    }
  },
  mutations: {
    addSection(state, section){
      if(!state.sectionIds.includes(section.htmlId)){
        state.sectionIds.push(section.htmlId)
        state.sections.push(section)
      }
    }
  },
  actions: {
    async  loadSections({commit}){
      const url = "/api/sections"
      const response = await axios.get(url)
      for(const section of response.data){
        commit('addSection', section)
      }
    },
    async loadDishes(){
      const url = "/api/dishes"
      const response = await axios.get(url)
      const dishesBySections = []
      for(const section of response.data){
        dishesBySections.push({id:section.htmlId, name:section.name, dishes: section.Dish.map(x=>({section:section.htmlId,...x}))})
      }
      return dishesBySections
    },
    async sendForm(ctx, formData){
      await axios.post('/api/dishes',formData, {  headers: { "Content-Type": "multipart/form-data" }})
    }
  },
  modules: {
  }
})