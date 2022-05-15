const path = require("path");

module.exports = {
  entry: "./ts/script.ts",
  resolve: {
    extensions: [".js", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "ts")],
      },
    ],
  },
  output: {
    filename: "script.js",
    path: path.resolve(__dirname, "public/scripts"),
  },
};
