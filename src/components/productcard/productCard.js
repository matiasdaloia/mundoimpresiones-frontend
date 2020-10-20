import React from "react"
import "./productCard.css"
import { Link } from "gatsby"

function ProductCard({
  key,
  titulo,
  descripcion,
  nombre,
  precio,
  categoria,
  slug,
  imagen,
}) {
  return (
    <Link to={`/product/:${slug}`}>
      <div className="productCard grow">
        <img src={imagen} alt="card_img" />
        <div className="productCard__info">
          <p className="productCard__infoCategory">{categoria}</p>
          <h3>{titulo}</h3>
          <p className="productCard__description">{descripcion}</p>
          <h4>{precio}</h4>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
