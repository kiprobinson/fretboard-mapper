<script lang="ts">
  import { type ModeId } from '$lib/types';
  import { modesById } from '$lib/constants';
  import { getChordsInScale, getNoteFormatOptions, getNotesInScale, getRomanNumeralName } from '$lib/utils';
  import { Note } from 'chord-name';
  import Fret from './fret.svelte';

  export let root: Note;
  export let modeId: ModeId;
  export let tuning: string;
  export let tuningAdjustment: number;
  export let capo: number;

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

<div class="title">{@html root.getName(noteFormatOptions)} {modesById[modeId].name}</div>

<div class="tuning">
  Tuning: {strings
    .map((n) => n.getName(noteFormatOptions))
    .reverse()
    .join(' ')}
  {#if capo > 0}
    <br />Capo {capo} (shown relative to capo)
  {/if}
</div>

<div class="fretboard">
  {#each { length: 13 } as _, fret}
    <Fret {root} {strings} fret={fret + capo} {noteFormatOptions} {noteIdsInScale} isCapoFret={fret === 0} />
  {/each}
</div>

<table class="chord-chart">
  <tr>
    <th colspan="2">Chords</th>
    <th colspan="3">Notes in chord</th>
  </tr>
  {#each chordsInScale as chordInfo, i}
    {@const chordName = chordInfo.chord.getName(chordInfo.root, noteFormatOptions)}

    <tr>
      <td class="roman-numeral">{getRomanNumeralName(i + 1, chordName.name)}</td>
      <td>{@html chordName.name}</td>
      <td>{@html chordName.intervals[0].note.getName(noteFormatOptions)}</td>
      <td>{@html chordName.intervals[1].note.getName(noteFormatOptions)}</td>
      <td>{@html chordName.intervals[2].note.getName(noteFormatOptions)}</td>
    </tr>
  {/each}
</table>

<div class="copyright">
  Fretboard Mapper created by Kip Robinson. Details at <a href="https://github.com/kiprobinson/fretboard-mapper"
    ><span class="print-hidden">GitHub</span></a
  >.
</div>

<style lang="scss">
  .title {
    font-family: 'EB Garamond', 'M PLUS 1p', serif;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.125in;
  }

  .tuning {
    font-weight: 200;
    font-size: 0.8rem;
    padding-left: 0.25in;
  }

  .fretboard {
    font-size: 0.8rem;
    display: grid;
    grid-template-columns: 1fr repeat(12, 2fr);
    gap: 1px;
    width: 7in;
    margin: 0.25in 0;
  }

  .chord-chart {
    font-family: 'EB Garamond', 'M PLUS 1p', serif;
    font-size: 1.2rem;

    .roman-numeral {
      padding-right: 0;
    }
  }

  .copyright {
    margin-top: 0.5rem;
    font-style: italic;
    font-size: 0.8rem;
    opacity: 0.5;
    font-weight: 200;
  }

  .title,
  .fretboard,
  .copyright {
    width: 7in;
    text-align: center;
  }
</style>
