<template id="Synth" lang="html" @keydown.enter="playNote()">
	<v-app>
	<v-content>
		<v-container>
			<v-layout align-center justify-center>
				<v-flex xs12 sm10 md9>
					<v-card color='primary elevation-24'>
						<v-layout row wrap>
							<v-flex xs12 sm6 md6 class='pa-3'>
								<v-layout row wrap>
									<v-flex>
										<h1 class='title info--text'>Oscillator</h1>
									</v-flex>
								</v-layout>
								<v-layout row wrap>
									<v-flex>
										<v-btn-toggle flat mandatory v-model='synth.oscillator.type' class='primary'>
											<v-btn flat value='sine' class='info--text'>Sine</v-btn>
											<v-btn flat value='sawtooth' class='info--text'>Saw</v-btn>
											<v-btn flat value='square' class='info--text'>Square</v-btn>
											<v-btn flat value='pulse' class='info--text'>Pulse</v-btn>
										</v-btn-toggle>
									</v-flex>
								</v-layout>
								<v-flex row wrap>
									<select class="" v-model="synth.oscillator.type">
										<option value="sine">Sine</option>
										<option value="square">Square</option>
										<option value="sawtooth">Saw</option>
										<option value="pwm">PWM</option>
										<option value="fatsawtooth">Fat Saw</option>
										<option value="fatsquare">Fat Square</option>
										<option value="amsawtooth">AM Saw</option>
										<option value="amsquare">AM Square</option>
										<option value="fmsawtooth">FM Saw</option>
										<option value="fmsquare">FM Square</option>
									</select>
								</v-flex>
								<v-layout row wrap>
								</v-layout>
								<v-layout row wrap>
									<v-flex xs2>
										<circle-slider
										v-model="synth.detune.value"
										:min='-1200'
										:max='1200'
										:step-size='100'
										:side="50"
										:circle-width-rel="15"
										:progress-width-rel="10"
										:knob-radius="5"
										>Detune</circle-slider>
									</v-flex>
									<v-flex xs2>
										<div class="" v-if="synth.oscillator.type.slice(0,2) == 'am'">
											<circle-slider
											v-model='synth.oscillator._oscillator.harmonicity.value'
											:min='0'
											:max='4'
											:step-size='.01'
											:side="50"
											:circle-width-rel="15"
											:progress-width-rel="10"
											:knob-radius="5"
											></circle-slider>
										</div>
									</v-flex>
								</v-layout>
							<v-layout row wrap>
								<h1 class='title info--text'>Filter</h1>
							</v-layout>
							<v-layout row wrap>
								<v-flex xs2>
									<circle-slider
									v-model="synth.filter.frequency.value"
									:min='0'
									:max='15000'
									:side="50"
									:circle-width-rel="15"
									:progress-width-rel="10"
									:knob-radius="5"
									></circle-slider>
									<p class="info--text">Cutoff</p>
								</v-flex>
								<v-flex xs2>
									<circle-slider
									v-model='synth.filter.Q.value'
									:min='0'
									:max='15'
									:side="50"
									:circle-width-rel="15"
									:progress-width-rel="10"
									:knob-radius="5"
									></circle-slider>
									<p class="info--text">Resonance</p>
								</v-flex>
							</v-layout>
						</v-flex>
						<v-flex xs12 sm6 md6 class='pa-3'>
							<v-layout row wrap>
								<h1 class='title info--text'>Envelope</h1>
							</v-layout>
							<v-layout>
								<v-flex xs2 offset-xs2>
									<vue-slider v-model="synth.envelope.attack"
									v-bind="sliderOptions"
									:min=".005"
									:max="5"
									:interval=".005"
									class='pl-3'
									></vue-slider>
									<p class="info--text">attack</p>
								</v-flex>
								<v-flex xs2>
									<vue-slider v-model="synth.envelope.decay"
									v-bind="sliderOptions"
									:min=".005"
									:max="5"
									:interval=".005"
									class='pl-3'

									></vue-slider>
									<p class="info--text">decay</p>
								</v-flex>
								<v-flex xs2>
									<vue-slider v-model="synth.envelope.sustain"
									v-bind="sliderOptions"
									:min="0"
									:max="1"
									:interval=".005"
									class='pl-3'

									></vue-slider>
									<p class="info--text">sustain</p>
								</v-flex>
								<v-flex xs2>
									<vue-slider v-model="synth.envelope.release"
									v-bind="sliderOptions"
									:min=".005"
									:max="5"
									:interval=".005"
									class='pl-3'

									></vue-slider>
									<p class="info--text">release</p>
								</v-flex>
							</v-layout>
						</v-flex>
					</v-layout>
					<v-layout row wrap>
						<v-flex xs12 sm6 md6 class="pa-3">

							<v-layout row wrap>
								<h1 class='title info--text'>Filter Envelope</h1>
							</v-layout>
							<v-layout row wrap>
								<v-flex xs2 offset-xs2>
									<vue-slider v-model="synth.filterEnvelope.attack"
									v-bind="sliderOptions"
									:min=".005"
									:max="5"
									:interval=".005"
									class='pl-3'

									></vue-slider>
									<p class="info--text">attack</p>
								</v-flex>
								<v-flex xs2>
									<vue-slider v-model="synth.filterEnvelope.decay"
									v-bind="sliderOptions"
									:min=".005"
									:max="5"
									:interval=".005"
									class='pl-3'

									></vue-slider>
									<p class="info--text">decay</p>
								</v-flex>
								<v-flex xs2>
									<vue-slider v-model="synth.filterEnvelope.sustain"
									v-bind="sliderOptions"
									:min="0"
									:max="1"
									:interval=".005"
									class='pl-3'

									></vue-slider>
									<p class="info--text">sustain</p>
								</v-flex>
								<v-flex xs2>
									<vue-slider
									v-model="synth.filterEnvelope.release"
									v-bind="sliderOptions"
									:min=".005"
									:max="5"
									:interval=".005"
									class='pl-3'

									></vue-slider>
									<p class="info--text">release</p>
								</v-flex>
							</v-layout>
							<v-layout row wrap>
								<v-flex xs3 >
									<circle-slider
									v-model="synth.filterEnvelope.baseFrequency"
									:side="50"
									:min="0"
									:max="15000"
									:step-size="50"
									:circle-width-rel="15"
									:progress-width-rel="10"
									:knob-radius="5"
									></circle-slider>
									<p class='info--text'>Frequency</p>
								</v-flex>
								<v-flex xs3>
									<circle-slider
									v-model="synth.filterEnvelope.octaves"
									:side="50"
									:min="1"
									:max="8"
									:step-size="1"
									:circle-width-rel="15"
									:progress-width-rel="10"
									:knob-radius="5"
									></circle-slider>
									<p class='info--text'>Octaves</p>
								</v-flex>
								<v-flex xs3>
									<circle-slider
									v-model="synth.filterEnvelope.exponent"
									:min='1'
									:max='8'
									:side='50'
									:step-size="1"
									:circle-width-rel="15"
									:progress-width-rel="10"
									:knob-radius="5"
									></circle-slider>
									<p class="info--text">Exp</p>
								</v-flex>
							</v-layout>
						</v-flex>
						<v-flex xs12 sm6 class="pa-3">
							<v-layout row wrap>
								<v-flex>
									<h1 class="info--text title">Effects</h1>
								</v-flex>
							</v-layout>
							<v-layout row wrap>
								<v-flex>
									<v-btn flat v-bind:class="{ primary: this.effects.reverb.on }" @click="toggleReverb">Reverb</v-btn>
								</v-flex>
								<v-flex>
									<v-btn flat v-bind:class="{ primary: this.effects.chorus.on }" @click="toggleChorus">Chorus</v-btn>
								</v-flex>
								<v-flex>
									<v-btn flat v-bind:class="{ primary: this.effects.delay.on }" @click="toggleDelay">Delay</v-btn>
								</v-flex>
							</v-layout>
						</v-flex>
					</v-layout>
					<v-layout row wrap>
						<v-toolbar color='primary'>
							<vue-slider v-bind="sliderOptions" :direction='horizontal' :min="0" :max="1" :step-size=".05" name="portamento" v-model="synth.portamento"></vue-slider>

						</v-toolbar>
					</v-layout>
					<v-layout row wrap justify-center>
						<v-flex xs11>
							<svg viewBox="16.31735610961914 322.4234924316406 466.3924217224121 98.94326782226562" width="100%"  xmlns="http://www.w3.org/2000/svg">
							  <g transform="matrix(1.5625950098037718, 0, 0, 1.5824348926544187, -65.9923324584961, -94.58291625976562)">
							    <rect x="52.675" y="263.532" width="29.855" height="62.502" style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255); vector-effect: non-scaling-stroke;"/>
							    <rect x="82.513" y="263.53" width="29.855" height="62.502" style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255); vector-effect: non-scaling-stroke;"/>
							    <rect x="75.706" y="263.542" width="13.634" height="37.626"/>
							    <rect x="112.357" y="263.529" width="29.855" height="62.502" style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255); vector-effect: non-scaling-stroke;"/>
							    <rect x="105.531" y="263.534" width="13.634" height="37.626"/>
							    <rect x="142.213" y="263.526" width="29.855" height="62.502" style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255); vector-effect: non-scaling-stroke;"/>
							    <rect x="172.068" y="263.522" width="29.855" height="62.502" style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255); vector-effect: non-scaling-stroke;"/>
							    <rect x="165.242" y="263.523" width="13.634" height="37.626"/>
							    <rect x="261.601" y="263.536" width="29.855" height="62.502" style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255); vector-effect: non-scaling-stroke;"/>
							    <rect x="291.439" y="263.546" width="29.855" height="62.502" style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255); vector-effect: non-scaling-stroke;"/>
							    <rect x="284.613" y="263.543" width="13.634" height="37.626"/>
							    <rect x="201.904" y="263.528" width="29.855" height="62.502" style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255); vector-effect: non-scaling-stroke;"/>
							    <rect x="195.081" y="263.524" width="13.634" height="37.626"/>
							    <rect x="231.81" y="190.097" width="29.855" height="62.502" style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255); vector-effect: non-scaling-stroke;" transform="matrix(1.000001, 0, 0, 1, -0.052575, 73.430679)"/>
							    <rect x="224.932" y="263.526" width="13.634" height="37.626"/>
							    <rect x="321.293" y="263.542" width="29.855" height="62.502" style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255); vector-effect: non-scaling-stroke;"/>
							    <rect x="314.483" y="263.552" width="13.634" height="37.626"/>
							    <text transform="matrix(0.639961, 0, 0, 0.631937, 44.152409, 61.666313)" style="fill: rgb(51, 51, 51); font-size: 12px; white-space: pre;" x="31.25" y="406.888">a</text>
							    <text transform="matrix(0.639961, 0, 0, 0.631937, 42.232525, 61.666313)" style="fill: rgb(51, 51, 51); font-size: 12px; white-space: pre;" x="79.719" y="406.888">s</text>
							    <text transform="matrix(0.63996, 0, 0, 0.631937, 36.574146, 62.875378)" style="fill: rgb(51, 51, 51); font-size: 12px; white-space: pre;" x="136.48" y="404.974">d</text>
							    <text transform="matrix(0.639961, 0, 0, 0.631937, 42.232525, 61.666313)" style="fill: rgb(51, 51, 51); font-size: 12px; white-space: pre;" x="177.296" y="407.526">f</text>
							    <text transform="matrix(0.639961, 0, 0, 0.631937, 42.232525, 62.930191)" style="fill: rgb(51, 51, 51); font-size: 12px; white-space: pre;" x="220.026" y="405.612">g</text>
							    <text transform="matrix(0.639961, 0, 0, 0.631937, 42.232525, 62.930191)" style="fill: rgb(51, 51, 51); font-size: 12px; white-space: pre;" x="268.495" y="405.612">h</text>
							    <text transform="matrix(0.639961, 0, 0, 0.631937, 42.232525, 62.930191)" style="fill: rgb(51, 51, 51); font-size: 12px; white-space: pre;" x="316.965" y="405.613">j</text>
							    <text transform="matrix(0.708073, 0, 0, 0.631937, 17.51642, 62.298252)" style="fill: rgb(51, 51, 51); font-size: 12px; white-space: pre;" x="362.882" y="406.25">k</text>
							    <text transform="matrix(0.639961, 0, 0, 0.631937, 40.312641, 62.298252)" style="fill: rgb(51, 51, 51); font-size: 12px; white-space: pre;" x="413.903" y="406.888">l</text>
							    <text transform="matrix(0.639961, 0, 0, 0.631937, 42.232525, 62.930191)" style="fill: rgb(51, 51, 51); font-size: 12px; white-space: pre;" x="459.184" y="404.337">;</text>
							    <text transform="matrix(0.639961, 0, 0, 0.631937, 35.349678, 67.134491)" style="fill: rgb(255, 255, 255); font-size: 12px; white-space: pre;"><tspan x="66.964" y="359.694">w</tspan><tspan x="66.964" dy="1em">​</tspan><tspan x="66.964" dy="1em">​</tspan></text>
							    <text transform="matrix(0.639961, 0, 0, 0.631937, 42.232525, 62.298252)" style="fill: rgb(255, 255, 255); font-size: 12px; white-space: pre;" x="105.229" y="366.709">e</text>
							    <text transform="matrix(0.639961, 0, 0, 0.631937, 42.232525, 61.666313)" style="fill: rgb(255, 255, 255); font-size: 12px; white-space: pre;" x="200.255" y="367.985">t</text>
							    <text transform="matrix(0.63996, 0, 0, 0.631937, 39.199448, 69.204399)" style="fill: rgb(255, 255, 255); font-size: 12px; white-space: pre;" x="250" y="355.867">y</text>
							    <text transform="matrix(0.639961, 0, 0, 0.631937, 42.872486, 64.194069)" style="fill: rgb(255, 255, 255); font-size: 12px; white-space: pre;" x="290.178" y="364.158">u</text>
							    <text transform="matrix(0.639961, 0, 0, 0.631937, 42.872486, 62.930191)" style="fill: rgb(255, 255, 255); font-size: 12px; white-space: pre;" x="383.929" y="366.709">o</text>
							    <text transform="matrix(0.639961, 0, 0, 0.631937, 43.512447, 63.56213)" style="fill: rgb(255, 255, 255); font-size: 12px; white-space: pre;" x="429.847" y="365.434">p</text>
							  </g>
							</svg>
						</v-flex>
					</v-layout>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</v-content>
	<div class="container card">

		<div class="columns is-gapless">
			<div class="column">
				<!-- <div class="card"> -->
					<form>
						<input type="radio" v-model="octave" :value="0" checked>0
						<input type="radio" v-model="octave" :value="1">1
						<input type="radio" v-model="octave" :value="2">2
						<input type="radio" v-model="octave" :value="3">3
						<input type="radio" v-model="octave" :value="4">4
						<input type="radio" v-model="octave" :value="5">5
					</form>
				<!-- </div> -->
			</div>
		</div>
		<div>
			<button type="button" v-for="key in keys" @mousedown="playNote(key.note + (octave + key.offset))" @mouseup="stopSound()">{{ key.note }}</button>
		</div>
	</div>
	</v-app>
</template>

<script>
import {MonoSynth, JCReverb, Chorus, FeedbackDelay} from 'tone'
import keypress from 'keypress.js'
import vueSlider from 'vue-slider-component'

export default {
	name: 'synth',
	components: {
		vueSlider
	},
	data() {
		return {
			reverb: new JCReverb().toMaster(),
			chorus: new Chorus().toMaster(),
			delay: new FeedbackDelay().toMaster(),
			synth: new MonoSynth().toMaster(),
			keys:[{note: "C", offset: 0, key: "a"},
				  {note: "C#", offset: 0, key: "w"},
				  {note: "D", offset: 0, key: "s"},
				  {note: "D#", offset: 0, key: "e"},
				  {note: "E", offset: 0, key: "d"},
				  {note: "F", offset: 0, key: "f"},
				  {note: "F#", offset: 0, key: "t"},
				  {note: "G", offset: 0, key: "g"},
				  {note: "G#", offset: 0, key: "y"},
				  {note: "A", offset: 0, key: "h"},
				  {note: "A#", offset: 0, key: "u"},
				  {note: "B", offset: 0, key: "j"},
				  {note: "C", offset: 1, key: "k"},
				  {note: "C#", offset: 1, key: "o"},
				  {note: "D", offset: 1, key: "l"},
				  {note: "D#", offset: 1, key: "p"},
				  {note: "E", offset: 1, key: ";"}],
			octave: 2,
			effects: {
				reverb: {
					on: false,
				},
				chorus: {
					on: false,
				},
				delay: {
					on: false,
				}
			},
			sliderOptions: {
				width: 2,
				height: 100,
				// direction: "vertical",
				dotWidth: 16,
				dotHeight: 16,
				eventType: "auto",
				slider: {

				},
				// min: 0,
				// max: 100,
				// interval: 1,
				disabled: false,
				show: true,
				realTime: false,
				tooltip: "hover",
				clickable: true,
				tooltipDir: "left",
				piecewise: false,
				lazy: false,
				reverse: false,
				speed: 0.5,
				// formatter: null,
				bgStyle: {
					  "backgroundColor": "#eafab3",
				}
				,
				// // sliderStyle: null,
				// // tooltipStyle: null,
				processStyle:
					{
					  "backgroundColor": "#6bb985",
					}
				,
				// piecewiseStyle: null,
				sliderStyle: [
				  {
				    "backgroundColor": "#78be9a"
				},
				{
				  "backgroundColor": "#78be9a"
			  	},

				],
				tooltipStyle: [
				  {
				    "backgroundColor": "#6bb985",
					"borderColor": "#6bb985"
				},
				{
				  "backgroundColor": "#6bb985",
				  "borderColor": "#6bb985"
				}
				]
			}
		}
	},
	methods: {
		playNote(note) {
			let notePlayed = note;
			this.synth.triggerAttack(notePlayed);
		},
		stopSound(){
			this.synth.triggerRelease();
		},
		toggleReverb(){
			if (this.effects.reverb.on) {
				this.effects.reverb.on = false;
				this.synth.disconnect(this.reverb);
			} else {
				this.effects.reverb.on = true;
				this.synth.connect(this.reverb);
			}
		},
		toggleChorus(){
			if (this.effects.chorus.on) {
				this.effects.chorus.on = false;
				this.synth.disconnect(this.chorus);
			} else {
				this.effects.chorus.on = true;
				this.synth.connect(this.chorus);
			}
		},
		toggleDelay(){
			if (this.effects.delay.on) {
				this.effects.delay.on = false;
				this.synth.disconnect(this.delay);
			} else {
				this.effects.delay.on = true;
				this.synth.connect(this.delay);
			}
		}
	},
	created() {

			let self = this;
			let notes = [];

			function play(note, offset) {
				self.playNote(note + (self.octave + offset));
			}

			self.keys.forEach((key) => {notes.push(
				{
					"keys": key.key,
					"prevent_repeat": true,
					"is_exclusive": true,
					"prevent_default":true,
					"on_keydown": () => play(key.note, key.offset),
					"on_release": () => self.stopSound()
			 	})
			});

			let listener = new keypress.Listener();

			let listeners = listener.register_many(notes);
		}

}
</script>

<style lang="stylus">
	@import '~vuetify/src/stylus/main.styl'
	@import '~vuetify/src/stylus/theme.styl'

</style>
