import express from "express";
import productRoutes from "./src/routes/products.js";
import clientRoutes from "./src/routes/clients.js";
import reviewRoutes from "./src/routes/reviews.js";
import employeeRoutes from "./src/routes/employee.js";
import registerEmployeeRoutes from "./src/routes/RegisterEmployee.js";
import registerClientsRoutes from "./src/routes/registerClients.js";
import cookieParser from "cookie-parser";
import recoveryPasswordRoutes from "./src/routes/recoveryPassword.js"

const app = express();

app.use(express.json())

app.use(cookieParser())                                                   

app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/registerEmployees", registerEmployeeRoutes);
app.use("/api/registerClients", registerClientsRoutes);
app.use("/api/recoveryPassword", recoveryPasswordRoutes);


export default app;