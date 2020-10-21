import React from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from "styled-components"

export const query = graphql`
  query($slug: String!) {
    allStrapiProductos(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
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

const Row = styled.div`
  display: flex;

  & > img {
    height: 400px;
  }

  @media (max-width: 900px) {
    flex-direction: column;

    & > img {
      width: 100%;
      height: 100%;
    }
  }
`

const ProductDetails = styled.div`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    padding: 0;
  }
`

const Categoria = styled.h5`
  background-color: #6fc2b8;
  color: white;
  width: fit-content;
  border-radius: 20px;
  padding: 2px 5px;
  font-size: 0.8rem;
`

const Precio = styled.h4`
  font-size: 2.5rem;
  color: black;
  font-weight: 500;
`

const Descripcion = styled.p`
  font-size: 1.2rem;
  color: gray;
`

const Button = styled.button`
  background-color: #ef476f;
  color: white;
  border-radius: 30px;
  border: none;
  padding: 0.5rem;
  display: block;
  width: 50%;
  outline: none;
  margin-top: 1rem;
  :hover {
    background-color: #6fc2b8;
  }
`

function ProductTemplate({ data }) {
  return (
    <Layout>
      <Container>
        <Row>
          <img
            src={
              data.allStrapiProductos.edges[0].node.imagen.childImageSharp.fluid
                .src
            }
            alt="product_img"
          />
          <ProductDetails>
            <h1>{data.allStrapiProductos.edges[0].node.titulo}</h1>
            <Categoria>
              {data.allStrapiProductos.edges[0].node.categorias.nombre}
            </Categoria>

            <Precio>${data.allStrapiProductos.edges[0].node.precio}</Precio>

            <Descripcion>
              {data.allStrapiProductos.edges[0].node.descripcion}
            </Descripcion>

            <div>
              <Button
                className="snipcart-add-item"
                data-item-id={data.allStrapiProductos.edges[0].node.id}
                data-item-price={data.allStrapiProductos.edges[0].node.precio}
                data-item-url={`https://localhost:8001/product/${data.allStrapiProductos.edges[0].node.slug}`}
                data-item-description={
                  data.allStrapiProductos.edges[0].node.descripcion
                }
                data-item-image={
                  data.allStrapiProductos.edges[0].node.imagen.childImageSharp
                    .fluid.src
                }
                data-item-name={data.allStrapiProductos.edges[0].node.titulo}
              >
                AGREGAR AL CARRITO
              </Button>
              <Button className="snipcart-checkout">VER CARRITO</Button>
            </div>
          </ProductDetails>
        </Row>
      </Container>
    </Layout>
  )
}

export default ProductTemplate
