import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOneProduct } from '../api/product'
import { Image } from "antd"
import HeaderHome from '../component/HeaderHome'
import AppFooter from '../component/AppFooter'
import { IProduct } from '../types/product'

type Props = {
    products: IProduct
}

const ProductDetail = (props: Props) => {

    const { _id} = useParams()
    const [product , setProduct] = useState<IProduct[]>([])
    useEffect(() => {
        getOneProduct( _id ).then(({data: {product}}) => setProduct(product))
    }, [])
    //console.log(product);
    

  return (
   <div>
        <HeaderHome />
           <div className='formDisplay' >
            <div className='display'>
                <img className="displayImage" src={product.image} />
                <div className='item'>
                    <div className='itemText'>{product.name}</div>
                    <p>20k comment về sản phẩm</p>
                    <div className='itemPrice'>Giá sản phẩm: {product.price} VNĐ </div>
                    <p>100% hàng chất lượng</p>
                    <div className='itemDes'>Description: {product.description}</div>
                    <button>Thêm vào giỏ hàng</button>
                    
                </div>
            </div>
                <hr />
                <div className='des'>
                    <h4>Mô tả sản phẩm :</h4>
                    <p>Ngoài các tính năng cơ bản, điện thoại hiện đại còn tích hợp nhiều tính năng tiện ích như truy cập vào mạng Internet, các ứng dụng giải trí như nghe nhạc, xem phim, chơi game, định vị GPS, chụp ảnh selfie và truyền hình trực tuyến.

Tổng quan, điện thoại đã trở thành một phần không thể thiếu của cuộc sống hiện đại, cung cấp cho người dùng nhiều tính năng tiện ích để kết nối, giải trí và làm việc.</p>
                </div>
           </div>
           <AppFooter />
   </div>
  )
}

export default ProductDetail