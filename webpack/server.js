const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
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
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.optimize.LimitChunkCountPlugin({
			maxChunks: 1
		})
	],
	entry: [path.resolve(__dirname, "../src/server")],
	output: {
		path: path.resolve(__dirname, "../dist"),
		filename: "index.js"
	},
	externals: [ nodeExternals() ],
	optimization: {
		minimize: false
	},
	mode: "production",
	target: "node"
};
