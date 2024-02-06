<script lang="ts">
  import { type ModeId } from '$lib/types';
  import { modes, notes, tunings, tuningAdjustments } from '$lib/constants';
  export let root: string;
  export let modeId: ModeId;
  export let tuning: string;
  export let tuningAdjustment: number;
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
  <select bind:value={modeId} id="mode">
    {#each modes as mode}
      <option value={mode.id}>{mode.name}</option>
    {/each}
  </select>
  <br />
  <label for="tuning">Tuning:</label>
  <select bind:value={tuning} id="tuning">
    {#each tunings as tuningOption}
      <option value={tuningOption.value}>{tuningOption.label}</option>
    {/each}
    <!-- <option value="CUSTOM">Custom</option> -->
  </select>
  <br />
  <label for="tuning-adjust">Alter tuning:</label>
  <select bind:value={tuningAdjustment} id="tuning-adjust">
    {#each tuningAdjustments as tuningAdjustment}
      <option value={tuningAdjustment.value}>{tuningAdjustment.label}</option>
    {/each}
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
