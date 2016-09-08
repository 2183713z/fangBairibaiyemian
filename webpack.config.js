var path = require('path');
var webpack=require('webpack');


module.exports = {
    entry: [
      'webpack/hot/dev-server',
       path.resolve(__dirname, 'src/index.js')
     ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    devtool: 'cheap-module-source-map',
    devServer: {
      //  publicPath: "/static/",
       stats: { colors: true },
       port: 3000,
       inline: true,
       hot:true
     },
     resolve:{
       extension:["",".js",".jsx"]
     },
     plugins:[
       new webpack.HotModuleReplacementPlugin(),
     ],
     module: {
        loaders: [
        { test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader" },
        {
         test: /\.css/,
         loader: 'style!css!autoprefixer'
       },
       {
        test: /\.(jpe?g|png)$/,
        loader: 'file-loader'
      }
    ]
}
};
