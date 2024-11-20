import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import React, { Suspense } from "react";
import Loader from "./utils/Loader";
const Test1 = React.lazy(() => import("./pages/Test1"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Test2 = React.lazy(() => import("./pages/Test2"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Login = React.lazy(() => import("./Auth/Login"));


// add routes here
const routes = [ 
  {path:'', element:<Dashboard/>, /*isProtected:false */},
  {path:'', element:<Test2/>, /*isProtected:false */},
  {path:'/login', element:<Login/>, /*isProtected:false */},
  {path:'*', element:<NotFound />, /*isProtected:false */},
];

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route  element={<RootLayout />}>
          {
            routes.map((route) => <Route key={route.path} path={route.path} element={route.element} />)
          }
      </Route>
  )
)

const App = () => {
  return (
    <Suspense fallback={<div className="w-full h-[calc(100vh-82px)] translate-y-[82px] flex items-center justify-center"><Loader /></div>}>
      <RouterProvider router={Router} />
    </Suspense>
  )
}

export default App