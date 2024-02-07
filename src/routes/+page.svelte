<script lang="ts">
  import { Note } from 'chord-name';
  import Controls from './controls.svelte';
  import Fretboard from './fretboard.svelte';
  import { type ModeId } from '$lib/types';
  import { modesById } from '$lib/constants';

  let root: string = 'E';
  let modeId: ModeId = 'major';
  let tuning: string = 'E A D G B E';
  let tuningAdjustment: number = 0;
</script>

<Controls bind:root bind:modeId bind:tuning bind:tuningAdjustment />

<div class="title">{root} {modesById[modeId].name}</div>

<Fretboard {tuning} {modeId} root={new Note(root)} {tuningAdjustment} />

<div class="copyright">
  Fretboard Mapper created by Kip Robinson. Details at <a href="https://github.com/kiprobinson/fretboard-mapper"
    ><span class="print-hidden">GitHub</span></a
  >.
</div>

<style>
  .title {
    font-size: 2rem;
    font-weight: 600;
    font-family: 'EB Garamond', serif;
  }

  .copyright {
    margin-top: 0.5rem;
    font-style: italic;
    font-size: 0.8rem;
    opacity: 0.5;
  }

  .title,
  .copyright {
    width: 7in;
    text-align: center;
  }

  @media print {
    a::after {
      content: attr(href);
    }
  }
</style>
