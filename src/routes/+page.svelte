<script lang="ts">
  import { Note } from 'chord-name';
  import Controls from './controls.svelte';
  import Fretboard from './fretboard.svelte';
  import { type ModeId, modesById } from '$lib';

  let root: string = 'E';
  let modeId: ModeId = 'major';

  let strings: Note[] = [new Note('E'), new Note('B'), new Note('G'), new Note('D'), new Note('A'), new Note('E')];
</script>

<Controls bind:root />

<Fretboard {strings} {modeId} root={new Note(root)} />

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
