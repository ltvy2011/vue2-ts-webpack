const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/main.ts",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          { loader: "style-loader", options: { injectType: "linkTag" } },
          { loader: "file-loader", options: { name: "css/[name].[ext]" } },
        ],
      },

      {
        test: /\.ts$/i,
        exclude: /node_modules|\.d\.ts$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      {
        test: /\.vue$/i,
        use: [
          {
            loader: "vue-loader",
          },
        ],
      },
      {
        test: /\.(scss)$/,
        use: [
          // {
          //   loader: "style-loader",
          //   options: {
          //     injectType: "linkTag",
          //   },
          // },
          {
            loader: "vue-style-loader",
            // options: { name: "styles/[name].css" },
          },
          {
            loader: "css-loader", // translates CSS into CommonJS modules
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader", // compiles Sass to CSS
          },
        ],
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "./index.html" }),
    new VueLoaderPlugin(),
  ],
  watch: true,
  devServer: {
    // static: {
    //   directory: path.join(__dirname, "dist"),
    // },
    compress: true,
    port: 9000,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
