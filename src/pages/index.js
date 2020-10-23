import React from "react"
import Layout from "../components/layout"
import { Carousel } from "react-bootstrap"
import ProductCard from "../components/productcard/productCard"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { FaArrowRight } from "react-icons/fa"

const Hero = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Container = styled.div`
  padding: 0 4%;
`

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.2;
  border-radius: 20px;
  overflow: hidden;
  height: 100%;

  & a {
    display: flex;
    background-color: #c9e8dd;
    align-items: center;
    padding: 1rem;
    cursor: pointer;
    border-bottom: 1px solid lightgray;
  }
  & a:hover {
    background-color: #f8d4db;
  }

  & a > svg {
    color: gray;
    font-size: 0.8rem;
    margin-right: 1rem;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

const HeroSlide = styled(Carousel)`
  display: flex;
  flex: 0.8;
  margin-left: 1rem;
  border-radius: 20px;
  overflow: hidden;
  @media (max-width: 768px) {
    display: none;
  }
`

const ImgPhone = styled.img`
  display: none;
  @media (max-width: 768px) {
    margin-top: 1rem;
    display: block;
    width: 100%;
  }
`

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
            imagen {
              childImageSharp {
                fluid {
                  srcSet
                }
              }
            }
          }
        }
      }
      allStrapiCategorias {
        edges {
          node {
            nombre
          }
        }
      }
    }
  `)

  const cursos = result.allStrapiProductos.edges
  const categorias = result.allStrapiCategorias.edges

  console.log(categorias)

  return (
    <Layout>
      <Container>
        <section id="categorias">
          <Hero>
            <Sidebar>
              {categorias.map(categoria => (
                <a>
                  <FaArrowRight />
                  {categoria.node.nombre}
                </a>
              ))}
            </Sidebar>
            <HeroSlide>
              <Carousel.Item>
                <img
                  src="https://d26lpennugtm8s.cloudfront.net/stores/255/678/themes/new_linkedman/slide-1579629611203-6563721561-5ac7a06c558c7223f249b3aadb5494441579629617-1920-1920.jpg?1343622944"
                  alt="hero_img"
                  className="d-block w-100"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://d26lpennugtm8s.cloudfront.net/stores/255/678/themes/new_linkedman/slide-1569884086684-8349220848-de36b520670c809f5839f9fb6445fb4d1569884088-1920-1920.jpg?1343622944"
                  alt="hero_img"
                  className="d-block w-100"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://d26lpennugtm8s.cloudfront.net/stores/255/678/themes/new_linkedman/slide-1590879059004-3969773085-b9e53a2b51e3b478bf5cbe3a767d12601590879062-1920-1920.jpg?1343622944"
                  alt="hero_img"
                  className="d-block w-100"
                />
              </Carousel.Item>
            </HeroSlide>
          </Hero>
          <ImgPhone
            src="https://d26lpennugtm8s.cloudfront.net/stores/255/678/themes/new_linkedman/slide-1579629611203-6563721561-5ac7a06c558c7223f249b3aadb5494441579629617-1920-1920.jpg?1343622944"
            alt="hero_img"
          />
        </section>
      </Container>

      {/* <section id="cursos">
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
        </section> */}
    </Layout>
  )
}

export default IndexPage
