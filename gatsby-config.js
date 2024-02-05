const path = require("path")

module.exports = {
  siteMetadata: {
    title: "Gatsby Web Dev Site",
    author: "Matt Moniz",
    description: "A Gatsby.js Theme for my web development business",
    siteUrl: `https://boost-dev.com`,
  },

  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-theme-forty",
        short_name: "theme",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/assets/images/website-icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.join(__dirname, `src`, `pages`),
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.boost-dev.com',
        sitemap: 'https://www.boost-dev.com/sitemap.xml',
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{userAgent: '*', disallow: ['/']}]
          },
          production: {
            policy: [{userAgent: '*', allow: '/'}]
          }
        }
      }
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-offline",
  ],
}
