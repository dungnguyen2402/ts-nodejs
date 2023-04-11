import React from 'react'
import { Button, Form, Input ,Select } from 'antd';
import AppHeader from '../../../component/AppHeader'
import SideMenu from '../../../component/SideMenu'
import { useNavigate } from 'react-router-dom';
import { IProduct } from '../../../types/product';
import { Option } from 'antd/es/mentions'

interface Props  {
  onAdd: (product: IProduct) => void;
}


const AddProduct = (props: Props) => {
  
  const onFinish = (values: any) => {
    props.onAdd(values);
    navigate("/admin/products")
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const navigate = useNavigate()

  return (
    <div>
      <AppHeader/>
      <div className='SideMenu'>
          <SideMenu/>
          <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600,margin:'0 auto'  }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Product Name"
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Product Price"
                name="price"
                rules={[{ required: true, message: 'Please input your price!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Product Description"
                name="description"
                rules={[{ required: true, message: 'Please input your description!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                    label="Category"
                    name="categoryId"
                    rules={[{ required: true, message: 'Please enter field' }]}
                >
                    <Select
                        placeholder="Lựa chọn category" allowClear>
                        {props.categories.map((item:any)=>{ 
                        
                        //console.log(props);
                        
                          return(
                              <Option value={`${item._id}`}>{item.name}</Option>
                          )
                        })}
                        
                        
                      </Select>
                </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Add New Product
                </Button>
              </Form.Item>
            </Form>
                </div>
              </div>
            )
}

export default AddProduct