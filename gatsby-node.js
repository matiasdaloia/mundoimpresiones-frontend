const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Query for all products in Strapi
  const { data } = await graphql(`
    query MyQuery {
      allStrapiProductos {
        edges {
          node {
            slug
            categorias {
              nombre
            }
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
        categoria: edge.node.categorias.nombre,
      },
    })
  })
}
