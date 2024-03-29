import "./b!=!foo-loader!./a?answer=42#bar";
import fs from "fs";
import path from "path";

it("should have basic create module data", () => {
	const content = fs.readFileSync(
		path.resolve(__dirname, "./createData.json"),
		"utf-8"
	);
	const createData = JSON.parse(content);
	expect(createData).toBeDefined();
	expect(createData.matchResource).toBe(
		`${path.resolve(__dirname, "../a.js")}?answer=42#bar`
	);
	expect(typeof createData.settings).toBe("object");
});
