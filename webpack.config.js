const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const isProd = (process.env.NODE_ENV === 'prod');

let sassCompileConfig = {
  'cssLoader': 'minimize=false&sourceMap=true',
  'sassLoader': 'sourceMap=true'
}

if (isProd) {
  sassCompileConfig = {
    'cssLoader': 'minimize=true&sourceMap=false',
    'sassLoader': 'sourceMap=false'
  }
}

module.exports = {
  entry: ["./src/js/app.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js"
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [`css-loader?${sassCompileConfig.cssLoader}`, `sass-loader?${sassCompileConfig.sassLoader}`]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ]
};
