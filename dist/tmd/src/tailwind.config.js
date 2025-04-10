/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        '../*.html'
    ],
    theme: {
        extend: {
            colors: {
                'caribbean-green': '#00d497',
                'cerulean-blue': '#3e55cf',
                'black': '#000000',
                'baby-powder': '#fffffc',
                'amber-sae': '#ff7f11'
            },
            fontSize: {
                'text-px': '1px'
            },
            screens: {
                'lg': '1024px'
            },
        },
    },
    plugins: [],
}
