require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}.local`,
})

module.exports = {
  plugins: [
    'shared-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Test Toyota`,
        short_name: `Toyota`,
        start_url: `/`,
        background_color: `#eb0a1e`,
        theme_color: `#eb0a1e`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `${__dirname}/src/assets/images/icon.svg`, // Use the site directory variable to get the icon from the brand, group or dealer build folder for seo favicons.
      },
    },
  ],
}
