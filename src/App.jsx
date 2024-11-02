import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import React, { Suspense } from "react";
import Loader from "./utils/Loader";
const Test1 = React.lazy(() => import("./pages/Test1"));
const Test2 = React.lazy(() => import("./pages/Test2"));
const NotFound = React.lazy(() => import("./pages/NotFound"));


// add routes here
const routes = [ 
  {path:'/', element:<Test1/>, /*isProtected:false */},
  {path:'/2', element:<Test2/>, /*isProtected:false */},
  {path:'*', element:<NotFound />, /*isProtected:false */},
];

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
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