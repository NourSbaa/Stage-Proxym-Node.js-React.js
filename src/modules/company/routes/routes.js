import { createElement, lazy } from "react"

const Company=lazy(()=>import("../Company")) 
const AddCompany = lazy(()=>import("../component/AddCompany"))
const Acceuil=lazy(()=>import("http://localhost:5173/private")) 

const CompanyRoutes = [
    {
        path: "company",
        name: "Company",
        element: createElement(Company)
    },
    {
        path: "company/add",
        name: "Add Company",
        element: createElement(AddCompany)
    },
    {
        path: "Acceuil",
        name: "Acceuil",
        element: createElement("http://localhost:5173/private")}
    ]
export default CompanyRoutes 
