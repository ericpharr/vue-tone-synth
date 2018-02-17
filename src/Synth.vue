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
