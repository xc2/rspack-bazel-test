import { log } from "pmodule/tracker";
import { a, z } from "pmodule";

a.should.be.eql("a");
z.should.be.eql("z");
log.should.be.eql(["a.js", "c.js"]);
