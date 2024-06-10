const fs = require("fs");
const path = require("path");

function printFileContents(filePath) {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error("Column '${columnName}' not found in the CSV.");
    } else {
      console.log(data);
    }
  });
}

const filePath = process.argv[2];

if (!filePath) {
  console.error("Please provide a file path as a command-line argument.");
  process.exit(1);
}

const absolutePath = path.resolve(filePath);

printFileContents(absolutePath);
