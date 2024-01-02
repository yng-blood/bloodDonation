//user.js
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema(
    {
        Email:{
            type:String,
            required:true   
        }    
        ,
        UserName:{
            type:String,
            required:true   
        } ,
       Ph_No:{
        type:String,
            required:true  
       },
       bgroup:{type:String,
        required:true  },

        Name:{type:String,
            required:true  },

        Address:{type:String,
                required:true  },
        UserName:{type:String,
                    required:true  }
        ,
        Password:{
            type:String,
            required:true   
        },
        // creating second apearance 
        NSchema:[{
            type:mongoose.Types.ObjectId,
            ref:"NSchema"
        }]

    }
)

module.exports= mongoose.model("USchema",UserSchema)