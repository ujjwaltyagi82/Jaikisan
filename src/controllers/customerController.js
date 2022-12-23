const customerModel=require("../models/customerModel")

const createCustomer= async function(req,res){
  
    let data= req.body

    if(data.mobileNumber.length!=10) 
    return res.send({msg:"please enter valid mobile number"})

    let customer= await customerModel.create(data)

    res.send({msg:customer})

}

   const getCustomer=async function(req,res){

    let data = await customerModel.find({$and:[{status:{$eq:"ACTIVE"}},{isDeleted:false}]})
    
    res.send(data)
   }

   const deleteCustomer= async function(req,res){
     let Id = req.body.customerID
    let data = await customerModel.findOneAndUpdate({customerID:{$eq:Id}},{$set:{isDeleted:true}})
     
    if(!data) return res.send({msg:"cutomer not found" })

    res.send({msg:data})
   }

module.exports.createCustomer=createCustomer
module.exports.getCustomer= getCustomer
module.exports.deleteCustomer=deleteCustomer