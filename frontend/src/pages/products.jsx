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
    <div className="max-w-xl mx-auto mt-10 p-8 bg-white shadow-xl rounded-2xl">
  
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Nombre del producto */}
      <div>
        <input
          type="text"
          name="name"
          placeholder="Nombre del producto"
          className="input w-full"
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            type="number"
            name="price"
            placeholder="Precio"
            className="input w-full"
            onChange={handleChange}
            required
            min="0"
            step="0.01"
          />
        </div>
  
        <div>
          <input
            type="number"
            name="stock"
            placeholder="Stock disponible"
            className="input w-full"
            onChange={handleChange}
            required
            min="0"
          />
        </div>
      </div>
  
      {/* Descripción */}
      <div>
        <textarea
          name="description"
          placeholder="Descripción"
          className="input w-full h-18 resize-none"
          onChange={handleChange}
        />
      </div>
        
  
      {/* Botón */}
      <button
        type="submit"
        className="w-full bg-green-600 text-black py-3 rounded-lg font-semibold hover:bg-green-500 transition-colors"
      >
        Register
      </button>
    </form>
  </div>
  
  );
};

export default ProductForm;
