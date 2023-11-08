import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        highlight: '#1a1a1a',
      },
      colors: {
        primary: '#121212',
        secondary: '#b3b3b3',
      },
      textColor: {
        'primary-color': '#fff',
        'secondary-color': '#b3b3b3',
      }
    },
  },
  plugins: [],
}
export default config
