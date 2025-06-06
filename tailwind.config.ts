
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom color palette based on provided colors
				'blue-custom': '#0378fd', // Light blue
				'orange-custom': '#f55b22', // Orange
				'blue-dark': '#004aad', // Dark blue
				// Color variations for better design flexibility
				'blue-custom-50': '#f0f8ff',
				'blue-custom-100': '#e0f1ff',
				'blue-custom-200': '#b3e0ff',
				'blue-custom-300': '#80ccff',
				'blue-custom-400': '#4db8ff',
				'blue-custom-500': '#0378fd',
				'blue-custom-600': '#0266e3',
				'blue-custom-700': '#0254c9',
				'blue-custom-800': '#0142af',
				'blue-custom-900': '#013095',
				
				'orange-custom-50': '#fff7f0',
				'orange-custom-100': '#ffe6d4',
				'orange-custom-200': '#ffc299',
				'orange-custom-300': '#ff9e5e',
				'orange-custom-400': '#f87a33',
				'orange-custom-500': '#f55b22',
				'orange-custom-600': '#e5451c',
				'orange-custom-700': '#d53016',
				'orange-custom-800': '#c51c10',
				'orange-custom-900': '#b5080a',
				
				'blue-dark-50': '#e6f0ff',
				'blue-dark-100': '#b3d6ff',
				'blue-dark-200': '#80bbff',
				'blue-dark-300': '#4da1ff',
				'blue-dark-400': '#1a86ff',
				'blue-dark-500': '#006be6',
				'blue-dark-600': '#0057cc',
				'blue-dark-700': '#004aad',
				'blue-dark-800': '#003d94',
				'blue-dark-900': '#00307a',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Poppins', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": { opacity: "0", transform: "translateY(10px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"pulse-light": {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.7" },
				},
				"glow": {
					"0%, 100%": { 
						boxShadow: "0 0 20px rgba(3, 120, 253, 0.4)",
						borderColor: "rgba(3, 120, 253, 0.7)"
					},
					"50%": { 
						boxShadow: "0 0 40px rgba(3, 120, 253, 0.7)",
						borderColor: "rgba(3, 120, 253, 1)"
					},
				},
				"flow": {
					"0%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
					"100%": { backgroundPosition: "0% 50%" }
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.3s ease-out",
				"pulse-light": "pulse-light 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
				"glow": "glow 3s ease-in-out infinite",
				"flow": "flow 8s ease infinite",
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				// Custom gradients using the provided colors
				'custom-main': 'linear-gradient(135deg, #f55b22 0%, #0378fd 50%, #004aad 100%)',
				'custom-secondary': 'linear-gradient(135deg, #0378fd 0%, #f55b22 100%)',
				'custom-dark': 'linear-gradient(135deg, #004aad 0%, #0378fd 100%)',
				'custom-orange-blue': 'linear-gradient(135deg, #f55b22 0%, #0378fd 100%)',
				'custom-blue-dark': 'linear-gradient(135deg, #0378fd 0%, #004aad 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
