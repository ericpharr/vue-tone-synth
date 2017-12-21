import Vue from 'vue'
import Synth from './Synth.vue'
// import Tone from 'tone'
import VueCircleSlider from 'vue-circle-slider'

Vue.use(VueCircleSlider)

new Vue({
  el: '#synth',
  render: h => h(Synth)
})
