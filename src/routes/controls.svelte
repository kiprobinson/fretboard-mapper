<script lang="ts">
  import { type ModeId } from '$lib/types';
  import { modes, notes } from '$lib/constants';
  export let root: string;
  export let modeId: ModeId;
  export let tuning: string;
  export let tuningAdjustment: number;

  const tunings = [
    { value: 'E A D G B E', label: 'Guitar - Standard' },
    { value: 'D A D G B E', label: 'Guitar - Drop D' },
    { value: 'D A D G B D', label: 'Guitar - Double Drop D' },
    { value: 'D A D F# A D', label: 'Guitar - Open D' },
    { value: 'D A D G A D', label: 'Guitar - DADGAD' },
    { value: 'B E A D G B E', label: '7-String Guitar - Standard' },
    { value: 'B E A D F# B', label: 'Baritone Guitar' },
    { value: 'G C E A', label: 'Ukulele - Standard' },
    { value: 'A D F# B', label: 'Ukulele - D6' },
    { value: 'D G B E', label: 'Ukulele - Baritone' },
    { value: 'G D A E', label: 'Mandolin - Standard' },
    { value: 'E A D G', label: 'Bass Guitar - Standard' },
    { value: 'B E A D G', label: '5-String Bass - Standard' },
  ];

  const tuningAdjustments = [
    { value: -4, label: 'Down two steps' },
    { value: -3, label: 'Down three half-steps' },
    { value: -2, label: 'Down whole steps' },
    { value: -1, label: 'Down half-step' },
    { value: 0, label: 'None' },
    { value: 1, label: 'Up half-step' },
    { value: 2, label: 'Up whole step' },
  ];
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
