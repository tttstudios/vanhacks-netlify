// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    /* config options here */
    cssLoaderOptions: {
        url: false
    },
    // webpack(config, options) {
    //     config.module.rules.push({
    //         // test: /\.css$/,
    //         // use: [
    //         //     'style-loader',
    //         //     'css-loader',
    //         // ]

    //         test: /\.md$/,
    //         use: 'frontmatter-markdown-loader'
    //     });
    //     return config;
    // }
})