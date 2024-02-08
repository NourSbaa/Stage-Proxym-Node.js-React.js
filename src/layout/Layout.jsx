import Container from "./components/Container"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import './navbar.css'
const Layout = () => {
  return (
<>
<Sidebar/>
<Navbar/>
<Container/>

</>
  )
}

export default Layout