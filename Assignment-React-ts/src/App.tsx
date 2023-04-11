import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"
import Dashboard from './pages/admin/Dashboard'
import ListProduct from './pages/admin/product/ListProduct'
import AddProduct from './pages/admin/product/AddProduct'
import UpdateProduct from './pages/admin/product/UpdateProduct'
import { getAllProduct, deleteProduct, updateProduct, addProduct } from './api/product'
import "./App.css"
import HomePage from './pages/HomePage'
import Product from './pages/Product'
import { ICategory, IProduct, IUser } from './types/product'
import ListCategory from './pages/admin/category/ListCategory'
import { addCategory, deleteCategory, getAllCategory, updateCategory } from './api/category'
import AddCategory from './pages/admin/category/AddCategory'
import UpdateCategory from './pages/admin/category/UpdateCategory'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import { addUser, logInUser } from './api/user'
import ProductDetail from './pages/ProductDetail'
import ProductCategory from './pages/ProductCategory'


function App() {

  const [products, setProducts] = useState<IProduct[]>([])
  const [categories, setCategories] = useState<ICategory[]>([])
  const navigate = useNavigate();

  // =================PRODUCTS =================
  useEffect(() => {
    getAllProduct().then(({ data: { product } }) => setProducts(product))
  }, [])
  //console.log(products)

  const onhandleDelete = (id: number) => {
    deleteProduct(id).then(() => setProducts(products.filter((item: any) => item._id !== id)))
  }

  const onHandleAdd = (product: any) => {
    addProduct(product).then(() => setProducts([...products, product]))
  };

  const onhandleUpdate = (product: any) => {
    updateProduct(product).then(() => setProducts(products.map((item: any) => item.id == product._id ? product : item)))
  }

  // ==================CATEGORY================
  useEffect(() => {
    getAllCategory().then(({ data: { categories } }) => setCategories(categories))
  }, [])
  //console.log(categories);

  const onhandleDeleteCategory = (id: number) => {
    deleteCategory(id).then(() => console.log(categories.filter((item: any) => item._id !== id)))
  }

  const onHandleAddCategory = (category: any) => {
    addCategory(category).then(() => setCategories([...categories, category]))
  };

  const onHandleUpdateCategory = (category: any) => {
    updateCategory(category).then(() => setCategories(categories.map((item :any) => item.id == category._id ? category : item)))
  }

  //========================USERS========================
  // Đăng kí
  const onHandleAddUser = (user: any) => {
    addUser(user)
  }
  // Đăng nhập
  const onHandleSignIn = async (user: IUser) => {
    try {
      const { data } = await logInUser(user)
      //console.log(data);
      
      localStorage.setItem('accessToke', JSON.stringify(data.accessToke))
      localStorage.setItem('user', JSON.stringify(data.user))
      data.user.role === "admin" ? navigate("/admin/products"): navigate("/products");
      
      // localStorage.removeItem('user');
      // localStorage.removeItem('accessToke');
      alert("Sign in successfully❤️");
      window.location.reload()
    } catch (error) {
      console.log(error);
      
    }

  };


  return (

    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage category={categories} />} />
          <Route path='products' >
            <Route index element={<Product products={products} />} />
            <Route path=':_id' element={<ProductDetail products={products} />} />
          </Route>
          <Route path='productcategory/:_id' element={<ProductCategory products={products} />} />
          <Route path='signin' element={<Signin onSignin={onHandleSignIn} />} />
          <Route path='signup' element={<Signup onAddUser={onHandleAddUser} />} />
        </Route>
        <Route path='admin'>
          <Route index element={<Dashboard />} />
          <Route path='products'>
            <Route index element={<ListProduct products={products} categories={categories} onRemove={onhandleDelete} />} />
            <Route path='add' element={<AddProduct categories={categories} onAdd={onHandleAdd} />} />
            <Route path=':_id/update' element={<UpdateProduct categories={categories} products={products} onUpdate={onhandleUpdate} />}></Route>
          </Route>
        </Route>
        <Route path='admin'>
          <Route index element={<Dashboard />} />
          <Route path='category'>
            <Route index element={<ListCategory onDelete={onhandleDeleteCategory} categories={categories} />} />
            <Route path='add' element={<AddCategory onAddCategory={onHandleAddCategory} />} />
            <Route path=':_id/update' element={<UpdateCategory onUpdateCategory={onHandleUpdateCategory} categories={categories}  />}></Route>
          </Route>
        </Route>

      </Routes>
    </div>
  )
}

export default App
