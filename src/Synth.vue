<template id="Synth" lang="html" @keydown.enter="playNote()">
	<div class="container">
			<div class="card">
			<h1>Oscillator</h1>
			<label for="detune">Detune:
				<input type="range" v-model="synth.detune.value" name="detune" min="-1200" max="1200">
			</label>
			</div>
			<div class="card" id="filter">
				<h1>Filter</h1>
				<label for="Q">Q
					<input type="range" v-model="synth.filter.Q.value" name="Q" min="0" max="15">
				</label>
				<label for="filterFrequency">Freq
					<input type="range" v-model="synth.filter.frequency.value" name="filterFrequency" min="0" max="15000">
				</label>
			</div>
			</label>
			<div class="card" id="envelope">
				<h1>Envelope</h1>
				<label for="envAttack">a
					<input type="range" v-model='synth.envelope.attack'>
				</label>
				<label for="envDecay">d
					<input type="range" v-model="synth.envelope.decay">
				</label>
				<label for="envSustain">s
					<input type="range" v-model="synth.envelope.sustain">
				</label>
				<label for="envRelease">r
					<input type="range" v-model="synth.envelope.release">
				</label>
			</div>
			<div class="card" id="filter-envelope">
				<h1>Filter Envelope</h1>
				<label for="filter-attack">a
					<input type="range" name="filter-attack" v-model="synth.filterEnvelope.attack">
				</label>
				<label for="filter-decay">d
					<input type="range" name="filter-decay" v-model="synth.filterEnvelope.decay">
				</label>
				<label for="filter-sustain">s
					<input type="range" name="filter-sustain" v-model="synth.filterEnvelope.sustain">
				</label>
				<label for="filter-release">r
					<input type="range" name="filter-release" v-model="synth.filterEnvelope.release">
				</label>
				<label for="base-frequency">frequency
					<input type="range" min="0" max="15000" name="base-frequency" v-model="synth.filterEnvelope.frequency">
				</label>
				<label for="envelope-octaves">octaves
					<input type="range" min="0" max="8" name="envelope-octaves" v-model="synth.filterEnvelope.octaves">
				</label>
			</div>
			<label for="portamento">Portamento
				<input type="range" min="0" max="1" step=".05" name="portamento" v-model="synth.portamento">
			</label>
			<button type="button" v-for="key in keys" @mousedown="playNote(key.note + (octave + key.offset))" @mouseup="stopSound()">{{ key.note }}</button>
	</div>
</template>

<script>
import {MonoSynth} from 'tone'
import keypress from 'keypress.js'

export default {
	name: 'synth',
	data() {
		return {
			synth: new MonoSynth({oscillator: {type: "fatsawtooth"}}).toMaster(),
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
	created: function() {

			let self = this;
			let notes = [];
			function play(note, offset) {
				self.playNote(note + (self.octave + offset));
			}

			this.keys.forEach((entry) => {notes.push(
				{
					"keys": entry.key,
					"prevent_repeat": true,
					"is_exclusive": true,
					"prevent_default":true,
					"on_keydown": function(){play(entry.note, entry.offset)},
					"on_keyup": function(){self.stopSound()}
			 	})
			});

			let listener = new keypress.Listener();

			let listeners = listener.register_many(notes);
		}

}
</script>

<style lang="sass">
// $card-background-color: papayawhip
@import '~bulma/bulma.sass'


</style>
