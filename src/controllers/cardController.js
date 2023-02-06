const cardModels= require("../models/cardModel")
const customerModel = require('../models/customerModel')

const createCard = async function(req,res){
    
    let data= req.body

    let Number = await cardModels.find().count()
    data.cardNumber="C00"+Number
   
    let datacreate= await cardModels.create(data)

    res.status(201).send({msg:datacreate})

}

const getCard = async function(req,res){

 let data = await cardModels.find()

 res.status(200).send({msg:data})


}

module.exports.createCard=createCard

module.exports.getCard= getCard