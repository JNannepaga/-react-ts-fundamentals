const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: './index.tsx',
    
    output: {
        path: Path.resolve(__dirname, 'dist'),
        filename: 'app-bundle.js'
    },

    module: {
        rules:[
            {
                test: /\.(ts|tsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    
    resolve: {
        extensions: [".jsx", ".js", ".tsx", "ts"],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        })
    ],

    devServer: {
        contentBase: Path.join(__dirname, 'dist'),
        compress: true,
        port: 3000
    }
}