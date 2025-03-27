import employeesModel from "../models/employee.js"
import bcryptjs from "bcryptjs"; //Encriptar
import jsonwebtoken from "jsonwebtoken"; //Token
import { config } from "../config.js"


const registerEmployeeController = {};


//insert 

registerEmployeeController.register = async(req, res)=> {
    const {
        name,
        lastName,
        birthday,
        email,
        address,
        password,
        hireDate,
        telephone,
        dui,
        isVerified,
        isssNumber
    } = req.body
 
    try {
        // 1- Verificamos si el empleado ya existe
        const existEmployee = await employeesModel.findOne({email})
        if(existEmployee) {
            return res.json({message: "Employee already exist"})
        }
 
        // 2- Encriptar contraseña
        const passwordHash = await bcryptjs.hash(password, 10)
 
        // 3- Guardar al usuario en la base de datos
        const newEmployee = new employeesModel({
            name,
            lastName,
            birthday,
            email,
            address,
            password,
            hireDate,
            telephone,
            dui,
            isVerified,
            isssNumber
        })
 
        await newEmployee.save();

        jsonwebtoken.sign(

            {id: newEmployee._id},
            config.JWT.secret,
            {expiresIn: config.JWT.expiresIn},
        (error, token) => {
            if(error) console.log("error", error);

            res.cookie("authToken", token)
            res.json({message: "empleado guardado"})
            
        }
        )
       
    } catch (error) {
     console.log("error" + error)
     res.json({message: "Errro saving employee"})  
    }
}

export default registerEmployeeController
