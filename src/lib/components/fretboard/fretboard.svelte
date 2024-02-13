<script lang="ts">
  import { type ModeId } from '$lib/types';
  import { modesById } from '$lib/constants';
  import { getChordsInScale, getNoteFormatOptions, getNotesInScale } from '$lib/utils';
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
    .trim()
    .split(' ')
    .reverse()
    .map((n) => new Note(n).transpose(tuningAdjustment));

  $: chordsInScale = getChordsInScale(root, modesById[modeId]);
</script>

<div class="title">{root.getName(noteFormatOptions)} {modesById[modeId].name}</div>

<div class="fretboard">
  {#each { length: 13 } as _, fret}
    <Fret {root} {strings} {fret} {noteFormatOptions} {noteIdsInScale} />
  {/each}
</div>

<table>
  <tr>
    <th>Chords</th>
    <th colspan="3">Notes in chord</th>
  </tr>
  {#each chordsInScale as chordInfo}
    {@const chordName = chordInfo.chord.getName(chordInfo.root, noteFormatOptions)}

    <tr>
      <td>{chordName.name}</td>
      <td>{chordName.intervals[0].note.getName(noteFormatOptions)}</td>
      <td>{chordName.intervals[1].note.getName(noteFormatOptions)}</td>
      <td>{chordName.intervals[2].note.getName(noteFormatOptions)}</td>
    </tr>
  {/each}
</table>

<div class="copyright">
  Fretboard Mapper created by Kip Robinson. Details at <a href="https://github.com/kiprobinson/fretboard-mapper"
    ><span class="print-hidden">GitHub</span></a
  >.
</div>

<style>
  .title {
    font-size: 2rem;
    font-weight: 700;
    font-family: 'EB Garamond', serif;
  }

  .fretboard {
    font-size: 0.8rem;
    display: grid;
    grid-template-columns: 1fr repeat(12, 2fr);
    gap: 1px;
    width: 7in;
    margin: 0.25in 0;
  }

  .copyright {
    margin-top: 0.5rem;
    font-style: italic;
    font-size: 0.8rem;
    opacity: 0.5;
  }

  .title,
  .fretboard,
  .copyright {
    width: 7in;
    text-align: center;
  }
</style>
