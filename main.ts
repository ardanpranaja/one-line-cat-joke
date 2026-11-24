// one-line-cat-joke — entry program for make.fun competition
// u-aldy998-the-one-line-cat-joke-that-lands-a7b18262
//
// Writes the chosen one-line cat joke to $MAKEFUN_OUTPUT_DIR/entry.txt
// (falls back to /output when the variable is not set).
// Plain JavaScript on purpose: the grader runs node directly on this file.

const fs = require("fs");
const path = require("path");

const sourcePath = path.join(__dirname, "entry.txt");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputPath = path.join(outputDir, "entry.txt");

const joke = fs.readFileSync(sourcePath, "utf8");

// Gate checks mirroring the competition gate: the entry must be UTF-8 text
// of 1 to 200 characters, not only white space, and a single line. Fail
// loudly here instead of shipping an entry the sealed scorer would reject.
if (joke.length === 0 || joke.trim().length === 0) {
  throw new Error("entry.txt is empty or only white space");
}
if (joke.length > 200) {
  throw new Error("entry.txt is " + joke.length + " chars, over the 200 limit");
}
if (joke.indexOf("\n") !== -1 || joke.indexOf("\r") !== -1) {
  throw new Error("entry.txt must be a single line");
}

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, joke, "utf8");

console.log("wrote " + outputPath + " (" + joke.length + " chars)");
