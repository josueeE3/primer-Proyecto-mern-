import express from "express";
import productRoutes from "./src/routes/products.js";

const app = express();

app.use(express.json());
app.use("/api/products", productRoutes)

export default app;