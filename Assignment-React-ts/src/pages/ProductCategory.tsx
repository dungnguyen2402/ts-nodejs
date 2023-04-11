import React, { useState } from 'react'
import HeaderHome from '../component/HeaderHome'
import { useParams } from 'react-router-dom'
import { IProduct } from '../types/product'



type Props = {
  products: IProduct[]
}

const ProductCategory = (props: Props) => {
  const {_id} = useParams()
  //console.log(props.products);
  const productcategory = props.products;
  const data = productcategory.filter((category) => category.categoryId == _id)
  //console.log(data);
  

  return (
    
    <div>
      <HeaderHome />
      <div className='productCategory'>
          {data.map((category:any) => {
            return (
              <div className='productCategory_key' key={category._id}>
                <h1>{category.name}</h1>
                <img className='productCategory_img' src={category.image} alt="" />
                <h3 className='productCategory_price'>Price: {category.price}</h3>
                <p className='productCategory_des'>Description: {category.description}</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default ProductCategory