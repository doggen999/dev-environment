const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
    compress: true,
    port: 9999,
  },
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
        test: /\.(s?(a|c)ss)$/i,
        use: ["style-loader", "css-loader?modules", "sass-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "images/[hash]-[name].[ext]" },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(__dirname, "src/index.html") }),
  ],
};
