const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: '/src/main.js',

    module: {
        rules: [
            // AQUI SE DEFINEN LOADERS
            /**
             * SINTAXIS
             * {
             *  test: REGEX - para que busque archivos o extensiones 
             *  use: INSTRUCCIONES de que va a hacer con esos archivos
             * }
             */
            {
                test: /\.html/, // va a buscar todos los .html
                use: [
                    {
                       loader: 'html-loader',
                       options: {  minimize: true, }
                    }
                ]
            },
            
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
    ]
}


/**
 * LOADERS: reglas o instrucciones que nos ayudan a procesar archivos para generar nuestra salida
 * 
 * PLUGINS: agregan funcionalidad extra, TODO plugin depende de un loader
 */