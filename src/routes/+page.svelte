<script lang="ts">
  import { Note } from 'chord-name';
  import Controls from './controls.svelte';
  import Fretboard from './fretboard.svelte';

  let root: Note = new Note('E');

  let strings: Note[] = [new Note('E'), new Note('B'), new Note('G'), new Note('D'), new Note('A'), new Note('E')];

  let noteIdsInScale: Set<number> = new Set([
    new Note('E').getId(),
    new Note('F#').getId(),
    new Note('G#').getId(),
    new Note('A').getId(),
    new Note('B').getId(),
    new Note('C#').getId(),
    new Note('D#').getId(),
  ]);
</script>

<Controls />

<Fretboard {strings} {noteIdsInScale} {root} />

<div id="copyright">
  Fretboard Mapper created by Kip Robinson. Details at <a href="https://github.com/kiprobinson/fretboard-mapper"
    >GitHub</a
  >.
</div>

<style>
  #copyright {
    margin-top: 0.5rem;
    font-style: italic;
    font-size: 0.8rem;
    color: #888;
  }
</style>
