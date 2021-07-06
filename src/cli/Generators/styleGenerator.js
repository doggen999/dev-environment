const fs = require("fs");

function content(name) {
  return `.${name[0].toLowerCase()}${name.slice(1)} {color:pink;}`;
  //   return `@import 'styles/design-guidelines.scss';`;
}
module.exports = {
  generate: function (name, path) {
    return fs.writeFileSync(path, content(name));
  },
};
