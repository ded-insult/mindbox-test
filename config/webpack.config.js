const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {
  const mode = "production";

  return {
    mode,
    entry: path.resolve(__dirname, "..", "src", "app", "index.tsx"),
    output: {
      path: path.resolve(__dirname, "..", "dist"),
      filename: "[name].[contenthash].js",
      clean: true,
    },

    module: {
      rules: [
        //  css & styles
        {
          test: /\.css$/i,
          use:
            mode === "production"
              ? [MiniCssExtractPlugin.loader, "css-loader"]
              : ["style-loader", "css-loader"],
        },
        //   assets
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        //   assets
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
        //   typescript
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "..", "index.html"),
      }),

      new MiniCssExtractPlugin({
        filename: "[name].[chunkhash].css",
        chunkFilename: "[name].[chunkhash].chunk.css",
      }),
    ].filter(Boolean),

    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        "@": path.resolve(__dirname, "..", "src/"),
      },
    },

    devServer: {
      static: {
        directory: path.join(__dirname, "..", "public", "index.html"),
      },
      historyApiFallback: true,
    },
  };
};
