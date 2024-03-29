module.exports = {
	entry: {
		main: {
			import: "./index"
		},
		main2: {
			import: "./index2"
		}
	},
	optimization: {
		runtimeChunk: "single",
		splitChunks: {
			cacheGroups: {
				vendor: {
					chunks: "all",
					test: /shared\.js/,
					enforce: true,
					name: "vendor"
				}
			}
		}
	}
};
