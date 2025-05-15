import providerModel from "../models/providers.js";

import { config } from "../config.js";

import {v2 as cloudinary} from "cloudinary";


cloudinary.config({
    cloud_name: config.CLOUDINARY.cloudinary_name,
    api_key: config.CLOUDINARY.cloudinary_api_key,
    api_secret: config.CLOUDINARY.cloudinary_api_secret

})

const providersController = {};

 providersController.getAllProviders = async(req,res) => {

    const providers = await providerModel.find();
    res.json(providers);
}

providersController.insertProviders = async (req,res) =>{
    const {name, telephone} = req.body;
    let imageURL = "";

    if(req.file){
        const result = await cloudinary.uploader.upload(
            req.file.path,{
                folder: "public",
                allowed_formats: ["png", "jpg", "jpeg"]
            }
        )

        imageURL = result.secure_url
    }

    const newProvider = new providerModel({name, telephone, image: imageURL})
    newProvider.save();

    res.json({message: "Provider saved "})
}

export default providersController;

