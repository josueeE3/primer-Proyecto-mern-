import express from "express";
import productsController from "../controllers/productsController.js";

const router = express.Router();

router.route("/")
.get(productsController.getProductos)
.post(productsController.createProduct)
/*
router.route("/:id")
.put(productsController.updateProducts)
.delete(productsController.deleteProduct)*/


export default router;





