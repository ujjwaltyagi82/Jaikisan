const { default: mongoose } = require("mongoose");

const customerSchema= new mongoose.Schema({

    firstName:{
        type :String,
        required:true,
        trim:true

    },
    lastName: String,

    mobileNumber:{
        type :String,
        required:true,
        trim:true

    },
     DOB:{
        type:Date,
        default:Date.now()
    } ,

    emailID: {
        type :String,
        required:true,
        trim:true

    },
    address: String,

    status:{
        type:String,
        enum:["ACTIVE","INACTIVE"]
    },
    customerID :String,
    isDeleted:{
        type:Boolean,
        default:false
    },
    


},{timestamps:true})


module.exports=mongoose.model("customer",customerSchema)