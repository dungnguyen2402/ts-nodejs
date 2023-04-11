import { ShoppingCartOutlined, AppstoreOutlined, UserOutlined,IdcardOutlined } from '@ant-design/icons'
import { Card, Space, Statistic, Typography } from 'antd'
import React from 'react'
import AppHeader from '../../component/AppHeader'
import SideMenu from '../../component/SideMenu'



type Props = {}

const Dashboard = (props: Props) => {
    
  return (
    
    <div>
      <AppHeader />
     <div className='SideMenu'>
     <SideMenu />
        
        <Space direction="horizontal">     
          <DashboardCard 
          icon={
          <ShoppingCartOutlined 
          style={{
            color: "green",
            backgroundColor: "rgba(0,255,0,0.25)", 
            borderRadius: 20,
            fontSize: 24,
          }} 
          />
        } 
            title={"Orders"}
             value={12234}
             />
          <DashboardCard icon={<AppstoreOutlined style={{
            color: "green",
            backgroundColor: "rgba(0,255,0,0.25)", 
            borderRadius: 20,
            fontSize: 24,
          }}  />}
           title={"Product"} 
           value={1234}/>
          <DashboardCard icon={<UserOutlined style={{
            color: "green",
            backgroundColor: "rgba(0,255,0,0.25)", 
            borderRadius: 20,
            fontSize: 24,
          }} 
          />
        } 
          title={"User"} value={124434}/>
          <DashboardCard icon={<IdcardOutlined style={{
            color: "green",
            backgroundColor: "rgba(0,255,0,0.25)", 
            borderRadius: 20,
            fontSize: 24,
          }} 
          />} 
          title={"Category"} value={3456234}/>
        </Space>
     </div>
    </div>

  )
}

function DashboardCard({title,value}) {
  return (
    <Card>
      <Space direction="horizontal">
        <ShoppingCartOutlined />
        <Statistic title={title} value={value}/>
      </Space>
    </Card>
  )
}

export default Dashboard