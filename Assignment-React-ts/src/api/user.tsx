import instance from "./instance";

interface IUser {
    id:  string,
    name: string,
    email: string,
    password: number,
    confirmPassword: number
}


export const addUser = (users: IUser) => {
    return instance.post("/signup" , users)
}

export const logInUser = (user: any) => {
    return instance.post("/signin" , user)
}
