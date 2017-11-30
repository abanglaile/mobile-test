var path = require('path')
const webpack = require('webpack');

const svgDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
  // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 2. 自己私人的 svg 存放目录
];

module.exports = {
    output: {        
        filename: "./build/[name].js",
        // chunkFilename : './build/[name]-[id].js', // or whatever other format you want.
    },
    entry: {
        app: './src/app.js',
        math_deps: [
            'aphrodite'
        ],
        deps: [
            'react',
            'react-dom',
            'react-redux',
            'redux',
            // TODO(kevinb) create a build config for test code
            // 'mathquill',
        ],
    },
    module: {
        loaders: [
            {
                test: /\.(svg)$/i,
                loader: 'svg-sprite',
                include: svgDirs,  // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
            },   
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-2','react']
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ["style", "css", "sass", "postcss"]
            },
            {
                test: /\.css$/, 
                loaders: ["style", "css", "postcss"] 
            },
            {test: /\.less$/, loader: 'style!css!less!postcss'},
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'deps',
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //     },
        // }),
    ],
    resolve: {
        alias: {
             'react': path.resolve(__dirname, 'node_modules', 'react')
        },//避免多个版本react重复编译
        modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
        extensions: ['', '.web.js', '.js', '.json'],
    },

};
