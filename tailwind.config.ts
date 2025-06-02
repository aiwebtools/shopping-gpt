
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
				// Enhanced cyberpunk theme colors with divine elements
				cyber: {
					'dark': '#0D0E19',
					'dark-purple': '#1A1F2C',
					'blue': '#1EAEDB',
					'purple': '#8B5CF6',
					'pink': '#D946EF',
					'orange': '#F97316',
					'yellow': '#FCD34D',
					'green': '#10B981',
				},
				// Divine color palette
				divine: {
					'gold': '#FFD700',
					'amber': '#FFA500',
					'light': '#FFFACD',
					'white': '#FFFFFF',
					'glow': '#FFFF99',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1',
						filter: 'brightness(1)',
					},
					'50%': { 
						opacity: '0.8', 
						filter: 'brightness(1.2)',
					},
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				// Divine animations
				'divine-float': {
					'0%, 100%': { 
						transform: 'translateY(0px) translateX(0px) scale(1)',
						opacity: '0.7'
					},
					'25%': { 
						transform: 'translateY(-20px) translateX(10px) scale(1.05)',
						opacity: '0.9'
					},
					'50%': { 
						transform: 'translateY(-10px) translateX(-15px) scale(0.95)',
						opacity: '0.8'
					},
					'75%': { 
						transform: 'translateY(-30px) translateX(5px) scale(1.1)',
						opacity: '0.85'
					},
				},
				'divine-pulse': {
					'0%, 100%': { 
						transform: 'scale(1)',
						opacity: '0.4',
					},
					'50%': { 
						transform: 'scale(1.2)',
						opacity: '0.9',
					},
				},
				'divine-shimmer': {
					'0%, 100%': { 
						backgroundPosition: '0% 0%',
						opacity: '0.3'
					},
					'50%': { 
						backgroundPosition: '100% 100%',
						opacity: '0.9'
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'spin-slow': 'spin-slow 15s linear infinite',
				'divine-float': 'divine-float 8s ease-in-out infinite',
				'divine-float-reverse': 'divine-float 10s ease-in-out infinite reverse',
				'divine-pulse': 'divine-pulse 6s ease-in-out infinite',
				'divine-shimmer': 'divine-shimmer 12s ease-in-out infinite',
			},
			fontFamily: {
				'cyber': ['Orbitron', 'sans-serif'],
			},
			boxShadow: {
				'neon-blue': '0 0 5px theme("colors.cyber.blue"), 0 0 10px theme("colors.cyber.blue")',
				'neon-purple': '0 0 5px theme("colors.cyber.purple"), 0 0 10px theme("colors.cyber.purple")',
				'neon-pink': '0 0 5px theme("colors.cyber.pink"), 0 0 10px theme("colors.cyber.pink")',
				'divine': '0 0 20px rgba(255, 215, 0, 0.4), 0 0 40px rgba(255, 165, 0, 0.2)',
				'divine-glow': '0 0 30px rgba(255, 215, 0, 0.8), 0 0 60px rgba(255, 165, 0, 0.6)',
			},
			backgroundImage: {
				'cyber-grid': 'linear-gradient(rgba(13, 14, 25, 0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(13, 14, 25, 0.8) 1px, transparent 1px)',
				'cyber-gradient': 'linear-gradient(45deg, #8B5CF6 0%, #1EAEDB 50%, #D946EF 100%)',
				'divine-gradient': 'linear-gradient(45deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
