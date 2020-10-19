import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

function ProductList() {
  const data = useStaticQuery(graphql`
    query {
      allShopifyProduct {
        edges {
          node {
            id
            title
            vendor
            description
            variants {
              price
              priceV2 {
                currencyCode
              }
            }
            images {
              originalSrc
            }
          }
        }
      }
    }
  `)
  console.log(data.allShopifyProduct)

  return (
    <Layout>
      <h1>Products</h1>
      <ul>
        {data.allShopifyProduct.edges.map(edge => (
          <li>
            <img
              style={{ width: 300 }}
              src={edge.node.images[0].originalSrc}
              alt=""
            />
            <h3>{edge.node.title}</h3>
            <p>{edge.node.description}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default ProductList
