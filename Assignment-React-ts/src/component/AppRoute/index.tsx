import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "../../pages/admin/Dashboard"
import ListProduct from "../../pages/admin/product/ListProduct"
import ListUser from "../../pages/admin/user/ListUser"
import ListCategory from "../../pages/admin/category/ListCategory"
import { useEffect, useState } from "react"
import { deleteProduct, getAllProduct, updateProduct } from "../../api/product"
import UpdateProduct from "../../pages/admin/product/UpdateProduct"
import { IProduct } from "../../types/product"

function AppRoute() {
    const [products , setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        getAllProduct().then(({data: {product}}) => setProducts(product))
    },[])
    //console.log(products)

    const onhandleDelete = (id:number) => {
        deleteProduct(id).then(() => setProducts(products.filter((item:any) => item._id !== id)))
    }

    const onhandleUpdate = (product:any) => {
        updateProduct(product).then(() => setProducts([...products, product]))
    }

    return <div className='appRoute'>
            {/* <Routes>
                <Route path="/admin/dashboard" element={<Dashboard />}></Route>
                <Route path="/admin/product" element={<ListProduct products={products} onRemove={onhandleDelete} />} ></Route>
                <Route path="/admin/user" element={<ListUser />}></Route>
                <Route path="/admin/category" element={<ListCategory />}></Route>
                <Route path="/logout" element={"Log out"}></Route>
                <Route path="/:id/update" element={<UpdateProduct products={products} onUpdate={onhandleUpdate} />} />
                
            </Routes> */}
    </div>
}

export default AppRoute