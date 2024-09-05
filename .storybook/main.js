
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ["../public"],
  webpackFinal: async webPackConfig => {
    // Disable optimizations to speed up build
    webPackConfig.optimization = {
      minimize: false,
      minimizer: [],
    };

    const pathsPlugin = new TsconfigPathsPlugin({
      configFile: './tsconfig.dist.json',
    });
    const { resolve } = webPackConfig;
    if (resolve) {
      if (resolve.plugins) {
        resolve.plugins.push(pathsPlugin);
      } else {
        resolve.plugins = [pathsPlugin];
      }
    } else {
      webPackConfig.resolve = {
        plugins: [pathsPlugin],
      };
    }

    return webPackConfig;
  },
};

export default config;
