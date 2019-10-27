// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');

module.exports = {
    chainWebpack: (config) => {
        const oneOfsMap = config.module.rule('scss').oneOfs.store;
        oneOfsMap.forEach((item) => {
            item
                .use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    resources: [
                        './src/assets/sass/mixins/_boxShadow.scss',
                        './src/assets/sass/variables/_breakpoints.scss',
                        './src/assets/sass/variables/_colors.scss',
                        './src/assets/sass/variables/_header.scss',
                        './src/assets/sass/structure/_grid.scss',
                    ],
                })
                .end();
        });
    },
    configureWebpack: {
        plugins: [
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        ],
    },
};
