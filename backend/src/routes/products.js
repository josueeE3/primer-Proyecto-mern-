import express from "express";
import productsController from "../controllers/productsController.js";
import clientsController from "../controllers/clientsController.js";


const router = express.Router();

router.route("/")
.get(productsController.getProductos)
.post(productsController.createProduct)

router.route("/:id")
.put(productsController.updateProducts)
.delete(productsController.deleteProducto)



/* --------------------  */

router.route("/stock").get(productsController.stockProducts)




export default router;





