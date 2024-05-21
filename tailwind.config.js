import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      height: {
        nav: 'var(--nav-height)',
        'full-screen': 'calc(100vh - var(--nav-height))'
      },
      minHeight: {
        'full-screen': 'calc(100vh - var(--nav-height))'
      },
      colors: {
        primary: {
          DEFAULT: '#FF3E00'
        }
      }
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['ph']),
    })
  ],
}

