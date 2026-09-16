import { readFileSync } from "fs";
import path from "path";
import { describe, expect, it } from "vitest";

describe(".editorconfig", () => {
  const editorConfigPath = path.resolve(__dirname, "./.editorconfig");
  const content = readFileSync(editorConfigPath, "utf-8");

  it("exists at the repo root", () => {
    expect(content).toBeDefined();
    expect(content.length).toBeGreaterThan(0);
  });

  it("declares root = true to prevent searching for other .editorconfig files", () => {
    expect(content).toMatch(/^root\s*=\s*true/m);
  });

  it("specifies indent_style = space for all files", () => {
    expect(content).toMatch(/indent_style\s*=\s*space/);
  });

  it("specifies indent_size = 2 for all files (2-space indentation)", () => {
    expect(content).toMatch(/indent_size\s*=\s*2/);
  });

  it("specifies end_of_line = lf (Unix line endings)", () => {
    expect(content).toMatch(/end_of_line\s*=\s*lf/);
  });

  it("specifies charset = utf8", () => {
    expect(content).toMatch(/charset\s*=\s*utf8/);
  });

  it("enables trim_trailing_whitespace", () => {
    expect(content).toMatch(/trim_trailing_whitespace\s*=\s*true/);
  });

  it("enables insert_final_newline", () => {
    expect(content).toMatch(/insert_final_newline\s*=\s*true/);
  });

  it("uses LF line endings (not CRLF)", () => {
    // Check that there are no CRLF line endings in the file
    expect(content).not.toMatch(/\r\n/);
  });

  it("does not have trailing whitespace on any line", () => {
    const lines = content.split("\n");
    lines.forEach((line, index) => {
      // Last line might be empty after the final newline, so skip it
      if (index < lines.length - 1) {
        expect(line).not.toMatch(/\s+$/);
      }
    });
  });

  it("ends with a newline character", () => {
    expect(content).toMatch(/\n$/);
  });
});
