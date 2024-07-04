<script>
  export let size = 24;
  export let color = 'black';
  // #1a73e8
  // #ea4335
</script>

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...$$props}>
	<g fill="none" stroke={color} stroke-linecap="round" stroke-width={size/12}>
		<path d="M12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4Z" />
		<path d="M12 4v-2M20 12h2M12 20v2M4 12h-2" />
	</g>
	<circle cx="12" cy="12" r="4" fill={color} />
</svg>
