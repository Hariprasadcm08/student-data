const mongoose=require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId


const marksSchema = new mongoose.Schema({
  student: {
    type: ObjectId,
    ref: 'Student',
    required: true
  },
  testDate: {
    type: Date,
    required: true,
    unique: true
  },
  kannada: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
    max: 100
  },
  english: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
    max: 100
  },
  hindi: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
    max: 100
  },
  science: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
    max: 100
  },
  maths: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
    max: 100
  },
  socialScience: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
    max: 100
  },
  totalMarks: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
    max: 600
  },
  percentage:{
    type: Number,
    required: true,
    default: 0,
    min: 0,
    max: 100
  }
 
}, { timestamps: true });

// Add a compound index to ensure uniqueness of student and test date
marksSchema.index({ student: 1, testDate: 1 }, { unique: true });


  module.exports=mongoose.model("studentMarks",marksSchema)
  