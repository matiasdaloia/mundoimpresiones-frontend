import React from "react"
import Layout from "../components/layout"
import { Row, Container, Col } from "react-bootstrap"
import ProductCard from "../components/productcard/productCard"

const IndexPage = () => (
  <Layout>
    <section className="cursos">
      <Container>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "3rem",
            marginTop: "3rem",
            fontFamily: "mouse memoirs",
          }}
        >
          CURSOS
        </h1>
        <Row>
          <Col>
            <ProductCard />
          </Col>
          <Col>
            <ProductCard />
          </Col>
          <Col>
            <ProductCard />
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
)

export default IndexPage
