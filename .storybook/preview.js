/* To import a global styling to be applied to individual components
in SB rendering */
import "!style-loader!css-loader!sass-loader!../src/styles/index.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
