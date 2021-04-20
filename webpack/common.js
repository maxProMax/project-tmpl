const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        index: path.resolve(process.cwd(), 'src', 'index.ts'),
    },
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(process.cwd(), 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                include: path.resolve(process.cwd(), 'src'),
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-typescript',
                        ],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[base]',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[base]',
                },
            },
            { test: /\.tsx?$/, loader: 'ts-loader' },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [new MiniCssExtractPlugin()],
};
