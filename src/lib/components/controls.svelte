<script lang="ts">
  import { type ModeId } from '$lib/types';
  import { modes, notes, tunings, tuningAdjustments, capoOptions } from '$lib/constants';
  export let root: string;
  export let modeId: ModeId;
  export let tuning: string;
  export let tuningAdjustment: number;
  export let capo: number;

  let customTuning: string = 'E A D G B E';
  let tuningSelection = tunings.some((t) => t.value === tuning) ? tuning : 'CUSTOM';

  $: customTuningIsValid = /^ *[a-g][b#\u266D\u266F]?( [a-g][b#\u266D\u266F]?){2,7} *$/i.test(customTuning);

  const handleTuningChange = () => {
    if (tuningSelection === 'CUSTOM') {
      if (customTuningIsValid) {
        tuning = customTuning;
      }
    } else {
      tuning = tuningSelection;
      customTuning = tuningSelection;
    }
  };
</script>

<div id="controls">
  <h1>Options</h1>

  <p>
    <label for="key">Key:</label>
    <select bind:value={root} id="key">
      {#each notes as note}
        {@const name = note.getName()}
        <option value={name}>{name}</option>
      {/each}
    </select>
  </p>
  <p>
    <label for="mode">Mode:</label>
    <select bind:value={modeId} id="mode">
      {#each modes as mode}
        <option value={mode.id}>{mode.name}</option>
      {/each}
    </select>
  </p>
  <p>
    <label for="tuning">Tuning:</label>
    <select bind:value={tuningSelection} on:change={handleTuningChange} id="tuning">
      {#each tunings as tuningOption}
        <option value={tuningOption.value}>{tuningOption.label}</option>
      {/each}
      <option value="CUSTOM">Custom</option>
    </select>
  </p>
  {#if tuningSelection === 'CUSTOM'}
    <p>
      <label for="customTuning">Custom Tuning:</label>
      <input type="text" bind:value={customTuning} on:input={handleTuningChange} class:invalid={!customTuningIsValid} />
    </p>
  {/if}
  <p>
    <label for="tuning-adjust">Alter tuning:</label>
    <select bind:value={tuningAdjustment} id="tuning-adjust">
      {#each tuningAdjustments as tuningAdjustment}
        <option value={tuningAdjustment.value}>{tuningAdjustment.label}</option>
      {/each}
    </select>
  </p>
  <p>
    <label for="capo">Capo:</label>
    <select bind:value={capo} id="capo">
      {#each capoOptions as capoOption}
        <option value={capoOption.value}>{capoOption.label}</option>
      {/each}
    </select>
  </p>
  <p>
    <button on:click={() => window.print()}>&#x1F5A8; Print</button>
  </p>
</div>

<style>
  p {
    margin-top: 0.5rem;
  }
  input.invalid {
    outline-color: red;
    outline-style: solid;
    outline-width: 1px;
    border-color: red;
  }
  @media print {
    #controls {
      display: none;
    }
  }
</style>
