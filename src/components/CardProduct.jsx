import React from 'react'
import {products} from "../../db.json"
const CardProduct = () => {
  React.useEffect(() =>{
    console.log(products);
  },[])
  return (
    <div className='card'>
      <div className="card-product flex justify-content-around align-content-center gap-3">
        {products && products.map((item, index) =>(

          <div className="">
            <p>{item.name}</p>
            <img src={item.img} alt=""  className='h-5rem w-5rem'/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardProduct