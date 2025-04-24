import express from "express";
import passwordRecoveryController from "../controllers/recoveryPasswordController.js";

const router = express.Router();

router.route("/requestCode").post(passwordRecoveryController);
//router.route("/").post(registerClientController);
//router.route("/newPassword").post(registerClientController);


export default router;
