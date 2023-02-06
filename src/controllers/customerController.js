const customerModel=require("../models/customerModel")

let regex = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'

const createCustomer= async function(req,res){
  
    let data= req.body

    if(! /^[6-9]\d{9}$/.test(data.mobileNumber)){
      return res
          .status(400)
          .send({status: false , message: "enter a valid mobileNumber"})
    }

    if(!data.emailID.match(regex)) return res.status(400).send({status : false , message : "Please enter a valid email"})

    let customer= await customerModel.create(data)

    res.status(201).send({msg:customer})

}

   const getCustomer=async function(req,res){

    let data = await customerModel.find({$and:[{status:{$eq:"ACTIVE"}},{isDeleted:false}]})

    if(!data) return res.status(400).send({status : false , message : "NO any customer find"})
    
    res.status(200).send(data)
   }

   const deleteCustomer= async function(req,res){
     let Id = req.body.customerID
    let data = await customerModel.findOneAndUpdate({customerID:{$eq:Id}},{$set:{isDeleted:true}})
     
    if(!data) return res.status(400).send({msg:"cutomer not found" })

    res.status(200).send({msg:data})
   }

module.exports.createCustomer=createCustomer
module.exports.getCustomer= getCustomer
module.exports.deleteCustomer=deleteCustomer