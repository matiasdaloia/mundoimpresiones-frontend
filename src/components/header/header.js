import React from "react"
import "./header.css"
import { FaInstagram, FaFacebook, FaSearch } from "react-icons/fa"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.css"
import { Navbar, Nav } from "react-bootstrap"

const Header = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand>
        <Link to="/">
          <img
            className="logo"
            src="https://scontent.fros2-1.fna.fbcdn.net/v/t1.0-9/94257966_2506847026082868_2526139269169283072_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=F1ncPNI-hDAAX9Odb8Z&_nc_ht=scontent.fros2-1.fna&oh=0c5acf0b583cc1330e8276d3c9670e02&oe=5FB52B43"
            alt="logo"
            width="80"
            height="80"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto header__left">
          <Link to="/#cursos">CURSOS ONLINE</Link>
          <Link to="/descargables">DESCARGABLES</Link>
          <Link to="/#kits">KITS IMPRIMIBLES</Link>
          <Link to="/blog">BLOG</Link>
          <div className="header__leftSearch">
            <input type="text" placeholder="Buscar" />
            <div>
              <FaSearch />
            </div>
          </div>
        </Nav>
        <Nav className="ml-auto header__right">
          <a href="https://instagram.com/mundo_imp" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/muundoimpresiones" target="_blank">
            <FaFacebook />
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
