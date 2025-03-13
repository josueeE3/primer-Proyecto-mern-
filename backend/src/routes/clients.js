import express from "express";
import productsController from "../controllers/clientsController.js";

const router = express.Router();

router.route("/")
.get(productsController.getClient)
.post(productsController.createClient)

router.route("/:id")
.put(productsController.updateClient)
.delete(productsController.deleteClient)


export default router;
