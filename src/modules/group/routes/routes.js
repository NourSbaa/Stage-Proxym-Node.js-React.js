import { createElement, lazy } from "react"

const Group=lazy(()=>import("../Group")) 
const AddGroup = lazy(()=>import("../components/AddGroup"))
const Acceuil=lazy(()=>import("http://localhost:5173/private")) 

const GroupRoutes = [
    {
        path: "group",
        name: "Group",
        element: createElement(Group)
    },
    {
        path: "group/add",
        name: "Add Group",
        element: createElement(AddGroup)
    },
    {
        path: "Acceuil",
        name: "Acceuil",
        element: createElement("http://localhost:5173/private")}
    ]
export default GroupRoutes 
