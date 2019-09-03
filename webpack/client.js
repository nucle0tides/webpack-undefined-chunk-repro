const webpack = require("webpack");
const LoadablePlugin = require("@loadable/webpack-plugin");
const path = require("path");

module.exports = {
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},
	entry: [path.resolve(__dirname, "../src/client")],
	output: {
		path: path.resolve(__dirname, "../dist/public"),
		filename: "[name].js",
		chunkFilename: "[name].js",
		publicPath: "/"
	},
	target: "web",
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new LoadablePlugin()
	],
	optimization: {
		minimize: false,
		splitChunks: {
			chunks: "all"
		}
	},
	mode: "production"
};
