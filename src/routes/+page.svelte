<script lang="ts">
  import { Note } from 'chord-name';
  import Controls from '$lib/components/controls.svelte';
  import Fretboard from '$lib/components/fretboard/fretboard.svelte';
  import { type ModeId } from '$lib/types';

  let root: string = 'E';
  let modeId: ModeId = 'major';
  let tuning: string = 'E A D G B E';
  let tuningAdjustment: number = 0;
  let capo: number = 0;
</script>

<Controls bind:root bind:modeId bind:tuning bind:tuningAdjustment bind:capo />

<Fretboard {tuning} {modeId} root={new Note(root)} {tuningAdjustment} {capo} />
