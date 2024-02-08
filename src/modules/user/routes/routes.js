import { createElement, lazy } from "react"

const User=lazy(()=>import("../User")) 
const AddUser = lazy(()=>import("../components/AddUser"))
const Acceuil=lazy(()=>import("http://localhost:5173/private")) 

const UserRoutes = [
    {
        path: "user",
        name: "User",
        element: createElement(User)
    },
    {
        path: "user/add",
        name: "Add User",
        element: createElement(AddUser)
    },
    {
        path: "Acceuil",
        name: "Acceuil",
        element: createElement("http://localhost:5173/private")}
    ]
export default UserRoutes 
