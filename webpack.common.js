const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    dropdownme: "./src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "DropDownMe",
      favicon: "favicon.svg",
      template: path.resolve(__dirname, "src", "index.html"),
      inject: "body",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "dropdownme.js",
    globalObject: "this",
    library: {
      name: "dropDownMe",
      type: "umd",
    },
    clean: true,
  },
};
