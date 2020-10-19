const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        // './src/**/*.vue',
        './src/**/*.html'
    ],
    defaultExtractor: content => {
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

        return broadMatches.concat(innerMatches)
    }
});

const css_nano = require('cssnano')({
    preset: 'default'
});

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production' ? [purgecss, css_nano] : []
    ]
}