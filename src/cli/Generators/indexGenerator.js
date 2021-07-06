const fs = require("fs");

function content(name) {
  return `import { ${name} } from './${name}';
export default ${name};`;
}
module.exports = {
  generate: function (name, path) {
    return fs.writeFileSync(path, content(name));
  },
};
