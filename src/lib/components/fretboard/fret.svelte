<script lang="ts">
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
        <div
          class="note"
          class:root={root.equals(note)}
          class:fifth={root.interval(note) === 7}
          class:major={root.interval(note) === 4}
          class:minor={root.interval(note) === 3}
        >
          {@html note.getName(noteFormatOptions)}
        </div>
      {/if}
    </div>
    <div class="string bottom"></div>
  {/each}
</div>

<style lang="scss">
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
    $notePaddingTop: 0.18rem;
    $noteBorderWidth: 1px;
    
    position: absolute;
    bottom: -0.6rem;
    right: 1px;
    width: 1.2rem;
    height: 1.2rem;
    border: $noteBorderWidth solid black;
    border-radius: 0.6rem;
    padding-top: $notePaddingTop;
    color: #666;
    background-color: white;
    font-weight: 300;
    font-size: 0.5rem;
    font-family: 'M PLUS 1p', sans-serif;
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
    
    &.root {
      color: white;
      background-color: black;
      font-weight: bold;
      font-size: 0.725rem;
      padding-top: 0;
    }
    &.fifth {
      $fifthBorderWidth: 2px;
      
      color: white;
      background-color: #66f;
      font-weight: bold;
      border-width: $fifthBorderWidth;
      /* note to self- this is the .note padding minus (.note.fifth border-width minus .note border-width) */
      padding-top: calc($notePaddingTop - ($fifthBorderWidth - $noteBorderWidth));
    }
    &.major,
    &.minor {
      $majorBorderWidth: 2px;
      
      color: white;
      background-color: #7b7;
      border-width: $majorBorderWidth;
      padding-top: calc($notePaddingTop - ($majorBorderWidth - $noteBorderWidth));
    }
  }
  
  .fret-3,
  .fret-5,
  .fret-7,
  .fret-9 {
    background-image: url('$lib/images/fretboard-dots-1.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }

  .fret-12 {
    background-image: url('$lib/images/fretboard-dots-2.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }
</style>
