import React from "react"
import { Container, Carousel } from "react-bootstrap"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
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
          descripcionlarga
          imagen {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          imagenesadicionales {
            url
          }
        }
      }
    }
  }
`

const Row = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 3rem;
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
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  font-family: "Poppins";

  & > h1 {
    font-size: 22px;
  }

  @media (max-width: 900px) {
    padding: 0;
    margin-top: 20px;
  }
`

const Precio = styled.h4`
  font-size: 26px;
  color: #f8d4db;
  font-weight: 500;
`

const Descripcion = styled.p`
  font-size: 13px;
  color: #838383;
  line-height: 24px;
`

const Button = styled.button`
  background-color: #c9e8dd;
  color: black;
  border-radius: 30px;
  border: none;
  padding: 0.5rem;
  display: block;
  width: 200px;
  outline: none;
  margin-top: 1rem;
  :hover {
    background-color: #6fc2b8;
  }
`

const DescripcionLarga = styled.div`
  height: fit-content;
  background-color: #f2f2f2;
  padding: 2rem;
  border-radius: 10px;
  font-family: "Poppins";
  font-size: 13px;
`

const ButtonDescripcionLarga = styled.div`
  width: fit-content;
  padding: 0.8rem;
  background-color: #c9e8dd;
  border-radius: 40px;
  font-family: "Poppins";
  text-transform: uppercase;
  margin-bottom: 1rem;
`

function ProductTemplate({ data }) {
  return (
    <Layout>
      <Container>
        <Row>
          <Carousel style={{ flex: "0.5" }}>
            <Carousel.Item>
              <img
                src={
                  data.allStrapiProductos.edges[0].node.imagen.childImageSharp
                    .fluid.src
                }
                alt={data.allStrapiProductos.edges[0].node.titulo}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={
                  data.allStrapiProductos.edges[0].node.imagenesadicionales[0]
                    .url
                }
                alt={data.allStrapiProductos.edges[0].node.titulo}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={
                  data.allStrapiProductos.edges[0].node.imagenesadicionales[1]
                    .url
                }
                alt={data.allStrapiProductos.edges[0].node.titulo}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={
                  data.allStrapiProductos.edges[0].node.imagenesadicionales[2]
                    .url
                }
                alt={data.allStrapiProductos.edges[0].node.titulo}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={
                  data.allStrapiProductos.edges[0].node.imagenesadicionales[3]
                    .url
                }
                alt={data.allStrapiProductos.edges[0].node.titulo}
              />
            </Carousel.Item>
          </Carousel>

          <ProductDetails>
            <h1>{data.allStrapiProductos.edges[0].node.titulo}</h1>

            <Precio>${data.allStrapiProductos.edges[0].node.precio}</Precio>

            <Descripcion>
              {data.allStrapiProductos.edges[0].node.descripcion}
            </Descripcion>

            <div>
              <Button
                className="snipcart-add-item"
                data-item-id={data.allStrapiProductos.edges[0].node.id}
                data-item-price={data.allStrapiProductos.edges[0].node.precio}
                data-item-url={`/product/${data.allStrapiProductos.edges[0].node.slug}`}
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
            </div>
          </ProductDetails>
        </Row>
        <section id="descripcionlarga">
          <ButtonDescripcionLarga>Descripción</ButtonDescripcionLarga>
          <DescripcionLarga>
            <ReactMarkdown
              source={data.allStrapiProductos.edges[0].node.descripcionlarga}
            />
          </DescripcionLarga>
        </section>
        <section id="productos-relacionados">
          <Row>{}</Row>
        </section>
      </Container>
    </Layout>
  )
}

export default ProductTemplate
