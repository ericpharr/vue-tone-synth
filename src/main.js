import Vue from 'vue'
import Synth from './Synth.vue'
// import Tone from 'tone'
import VueCircleSlider from 'vue-circle-slider'
import Vuetify from 'vuetify'

Vue.use(VueCircleSlider)
Vue.use(Vuetify, {
    theme: {
      primary: '#364554',
      secondary: '#78be9a',
      accent: '#eafab3',
      error: '#FF5252',
      info: '#d0d6ca',
      success: '#4CAF50',
      warning: '#FFC107'
    }
})

new Vue({
  el: '#synth',
  render: h => h(Synth)
})
