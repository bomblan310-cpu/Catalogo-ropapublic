import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#060608',
          card: '#0c0c12',
          panel: '#12121c',
          cyan: '#00f0ff',
          pink: '#ff0055',
          purple: '#8b5cf6',
          yellow: '#ffe600',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        tech: ['Share Tech Mono', 'JetBrains Mono', 'monospace'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        cyber: '0.25em',
        widest: '0.35em',
      },
    },
  },
  plugins: [],
}
export default config
