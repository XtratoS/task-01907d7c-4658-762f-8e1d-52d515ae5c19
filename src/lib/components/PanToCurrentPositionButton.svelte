<script lang="ts">
  import CurrentPositionIcon from "$lib/icons/Position.svelte";
  import { markerLocation } from "$lib/stores";
  import { useGeoLocation } from "../../hooks.client";

  const handleButtonClick = (ev: MouseEvent) => {
    const moveToLocation = (coordinates: google.maps.LatLngLiteral|null) => {
      if (!coordinates) return;
      markerLocation.set(coordinates);
    }
    useGeoLocation(moveToLocation);
  }
</script>

<button class="icon-container" on:click={handleButtonClick}>
  <CurrentPositionIcon color=white />
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
    bottom: 1.5rem;
    right: 4rem;
    cursor: pointer;
  }
</style>