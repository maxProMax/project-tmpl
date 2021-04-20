const { mergeWithRules } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./common.js');
const { rulesReplace } = require('./utils/merge-rules');

const mergeRules = { module: { ...rulesReplace } };

module.exports = mergeWithRules(mergeRules)(common, {
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),
    ],
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './public',
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[path][name]__[local]',
                            },
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
});
