const path = require(`path`)
const fs = require('fs')

const { createFilePath } = require('gatsby-source-filesystem')

exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || 'data'

  if (!fs.existsSync(contentPath)) {
    reporter.info(`create the ${contentPath} directory!`)
    // ncp(`${__dirname}/data/`, `${contentPath}`, function(err) {
    //   if (err) {
    //     return reporter.info(`There was an error: ${err}`)
    //   }
    //   reporter.info(`Directory moved`)
    // })
    // fs.mkdirSync(contentPath)
    // fs.copyFileSync(
    //   `${__dirname}/data/items/base.mdx`,
    //   `${contentPath}/items/base.mdx`,
    //   err => {
    //     if (err) throw err
    //     reporter.info(`There was an error: ${err}`)
    //   }
    // )
  }

  // if (!fs.existsSync(`${contentPath}/items`)) {
  //   reporter.info(`creating the ${contentPath}/items directory`)
  //   fs.mkdirSync(`${contentPath}/items`)
  // }

  // if (!fs.existsSync(`${contentPath}/sections`)) {
  //   reporter.info(`creating the ${contentPath}/sections directory`)
  //   fs.mkdirSync(`${contentPath}/sections`)
  // }

  // if (!fs.existsSync(`${contentPath}/images`)) {
  //   reporter.info(`creating the ${contentPath}/images directory`)
  //   fs.mkdirSync(`${contentPath}/images`)
  //   fs.copyFileSync(
  //     `${__dirname}/data/images/homesection4.jpg`,
  //     `${contentPath}/images/homesection4.jpg`,
  //     err => {
  //       if (err) throw err
  //       reporter.info(`There was an error: ${err}`)
  //     }
  //   )
  //   fs.copyFileSync(
  //     `${__dirname}/data/images/homesection5.jpg`,
  //     `${contentPath}/images/homesection5.jpg`,
  //     err => {
  //       if (err) throw err
  //       reporter.info(`There was an error: ${err}`)
  //     }
  //   )
  //   fs.copyFileSync(
  //     `${__dirname}/data/images/homesection6.jpg`,
  //     `${contentPath}/images/homesection6.jpg`,
  //     err => {
  //       if (err) throw err
  //       reporter.info(`There was an error: ${err}`)
  //     }
  //   )
  // }

  // if (!fs.existsSync(`${contentPath}/sections/sections.yml`)) {
  //   fs.copyFileSync(
  //     `${__dirname}/data/sections/sections.yml`,
  //     `${contentPath}/sections/sections.yml`,
  //     err => {
  //       if (err) throw err
  //       reporter.info(`There was an error: ${err}`)
  //     }
  //   )
  // }
}

exports.sourceNodes = ({ actions }) => {
  // {...}
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  // We only want to operate on `Mdx` nodes. If we had content from a
  // remote CMS we could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      // Name of the field you are adding
      name: 'slug',
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. We
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `${value}`,
    })
  }
}

exports.createResolvers = ({ createResolvers }, options) => {
  const basePath = options.basePath || '/'
  // {...}
}

// exports.createPages = async ({ actions, graphql, reporter }, options) => {
//   const basePath = options.basePath || '/'
//   const { createPage } = actions

//   const result = await graphql(`
//     query {
//       allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/items/" } }) {
//         edges {
//           node {
//             id
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)
//   if (result.errors) {
//     reporter.panic('🚨  ERROR: Loading "createPages" query', result.errors)
//   }

  // const posts = result.data.allMarkdownRemark.edges

  // posts.forEach(({ node }, index) => {
  //   createPage({
  //     path: node.fields.slug,
  //     component: require.resolve(`./src/templates/tools.js`),
  //     context: { slug: node.fields.slug },
  //   })
  // })
// }
