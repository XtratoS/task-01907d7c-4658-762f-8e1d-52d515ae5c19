<script lang="ts">
  import Coordinates from "$lib/components/Coordinates.svelte";
  import Map from "$lib/components/Map.svelte";
  import PanToCurrentPositionButton from "$lib/components/PanToCurrentPositionButton.svelte";
  import PanToPin from "$lib/components/PanToPin.svelte";

  let smallScreen = window.matchMedia("(max-width: 768px)").matches;
  const onResize = () => {
    smallScreen = window.matchMedia("(max-width: 768px)").matches;
  }
</script>

<svelte:window on:resize={onResize} />

<Map />
<Coordinates bind:smallScreen />
<PanToPin />
<PanToCurrentPositionButton />