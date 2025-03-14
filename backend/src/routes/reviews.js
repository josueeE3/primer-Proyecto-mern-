import express from "express";
import reviewRoutes from "../controllers/reviewsController.js";

const router = express.Router();

router.route("/")
.get(reviewRoutes.getReview)
.post(reviewRoutes.createReview)

router.route("/:id")
.delete(reviewRoutes.deleteReview)
.put(reviewRoutes.updateReview)


export default router;