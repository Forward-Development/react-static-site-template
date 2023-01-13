const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './index.html',
    './src/App.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
    './src/containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: false,
      colors: {
        primary: {
          amethys: {
            10: '#FCFAFF',
            20: '#dbaeff',
            30: '#bd6cff',
            40: '#9D4EDD',
            50: '#7330AA',
            60: '#4D1A77',
          },
        },
        secondary: {
          xiketic: {
            10: '#d6d6ff',
            20: '#b4b4fb',
            30: '#7777d4',
            40: '#4b4b9a',
            50: '#282860',
            60: '#141429',
          },
          lapis: {
            10: '#F0ECFF',
            20: '#C4B6FF',
            30: '#987CFF',
            40: '#6C48FF',
            50: '#3D1DBE',
            60: '#1B037A',
          },
          amber: {
            10: '#FFF4ED',
            20: '#FFC29F',
            30: '#FE9051',
            40: '#CB6A33',
            50: '#98491C',
            60: '#652C0C',
          },
          success: '#11C9BE',
          danger: '#FB3A70',
        },
        dark: {
          base: {
            0: '#171726',
            1: '#202036',
            2: '#333454',
            3: '#25253B',
            bg: '#141421',
          },
          text: {
            placeholder: '#555570',
            tertiary: '#7C7C99',
            secondary: '#9797BA',
            primary: '#E3E3ED',
          },
        },
        light: {
          base: {
            0: '#FAFAFF',
            1: '#FFFFFF',
            2: '#E9E9F7',
            3: '#DDDDEC',
            bg: '#F6F6FB',
          },
          text: {
            placeholder: '#ABABC9',
            tertiary: '#8F8FAF',
            secondary: '#6E6E91',
            primary: '#454561',
          },
        },
        disable: {
          dark: '#303049',
          light: '#E3E3ED',
        },
        success: {
          10: '#78F4EC',
          20: '#35EEE3',
          30: '#11C9BE',
          40: '#0D978F',
          50: '#09655F',
          60: '#043230',
        },
        warning: {
          10: '#F8BF8A',
          20: '#F59F50',
          30: '#F27F16',
          40: '#BB5F0B',
          50: '#7D4007',
          60: '#3E2004',
        },
        error: {
          10: '#F8F0FF',
          20: '#DBAEFF',
          30: '#FF5A78',
          40: '#9D4EDD',
          50: '#7330AA',
          60: '#4D1A77',
        },
      },
      fontSize: {
        h1: ['48px', '52px'],
        h2: ['40px', '48px'],
        h3: ['32px', '46px'],
        h4: ['28px', '40px'],
        h5: ['24px', '36px'],
        h6: ['20px', '30px'],
        title: ['18px', '27px'],
        body: ['16px', '24px'],
        small: ['14px', '21px'],
        tiny: ['12px', '18px'],
      },
      screens: {
        xl: '1440px',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          '@screen md': {
            maxWidth: '648px',
          },
          '@screen lg': {
            maxWidth: '1095px',
          },
          '@screen xl': {
            maxWidth: '1320px',
          },
        },
        '.shadow-card': {
          '--tw-shadow': '0px 4px 10px rgba(20,20,33,0.05);',
          '--tw-shadow-colored': '0px 4px 10px var(--tw-shadow-color);',
          'box-shadow':
            'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);',
        },
        '.shadow-subcard': {
          '--tw-shadow': '0px 4px 20px rgba(20,20,33,0.07);',
          '--tw-shadow-colored': '0px 4px 20px var(--tw-shadow-color);',
          'box-shadow':
            'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);',
        },
        '.shadow-footer-table': {
          background: '#FFFFFF',
          'box-shadow': '0px -4px 20px rgba(20, 20, 33, 0.02);',
          'border-radius': '0px 0px 12px 12px',
        },
      });
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    // ...
  ],
};
