const mongoose=require('mongoose')


const studentSchema = new mongoose.Schema({
    student_id:{ 
        type: Number, 
        required: true,
         unique:true,
         trim:true
 },
    studentName:{
        type: String, 
        required: true ,
        trim:true
    },
    standard:{
        type: String, 
        enum:["I", "II","III","IV", "V","VI", "VII","VIII","IX","X"],
        required:true 
    }
  },{timestamp:true});

  module.exports=mongoose.model("studentDetails",studentSchema)
  