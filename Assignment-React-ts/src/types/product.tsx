export interface IProduct {
    _id:  string,
    name: string,
    price: number,
    image:string,
    description: string
    categoryId: string,
}

export interface ICategory {
    _id:  string,
    name: string,
}

export interface IUser {
    _id:  string,
    name: string,
    email: string,
    password: number,
    confirmPassword: number
}

