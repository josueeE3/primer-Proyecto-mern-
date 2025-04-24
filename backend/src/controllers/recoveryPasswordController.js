import jsonwebtoken from "jsonwebtoken";
import bcryptjs from "bcryptjs";

import clients from "../models/clients.js";
import employee from "../models/employee.js";


import { sendEmail, HTMLRecoveryEmail } from "../utils/mailPasswordRecovery.js";
import { config } from "../config.js";

const passwordRecoveryController = {};

passwordRecoveryController.requestCode = async (req, res) => {

    const {email} = req.body;

    try {
    
        let userFound;
        let userType;

        userFound = await clients.findOne({email})

        if(userFound){
            userType = "client";
        } else {
            userFound = await employee.findOne({email})

            if(userFound){
                userType = "employee";
            }
        }

        if(!userFound){
            res.json({message: "User not found"})
        }

        const code = Math.floor(10000 + Math.random()*90000).toString

        const token = jsonwebtoken.sign(
            {email, code, userType, verified: false},

            config.JWT.secret,

            {expiresIn: "20"}
        )

        res.cookie("tokenRecoveryCode", token, {maxAge: 20*60*1000})
 
        await sendEmail(
 
            email,
            "You verification code",
            "Hello! Remenber dont forget your pass",
            HTMLRecoveryEmail(code)
 
 
        )
    
        
    } catch (error) {

        console.log("error" + error)
        
    }
}

export default passwordRecoveryController