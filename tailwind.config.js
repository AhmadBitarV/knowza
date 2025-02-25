/** @type {import('tailwindcss').Config} */
import { getContainer } from './src/components/container.js';
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'purple-light': '#EFEBFF',
      'purple-hover': '#BEADFF',
      purple: '#633CFF',
      'grey-dark': '#333333',
      'grey-light': '#D9D9D9',
      grey: '#737373',
      'white-primary': '#FAFAFA',
      'white-secondary': '#FFFFFF',
      red: '#FF3939',
      autofill: 'transparent', // You can define other colors if needed
    },
    fontFamily: {
      sans: ['Instrument Sans', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    boxShadow: {
      xl: '0px 0px 10px 0px rgba(190,173,255,0.44);',
      sm: '0px 0px 10px 0px rgba(#FF3939,0.44)',
    },
    extend: {},
  },
  plugins: [
    function extendBase({ addBase, theme }) {
      addBase({
        'b, strong': {
          fontWeight: theme('fontWeight.bold'),
        },
      });
    },
    function ({ addUtilities }) {
      addUtilities(
        {
          '.reset-autofill': {
            'background-color': 'white !important',
            '-webkit-text-fill-color': 'inherit !important',
          },
          '.reset-autofill:focus': {
            transition: 'background-color 5000s ease-in-out 0s',
          },
        },
        ['responsive', 'hover']
      );
    },
    plugin(function ({ addComponents }) {
      addComponents(getContainer());
    }),
  ],
};
