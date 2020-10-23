import React from "react"
import "./footer.css"
import { FaInstagram, FaFacebookSquare, FaHeart } from "react-icons/fa"

function Footer() {
  return (
    <div className="footer">
      <div className="footer__icons">
        <a href="https://facebook.com/muundoimpresiones" target="_blank">
          <FaFacebookSquare />
        </a>
        <a href="https://instagram.com/mundo_imp" target="_blank">
          <FaInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <p>
          Made with <FaHeart /> by{" "}
          <a target="_blank" href="https://matiasdaloia.com">
            Matias Daloia
          </a>
          {""} @ {new Date().getFullYear()}
        </p>
      </div>
    </div>
  )
}

export default Footer
