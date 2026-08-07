import { describe, expect, it } from "vitest";
import config from "./postcss.config.mjs";

describe("postcss.config", () => {
  it("runs the Tailwind v4 postcss plugin", () => {
    expect(Object.keys(config.plugins)).toEqual(
      expect.arrayContaining(["@tailwindcss/postcss"]),
    );
  });
});
