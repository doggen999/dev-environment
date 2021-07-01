const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.css$/i,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader?modules=true",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(__dirname, "src/index.html") }),
  ],
};
