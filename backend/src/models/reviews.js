/*
 Campos:
 Comment    
 Rating 
 idClient

*/


import {Schema, model} from "mongoose";

const reviewsSchema = new Schema (

    {
        Comment: {
       
           type: String, 
           require: true
        },

        Rating:{
       
            type: Number,
            require: true,
            max: 5 
         },

         idClient:{
            type: Schema.Types.ObjectId,
            ref: "clients",
            require: true
         }
       }, {

        timestamps: true,
        strict: false 
       }
);


export default model("reviews", reviewsSchema);

