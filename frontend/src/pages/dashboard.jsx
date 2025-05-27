import React, { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import "../App.css";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("");

  const location = useLocation();

  const navigate = useNavigate();

  const navegarProduct = () => {
    setActiveSection("Register products");
    navigate("/dashboard/products");
    };
    
  const navegarEmployee = () => {
    setActiveSection("Register employee");
    navigate("/dashboard/employees");
    };

  const navegarProviders = () => {
    setActiveSection("Register provider");
    navigate("/dashboard/providers");
    };

  return (
<div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 
  w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[1200px] 
  mx-auto px-4 lg:px-0">
      {/* Sidebar */}
      <aside className="w-100 bg-orange-300 text-white p-10">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <nav className="space-y-2">
          <button
            className={`w-full text-left px-4 text-black py-2 rounded-lg hover:bg-blue-500`}
            onClick={navegarEmployee}
          >
            👨‍💼 Empleado
          </button>
          <button
            className={`w-full text-left px-4 py-2 text-black rounded-lg hover:bg-blue-500`}
            onClick={navegarProduct}
          >
            📦 Producto
          </button>
          <button
            className={`w-full text-left px-4 py-2 text-black rounded-lg hover:bg-blue-500`}
            onClick={navegarProviders}
          >
            🚚 Proveedor
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className=" flex-100 p-10">
        <h2 className="text-3xl font-bold mb-4">{activeSection}</h2>
        <div className="p-6 rounded-lg ">
          <Outlet /> {/* Aquí se cargará la subruta */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
