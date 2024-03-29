/** @type {import("@rspack/core").Configuration} */
module.exports = {
	mode: "development",
	entry: {
		main: "./src/index.js",
		another: "./src/another.js"
	},
	output: {
		filename: "[name].js"
	},
	optimization: {
		splitChunks: {
			chunks: "all"
		}
	}
};
