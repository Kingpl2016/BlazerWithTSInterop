const path = require("path");

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.(ts)$/,
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'scripts')],
                use: 'ts-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    entry: {
        index: ['./scripts/index'],
        cube:['./scripts/cube']
    },
    output: {
        path: path.resolve(__dirname, './wwwroot/public'),
        filename: '[name]-bundle.js',
        library: "[name]"
    }
};
