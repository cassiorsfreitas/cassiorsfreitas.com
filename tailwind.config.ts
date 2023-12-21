import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/content/**/*.mdx',
    './public/**/*.svg'
  ],
  theme: {
    extend: {
      colors: {
        black: '#08070B',
        white: '#F8F8F2',
        grey: '#8F9BA8',
        gradient: {
          yellow: '#FFFF80',
          pink: '#FF80BF',
          purple: '#9580FF',
          cyan: '#80FFEA',
          green: '#8AFF80'
        }
      },
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' }
          }
        }
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [typography]
} satisfies Config
