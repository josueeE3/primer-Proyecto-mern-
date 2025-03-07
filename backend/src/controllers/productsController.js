const productsController = {};
import Products from "../models/Products.js";

productsController.getProductos = async (req, res) => {

    const products = await Products.find()

    res.json(products)
}                   


//insert 


productsController.createProduct = async (req, res) => {

    const {name, description, price, stock} = req.body;
    
    const newProduct = new Products({name, description, price, stock});

    await newProduct.save()

    res.json({message: "product saved"});
}
 


productsController.deleteProducto = async (req, res) => {

    await Products.findOneAndDelete(req.params.id)
}

productsController.updateProducts = async (req,res) => {

    const {name,description,price,stock} = req.body;

    await Products.findByIdAndUpdate(req.params.id, {name,description,price,stock}, {new: true});

    res.json({message: "product updated "})
}

export default productsController;