module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    /*  as '.module.' is needed in file name for .scss-files
    (Comoponent.module.scss) to make css modules work in StoryBook */
    {
      name: `@storybook/preset-scss`,
      options: {
        rule: {
          test: /\.module\.s[c|a]ss$/,
        },
        cssLoaderOptions: {
          modules: {
            localIdentName: "[name]__[local]--[hash:base64:5]",
          },
        },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
