import { Badge ,Image, Rate, Typography} from 'antd'
import React, { useEffect, useState } from 'react'
import { List } from 'antd';
import { getAllProduct } from '../api/product';
import Card from 'antd/es/card/Card';
import AppFooter from '../component/AppFooter';
import { IProduct } from '../types/product';
import HeaderHome from '../component/HeaderHome';
import { Menu,Button } from "antd";
import { HomeFilled,UserOutlined } from "@ant-design/icons";
import { useNavigate,Link } from "react-router-dom";

type Props = {
  products: IProduct[],
}

type User = {
  name: string;
}

const Product = ({products}: Props) => {

  const navigate = useNavigate()
  const onMenuClick = (item:any) => {
      navigate(`/${item.key}`)
  }

  //console.log(products);
  
  const [productList, setProductList] = useState<IProduct[]>([])
  useEffect(() => {
    getAllProduct().then(({data: {product}}) => setProductList(product))
  }, [])
  //console.log(productList);

  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const storeUser = localStorage.getItem('user');    
    if (storeUser) {
      setUser(JSON.parse(storeUser));
    }
  }, []);
  

  return (
    <div >
      <div className="headerHome">

        <div  >
          <ul style={{display: 'flex' , listStyle: "none"}} >
            <li style={{padding: "20px"}}>Home</li>
            <li style={{padding: "20px"}}>Products</li>
            <li style={{padding: "20px"}}>Contact</li>
          </ul>
        </div >
        <div>
            <Typography.Title>Home</Typography.Title>
        </div>
          <div> <p>Xin chào: {user && <div>{user.name}</div>}</p></div>
      </div>
      <div>
        <List
        grid={{ column:3 }}
            renderItem={(product, index) => {
              //console.log(product);
              
              return (
                <Badge.Ribbon className="itemCardBadge" text="50%" color="red">
                <Link to={`/products/${product._id}`}>
                  <Card
                  className="itemCard"
                      title={product.name}
                      key={index}
                      cover={
                      <img className="itemImage" src={product.image} />
                      }
                  >
                    <Card.Meta title={
                    <Typography.Paragraph>
                      Price:
                      <Typography.Text type="danger">{product.price}</Typography.Text>
                    </Typography.Paragraph>
                    }
                    description={product.description}
                    ></Card.Meta>
        </Card>
                </Link>
                </Badge.Ribbon>
              );
            }}
            dataSource={productList}
        ></List>

      </div>
      <AppFooter/>
    </div>
  )
}

export default Product