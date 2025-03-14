import express from "express";
import clientsController from "../controllers/clientsController.js";

const router = express.Router();

router.route("/")
.get(clientsController.getClient)
.post(clientsController.createClient)

router.route("/:id")
.put(clientsController.updateClient)
.delete(clientsController.deleteClient)


export default router;
