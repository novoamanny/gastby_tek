module.exports = ({ contentPath = 'data', basePath = '/' }) => ({
  plugins: [
    'gatsby-plugin-theme-ui',
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-netlify-cms-paths`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: contentPath,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${contentPath}/sections/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${contentPath}/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `homescrolleritems`,
        path: `${contentPath}/homescroller/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `homescrollerimages`,
        path: `${contentPath}/images/homescroller/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `hometestimonials`,
        path: `${contentPath}/hometestimonial/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-plugin-netlify-cms-paths`],
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery1images`,
        path: `${contentPath}/images/gallery/gallery1`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery2images`,
        path: `${contentPath}/images/gallery/gallery2`,
      },
    },
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: 'Section',
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 590,
          },
        },
        `gatsby-remark-copy-linked-files`,
      ],
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['Bebas Neue', 'Kannada Sangam MN', 'Futura PT'],
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
  ],
})
