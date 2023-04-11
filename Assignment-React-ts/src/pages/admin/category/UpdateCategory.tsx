import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import AppHeader from '../../../component/AppHeader'
import SideMenu from '../../../component/SideMenu'
import { ICategory } from '../../../types/product'

type Props = {
  categories: ICategory[],
  onUpdateCategory: (category: ICategory) => void
}

const UpdateCategory = (props: Props) => {
  const navigate = useNavigate()
  const { _id } = useParams()
  
  const {register, handleSubmit , reset} = useForm()
  useEffect(() => {
    const currrentCategory = props.categories.find((categories:any) => categories._id === _id)
    reset(currrentCategory);
    
  },[props])
  const onHandleSubmit = (data:any) => {
    props.onUpdateCategory(data);
    navigate("/admin/category")
  }
  return (
    <div>
      <AppHeader />
      <div className='SideMenu'>
        <SideMenu/>
        <form className='form' action="" onSubmit={handleSubmit(onHandleSubmit)}>

            <label htmlFor="">Name</label><br />
            <input id='name' type="text" {...register("name")} /> <br />

            <button className='btn-button' type='submit'>Update Category</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateCategory