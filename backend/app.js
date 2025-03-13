import express from "express";
import productRoutes from "./src/routes/products.js";
import clientRoutes from "./src/routes/clients.js";


const app = express();

app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/clients", clientRoutes);

export default app;