/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: ["mytheme"],
	  
	},
	plugins: [
	  require("daisyui"),
	],
	daisyui: {
	  themes: [
		{
			mytheme: { // Tema personalizado #1
			  "primary": "#D89400", // Color de acento
			  "primary-focus": "#C68000", // Color de acento más oscuro para hover
			  "primary-content": "#ffffff", // Texto sobre el color primario
	
			  "secondary": "#F6F6F6", // Color claro
			  "secondary-focus": "#E6E6E6", // Color claro más oscuro para hover
			  "secondary-content": "#151515", // Texto sobre el color secundario
	
			  "neutral": "#151515", // Color oscuro
			  "neutral-focus": "#121212", // Color oscuro más oscuro para hover
			  "neutral-content": "#ffffff", // Texto sobre el color neutral
	
			  "accent": "#151515", // Nuevo color
			  "accent-focus": "#121212", // Focus para el nuevo color
			  "accent-content": "#ffffff", // Texto sobre el nuevo color
			}
		},
	  ],
	},
  }
  