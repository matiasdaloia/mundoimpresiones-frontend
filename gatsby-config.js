module.exports = {
  siteMetadata: {
    title: `Mundo Impresiones`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`categorias`, `productos`],
      },
    },
    {
      resolve: "gatsby-plugin-snipcartv3",
      options: {
        apiKey:
          "MmM1Njk2MTYtMmYzZC00YWViLTk3OWYtOGI0M2ZkOWJkMjMzNjM3Mzg4MTM1NDI3ODY2MTQ2",
        autopop: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:300,400,500,600,700`, // you can also specify font weights and styles
          "Chilanka",
          "Amatic SC:400,700",
          "Quicksand",
          "Poppins:300,400,500,600,700",
          "Mouse+Memoirs",
          "Baloo+2:400,500,700",
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
