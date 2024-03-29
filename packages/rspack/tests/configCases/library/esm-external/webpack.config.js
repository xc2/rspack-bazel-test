/** @type {import("../../../../dist").Configuration} */
module.exports = {
	mode: "development",
	output: {
		libraryTarget: "module",
		iife: false,
		chunkFormat: "module",
		filename: "main.js"
	},
	experiments: {
		outputModule: true,
		rspackFuture: {
			newTreeshaking: false
		}
	},
	target: "node"
};
