module.exports = {
  siteMetadata: {
    title: `McGeady & Associates LLC`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      }
    }
  ],
}
