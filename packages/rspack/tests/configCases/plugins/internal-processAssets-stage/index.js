const fs = require("fs");

it("should support predefined processAssets stage", () => {
	const content = fs.readFileSync(__filename, "utf-8");
	expect(content).toMatch(
		`
//PROCESS_ASSETS_STAGE_REPORT;
//PROCESS_ASSETS_STAGE_ANALYSE;
//PROCESS_ASSETS_STAGE_OPTIMIZE_TRANSFER;
//PROCESS_ASSETS_STAGE_OPTIMIZE_HASH;
//PROCESS_ASSETS_STAGE_SUMMARIZE;
//PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE;
//PROCESS_ASSETS_STAGE_DEV_TOOLING;
//PROCESS_ASSETS_STAGE_OPTIMIZE_SIZE;
//PROCESS_ASSETS_STAGE_OPTIMIZE_COMPATIBILITY;
//PROCESS_ASSETS_STAGE_OPTIMIZE_COUNT;
//PROCESS_ASSETS_STAGE_OPTIMIZE;
//PROCESS_ASSETS_STAGE_NONE;
//PROCESS_ASSETS_STAGE_ADDITIONS;
//PROCESS_ASSETS_STAGE_DERIVED;
//PROCESS_ASSETS_STAGE_PRE_PROCESS;
//PROCESS_ASSETS_STAGE_ADDITIONAL;
`.trim()
	);
});
