import instance from "./instance";

interface IProduct {
    _id: number | string,
    name: string,
}

export const getAllCategory = () => {
    return instance.get("/categories");
}

export const getOneCategory = (id: number) => {
    return instance.get("/categories/" + id);
}

export const deleteCategory = (id: number) => {
    return instance.delete("/categories/" + id);
}

export const addCategory = (categories: IProduct) => {
    return instance.post("/categories" , categories)
}

export const updateCategory = (categories: IProduct) => {
    return instance.put("/categories/" + categories._id, categories)
}