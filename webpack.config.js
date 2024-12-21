const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './frontend/src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
              test: /\.css$/, // Cible les fichiers CSS
              use: [
                'style-loader', // Injecte le CSS dans le DOM
                'css-loader' // Traite les fichiers CSS
              ]
            },
            {
                test: /\.svg$/, // Cible les fichiers SVG
                use: ['file-loader']
            },
            {
              test: /\.(js|jsx)$/, // Cible les fichiers JS/JSX
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader'
              }
            }
          ]
        },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './frontend/public/index.html',
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3000,
    },
};
