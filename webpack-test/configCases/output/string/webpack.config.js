/** @type {import("@rspack/core").Configuration} */
module.exports = {
	entry() {
		return {
			a: "./a"
		};
	},
	output: {
		filename: "[name].js"
	}
};
