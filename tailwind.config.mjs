/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: ["mytheme", "mythemeDark"],
	  
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
			},
			mythemeDark: { // Tema personalizado #2 (versión oscura)
			  "primary": "#D89400",
			  "primary-focus": "#C68000",
			  "primary-content": "#151515",
	
			  "secondary": "#151515",
			  "secondary-focus": "#121212",
			  "secondary-content": "#F6F6F6",
	
			  "neutral": "#F6F6F6",
			  "neutral-focus": "#E6E6E6",
			  "neutral-content": "#151515",
	
			  "accent": "#F6F6F6", // Modificación para tema oscuro
			  "accent-focus": "#E6E6E6", // Focus para el color modificado
			  "accent-content": "#151515", // Texto sobre el color modificado
			},
		},
	  ],
	},
  }
  