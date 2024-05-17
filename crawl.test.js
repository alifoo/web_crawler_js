import { normalizeURL } from "./crawl.js";
import { test, expect } from "@jest/globals";

test('normalizeURL should return the normalized URL', () => {
    const inputURL = 'http://blog.boot.dev/path/';
    const expectedOutput = "blog.boot.dev/path";
    expect(normalizeURL(inputURL)).toBe(expectedOutput);
});

test('throws an error with invalid input', () => {
    expect(() => {
        normalizeURL(23425463);
    }).toThrow("Invalid input");
});
