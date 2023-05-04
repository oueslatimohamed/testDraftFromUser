import mongoose from "mongoose";
const { Schema, model} = mongoose;
const tournageSchema =  new Schema(
    {
        nom :{
            type: String,
            required: true            
        },
        dateDeDebut :{
            type: Date,
            required: true            
        },
        dateDeFin :{
            type: Date,
            required: true            
        },
        SocieteDeProductionid :{
            type: Schema.Types.ObjectId,
            ref: 'SocieteDeProduction',
            required: false
        },
        Produits :[{
            type: Schema.Types.ObjectId,
            ref: 'Produit',
            required: true
            }],
        
    },
    {
        timestamps: true
    }
);



export default model('Tournage',tournageSchema);