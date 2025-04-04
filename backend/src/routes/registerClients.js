import express from "express";
import registerClientController from "../controllers/registerClientsController.js";


const router = express.Router();

router.route("/").post(registerClientController.registerClients)
router.route("/VerifyCodeEmail").post(registerClientController.veryfyCodeEmail)


export default router;
