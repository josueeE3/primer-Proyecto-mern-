import jsonwebtoken from "jsonwebtoken"; //Token

import {config} from "../config.js";

export const validateAuthToken = (allowedUserTypes = []) => {

    return(req,res,next) => {
        try {
            const {authToken} =  req.cookies;


            if (!authToken) {
                res.json({message:"authToken not found, you have to log in "})
            }

            const decoded = jsonwebtoken.verify(authToken, config.JWT.secret)

            if (!allowedUserTypes.includes(decoded.userType)) {
                return res.json({message: "acces neied"})
            }

        } catch (error) {
            return res.json({message: "error, " + error})
        }
    }

}