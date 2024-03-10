/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const path = require("path");

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (storybookConfig, { configType }) => {
    // Find and remove the existing rule that handles CSS
    const cssRule = storybookConfig.module.rules.find((rule) =>
      rule.test.toString().includes("css")
    );
    storybookConfig.module.rules = storybookConfig.module.rules.filter(
      (rule) => rule !== cssRule
    );

    // Add a new rule to handle SCSS files
    storybookConfig.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader", // creates style nodes from JS strings
        "css-loader", // translates CSS into CommonJS
        {
          loader: "sass-loader", // compiles Sass to CSS
          options: {
            sassOptions: {
              includePaths: [path.resolve(__dirname, "../src")], // Add the path to your SCSS files here
            },
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });

    return storybookConfig;
  },
};

export default config;
