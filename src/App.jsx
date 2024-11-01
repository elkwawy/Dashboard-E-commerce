import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./pages/RootLayout";
import Test1 from "./pages/Test1";
import Test2 from "./pages/Test2";
import NotFound from "./pages/NotFound";
import BasicInfo from "./pages/admin/BasicInfo";


// add routes here
const routes = [ 
  {path:'/', element:<Test1/>, /*isProtected:false */},
  {path:'/2', element:<Test2/>, /*isProtected:false */},
  { 
    path: '/admin', 
    element: <BasicInfo />, // Parent layout component for admin routes
    children: [
      { path: 'basicInfo', element: <BasicInfo /> },
    ]
  },
  {path:'*', element:<NotFound />, /*isProtected:false */},
];

const generateRoutes = (routes) =>
  routes.map((route) => (
    <Route 
      key={route.path} 
      path={route.path} 
      element={route.element}
    >
      {route.children && generateRoutes(route.children)} {/* Recursion */}
    </Route>
  ));

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      {
        generateRoutes(routes)
      }
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={Router} />
  )
}

export default App