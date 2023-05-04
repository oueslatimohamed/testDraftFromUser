import mongoose from "mongoose";
const { Schema, model} = mongoose;
const societedeproductionSchema =  new Schema(
    {
        nom :{
            type: String,
            required: true            
        },
        Tournages :[{
            type: Schema.Types.ObjectId,
            ref: 'Tournage',
            required: true
            }],
        
    },
    {
        timestamps: true
    }
);



export default model('SocieteDeProduction',societedeproductionSchema);