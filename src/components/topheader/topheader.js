import React from "react"
import "./topheader.css"
import {
  FaShoppingCart,
  FaUserCircle,
  FaHeart,
  FaSignInAlt,
  FaWhatsapp,
} from "react-icons/fa"

function TopHeader() {
  return (
    <div className="topHeader">
      <div className="topHeader__left">
        <FaShoppingCart className="snipcart-checkout" />
        <p className="snipcart-checkout">Carrito</p>
        <FaUserCircle />
        <p>Mi Cuenta</p>
        <FaHeart />
        <p>Lista de Deseos</p>
        <FaSignInAlt />
        <p>Log In</p>
      </div>
      <div className="topHeader__right">
        <FaWhatsapp />
        <p>+54 341 3 156 656</p>
      </div>
    </div>
  )
}

export default TopHeader
