<script lang="ts">
  import { getNotesInScale, modesById, type ModeId } from '$lib';
  import { Note, type ChordNameOptions } from 'chord-name';

  export let root: Note;
  export let modeId: ModeId;
  export let tuning: string;
  
  const getNoteFormatOptions = (notes: Note[]): ChordNameOptions => {
    const withSharps = notes.map(note => note.getName({useFlats: false})[0]).sort().join('');
    const withFlats = notes.map(note => note.getName({useFlats: true})[0]).sort().join('');
    
    return {
      useFlats: !(withSharps === 'ABCDEFG' || withFlats !== 'ABCDEFG'),
    };
  };
  
  const getNoteParts = (note: Note, noteFormatOptions:ChordNameOptions): { base: string; accidental: string } => {
    const [base, accidental] = note.getName(noteFormatOptions);
    return { base, accidental };
  };

  $: notesInScale = getNotesInScale(root, modesById[modeId]);
  $: noteIdsInScale = new Set(notesInScale.map((note) => note.getId()));
  $: noteFormatOptions = getNoteFormatOptions(notesInScale);
  $: strings = tuning
    .split(' ')
    .reverse()
    .map((n) => new Note(n));
</script>

<div id="fretboard">
  {#each { length: 13 } as _, fret}
    <div class="fret" id="fret-{fret}">
      <div class="strings">
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
    </div>
  {/each}
</div>

<style>
  #fretboard {
    font-size: 0.8rem;
    display: grid;
    grid-template-columns: 1fr repeat(12, 2fr);
    gap: 1px;
    width: 7in;
    height: 1.5in;
    margin: 0.25in 0;
  }

  .fret {
    width: calc(100% + 2px);
    height: calc(100% + 2px);
  }

  .strings {
    display: grid;
    width: 100%;
    height: 100%;
  }
  .string {
    border-left: 1px solid black;
    border-right: 1px solid black;
    position: relative;
  }
  #fret-0 .string {
    border-left: none;
    border-bottom: none;
    border-right-width: 3px;
  }
  .string.top {
    border-bottom: 1px solid black;
  }

  .strings .string:first-child,
  .strings .string:last-child {
    border-left: none;
    /* note to self- can't do border-right: none because it messes up alignment. */
    border-right-color: rgba(255, 255, 255, 0);
  }

  .note {
    position: absolute;
    top: 0.25em;
    right: 1px;
    width: 1.5em;
    height: 1.5em;
    border: 1px solid black;
    border-radius: 0.75em;
    text-align: center;
    padding-top: 1px;
    color: #666;
    background-color: white;
  }
  .note.root {
    color: black;
    font-weight: bold;
    border-width: 2px;
  }
  .note.fifth {
    color: black;
    font-weight: bold;
  }

  #fret-3,
  #fret-5,
  #fret-7,
  #fret-9 {
    background-image: url('fretboard-dots-1.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  #fret-12 {
    background-image: url('fretboard-dots-2.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
