import bcryptjs from "bcryptjs"; //Encriptar
import jsonwebtoken from "jsonwebtoken"; //Token
import nodemailer from "nodemailer";
import crypto from "crypto";
import clientsModel from "../models/clients.js";

import {config} from "../config.js";
import { error, info } from "console";

const registerClientController = {};

 registerClientController.registerClients = async (req, res) => {

    const {

        name,
        lastName,
        birthday,
        email,
        password,
        telephone,
        dui,
        isVerified
    } = req.body;

    try {
        const existingClient = await clientsModel.findOne({email})

        if(existingClient){
            return res.json({message: "Client alredy exists"})
        }

        const passwordHash = await bcryptjs.hash(password, 10)

        const newClient = new clientsModel(
            {
                name,
                lastName,
                birthday,
                email,
                password,
                telephone,
                dui: dui || null,
                isVerified: isVerified || false
            }
        )

        await newClient.save()

        const verificationCode = crypto.randomBytes(3).toString("hex")
        const expiresAt = Date.now() + 2 * 60 * 60 * 1000 ;

        const tokenCode = jsonwebtoken.sign({

            email, verificationCode, expiresAt}
        ,

        config.JWT.secret,
        {expiresIn: config.JWT.expiresIn},

        (error, token) => {

            if(error) console.log("error"+ error);
            res.cookie("verificationToken", token,{ maxAge: 2 * 60 * 60 * 1000})
        }
    )

    const transporter = nodemailer.createTransport(
        {
            service: "gmail",
            auth:{
                user: config.USER.user,
                pass: config.USER.pass
            }
        }
    )

    const mailOptions = {
        from: config.USER.user,
        to: email,
        subject: "Email Verification",
        text: `Para verificar que eres dueño de la cuenta, utilia este codigo ${verificationCode}\n  Este codigo expira en dos horas\n`
    }

    transporter.sendMail(mailOptions, (error,info) =>{
        if(error) console.log("error"+ error)
            res.json({message: "Client registered, Please verify your mail"})
    })

    } catch (error) {
        res.json({message: "error"+ error })
    }
}

registerClientController.veryfyCodeEmail = async (req, res) => {
    const {verificationCode} = req.body;

    const token = req.cookies.verificationCode;

    if(!token){
        return res.json({message: "Primero registre su cuenta"})
    }

    try {

        const decoded = jsonwebtoken.verify(token, config.JWT.secret)
        const {email,verificationCode: storedCode} = decoded

        if (verificationCode !== storedCode) {
            return res.json({message: "Invalid verification code"})
        }

        const client = await clientsModel.findOne({email})

        if (!client) {
            return res.json({nessage: "Cliente not found"})
        }

        client.isVerified = true,
        await client.save();

        res.clearCookie("verificationToken")
         
        res.json({message: "Email verified succesfully"})
    } catch (error) {
        res.json({message: "error"+error})
    }
    console.log(req.body)

}


export default registerClientController;