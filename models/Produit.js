import mongoose from "mongoose";
const { Schema, model} = mongoose;
const produitSchema =  new Schema(
    {
        localisationDeLaScene :{
            type: String,
            required: true            
        },
        codePostal :{
            type: Number,
            required: true            
        },
        longitude :{
            type: Number,
            required: true            
        },
        latitude :{
            type: Number,
            required: true            
        },
        Tournageid :{
            type: Schema.Types.ObjectId,
            ref: 'Tournage',
            required: false
        },
        Films :[{
            type: Schema.Types.ObjectId,
            ref: 'Film',
            required: true
            }],
        
    },
    {
        timestamps: true
    }
);



export default model('Produit',produitSchema);