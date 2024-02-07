<script lang="ts">
  import { getNoteParts } from '$lib/utils';
  import type { ChordNameOptions, Note } from 'chord-name';

  export let root: Note;
  export let strings: Note[];
  export let fret: number;
  export let noteIdsInScale: Set<number>;
  export let noteFormatOptions: ChordNameOptions;
</script>

<div class="fret fret-{fret}">
  {#each strings as string}
    {@const note = string.transpose(fret)}
    <div class="string top">
      {#if noteIdsInScale.has(note.getId())}
        {@const noteParts = getNoteParts(note, noteFormatOptions)}
        <div class="note" class:root={root.equals(note)} class:fifth={root.interval(note) === 7}>
          {noteParts.base}{#if noteParts.accidental}
            <sup>{noteParts.accidental}</sup>
          {/if}
        </div>
      {/if}
    </div>
    <div class="string bottom"></div>
  {/each}
</div>

<style>
  .fret {
    width: calc(100% + 2px);
    display: grid;
  }
  .string {
    border-left: 1px solid black;
    border-right: 1px solid black;
    position: relative;
    height: 1em;
  }
  .string.top {
    border-bottom: 1px solid black;
  }
  .fret-0 .string {
    border-left: none;
    border-bottom: none;
    border-right-width: 3px;
  }

  .string:first-child,
  .string:last-child {
    border-left: none;
    /* note to self- can't do border-right: none because it messes up alignment. */
    border-right-color: rgba(255, 255, 255, 0);
  }

  .note {
    position: absolute;
    bottom: -0.6rem;
    right: 1px;
    width: 1.2rem;
    height: 1.2rem;
    border: 1px solid black;
    border-radius: 0.6rem;
    padding-top: 0.2rem;
    color: #666;
    background-color: white;
    font-family: 'Fira Sans Condensed', sans-serif;
    font-weight: 300;
    font-size: 0.6rem;
  }
  .note.root {
    color: black;
    font-family: inherit;
    font-weight: bold;
    border-width: 2px;
    /* note to self- this is the .note padding minus (.note.root border-width minus .note border-width) */
    padding-top: calc(0.2rem - 1px);
  }
  .note.fifth {
    color: black;
    font-family: inherit;
    font-weight: bold;
  }

  .fret-3,
  .fret-5,
  .fret-7,
  .fret-9 {
    background-image: url('fretboard-dots-1.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .fret-12 {
    background-image: url('fretboard-dots-2.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
