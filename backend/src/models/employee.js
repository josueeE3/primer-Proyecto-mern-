/*
 Campos:
 name
 lastname 
 rol
 birthday
 email 
 password
 telephone
 dui 
*/


import {Schema, model} from "mongoose";

const employeesSchema = new Schema ( 

    {

        name: {
            type: String,
            require: true
          },
        lastname: {
            type: String,
            require: true
        },
        birthday:{
            type: Date,
            require: true
        },
        email:{
           type: String,
           require: true,
           unique: true
        },
        address:{
           type: String,
           require:true
        },
        hiredate:{
            type: Date,
            require: true
        },
        password:{
            type:String,
            require: true,
            min:8
        },
        telephone:{
            type: Number,
            require: true,
            min: 8
        },
        dui:{
         type: String,
         require: true,
         min: 10,
         unique: true
        },
        isssNumber:{
            type: Number,
            require: true
        },
        isVerified: {
         type: Boolean,
         require: true
        }
        ,} , 
    
        {
            timestamps: true,
            strict: false 
         }

);

export default model("Employee", employeesSchema);
