import React from "react"
import "./productCard.css"
import { Link } from "gatsby"

function ProductCard({ titulo, precio, categoria, slug, imagen }) {
  return (
    <Link to={`/product/${slug}`}>
      <div className="productCard grow">
        <img src={imagen} alt="card_img" />
        <div className="productCard__info">
          <p className="productCard__infoCategory">{categoria}</p>
          <p>{titulo}</p>
          {/* <p className="productCard__description">{descripcion}</p> */}
          <p className="productCard__infoCategoryPrecio">${precio}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
