import { Badge, Image, Rate, Typography} from 'antd'
import React, { useEffect, useState } from 'react'
import HeaderHome from '../component/HeaderHome'
import { List } from 'antd';
import { getAllProduct } from '../api/product';
import Card from 'antd/es/card/Card';
import AppFooter from '../component/AppFooter';
import { ICategory, IProduct } from '../types/product';
import Article from '../component/Article/inden';


type Props = {
  category: ICategory[]
}

const HomePage = (props: Props) => {

  const [productList, setProductList] = useState<IProduct[]>([])
  useEffect(() => {
    getAllProduct().then(({data: {product}}) => setProductList(product))
  }, [])
  //console.log(productList);
  

  return (
    <div >
      <HeaderHome />
      <div className='display'>
        <Article />
        <List
        grid={{ column:3 }}
            renderItem={(product, index) => {
              //console.log(product);
              
              return (
                <Badge.Ribbon className="itemCardBadge" text="50%" color="red">
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

export default HomePage