module.exports = {
  stories: [
    '../src/components/**/stories.mdx',
    '../src/components/**/stories.tsx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-knobs',
  ],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)

    return config
  },
}
