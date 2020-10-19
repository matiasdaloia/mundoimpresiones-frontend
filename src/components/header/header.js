import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./header.css"
import { FaInstagram, FaFacebook } from "react-icons/fa"
import { Link } from "gatsby"

const Header = () => (
  <nav className="header">
    <div className="header__left">
      <Link to="/">
        <img
          src="https://scontent.fros2-1.fna.fbcdn.net/v/t1.0-9/94257966_2506847026082868_2526139269169283072_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=F1ncPNI-hDAAX9Odb8Z&_nc_ht=scontent.fros2-1.fna&oh=0c5acf0b583cc1330e8276d3c9670e02&oe=5FB52B43"
          alt="logo"
          width="100"
          height="100"
        />
      </Link>
      <Link to="/cursos">CURSOS ONLINE</Link>
      <Link to="/cursos">DESCARGABLES</Link>
      <Link to="/cursos">KITS IMPRIMIBLES</Link>
    </div>
    <div className="header__right">
      <Link external to="https://instagram.com/mundo_imp" target="_blank">
        <FaInstagram />
      </Link>
      <Link
        external
        to="https://www.facebook.com/muundoimpresiones"
        target="_blank"
      >
        <FaFacebook />
      </Link>
      <div className="header__rightLoginButton">INGRESAR</div>
    </div>
  </nav>
)

export default Header
