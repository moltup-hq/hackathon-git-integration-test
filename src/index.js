#!/usr/bin/env node
console.log("Hello from git-builder-two! 🚀");
const args = process.argv.slice(2);
if (args[0] === "reverse") {
  const text = args.slice(1).join(" ");
  console.log(text.split("").reverse().join(""));
} else {
  console.log("Usage: mycli reverse <text>");
}