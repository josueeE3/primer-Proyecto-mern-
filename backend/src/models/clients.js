/*
 Campos:
 name
 lastname 
 birthday
 email 
 password
 telephone
 dui 
*/


import {Schema, model} from "mongoose";

const productsSchema = new Schema ( 

    {

        name: {
            type: String,
            required: true 
        },
        lastName: {
            type: String,
            required: true
        },
        birthday: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true 
        },
        password: {
            type: String,
            required: true,
            minlength: 8 
        },
        telephone: {
            type: String,
            required: true
        },
        dui: {
            type: String,
            required: false 
        }
        ,} , 
    
        {
            timestamps: true,
            strict: false 
         }

);

export default model("clients", productsSchema);
