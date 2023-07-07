const config = {
  trailingSlash: 'always',
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    'dealership-2343',
    `gatsby-plugin-perf-budgets`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-transformer-json`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        sourceMap: false,
      },
    },
  ],
}

module.exports = config
