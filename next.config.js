// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    cssLoaderOptions: {
        url: false
    },
    webpack(config, options) {
        config.module.rules.push({
            test: /\.md$/,
            loader: 'frontmatter-markdown-loader',
            options: { mode: ['react-component'] }
        });
        return config;
    }
})