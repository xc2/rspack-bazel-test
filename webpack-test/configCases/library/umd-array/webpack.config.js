/** @type {import("@rspack/core").Configuration} */
module.exports = {
	output: {
		libraryTarget: "umd",
		library: {
			root: ["test", "library"],
			amd: "test-library",
			commonjs: "test-library"
		}
	}
};
