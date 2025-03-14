import dotenv from "dotenv";

dotenv.config();



export const config = {
    db:{
        URI: 
        process.env.DB_URI || "mongodb://localhost:27017/ZonaDigitalDB20230357"
    },
    Server:{
        port: process.env.PORT || 4000,
    },
}