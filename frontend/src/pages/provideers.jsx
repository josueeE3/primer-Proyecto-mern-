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
    <div className="mx-auto mt-1 p-8 bg-white shadow-lg rounded-lg min-h-[440px] max-w-4xl">

  <form onSubmit={handleSubmit} className="space-y-6 text-left">
    {/* Nombre del proveedor */}
    <div>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Nombre"
        className="input w-full"
        onChange={handleChange}
        required
      />
    </div>

    {/* Teléfono */}
    <div>
      <input
        type="text"
        id="telephone"
        name="telephone"
        placeholder="Teléfono"
        className="input w-full"
        onChange={handleChange}
        required
      />
    </div>

    {/* URL de imagen */}
    <div>
      <input
        type="text"
        id="image"
        name="image"
        placeholder="url img"
        className="input w-full"
        onChange={handleChange}
        required
      />
    </div>

    {/* Botón */}
    <button
      type="submit"
      className="w-full bg-purple-600 text-black py-3 rounded-lg font-semibold hover:bg-purple-500 transition-colors"
    >
      Register 
    </button>
  </form>
</div>

  );
};

export default ProviderForm;
