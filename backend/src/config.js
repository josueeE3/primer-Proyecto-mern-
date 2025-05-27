import dotenv from "dotenv";

dotenv.config();



export const config = {
    db:{
        URI: 
        process.env.DB_URI || "mongodb+srv://Josue_rm:Josuerm@cluster0.x5zip.mongodb.net/ZonaDigital?retryWrites=true&w=majority&appName=Cluster0"
    },
    Server:{
        port: process.env.PORT || 4000,
    },
    JWT: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES,
    },
    ADMIN:{
        emailAdmin: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD
    },
    USER:{
        user: process.env.USER,
        pass: process.env.PASSWORD
    },
    CLOUDINARY:{
        cloudinary_name: process.env.CLOUDINARY_NAME,
        cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
        cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET
    }
}

