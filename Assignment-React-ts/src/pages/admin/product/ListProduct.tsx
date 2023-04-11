import { Space, Table, Tag,Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import AppHeader from '../../../component/AppHeader';
import AppFooter from '../../../component/AppFooter';
import SideMenu from '../../../component/SideMenu';
import { ICategory, IProduct } from '../../../types/product';


type Props = {
  products: IProduct[],
  categories: any[],
  onRemove: (_id: number) => void
}


const ListProduct = ({products,categories,onRemove}: Props) => {
  const onHandleRemove = (_id:number)=>{
    onRemove(_id);
  }
  const data = products.map((item:any) => {
    const category = categories.find((cat: any) => cat._id === item.categoryId)
    console.log(category);
    
    return {
      key: item._id,
      ...item,
      categoryName: category?.name
    }
  })
  
  const columns: ColumnsType<IProduct[]> = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Product Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Product Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Category',
      dataIndex: 'categoryName',
      key: 'categoryName',
    },
    {
      title: 'Product Image',
      dataIndex: 'image',
      key: 'image',
      render: (image) => <img width="100px" src={image} alt="" />,
    },
    {
      title: 'Action',
      key: 'action',
      render: ( record) => ( 
        //console.log(record)   
        <Space size="middle">
          <Button type="primary" danger onClick={() => onHandleRemove(record.key)} >Delete</Button>
          <Button type="primary"><Link to={`/admin/products/${record.key}/update`}>Update</Link></Button>
        </Space>
      ),
    },
  ];
  

  return (
    <div>
      <AppHeader />
        <Button type="primary"><Link to={"/admin/products/add"}>Add new Product</Link></Button>
      <div className='SideMenu'>
        <SideMenu />
        <Table columns={columns} dataSource={data} />
      </div>
      
    </div>
  )
  /**level: kích thước của chữ */
}

export default ListProduct