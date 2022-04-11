import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../Components/Layout";
import RoutesData from "../Constants/RouteData";
export default function Router() {
  return (
    <BrowserRouter>
     <Layout>
       <ToastContainer autoClose={2000} />
       <Routes>
       {RoutesData.map((route, index) => {
         let { path, element } = route;
          return (
            <Route
              key={index}
              path={path} 
              exact
              element={element}
            />
          );
        })}
      </Routes>
     </Layout>
    </BrowserRouter>
  );
}
