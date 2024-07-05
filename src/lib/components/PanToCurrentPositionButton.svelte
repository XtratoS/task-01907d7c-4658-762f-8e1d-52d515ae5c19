<script lang="ts">
  import CurrentPositionIcon from "$lib/icons/Position.svelte";
  import { markerLocation } from "$lib/stores";
  import { useGeoLocation } from "../../hooks.client";

  const handleButtonClick = (ev: MouseEvent) => {
    /**
     * Function to move the map to the current location using the browser's geolocation API
     */
    const moveToLocation = (coordinates: google.maps.LatLngLiteral|null) => {
      // Guard clause to prevent the function from running if user doesn't allow location permission
      if (!coordinates) return;
      // Move the marker to the location by changing the store value
      // Since the map is subscribed to the store value, it will be panned to the new location
      markerLocation.set(coordinates);
    }
    // Using the custom hook to get the current location via the browser's geolocation API
    useGeoLocation(moveToLocation);
  }
</script>

<button title="pan map to current location" aria-label="pan map to current location" class="icon-container" on:click={handleButtonClick}>
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