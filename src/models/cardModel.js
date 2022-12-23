const mongoose= require("mongoose")

const cardSchema= new mongoose.Schema({

    cardNumber :String,

    cardType : {
        type:String,
        enum:["regular","special"]
    },
    customerName: String,
    status:{
         type:String,
         enum: ["ACTIVE","INACTIVE"],
         Default: "ACTIVE"
        },
    vision: String,
    customerID : String

})

module.exports=mongoose.model("card",cardSchema)