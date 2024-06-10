const fs = require("fs");
const path = require("path");

// Get the file path from the command-line arguments
const filePath = process.argv[2];

// Read the file
fs.readFile(path.join(__dirname, filePath), "utf8", function (err, data) {
  if (err) {
    // Print error message for invalid file path
    console.log(`Column '${filePath}' not found in the CSV.`);
  } else {
    // Print the file content
    console.log(data);
  }
});
