import Typography from "antd/es/typography/Typography"

function AppFooter() {
    return <div className='AppFooter'>
        <Typography.Link href="tel:+12345678">+1234567890</Typography.Link>
        <Typography.Link href="https://www.google.com" target={'_black'}>Contact</Typography.Link>
        <Typography.Link href="https://www.google.com" target={'_black'}>Teams of we</Typography.Link>
    </div>
}

export default AppFooter