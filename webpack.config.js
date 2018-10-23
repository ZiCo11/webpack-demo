//这里是配置文件
//path用来处理一些和路径相关的东西
const path = require('path');

//引入插件，作用：自动创建一个HTML文件，并且把打包好的js文件加入到HTML中
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 引入插件
module.exports = {
    // webpack的入口
    entry: './src/index.js',
    //配置输出目录以及输出文件名字
    output: {
        // dirname  是当前项目的本地路径
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    //插件
    plugins: [
        new HtmlWebpackPlugin({
            //filename可以设置打包的HTML文件名
            filename: 'main.html',
            //指定生成HTML的模板,会在这个模板的基础上把打包好的js文件放到这里面
            template: './src/index.html'
        })
    ],
    devServer:{
        open: true,
        port: 8090
    }
};