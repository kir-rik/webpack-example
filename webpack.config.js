
const path = require('path')

module.exports = {
    watch: true,
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    devtool: 'inline-source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src')],
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }]
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [{
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    }
                }]

            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
        ],
    },
}
