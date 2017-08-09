var path = require('path');

const webpack = require('webpack');

//we make our module available
module.exports = {
    //path of our js file; every time we save our changes in one of the files are linked with the app.js, webpack will compile automatically
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'public')
    },
    watch: true,
    module:{
        loaders:[
            {
                //scan all js files, to prevent long compile time, we exclude the old js files inside
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react','es2015','stage-1']
                }
            }
        ]
    }
}