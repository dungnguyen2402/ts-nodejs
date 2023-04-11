import { useEffect, useState } from "react"
import { getAllCategory } from "../../api/category"
import { ICategory } from "../../types/product";

function Article(props:any) {
    //console.log(props);
    
    const [categoryList, setCategoryList] = useState<ICategory[]>()
    useEffect(() => {
        getAllCategory().then(({ data: { categories } }) => setCategoryList(categories))
      }, [])
    //console.log(categoryList);
    
    
    return <div >
        <div className="category">     
            <h3 className="category_text">Danh mục sản phẩm</h3>
            <ul className="category_list" >
                {categoryList && categoryList.map((category: any) => {
                    //console.log(category);
                    return (
                        <a key={category._id} href={`/productcategory/${category._id}`}>
                            <li className="category_list_li">{category.name}</li>
                        </a>
                    )
                })}
            </ul>
        </div>
    </div>
}

export default Article

// 6432396d93b9bba3f3ed189b : Iphone