import { _setup } from "../utils/serverRunner";
import fs from "fs";

describe("Usage of schema middleware", () => {
  it("should be using routers", () => {
    const schemaValidationMiddleware = fs.readFileSync("./src/middlewares/schemaValidationMiddleware.js", "utf8");

    expect(schemaValidationMiddleware.length).toBeGreaterThan(1);
  });
});
