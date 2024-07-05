<script lang="ts">
  import PinIcon from "$lib/icons/Pin.svelte";
  import { markerLocation } from "$lib/stores";
  import BottomButton from "./BottomButton.svelte";

  /**
   * Function to move the map to the pin location
   * When the location is updated, the store value will be updated
   * so the map will move the same location of the pin
   */
  const handleButtonClick = () => {
    markerLocation.update((location) => {
      return location
    });
  }
</script>
<BottomButton onClick={handleButtonClick} title="pan map to pin">
  <PinIcon />
</BottomButton>