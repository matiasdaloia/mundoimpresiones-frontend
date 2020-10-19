import React from "react"
import "./footer.css"
import { FaInstagram, FaFacebookSquare, FaHeart } from "react-icons/fa"
import { Link } from "gatsby"

function Footer() {
  return (
    <div className="footer">
      <div className="footer__icons">
        <Link
          external
          to="https://facebook.com/muundoimpresiones"
          target="_blank"
        >
          <FaFacebookSquare />
        </Link>
        <Link external to="https://instagram.com/mundo_imp" target="_blank">
          <FaInstagram />
        </Link>
      </div>
      <div className="footer__copyright">
        <p>
          Made with <FaHeart /> by{" "}
          <Link external target="_blank" to="https://matiasdaloia.com">
            Matias Daloia{" "}
          </Link>
          @ {new Date().getFullYear()}
        </p>
      </div>
    </div>
  )
}

export default Footer
