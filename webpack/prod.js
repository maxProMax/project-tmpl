const { merge } = require('webpack-merge');
const common = require('./common');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].min.js',
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
                                localIdentName: '[hash:base64]',
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [new ESLintPlugin({ extensions: ['js', 'jsx', 'ts', 'tsx'] })],
    optimization: {
        minimize: true,
        minimizer: [`...`, new CssMinimizerPlugin()],
    },
});
