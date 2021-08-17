const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack5')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:'development',
    entry:path.join(__dirname,'front','main.js'),
    output:{
        filename:'bundle.js',
        path:path.resolve('dist')
    },
    module:{
        rules:[
            {
                test:  /\.vue$/,
                loader:'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                },
            },
            {
                test:/\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins:
    [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({template:'./front/public/index.html'})
    ],

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
      },
}