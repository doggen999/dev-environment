const fs = require("fs");
const path = require("path");

const indexFileGenerator = require("./generators/indexGenerator");
const componentFileGenerator = require("./generators/componentGenerator");
const styleFileGenerator = require("./generators/styleGenerator");

const name = (process.argv[2] || "").trim();

if (!name) {
  return console.error(
    "Name argument is missing, can't generate component. Exiting"
  );
}

const componentName = name.charAt(0).toUpperCase() + name.slice(1);

const componentDir = path.resolve(
  __dirname,
  "../",
  "components",
  componentName
);

if (fs.existsSync(componentDir)) {
  return console.error("Folder already exists. Exiting. ");
}

fs.mkdirSync(componentDir);

const indexFile = path.join(componentDir, "index.js");
const componentFile = path.join(componentDir, `${componentName}.js`);
const styleFile = path.join(componentDir, `${componentName}.scss`);

indexFileGenerator.generate(`${componentName}`, indexFile);
componentFileGenerator.generate(componentName, componentFile);
styleFileGenerator.generate(componentName, styleFile);

console.log(`${componentName} is generated`);
