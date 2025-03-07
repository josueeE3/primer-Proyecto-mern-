import express from "express";
import productsController from "../controllers/productsController.js";

const router = express.Router();

router.route("/")
.get(productsController.getProducts)
.post(productsController.createProducts)

router.route("/:id")
.put(productsController.updateProducts)
.delete(productsController.deleteProduct)


export default router;





