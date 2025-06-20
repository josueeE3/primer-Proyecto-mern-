import express from "express"
import salesController from "../controllers/salesController.js";

const router = express.Router();

router.route("/")
.post(salesController.insertSales)

router.route("/category").get(salesController.salesByCategory)
router.route("/besProducts").get(salesController.mostSoldProducts)
router.route("/currentCustomer").get(salesController.mostFrecuentCustomers)
router.route("/total").get(salesController.totalEarnings)

export default router;