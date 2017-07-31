const path = require('path');
const webpack = require('webpack')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        rules: [
            {
                test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                include: [
                    path.resolve(__dirname, "src"),
                ],
                exclude: /(node_modules)/,
                use: {
                    loader: 'file-loader?name=fonts/[name].[ext]'
                }
            },
            {
                test: /\.scss$/,
                include: [
                    path.resolve(__dirname, "src/styles"),
                ],
                exclude: /(node_modules)/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options:{
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader",
                    options:{
                        sourceMap: true
                    }
                }]
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "src"),
                ],
                use: {
                    loader: 'eslint-loader'
                },
                exclude: /(node_modules)/,
            },
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "src"),
                ],
                use: [
                    {
                        loader: 'react-hot-loader'
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: ['transform-runtime']
                        }
                    }]
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}