<script lang="ts">
  import Coordinates from "$lib/components/Coordinates.svelte";
  import Map from "$lib/components/Map.svelte";

  // Screen size using media query
  let smallScreen = window.matchMedia("(max-width: 768px)").matches;
  const onResize = () => {
    smallScreen = window.matchMedia("(max-width: 768px)").matches;
  }
</script>

<svelte:window on:resize={onResize} />

<Map height={100} />
<Coordinates bind:smallScreen />