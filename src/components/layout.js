import React from "react"
import Header from "../components/header/header"
import "./layout.css"
import Footer from "../components/footer/footer"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet title="Mundo Impresiones">
        <html lang="es" />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
