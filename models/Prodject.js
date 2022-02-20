const mongoose = require("mongoose")

const ProdjectSchema = new mongoose.Schema(
  {
    UserId:{type:String,required:true},
    FirstName:{type:String,required:true},
    LastName:{type:String,required:true},

    DateOfBirth:{type:String,required:true},
    PlaceOfBirth:{type:String,required:true},
    MotherName:{type:String,required:true},
    PhoneNumber:{type:String,required:true},
    IdCardNumber:{type:String,required:true},
    Region:{type:String,required:true},
    Residence:{type:String,required:true},
    IdCardFront:{type:String,required:true},
    IdCardBack:{type:String,required:true},
    Passport1:{type:String,required:true},
  fileName:{
    type:String,
    required:true
  },
  filePath:{
    type:String,
    required:true
  },
  fileType:{
    type:String,
    required:true
  },
  fileSize:{
    type:String,
    required:true
  }
},
{timestamps:true}
);

module.exports = mongoose.model("Prodject",ProdjectSchema)
