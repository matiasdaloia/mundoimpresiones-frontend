import React from "react"
import PropTypes from "prop-types"
import Header from "../components/header/header"
import "./layout.css"
import Footer from "../components/footer/footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
