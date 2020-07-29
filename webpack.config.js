const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    devServer: {
        contentBase: './dist',
        open:true,
    },
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg)$/,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    limit: 2048
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.styl(us)?$/,
                use: ['style-loader', 'css-loader', 'postcss-loader','stylus-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlwebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin()
    ],
    resolve:{
        alias: {
            'vue':'vue/dist/vue.js'
        }
    }
}