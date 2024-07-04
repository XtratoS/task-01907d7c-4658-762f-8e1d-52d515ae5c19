<script lang="ts">
  import PinIcon from "$lib/icons/Pin.svelte";
  import { markerLocation } from "$lib/stores";

  const handleButtonClick = (ev: MouseEvent) => {
    markerLocation.update((location) => {
      return location
    });
  }
</script>

<button class="icon-container" on:click={handleButtonClick}>
  <PinIcon />
</button>

<style>
  .icon-container {
    border-radius: 100%;
    height: 40px;
    width: 40px;
    display: grid;
    place-content: center;
    box-sizing: border-box;
    background-color: #666666;
    position: absolute;
    bottom: calc(1.5rem + 40px + .5rem);
    right: 4rem;
    cursor: pointer;
  }
</style>