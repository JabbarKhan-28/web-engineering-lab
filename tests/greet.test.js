import test from "node:test";
import assert from "node:assert";
import { greet } from "../public/script.js";

test("greet returns the correct greeting", () => {
    assert.strictEqual(greet("Jabbar"), "Hello, Jabbar!");
});