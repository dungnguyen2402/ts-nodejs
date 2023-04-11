import {LineChartOutlined, IdcardOutlined, AppstoreOutlined, UserOutlined,LogoutOutlined } from "@ant-design/icons"
import { Menu } from "antd"
import { useNavigate } from "react-router-dom"

function SideMenu() {

    // const handleLogout = () => {
    //     localStorage.removeItem("accessToken");
    //     localStorage.removeItem("user")
    //     navigate("/")
    // };
    const navigate = useNavigate()
    return <div className='SideMenu'>
        <Menu 
        onClick={(items:any) => {
            navigate(items.key)
        }}
        items={[
            {
                label: 'Dashboard',
                icon : <LineChartOutlined />,
                key: '/admin',
            },
            {
                label: 'Product',
                key: '/admin/products',
                icon: <AppstoreOutlined />
            },
            {
                label: 'User',
                key: '/admin/user',
                icon: <UserOutlined />
            },
            {
                label: 'Category',
                key: '/admin/category',
                icon: <IdcardOutlined />
            },
            {
                label: 'Logout',
                key: '/',
                icon: <LogoutOutlined />,
                //onclick:{handleLogout}        
            }
        ]}
        ></Menu>
    </div>
}

export default SideMenu