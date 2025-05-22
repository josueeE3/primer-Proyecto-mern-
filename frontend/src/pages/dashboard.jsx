import React, { useState } from "react";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("Inicio");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white p-5">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <nav className="space-y-2">
          <button
            className={`w-full text-left px-4 py-2 rounded-lg hover:bg-blue-500 ${activeSection === "Empleado" ? "bg-blue-500" : ""}`}
            onClick={() => setActiveSection("Empleado")}
          >
            👨‍💼 Empleado
          </button>
          <button
            className={`w-full text-left px-4 py-2 rounded-lg hover:bg-blue-500 ${activeSection === "Producto" ? "bg-blue-500" : ""}`}
            onClick={() => setActiveSection("Producto")}
          >
            📦 Producto
          </button>
          <button
            className={`w-full text-left px-4 py-2 rounded-lg hover:bg-blue-500 ${activeSection === "Proveedor" ? "bg-blue-500" : ""}`}
            onClick={() => setActiveSection("Proveedor")}
          >
            🚚 Proveedor
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h2 className="text-3xl font-bold mb-4">{activeSection}</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {activeSection === "Empleado" && <p>🔹 Aquí puedes gestionar empleados.</p>}
          {activeSection === "Producto" && <p>🔹 Aquí puedes gestionar productos.</p>}
          {activeSection === "Proveedor" && <p>🔹 Aquí puedes gestionar proveedores.</p>}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
