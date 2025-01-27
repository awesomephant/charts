import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import 'dotenv/config';

const isDev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		embedded: true,
		paths: {
			base: isDev ? '' : process.env.BASE_PATH,
			assets: isDev ? '' : process.env.ASSETS_PATH
		}
	},
	compilerOptions: {
		customElement: !isDev
	}
};

export default config;
