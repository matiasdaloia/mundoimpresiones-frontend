import React from "react"
import Layout from "../components/layout"
import { Container } from "react-bootstrap"
import ProductCard from "../components/productcard/productCard"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
    align-content: center;
  }
`

const ProductCol = styled.div`
  width: 28%;
  margin-bottom: 3rem;

  @media (max-width: 900px) {
    width: 400px;
    margin-bottom: 3rem;
    margin: 0 auto;
  }
`

const Title = styled.h1`
  color: #fac786;
  font-family: "Baloo 2", cursive;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 0;
  font-size: 3rem;
  font-weight: 700;
`

const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 3rem;
`

const TitleSpan = styled.span`
  color: #6fc2b8;
`

const IndexPage = () => {
  const result = useStaticQuery(graphql`
    query MyQuery {
      allStrapiProductos {
        edges {
          node {
            id
            slug
            titulo
            precio
            descripcion
            categorias {
              nombre
            }
            imagen {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)

  const cursos = result.allStrapiProductos.edges

  console.log(cursos)

  return (
    <Layout>
      <Container>
        <section id="cursos">
          <Title>
            Cursos <TitleSpan>Online</TitleSpan>
          </Title>
          <Subtitle>
            Te enseñamos todo para que armes tu propio emprendimiento
          </Subtitle>
          <Row>
            {cursos.map(curso => {
              if (curso.node.categorias.nombre === "Cursos Online") {
                return (
                  <ProductCol>
                    <ProductCard
                      key={curso.node.id}
                      titulo={curso.node.titulo}
                      slug={curso.node.slug}
                      imagen={curso.node.imagen.childImageSharp.fluid.src}
                      precio={curso.node.precio}
                      descripcion={curso.node.descripcion}
                      categoria={curso.node.categorias.nombre}
                    />
                  </ProductCol>
                )
              }
            })}
          </Row>
        </section>
        <section className="kits">
          <Title>
            Kits <TitleSpan>Imprimibles</TitleSpan>
          </Title>
          <Subtitle>
            Podes descargar nuestros kits y personalizarlos con el nombre que
            quieras!
          </Subtitle>
          <Row>
            {cursos.map(curso => {
              if (curso.node.categorias.nombre === "Kits Imprimibles") {
                return (
                  <ProductCol>
                    <ProductCard
                      key={curso.node.id}
                      titulo={curso.node.titulo}
                      slug={curso.node.slug}
                      imagen={curso.node.imagen.childImageSharp.fluid.src}
                      precio={curso.node.precio}
                      descripcion={curso.node.descripcion}
                      categoria={curso.node.categorias.nombre}
                    />
                  </ProductCol>
                )
              }
            })}
          </Row>
        </section>
      </Container>
    </Layout>
  )
}

export default IndexPage
