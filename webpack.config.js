const path = require('path');
module.exports = {
    entry: "./www/app/main",
    output : {
        path: path.resolve(__dirname, "www/dist"),
        filename : "bundle.js",
    },
    watch:true,
    mode : "development",
    module: {
        rules: [
            {
                test: /\.js?$/, 
                include: [path.resolve(__dirname, "./www/app")],
                exclude: [path.resolve(__dirname, "node_modules")], 
                loader : "babel-loader",
                options: {
                    presets: ["env","react"] //要翻译的语法
                },
            }
        ]
    }
}
