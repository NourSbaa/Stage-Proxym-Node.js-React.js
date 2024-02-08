import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import CompanyRoutes from "../modules/company/routes/routes";
import GroupRoutes from "../modules/group/routes/routes";
import UserRoutes from "../modules/user/routes/routes";

const routesTable = [
...CompanyRoutes,
...GroupRoutes,
...UserRoutes
]
const AppRouterProvider = () => {
    const mainRoutes = [
    //   {
    //   path: 'public',
    //   index: true,
    //   element: (
     
    //       <Auth />
    //   ),
    // },
        // {
        //   path: 'login',
        //   index: true,
        //   element: (
         
        //       <Auth />
        //   ),
        // },
        
    
        {
          path: 'private',
        
          element: (
        
                  <Layout />
          ),
          children: routesTable 
        },
        {
          path: '*',
          element: <Navigate to={'/private'} replace />,
        },
      ]
    
      const router = createBrowserRouter(mainRoutes)
    
      return <RouterProvider router={router}  />
    }

export default AppRouterProvider;