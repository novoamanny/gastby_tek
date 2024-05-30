module.exports = {
  siteMetadata: {
    title: `Tek Roofing`,
    description: `Tek Roofing`,
    author: `Warren Douglas Advertising`,
    logo: `icon.jpg`,
    phone: `877-729-5229`,
    street: `11801 Pierce Street Suite 200`,
    city: `Riverside, CA`,
    zip: `92505`,
    siteUrl: `https://tekroofingsystems.com`,
    menuLinks: [
      {
        name: 'PRODUCTS',
        link: '/products',
      },
      {
        name: 'GALLERY',
        link: '/gallery',
      },
      {
        name: 'DEALER TOOLS',
        link: '/dealers',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-template-tek',
      options: {
        contentPath: 'data',
        basePath: '/data',
      },
    },
    `gatsby-plugin-netlify-cms`,
  ],
}
