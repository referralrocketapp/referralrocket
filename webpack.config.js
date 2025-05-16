const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                }
            }
        ]
    },
    externals: {
        react: "react",
        "react-dom": "react-dom"
    }
};
