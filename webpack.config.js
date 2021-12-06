const path = require("path");

module.exports = {
  devtool: "source-map",
  entry: "./src/javascript/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.mp3$/,
        loader: "file-loader",
      },
    ],
  },
};
