const cardModels= require("../models/cardModel")

const createCard = async function(req,res){
 
    let data= req.body

    let Number = await cardModels.find().count()
    data.cardNumber="C00"+Number

    let datacreate= await cardModels.create(data)

    res.send({msg:datacreate})


}

const getCard = async function(req,res){

 let data = await cardModels.find()

 res.send({msg:data})


}

module.exports.createCard=createCard

module.exports.getCard= getCard