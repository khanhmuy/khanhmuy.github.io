/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./projects/*.html", "./devices/*.html"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'base': {
        light: '#eff1f5',
        dark: '#1e1e2e'
      },
      'text': {
        light: '#4c4f69',
        dark: '#cdd6f4'
      },
    },
    extend: {
      colors: {
        // yes fucked up way of declaring this ik but tailwind is weird and i have a massive skill issue
        'surface0': {
          light: '#ccd0fa',
          dark: '#313244'
        },
        'red': {
          light: '#d20f39',
          dark: '#f38ba8'
        },
        'yellow': {
          light: '#df8e1d',
          dark: '#f9e2af'
        },
        'green': {
          light: '#40a02b',
          dark: '#a6e3a1'
        },
        'blue': {
          light: '#1e66f5',
          dark: '#89b4fa'
        },
        'mauve': {
          light: '#8839ef',
          dark: '#cba6f7'
        },
        'pink': {
          light: '#ea76cb',
          dark: '#f5c2e7'
        },
        'surface2': {
          light: '#acb0be',
          dark: '#585b70'
        }
      }
    }
  },
  plugins: [],
}
