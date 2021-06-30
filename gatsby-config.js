module.exports = {
  siteMetadata: {
    title: `Guy Romelle Magayano`,
    description: `Full Stack WordPress Developer`,
    siteUrl: `https://guyromellemagayano.tech/`,
    menuLinks: [
      {
        name: "Specialties",
        link: "/specialties/",
      },
      {
        name: "About",
        link: "/about/",
      },
      {
        name: "Blog",
        link: "/blog/",
      },
      {
        name: "Hire Me",
        link: "/contact/",
      },
    ],
    socialLinks: [
      {
        name: "Facebook",
        icon: [
          {
            style: "fab",
            type: "facebook-f",
          },
        ],
        link: "https://www.facebook.com/mguyromelle",
      },
      {
        name: "LinkedIn",
        icon: [
          {
            style: "fab",
            type: "linkedin-in",
          },
        ],
        link: "https://www.linkedin.com/in/mguyromelle",
      },
      {
        name: "WordPress.ORG",
        icon: [
          {
            style: "fab",
            type: "wordpress",
          },
        ],
        link: "https://profiles.wordpress.org/mguyromelle",
      },
      {
        name: "Github",
        icon: [
          {
            style: "fab",
            type: "github",
          },
        ],
        link: "https://github.com/guyromellemagayano",
      },
      {
        name: "DEV.TO",
        icon: [
          {
            style: "fab",
            type: "dev",
          },
        ],
        link: "https://dev.to/guyromellemagayano",
      },
      {
        name: "Stack Overflow",
        icon: [
          {
            style: "fab",
            type: "stack-overflow",
          },
        ],
        link: "https://stackoverflow.com/users/7746874/mguyromelle",
      },
      {
        name: "Behance",
        icon: [
          {
            style: "fab",
            type: "behance",
          },
        ],
        link: "https://www.behance.net/mguyromelle",
      },
      {
        name: "Medium",
        icon: [
          {
            style: "fab",
            type: "medium-m",
          },
        ],
        link: "https://medium.com/@mguyromelle",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1400,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Guy Romelle Magayano`,
        short_name: `Guy Romelle Magayano`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#4caf50`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/site-icon.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require("tailwindcss")],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-161610502-1",
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 1000,
        optimizeId: "GTM-P36KGZX",
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "guyromellemagayano.dev",
      },
    },
  ],
}
