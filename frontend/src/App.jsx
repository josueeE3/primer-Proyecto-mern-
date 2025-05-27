import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Products from "./pages/products.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Provideers from "./pages/provideers.jsx";
import Employees from "./pages/employee.jsx";
import EmployeesList from "./pages/employeesList.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import {EmployeeProvider} from './context/employeeContext'

import "./App.css";

function App() {
  return (
    <EmployeeProvider>
      <BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>

        <Route path="/dashboard" element={<Dashboard />}>

          <Route path="employees" element={<Employees />} />
          <Route path="employees/:id" element={<Employees />} />
          <Route path="employeesList" element={<EmployeesList />} />
          <Route path="products" element={<Products />} />
          <Route path="providers" element={<Provideers />} />
        </Route>

        <Route path="/" element={<Navigate to="/dashboard/employees" />} />
      </Routes>
    </BrowserRouter>
    </EmployeeProvider>
  );
}

export default App;

