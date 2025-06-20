import sales from "../models/sales.js";

const salesController = {};

salesController.salesByCategory = async (req, res) => {
  try {
    const result = await sales.aggregate([
      {
        $group: {
          _id: "$category",
          totalVentas: { $sum: "$total" },
        },
      },
      {
        $sort: { totalVentas: -1 },
      },
    ]);
    res.status(200).json(result);
  } catch (error) {
    console.log("error" + error);
    res.status(500).json({ message: "internal server error" });
  }
};

salesController.mostSoldProducts = async (req, res) => {
  const resultado = await sales.aggregate([
    {
      $group: {
        _id: "$product",
        cantidad: { $sum: 1 },
      },
    },

    {
      $sort: { cantidad: -1 },
    },

    { $limit: 5 },
  ]);
  res.status(200).json(resultado);
};

salesController.mostFrecuentCustomers = async (req, res) => {
  try {
    const resultado = await sales.aggregate([
      {
        $group: {
          _id: "$customer",
          compras: { $sum: 1 },
        },
      },
      {
        $sort: { compras: -1 },
      },
      {
        $limit: 3,
      },
    ]);

    res.status(200).json(resultado);
  } catch (error) {
    console.log("error" + error);

    res.status(500).json({ message: "internal server error" });
  }
};

salesController.totalEarnings = async (req, res) => {
  try {
    const resultado = await sales.aggregate([
      {
        $group: {
          _id: null,
          gananciasTotales: { $sum: "$total" },
        },
      },
    ]);

    res.status(200).json(resultado);
  } catch (error) {
    console.log("error" + error);

    res.status(500).json({ message: "internal server error" });
  }
};

salesController.insertSales = async (req, res) => {
  try {
    const { product, category, customer, total, date } = req.body;

    const newSale = new sales({ product, category, customer, total, date });

    await newSale.save();

    res.status(200).json({ message: "Saved" });
  } catch (error) {
    console.log("error" + error);

    res.status(500).json({ message: "internal server error" });
  }
};


export default salesController;
