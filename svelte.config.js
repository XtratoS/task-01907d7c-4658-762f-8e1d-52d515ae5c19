import staticAdapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: staticAdapter({
      pages: 'build',
      assets: 'build'
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '' : '',
      // Assets path needs to absolute, this can be a cdn or a local server
      assets: '',
      relative: true
    },
	}
};

export default config;
