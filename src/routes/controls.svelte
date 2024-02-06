<script lang="ts">
  import { modes, notes } from '$lib';
  export let root: string;
</script>

<div id="controls">
  <h1>Options</h1>

  <label for="key">Key:</label>
  <select bind:value={root} id="key">
    {#each notes as note}
      {@const name = note.getName()}
      <option value={name}>{name}</option>
    {/each}
  </select>
  <br />
  <label for="mode">Mode:</label>
  <select id="mode">
    {#each modes as mode}
      <option value={mode.id}>{mode.name}</option>
    {/each}
  </select>
  <br />
  <label for="tuning">Tuning:</label>
  <select id="tuning">
    <option value="E A D G B E" selected>Guitar - Standard</option>
    <option value="D A D G B E">Guitar - Drop D</option>
    <option value="D A D G B D">Guitar - Double Drop D</option>
    <option value="D A D F# A D">Guitar - Open D</option>
    <option value="D A D G A D">Guitar - DADGAD</option>
    <option value="B E A D G B E">7-String Guitar - Standard</option>
    <option value="B E A D F# B">Baritone Guitar</option>
    <option value="G C E A">Ukulele - Standard</option>
    <option value="A D F# B">Ukulele - D6</option>
    <option value="D G B E">Ukulele - Baritone</option>
    <option value="G D A E">Mandolin - Standard</option>
    <option value="E A D G">Bass Guitar - Standard</option>
    <option value="B E A D G">5-String Bass - Standard</option>
    <option value="CUSTOM">Custom</option>
  </select>
  <br />
  <label for="tuning-adjust">Alter tuning:</label>
  <select id="tuning-adjust">
    <option value="-4">down two steps</option>
    <option value="-3">down three half-steps</option>
    <option value="-2">down whole step</option>
    <option value="-1">down half-step</option>
    <option value="0" selected>None</option>
    <option value="1">up half-step</option>
    <option value="2">up whole step</option>
  </select>
  <br />
  <button id="print">&#x1F5A8; Print</button>
</div>

<style>
  @media print {
    #controls {
      display: none;
    }
  }
</style>
