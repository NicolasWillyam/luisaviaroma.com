import * as fs from "fs";
import path from "path";

const filePath = path.join(__dirname, "brands.txt"); // Adjust the path if needed

// Read the file contents
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // Convert file contents to array
  const brands = data
    .split("\n")
    .map((brand) => brand.trim())
    .filter((brand) => brand.length > 0);

  // Log the array to the console
  console.log(brands);
});
