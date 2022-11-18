const fs = require("fs");

function content(name) {
  return `import React from "react";
import ${name} from "./index";
export default {
    title: "Components/${name}",
    component: ${name},
};
export const Primary = () => <${name} />
`;
}
module.exports = {
  generate(name, path) {
    return fs.writeFileSync(path, content(name));
  },
};
