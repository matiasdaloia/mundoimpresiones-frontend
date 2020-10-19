import React from "react"
import Layout from "../components/layout"

function ProductTemplate({ pageContext }) {
  const { product } = pageContext

  return (
    <Layout>
      <h1 style={{ fontFamily: "Montserrat" }}>{product.title}</h1>
      <p>{product.description}</p>
    </Layout>
  )
}

export default ProductTemplate
