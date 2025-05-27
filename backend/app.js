import express from "express";
import productRoutes from "./src/routes/products.js";
import clientRoutes from "./src/routes/clients.js";
import reviewRoutes from "./src/routes/reviews.js";
import employeeRoutes from "./src/routes/employee.js";
import registerEmployeeRoutes from "./src/routes/RegisterEmployee.js";
import registerClientsRoutes from "./src/routes/registerClients.js";
import cookieParser from "cookie-parser";
import recoveryPasswordRoutes from "./src/routes/recoveryPassword.js"
import providersRoute from "./src/routes/providers.js"
import loginRoute from "./src/routes/login.js"

import { validateAuthToken } from "./src/middlewares/validateAuthToken.js";
import cors from "cors"

const app = express();

app.use(
    cors(
        {
            origin: "http://localhost:5173"
        }
    )
)

app.use(express.json())

app.use(cookieParser())                                                   

app.use(express.json());
app.use("/api/products", validateAuthToken(["admin"]), productRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/registerEmployees",registerEmployeeRoutes);
app.use("/api/registerClients", registerClientsRoutes);
app.use("/api/recoveryPassword", recoveryPasswordRoutes);
app.use("/api/providers", providersRoute);

app.use("/api/login", loginRoute);



export default app;