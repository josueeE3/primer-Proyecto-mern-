import React, { useState } from "react";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
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
    console.log("Producto registrado:", formData);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Registro de Producto</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Nombre del producto" className="input" onChange={handleChange} required />
        <textarea name="description" placeholder="Descripción del producto" className="input h-24" onChange={handleChange} />
        <input type="number" name="price" placeholder="Precio" className="input" onChange={handleChange} required min="0" />
        <input type="number" name="stock" placeholder="Stock disponible" className="input" onChange={handleChange} required min="0" />
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-500">Registrar Producto</button>
      </form>
    </div>
  );
};

export default ProductForm;
