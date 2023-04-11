import { BellFilled, MailOutlined } from '@ant-design/icons'
import { Badge, Image, Space, Typography } from 'antd'

function AppHeader() {
    return  ( 
    <div className='AppHeader'>
        
        <img
        width={30}
         src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/OOjs_UI_icon_userAvatar-progressive.svg/2048px-OOjs_UI_icon_userAvatar-progressive.svg.png" 
        />
        <Typography.Title>ADMIN</Typography.Title>
        <Space>
            <Badge count={15} dot>
            <MailOutlined style={{fontSize: 24}}/>
            </Badge>
            <Badge count={10}>
            <BellFilled style={{fontSize: 24}} />
            </Badge>
        </Space>
    </div>
    )
}

export default AppHeader