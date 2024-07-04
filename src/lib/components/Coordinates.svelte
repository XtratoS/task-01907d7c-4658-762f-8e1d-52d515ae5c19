<script lang="ts">
  import { markerLocation } from "$lib/stores";
  
  export let smallScreen: boolean;

  const approximateNumber = (value: number) => {
    console.log("approximateNumber");
    return (Math.round(value * 1000) / 1000).toFixed(3);
  }
</script>

<div class="coordinates-holder">
  {#if smallScreen}
    <div class="coordinate"><span>Lat:</span><span>{approximateNumber($markerLocation.lat)}</span></div>
    <div class="coordinate"><span>Long:</span><span>{approximateNumber($markerLocation.lng)}</span></div>
  {:else}
    <div class="coordinate"><span>Latitude:</span><span>{$markerLocation.lat.toFixed(15)}</span></div>
    <div class="coordinate"><span>Longitude:</span><span>{$markerLocation.lng.toFixed(15)}</span></div>
  {/if}
</div>

<style>
  .coordinates-holder {
    position: absolute;
    top: .5rem;
    right: .5rem;
    padding: .3rem;
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .coordinate {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }
</style>