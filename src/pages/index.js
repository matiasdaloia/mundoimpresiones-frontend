import React from "react"
import Layout from "../components/layout"
import { Container, Carousel } from "react-bootstrap"
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

const CarouselNew = styled(Carousel)`
  height: 100vh;
  & > .carousel-control-next > span,
  .carousel-control-prev > span {
    padding: 15px;
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
    query {
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
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const cursos = result.allStrapiProductos.edges

  // console.log(cursos[0].node.categorias.nombre)

  return (
    <Layout>
      <CarouselNew>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d26lpennugtm8s.cloudfront.net/stores/255/678/themes/new_linkedman/slide-1579629611203-6563721561-5ac7a06c558c7223f249b3aadb5494441579629617-1920-1920.jpg?1343622944"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d26lpennugtm8s.cloudfront.net/stores/255/678/themes/new_linkedman/slide-1569884086684-8349220848-de36b520670c809f5839f9fb6445fb4d1569884088-1920-1920.jpg?1343622944"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d26lpennugtm8s.cloudfront.net/stores/255/678/themes/new_linkedman/slide-1590879059004-3969773085-b9e53a2b51e3b478bf5cbe3a767d12601590879062-1920-1920.jpg?1343622944"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d26lpennugtm8s.cloudfront.net/stores/255/678/themes/new_linkedman/slide-1568747659971-5701630724-e5da5d5dfcb52dbf76315b644717b5ba1568747664-1920-1920.jpg?1343622944"
            alt=""
          />
        </Carousel.Item>
      </CarouselNew>
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
                      // descripcion={curso.node.descripcion}
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
