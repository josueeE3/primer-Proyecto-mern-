const productsController = {};
import Products from "../models/Products.js";

productsController.getProductos = async (req, res) => {
  const products = await Products.find();

  res.json(products);
};

//insert

productsController.createProduct = async (req, res) => {
  const { name, description, price, stock } = req.body;

  const newProduct = new Products({ name, description, price, stock });

  await newProduct.save();

  res.json({ message: "product saved" });
};

productsController.deleteProducto = async (req, res) => {
  await Products.findOneAndDelete(req.params.id);
};

productsController.updateProducts = async (req, res) => {
  const { name, description, price, stock } = req.body;

  await Products.findByIdAndUpdate(
    req.params.id,
    { name, description, price, stock },
    { new: true }
  );

  res.json({ message: "product updated " });
};

productsController.stockProducts = async (req, res) => {
  try {
    const resultado = await Products.aggregate([
      {
        $project: {
            name: 1,
            stockOriginal: "$stock",
          },
      },
      {
        $limit: 4,
      },
    ]);

    res.status(200).json(resultado);
  } catch (error) {
    console.log("error" + error);

    res.status(500).json({ message: "internal server error" });
  }
};

export default productsController;
