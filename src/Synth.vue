<template id="Synth" lang="html" @keydown.enter="playNote()">
	<div class="">
	<br>
	<div class="container card">
		<div class="columns is-gapless">
			<div class="column"></div>
			<div class="column is-two-fifths">
				<!-- Oscillator -->
				 <!-- <div class="card"> -->
					<h1>Oscillator</h1>
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
					<label for="detune">Detune:
						<input type="range" v-model="synth.detune.value" name="detune" min="-1200" max="1200">
					</label>
				<!-- </div> -->
				<!-- Filter -->
				<!-- <div class="card" id="filter"> -->
					<h1>Filter</h1>
					<label for="Q">Q
						<input type="range" v-model="synth.filter.Q.value" name="Q" min="0" max="15">
					</label>
					<label for="filterFrequency">Freq
						<input type="range" v-model="synth.filter.frequency.value" name="filterFrequency" min="0" max="15000">
					</label>
				<!-- </div> -->
			</div>
				<!-- Envelope -->
			<div class="column is-two-fifths">
					<!-- <div class="card" id="envelope"> -->
				<h1>Envelope</h1>
				<label for="envAttack">a
					<!-- <input type="range" v-model='synth.envelope.attack'> -->
				</label>
				<!-- <label for="envDecay">d
					<input type="range" v-model="synth.envelope.decay">
				</label>
				<label for="envSustain">s
					<input type="range" v-model="synth.envelope.sustain">
				</label>
				<label for="envRelease">r
					<input type="range" v-model="synth.envelope.release">
				</label> -->
					<div class="columns is-gapless">
						<div class="column"></div>
						<div class="column">

							<vue-slider v-model="synth.envelope.attack"
										v-bind="sliderOptions"
										:min=".005"
										:max="5"
										:interval=".005"
										name="envAttack"

							></vue-slider>
							<label class='label is-right' for="envAttack">    a</label>
							<p>{{ synth.envelope.attack }}</p>
						</div>
						<div class="column">
							<vue-slider v-model="synth.envelope.decay"
										v-bind="sliderOptions"
										:min=".005"
										:max="5"
										:interval=".005"
							></vue-slider>
						</div>
						<div class="column">
							<vue-slider v-model="synth.envelope.sustain"
										v-bind="sliderOptions"
										:min="0"
										:max="1"
										:interval=".005"
							></vue-slider>
						</div>
						<div class="column">
							<vue-slider v-model="synth.envelope.release"
										v-bind="sliderOptions"
										:min=".005"
										:max="5"
										:interval=".005"
							></vue-slider>
						</div>
					</div>
			<!-- </div> -->
			</div>
			<div class="column"></div>

		</div>
		<div class="columns is-gapless">
			<div class="column">
				<!-- Filter Envelope -->
				<!-- <div class="card" id="filter-envelope"> -->
				<h1>Filter Envelope</h1>
				<!-- <label for="filter-attack">a
					<input type="range" name="filter-attack" v-model="synth.filterEnvelope.attack">
				</label> -->
				<div class="columns is-gapless">
					<div class="column is-multiline">
					<vue-slider v-model="synth.filterEnvelope.attack"
								v-bind="sliderOptions"
								:min=".005"
								:max="5"
								:interval=".005"
					></vue-slider>
					</div>
					<!-- <label for="filter-decay">d
						<input type="range" name="filter-decay" v-model="synth.filterEnvelope.decay">
					</label> -->
					<div class="column is-multiline">
					<vue-slider v-model="synth.filterEnvelope.decay"
								v-bind="sliderOptions"
								:min=".005"
								:max="5"
								:interval=".005"
					></vue-slider>
					</div>
					<!-- <label for="filter-sustain">s
						<input type="range" name="filter-sustain" v-model="synth.filterEnvelope.sustain">
					</label> -->
					<div class="column is-multiline">
					<vue-slider v-model="synth.filterEnvelope.sustain"
								v-bind="sliderOptions"
								:min="0"
								:max="1"
								:interval=".005"
					></vue-slider>
					</div>
					<!-- <label for="filter-release">r
						<input type="range" name="filter-release" v-model="synth.filterEnvelope.release">
					</label> -->
					<div class="column is-multiline">
					<vue-slider
						v-model="synth.filterEnvelope.release"
						v-bind="sliderOptions"
						:min=".005"
						:max="5"
						:interval=".005"
					></vue-slider>
					</div>
				</div>
				<!-- <label for="base-frequency">frequency
					<input type="range" min="0" max="15000" name="base-frequency" v-model="synth.filterEnvelope.baseFrequency">
				</label> -->
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
				<p>Frequency</p>
				<!-- <label for="envelope-octaves">octaves
					<input type="range" min="-2" max="8" name="envelope-octaves" v-model="synth.filterEnvelope.octaves">
				</label> -->
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
				<p>Octaves</p>
				<label for="envelope-exponent">exponent
					<input type="range" min="1" max="8" name="envelope-exponent" v-model="synth.filterEnvelope.exponent">
				</label>
			<!-- </div> -->
			</div>
			<div class="column">
				<!-- <div class="card"> -->
					<label for="portamento">Portamento
						<input type="range" min="0" max="1" step=".05" name="portamento" v-model="synth.portamento">
					</label>
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

			<button type="button" v-for="key in keys" @mousedown="playNote(key.note + (octave + key.offset))" @mouseup="stopSound()">{{ key.note }}</button>
	</div>
	</div>
</template>

<script>
import {MonoSynth} from 'tone'
import keypress from 'keypress.js'
import vueSlider from 'vue-slider-component'

export default {
	name: 'synth',
	components: {
		vueSlider
	},
	data() {
		return {
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
			sliderOptions: {
				width: 2,
				height: 100,
				direction: "vertical",
				dotWidth: 16,
				dotHeight: 16,
				eventType: "auto",
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
				formatter: null,
				bgStyle: null,
				sliderStyle: null,
				tooltipStyle: null,
				processStyle: null,
				piecewiseStyle: null

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

<style lang="sass">
$gap: 200px
// $card-background-color: papayawhip
@import '~bulma/bulma.sass'


</style>
