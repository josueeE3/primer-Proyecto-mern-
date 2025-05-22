import React, { useState } from "react";

const ProviderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    telephone: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Proveedor registrado:", formData);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Registro de Proveedor</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Nombre del proveedor" className="input" onChange={handleChange} required />
        <input type="text" name="telephone" placeholder="Teléfono" className="input" onChange={handleChange} required />
        <input type="text" name="image" placeholder="URL de imagen" className="input" onChange={handleChange} required />
        <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-500">Registrar Proveedor</button>
      </form>
    </div>
  );
};

export default ProviderForm;
