import React from "react"
import Header from "../components/header/header"
import "./layout.css"
import Footer from "../components/footer/footer"
import TopHeader from "../components/topheader/topheader"

const Layout = ({ children }) => {
  return (
    <>
      <TopHeader />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
