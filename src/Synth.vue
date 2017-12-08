<template id="Synth" lang="html">
	<button type="button" name="button" @click="playNote">Tone</button>
</template>

<script>
import {MonoSynth} from 'tone'

export default {
	name: 'synth',
	data() {
		return {
			synth: new MonoSynth({oscillator: {type: "fatsawtooth"}}).toMaster(),
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
		}
	}
}
</script>

<style lang="sass">
// $card-background-color: papayawhip
@import '~bulma/bulma.sass'


</style>
