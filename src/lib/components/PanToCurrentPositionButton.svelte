<script lang="ts">
  import CurrentPositionIcon from "$lib/icons/Position.svelte";
  import { markerLocation } from "$lib/stores";
  import { onDestroy } from "svelte";
  import { useGeoLocation } from "../../hooks.client";
  import BottomButton from "./BottomButton.svelte";
  import { get } from "svelte/store";

  const geoLocation = useGeoLocation();

  const handleButtonClick = () => {
    const currentLocation = get(geoLocation).location;
    if (currentLocation) {
      markerLocation.set(currentLocation);
    }
  }
</script>

<BottomButton onClick={handleButtonClick} title="pan to current location">
  <CurrentPositionIcon color=white />
</BottomButton>