import Tournage from "../models/Tournage.js";
import SocieteDeProduction from "../models/SocieteDeProduction.js";
import Produit from "../models/Produit.js";
import { json } from "express";

export function add (req, res) {
    Tournage.create(req.body)
    .then(async newTournage => { 
    
    await SocieteDeProduction.findByIdAndUpdate({
            _id: newTournage.SocieteDeProductionid
        },
        {
            $push: {
                Tournages: newTournage._id,
            },
        }
    )
    await newTournage.save();
        res.status(200).json(newTournage);
    })
    .catch((err) => {
        res.status(500).json({error: err})
    })
}

export function getAll (req,res) {
    Tournage.find()
    .then((Tournages) => {
        res.status(200).json({ Tournage : Tournages});
    })
    .catch((err) => {
        res.status(500).json({error : err});
    })
}
export function getById (req,res) {    
    Tournage.findById(req.params.id)
    .then((Tournages) => {
        res.status(200).json({ Tournage : Tournages});
    })
    .catch((err) => {
        res.status(500).json({error : err});
    })
}

export function update (req,res) {
    Tournage.findOneAndUpdate({_id : req.params.id},req.body)
    .then((r) => {
        res.status(200).json({ message: "Tournage is updated !"});
    })
    .catch((err) => {
        res.status(500).json({ error: err});
    });
}

export async function remove (req,res) {
   const o = await Tournage.findOneAndDelete({_id : req.params.id})
   if(!o)
   {
    return res.status(404).json({ message: "Not found"});
    }
    await o.deleteOne()
    res.status(200).json({ message: "Tournage is deleted !"});
}

export function getBynom (req,res) {
    Tournage.find({ nom : req.params.nom })
    .then((r) => {
        res.status(200).json({ result: r});
    })
    .catch((err) => {
        res.status(500).json({ error: err});
    });
}   
export function getBydateDeDebut (req,res) {
    Tournage.find({ dateDeDebut : req.params.dateDeDebut })
    .then((r) => {
        res.status(200).json({ result: r});
    })
    .catch((err) => {
        res.status(500).json({ error: err});
    });
}   
export function getBydateDeFin (req,res) {
    Tournage.find({ dateDeFin : req.params.dateDeFin })
    .then((r) => {
        res.status(200).json({ result: r});
    })
    .catch((err) => {
        res.status(500).json({ error: err});
    });
}   
