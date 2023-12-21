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
        white: '#F8F8F2'
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
