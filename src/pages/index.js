import React from "react"
import Layout from "../components/layout"
import { Row, Container, Col } from "react-bootstrap"
import ProductCard from "../components/productcard/productCard"
import { graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {
  const result = useStaticQuery(graphql`
    query MyQuery {
      allStrapiProductos(
        filter: { categorias: { nombre: { eq: "Cursos Online" } } }
      ) {
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
      <section className="cursos">
        <Container>
          <h1
            style={{
              textAlign: "center",
              marginBottom: "3rem",
              marginTop: "3rem",
            }}
          >
            Cursos
          </h1>
          <Row>
            {cursos.map(curso => (
              <Col>
                <ProductCard
                  key={curso.node.id}
                  titulo={curso.node.titulo}
                  slug={curso.node.slug}
                  imagen={curso.node.imagen.childImageSharp.fluid.src}
                  precio={curso.node.precio}
                  descripcion={curso.node.descripcion}
                  categoria={curso.node.categorias.nombre}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export default IndexPage
