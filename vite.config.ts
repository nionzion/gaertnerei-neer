import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
	  host: true,
	  https: false,
	  fs: {
		allow: ['.', 'brand.json']
	  }
	},
	plugins: [tailwindcss(),sveltekit()]
  });