import React from "react"
import "./footer.css"
import { FaInstagram, FaFacebook } from "react-icons/fa"
import { Link } from "gatsby"

function Footer() {
  return (
    <div className="footer">
      <div className="footer__links">
        <Link to="/">INICIO</Link>
        <Link to="/">¿QUIENES SOMOS?</Link>
        <Link to="/">PREGUNTAS FRECUENTES</Link>
      </div>
    </div>
  )
}

export default Footer
