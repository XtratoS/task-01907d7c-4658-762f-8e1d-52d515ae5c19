<script lang="ts">
  import PanToCurrentPositionButton from "$lib/components/PanToCurrentPositionButton.svelte";
  import PanToPin from "$lib/components/PanToPin.svelte";

</script>

<div class="buttons-container">
  <div class="inner-container">
    <PanToPin />
    <PanToCurrentPositionButton />
  </div>
</div>

<style>
  .buttons-container {
    position: absolute;
    bottom: 1.5rem;
    right: 4rem;
  }
  .inner-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
  }
</style>