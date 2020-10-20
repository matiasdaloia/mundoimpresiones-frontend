const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Query for all products in Shopify
  const { data } = await graphql(`
    query MyQuery {
      allStrapiProductos {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.allStrapiProductos.edges.forEach(edge => {
    createPage({
      path: `/product/${edge.node.slug}`,
      component: path.resolve(`./src/templates/productTemplate.js`),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
