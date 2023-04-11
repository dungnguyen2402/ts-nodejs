import { Typography } from 'antd'
import React from 'react'
import AppHeader from '../../../component/AppHeader';
import { Button, Form, Input ,Image } from 'antd';
import SideMenu from '../../../component/SideMenu';
import { Space, Table,  } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { ICategory } from '../../../types/product';



type Props = {
  onDelete: (_id: number) => void;
  categories: ICategory[],
}

const ListCategory = (props: Props) => {
  //console.log(props);
  const onHandleDelete = (_id: number)=>{
    props.onDelete(_id);
  }
  const data = props.categories.map((item:any) => {
    //console.log(props.categories);
    
    return {
      key: item._id,
      ...item
    }
  })
  const columns: ColumnsType<ICategory> = [
    {
      title: 'Category Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Action',
      key: 'action',
      render: ( record) => ( 
        //console.log(record)   
        <Space size="middle">
          <Button type="primary" danger onClick={() => onHandleDelete(record.key)} >Delete</Button>
          <Button type="primary"><Link to={`/admin/category/${record.key}/update`}>Update</Link></Button>
        </Space>
      ),
    },
  ];

  // const data: DataType[] = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //     tags: ['nice', 'developer'],
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park',
  //     tags: ['loser'],
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sydney No. 1 Lake Park',
  //     tags: ['cool', 'teacher'],
  //   },
  // ];

  
  return (
    <div>
      <AppHeader />
      <Button type="primary"><Link to={"/admin/category/add"}>Add new Product</Link></Button>
        <div className='SideMenu'>
          <SideMenu />
          <Table columns={columns} dataSource={data} />
        </div>

    </div>
  )
}

export default ListCategory