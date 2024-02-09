const path = require("path")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

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
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-theme-forty",
        short_name: "theme",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "B", // This path is relative to the root of the site.
        // icon: "src/assets/images/website-icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-custom-api`,
      options: {
        apiKey: process.env.EMAILJS_PUBLIC_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.join(__dirname, `src`, `pages`),
      },
    },
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     host: 'https://www.boost-dev.com',
    //     sitemap: 'https://www.boost-dev.com/sitemap-index.xml',
    //     resolveEnv: () => process.env.GATSBY_ENV,
    //     env: {
    //       development: {
    //         policy: [{userAgent: '*', disallow: ['/']}]
    //       },
    //       production: {
    //         policy: [{userAgent: '*', allow: '/'}]
    //       }
    //     }
    //   }
    // },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
        purgeCSSOptions: {
          // https://purgecss.com/configuration.html#options
          // safelist: ['safelist'], // Don't remove this selector
        },
        // More options defined here https://purgecss.com/configuration.html#options
        //test
      },
    },

    "gatsby-plugin-offline",
  ],
}
