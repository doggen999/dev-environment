const fs = require("fs");

function content(name) {
  return `import React from 'react';

import PropTypes from 'prop-types';

import styles from './${name}.scss';

export const ${name} = () => <div className={styles.${name[0].toLowerCase()}${name.slice(
    1
  )}}>Generated ${name}-component</div>;

${name}.propTypes = {};
${name}.defaultProps = {};

export default ${name};

`;
}
module.exports = {
  generate(name, path) {
    return fs.writeFileSync(path, content(name));
  },
};
