const NodePolyfillPlugin = require("@rspack/plugin-node-polyfill");
const path = require("path");

function config(subpath, realContentHash = false) {
	return {
		mode: "development",
		devtool: false,
		context: __dirname,
		entry: "./index.js",
		output: {
			path: path.resolve(__dirname, `./dist/${subpath}`),
			filename: "[name].[contenthash]-[contenthash:6].js"
		},
		optimization: {
			realContentHash
		},
		plugins: [new NodePolyfillPlugin()]
	};
}

/** @type {import("../../../").Configuration} */
module.exports = [
	config("a"),
	config("b"),
	config("c"),
	config("d"),
	config("rch-a", true),
	config("rch-b", true),
	config("rch-c", true),
	config("rch-d", true)
];
