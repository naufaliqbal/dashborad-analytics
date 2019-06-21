const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        'app': './src/index.js'
    },
    resolve: {
        extensions: ['*', '.js', '.vue', '.json']
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'eslint-loader',
            options: {
                quiet: true
            }
        }, {
            test: /\.(sc|c|sa)ss$/,
            use: [
                'vue-style-loader',
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                'css-loader',
                'postcss-loader'
            ]
        }, {
            test: /\.(svg|gif|png|jpe?g)$/i,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'img/[hash].[ext]'
                },
            }]
        }, {
            test: /\.(ttf|eot)$/i,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'fonts/[hash].[ext]'
                }
            }]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Analytic Dashboard',
            template: 'src/template.html'
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[name].[hash].css'
        })
    ],
    output: {
        filename: 'js/[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    }
};