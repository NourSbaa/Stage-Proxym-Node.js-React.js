import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import Company from "../../modules/company/Company"

const Container = () => {
  return (<div>
<Suspense>
  <Outlet/>
  </Suspense> </div> 
  )
}

export default Container

