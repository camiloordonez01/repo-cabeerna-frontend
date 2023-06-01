/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            ...colors,
            primary: '#F6BF63',
            secondary: '#121212',
        },
        extend: {},
    },
    plugins: [],
}
