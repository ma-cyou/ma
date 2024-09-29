import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '200.html',
			precompress: false
		}),
		paths: {
			$lib: 'src/lib',
			$types: 'src/types',
			$components: 'src/components',
			$stores: 'src/stores',
			$utils: 'src/utils',
			$routes: 'src/routes'
		},
		trailingSlash: 'always'
	}
};

export default config;
