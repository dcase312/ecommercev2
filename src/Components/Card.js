// import React, { useEffect, useState } from 'react';
// import products from '../products.json'
import db from '../server/db';

// import dnvlknbve from '../images/money.webp';


const Card = (props) => {
  // const [useThis, setUseThis] = useState(props)
  // const useThis = props
// console.log(useThis)
console.log(props)
  return (
    <div>
      {db.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} className="productImg" />
            <h2 className="productTitle">{product.name}</h2>
            <h3 className="productPrice">{product.price}</h3>
            <p className="productDescription">{product.description}</p>
            
          </div>
        )
      )}
    </div>
  )
}

export default Card
