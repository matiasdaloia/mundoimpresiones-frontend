import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export const query = graphql`
  query($slug: String!) {
    allStrapiProductos(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          slug
          titulo
          precio
          categorias {
            nombre
          }
          descripcion
          imagen {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

function ProductTemplate({ data }) {
  console.log(
    data.allStrapiProductos.edges[0].node.imagen.childImageSharp.fluid.src
  )
  return (
    <Layout>
      <h1>{data.allStrapiProductos.edges[0].node.titulo}</h1>
      <p>{data.allStrapiProductos.edges[0].node.descripcion}</p>
      <Img
        fluid={
          data.allStrapiProductos.edges[0].node.imagen.childImageSharp.fluid
        }
        style={{ width: "200px" }}
      />
    </Layout>
  )
}

export default ProductTemplate
