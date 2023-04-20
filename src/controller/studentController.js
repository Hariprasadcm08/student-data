const studentModel = require("../models/studentModel")
const marksModel = require('../models/marksModel')

const createStudent = async function (req, res) {
    try {
        let data = req.body
        let { student_id, studentName, standard } = data
        studentName = studentName.toLowercase()
        standard = standard.toUppercase()
        let studentData = await studentModel.create(data)
        res.status(201).send({ status: true, data: studentData })
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

const studentMarksData = async function (req, res) {
    try {
        let data = req.body
        let marksData = await marksModel.create(data)
        return res.status(201).send({ status: true, data: marksData })
        
    } catch (error){
        return res.status(500).send({ status: false, message: error.message })
    }
}

const getStudentDetails = async function(req, res) {
    try {
      let filters = req.query;
      let { student_id, studentName, standard } = filters;
      let conditions = { isDeleted: false };
      let page = parseInt(filters.page || 1);
      let limit = parseInt(filters.limit || 10);
      let skip = (page - 1) * limit;
  
      if (Object.keys(filters).length == 0) {
        let getStudent = await studentModel.find(conditions).skip(skip).limit(limit);
        if (getStudent.length == 0)
          return res.status(404).send({ status: false, message: "No student found" });
        return res.status(200).send({ status: true, message: "Success", data: getStudent });
      }
  
      if (studentName) {
        conditions.studentName = studentName;
      }
  
      if (standard) {
        conditions.standard = standard;
      }
  
      if (student_id) {
        conditions.student_id = student_id;
      }
  
      let getStudent = await studentModel.find(conditions).skip(skip).limit(limit);
  
      if (getStudent.length == 0)
        return res.status(404).send({ status: false, message: "No student found" });
  
      return res.status(200).send({ status: true, message: "Success", data: getStudent });
    } catch (error) {
      return res.status(500).send({ status: false, message: error.message });
    }
  };
  



const getStudentResults = async function (req, res) {
    try {
        const studentId=req.query
        const finalResult= {}

        if(!studentId){
            return res.status(400).send({status:false,message:"provide studentId to get the result"})
        }

        let studentCheck=await studentModel.find({studentId})
        if(!studentCheck){
            return res.status(404).send({status:false,message:"no student present with this id"})
        }
        let marksCheck=await marksModel.find({studentId})
        if(!marksCheck){
            return res.status(404).send({status:false,message:"no data available with given student id"})
        }

        
          finalResult.studentName=studentCheck.studentName
          finalResult.class=studentCheck.standard
          let totalMarks=((marksCheck.Kannada+marksCheck.English+marksCheck.Hindi+marksCheck.Science+marksCheck.Maths+marksCheck.SocialScience)/6) *100
        if (totalMarks < 35) {
            return res.send(`Student has failed in the test happened on: ${marksCheck.test_date}`);
          }
          finalResult.percentage="fail"
          if (totalMarks >=35  && totalMarks<60) {
            return res.send(`Student got second class  in the test happened on: ${marksCheck.test_date}`);
          }
          finalResult.percentage="second class" 

          if (totalMarks >=60  && totalMarks<85) {
            return res.send(`Student got first class  in the test happened on: ${marksCheck.test_date}`);
          }
          finalResult.percentage="first class" 

          if (totalMarks >=85){
            return res.send(`Student got distinction  in the test happened on: ${marksCheck.test_date}`);
          }
          finalResult.percentage="distinction" 

          res.status(200).send({finalResult})
      }catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}






module.exports = { createStudent, getStudentDetails, getStudentResults, studentMarksData }