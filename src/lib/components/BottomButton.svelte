<script lang="ts">
  export let onClick: () => void;
  export let title: string;
  export let cssClasses: string = '';
</script>

<button title="{title}" aria-label="{title}" class="icon-container {cssClasses || ''}" on:click={onClick}>
  <slot />
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
    cursor: pointer;
  }
</style>