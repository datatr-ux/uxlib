// This config is used by the CLI to compile the CSS you ship in dist/style.css

import preset from "./tailwind.preset.js";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	presets: [preset],
	// Scan ONLY your source components/hooks to capture the utility classes you use
	content: [
		"./src/components/**/*.{ts,tsx}",
		"./src/hooks/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				card: {
					DEFAULT: 'var(--card)',
					foreground: 'var(--card-foreground)'
				},
				popover: {
					DEFAULT: 'var(--popover)',
					foreground: 'var(--popover-foreground)'
				},
				primary: {
					foreground: 'var(--primary-foreground)'
				},
				secondary: {
					DEFAULT: 'var(--secondary)',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'var(--muted)',
					foreground: 'var(--muted-foreground)'
				},
				accent: {
					DEFAULT: 'var(--accent)',
					foreground: 'var(--accent-foreground)'
				},
				destructive: {
					DEFAULT: 'var(--destructive)',
					foreground: 'var(--destructive-foreground)'
				},
				border: 'var(--border)',
				input: 'var(--input)',
				ring: 'var(--ring)',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				transparent: "#FFFFFF00",
				sidebar: {
					DEFAULT: 'var(--sidebar-background)',
					foreground: 'var(--sidebar-foreground)',
					primary: 'var(--sidebar-primary)',
					'primary-foreground': 'var(--sidebar-primary-foreground)',
					accent: 'var(--sidebar-accent)',
					'accent-foreground': 'var(--sidebar-accent-foreground)',
					border: 'var(--sidebar-border)',
					ring: 'var(--sidebar-ring)'
				}
			},
		}
	},
	plugins: [animate],
	corePlugins: {
		preflight: false,
	},
	// important: '[data-uxlib]',
	safelist: [
  /* === Layout & Display === */
  { pattern: /^(flex|inline-flex|grid|inline-grid|block|inline-block|hidden)$/ },
  { pattern: /^(sm|md|lg|xl|2xl)\\:(flex|inline-flex|grid|inline-grid|block|inline-block|hidden)$/ },
  { pattern: /^(flex|grid)-(row|col|wrap|nowrap|flow-row|flow-col)$/ },
  { pattern: /^(sm|md|lg|xl|2xl)\\:(flex|grid)-(row|col|wrap|nowrap|flow-row|flow-col)$/ },

  /* === Flex/Grid positioning === */
  { pattern: /^items-(start|center|end|stretch|baseline)$/ },
  { pattern: /^justify-(start|center|end|between|around|evenly)$/ },
  { pattern: /^content-(start|center|end|between|around|evenly)$/ },
  { pattern: /^(self|place)-(auto|start|center|end|stretch)$/ },
  { pattern: /^(gap|space)-(x|y)?-\d+$/ },
  { pattern: /^(sm|md|lg|xl|2xl)\\:(gap|space)-(x|y)?-\d+$/ },

  /* === Width & Height === */
  { pattern: /^(w|h|min-w|min-h|max-w|max-h)-(full|screen|auto|fit|[0-9]+)$/ },

  /* === Spacing === */
  { pattern: /^(m|mx|my|mt|mr|mb|ml|p|px|py|pt|pr|pb|pl)-[0-9]+$/ },
  { pattern: /^(sm|md|lg|xl|2xl)\\:(m|mx|my|mt|mr|mb|ml|p|px|py|pt|pr|pb|pl)-[0-9]+$/ },

  /* === Borders & Radii === */
  { pattern: /^border(-(t|r|b|l))?(-(0|[1-9]|[0-9]{2,}))?$/ },
  { pattern: /^rounded(-(sm|md|lg|xl|2xl|full))?$/ },

  /* === Colors (ODS + Shadcn) === */
  { pattern: /^bg-(primary|secondary|accent|neutral|critical|success|warning|information)(-\d{2,3})?$/ },
  { pattern: /^text-(primary|secondary|accent|neutral|critical|success|warning|information|white|black)(-\d{2,3})?$/ },
  { pattern: /^border-(primary|secondary|accent|neutral|critical|success|warning|information)(-\d{2,3})?$/ },

  /* === State variants === */
  { pattern: /^hover\\:(bg|text|border)-(primary|secondary|accent|neutral|critical|success|warning|information)(-\d{2,3})?$/ },
  { pattern: /^focus\\:(ring|border|text|bg)-(primary|secondary|accent|neutral|critical|success|warning|information)(-\d{2,3})?$/ },
  { pattern: /^active\\:(bg|border|text)-(primary|secondary|neutral|critical|success|warning|information)(-\d{2,3})?$/ },
  { pattern: /^disabled\\:(opacity|cursor|bg|border|text)-?.*$/ },

  /* === Typography === */
  { pattern: /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl)$/ },
  { pattern: /^font-(light|normal|medium|semibold|bold)$/ },
  { pattern: /^leading-(none|tight|snug|normal|relaxed|loose)$/ },
  { pattern: /^tracking-(tighter|tight|normal|wide|wider|widest)$/ },
  { pattern: /^text-(left|center|right|justify)$/ },

  /* === Transitions & Animations === */
  { pattern: /^transition(-(all|colors|opacity|transform))?$/ },
  { pattern: /^duration-\d+$/ },
  { pattern: /^ease-(linear|in|out|in-out)$/ },
  { pattern: /^(animate|motion-safe\\:animate|motion-reduce\\:animate)-.+$/ },

  /* === Shadows & Effects === */
  { pattern: /^shadow(-(sm|md|lg|xl|2xl|inner|none))?$/ },
  { pattern: /^ring(-(0|1|2|4|8))?$/ },
  { pattern: /^ring-(primary|accent|critical|neutral|information)$/ },
  { pattern: /^opacity-(0|25|50|75|100)$/ },

  /* === Responsive variants for layout === */
  { pattern: /^(sm|md|lg|xl|2xl)\\:(grid|flex|block|hidden)$/ },
  { pattern: /^(sm|md|lg|xl|2xl)\\:(items|justify|content|self|place)-.*$/ },
],

};
