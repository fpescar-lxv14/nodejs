// Dependencias
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
// Definicion de Entorno
const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

const config = {
    entry: path.resolve('./src/index.js'), // Archivo Principal
    output: { // Configuracion de Compilacion
        path: path.resolve(__dirname, 'dist'),
        filename: "index.js"
    },
    devServer: { // Configuracion del Servidor
        open: true,
        host: 'localhost',
        port: 3000,
    },
    plugins: [ // Complementos de Compilacion
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    module: { // Identificacion de Modulos
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: path.resolve("node_modules"),
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
        ],
    },
};
module.exports = () => { // Exportacion
    if (isProduction) {
        config.mode = 'production';
        config.plugins.push(new MiniCssExtractPlugin());
        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
    } else {
        config.mode = 'development';
    }
    return config;
};