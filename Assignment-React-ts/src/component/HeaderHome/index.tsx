import { HomeFilled,UserOutlined } from "@ant-design/icons";
import { Menu,Button } from "antd";
import Typography from "antd/es/typography/Typography";
import { useNavigate,Link } from "react-router-dom";

function HeaderHome() {
    const navigate = useNavigate()
    const onMenuClick = (item:any) => {
        navigate(`/${item.key}`)
    }

    return ( 
    <div className="headerHome">
        <Menu
        mode="horizontal"
        onClick = {onMenuClick}
            items={[
                {
                    label: <HomeFilled />,
                    key: "",
                },
                {
                    label: "About",
                    key: "about",
                },
                {
                    label: "Page",
                    key: "page",
                    children: [
                        {
                            label: "Page Products",
                            key: "products",
                        },
                        {
                            label: "Page Products",
                            key: "page-user",
                        },
                        {
                            label: "Page Products",
                            key: "page-category",
                        },
                    ]               
                },

                {
                    label: "Contact",
                    key: "contact",
                },
            ]}
        />
        <Typography.Title>Home</Typography.Title>
        <div>
        <Button className="btn-user" ><Link to={"/signup"}>Đăng kí</Link></Button>
        <Button className="btn-user"><Link to={"/signin"}>Đăng nhập</Link></Button>
        </div>
    </div>
    )
}

export default HeaderHome