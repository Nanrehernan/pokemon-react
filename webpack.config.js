const path = require("path")
const HTML = require("html-webpack-plugin")

const entry = "./src/index.jsx"

const ouput = {
    path: path.join(__dirname, "docs"),
    filename: "react.main.js"
}

const devServer = {
    port: 3000
}

const ruleCSS = {
    test: /\.css$/,
    use: ["style-loader", "css-loader"]
}

const ruleReact = {
    test: /\.js$|.jsx$/,
    exclude: /node_modules/,
    use: ["babel-loader"]
}

const moduleConfig = {
    rules: [ruleCSS, ruleReact]
}

const resolve = {
    extensions: [".js", ".jsx", ".json"],
    modules: [path.resolve(__dirname, "src"), "node_modules"]
}

const plugins = [
    new HTML({
        template: path.join(__dirname, "public", "index.html")
    })
]

module.exports = {
     entry: entry,
     output: ouput,
     module: moduleConfig,
     devServer: devServer,
     resolve: resolve,
     plugins: plugins

}