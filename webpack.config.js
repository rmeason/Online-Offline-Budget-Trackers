const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  entry: {
    app: "./public/index.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  plugins: [
    new WebpackPwaManifest({
      name: "Budget app",
      short_name: "Budget",
      description: "An application that allows you to manage your budget on or offline.",
      background_color: "#01579b",
      theme_color: "#ffffff",
      "theme-color": "#ffffff",
      start_url: "/",
      icons: [{
        src: path.resolve("assets/images/icons/android-chrome-192x192.png"),
        sizes: [96, 128, 192, 256, 384, 512],
        destination: path.join("assets", "icons")
      }]
    })
  ]
};

module.exports = config;
