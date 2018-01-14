import Vue from 'vue'
import Synth from './Synth.vue'
// import Tone from 'tone'
import VueCircleSlider from 'vue-circle-slider'
import Vuetify from 'vuetify'

Vue.use(VueCircleSlider)
Vue.use(Vuetify)

new Vue({
  el: '#synth',
  render: h => h(Synth)
})
