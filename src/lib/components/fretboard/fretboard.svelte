<script lang="ts">
  import { type ModeId } from '$lib/types';
  import { modesById } from '$lib/constants';
  import { getNoteFormatOptions, getNoteParts, getNotesInScale } from '$lib/utils';
  import { Note } from 'chord-name';
  import Fret from './fret.svelte';

  export let root: Note;
  export let modeId: ModeId;
  export let tuning: string;
  export let tuningAdjustment: number;

  $: notesInScale = getNotesInScale(root, modesById[modeId]);
  $: noteIdsInScale = new Set(notesInScale.map((note) => note.getId()));
  $: noteFormatOptions = getNoteFormatOptions(notesInScale);
  $: strings = tuning
    .split(' ')
    .reverse()
    .map((n) => new Note(n).transpose(tuningAdjustment));
</script>

<div class="fretboard">
  {#each { length: 13 } as _, fret}
    <Fret {root} {strings} {fret} {noteFormatOptions} {noteIdsInScale} />
  {/each}
</div>

<style>
  .fretboard {
    font-size: 0.8rem;
    display: grid;
    grid-template-columns: 1fr repeat(12, 2fr);
    gap: 1px;
    width: 7in;
    height: 1.5in;
    margin: 0.25in 0;
  }
</style>
