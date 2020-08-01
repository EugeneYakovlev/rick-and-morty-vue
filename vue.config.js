const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    publicPath: '/rick-and-morty-vue/dist/',
    configureWebpack: {
        plugins: [
            // new BundleAnalyzerPlugin()
        ]
    }
}