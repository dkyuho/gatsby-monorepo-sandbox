const config = {
  trailingSlash: 'always',
  flags: {
    DEV_SSR: false,
    PRESERVE_FILE_DOWNLOAD_CACHE: true, // Don't delete the downloaded files cache when changing gatsby-node.js & gatsby-config.js files.
    PARALLEL_SOURCING: true, // EXPERIMENTAL - Run all source plugins at the same time instead of serially. For sites with multiple source plugins, this can speedup sourcing and transforming considerably.
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
