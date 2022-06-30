import React, { useRef } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";

import { ScrollTop } from "primereact/scrolltop";

const Customer_layout= React.lazy(() => import ("./themes/customer/Customer_layout")  );
const Home = React.lazy(() => import("./pages/customer/Home"));
const Search = React.lazy(() => import("./pages/customer/Search"));
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";


const App = () => {
  return (
    <div className="max-w-full overflow-x-hidden">
      <ScrollTop threshold={20} />
      <Routes>
        <Route path="/" element={<Customer_layout />}>
          <Route index element={<Home />} />
          <Route path='tim-kiem/' element={<Search />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
