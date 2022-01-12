const path = require("path");

module.exports = {
  // Type check TypeScript files
  "**/*.(ts|tsx)": () => "yarn ts-validate",

  // Lint then format TypeScript and JavaScript files
  "**/*.(ts|tsx|js)": (filenames) => [
    `yarn lint:fix --file ${filenames
      .map((f) => path.relative(process.cwd(), f))
      .join(" --file ")}`,
    `yarn format ${filenames.join(" ")}`,
  ],

  // Format MarkDown and JSON
  "**/*.(md|json)": (filenames) => `yarn format ${filenames.join(" ")}`,
};
