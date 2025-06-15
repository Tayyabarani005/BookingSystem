/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        sevillana: ['Sevillana', 'cursive'],
      },
      clipPath: {
        diagonal: 'polygon(0 0, 100% 40%, 100% 100%, 0% 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    function ({ addUtilities }) {
      addUtilities({
        '.clip-diagonal': {
          clipPath: 'polygon(0 0, 100% 40%, 100% 100%, 0% 100%)',
        },
      });
    },
  ],
}

