import React, { useState } from "react";

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    birthday: "",
    email: "",
    address: "",
    hiredate: "",
    password: "",
    telephone: "",
    dui: "",
    isssNumber: "",
    isVerified: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Registro de Empleado</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Nombre" className="input" onChange={handleChange} required />
          <input type="text" name="lastname" placeholder="Apellido" className="input" onChange={handleChange} required />
        </div>
        <input type="date" name="birthday" className="input" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Correo electrónico" className="input" onChange={handleChange} required />
        <input type="text" name="address" placeholder="Dirección" className="input" onChange={handleChange} required />
        <input type="date" name="hiredate" className="input" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Contraseña (mín. 8 caracteres)" className="input" onChange={handleChange} required minLength="8" />
        <input type="number" name="telephone" placeholder="Teléfono (mín. 8 dígitos)" className="input" onChange={handleChange} required min="8" />
        <input type="text" name="dui" placeholder="DUI (mín. 10 caracteres)" className="input" onChange={handleChange} required minLength="10" />
        <input type="number" name="isssNumber" placeholder="ISSS Número" className="input" onChange={handleChange} required />
        <label className="flex items-center space-x-2">
          <input type="checkbox" name="isVerified" onChange={handleChange} />
          <span>¿Verificado?</span>
        </label>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500">Registrar</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
