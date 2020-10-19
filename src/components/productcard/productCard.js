import React from "react"
import "./productCard.css"
import { Link } from "gatsby"

function ProductCard() {
  return (
    <Link to="/product/$id">
      <div className="productCard grow">
        <img
          src="https://scontent.fros2-1.fna.fbcdn.net/v/t1.0-9/121967331_2971189266315306_3034201191761658392_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_ohc=qcjMM4G2fPQAX-xlRe_&_nc_ht=scontent.fros2-1.fna&oh=e7c05ca440b0d4ff64178a0cfbb43476&oe=5FB207CD"
          alt="card_img"
        />
        <div className="productCard__info">
          <p className="productCard__infoCategory">Cursos Online</p>
          <h3>Party Box 10 Chicos</h3>
          <p className="productCard__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            excepturi corrupti pariatur sunt possimus consequuntur sit vero!
            Suscipit, neque provident eligendi libero aliquam ipsum aliquid,
            odit et rerum deleniti ut!
          </p>
          <h4>$2900</h4>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
