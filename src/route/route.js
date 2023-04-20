const express=require('express')
const route = express.Router()
const  {createStudent,getStudentDetails,getStudentResults}=require("../controller/studentController")


route.get("/Student",getStudentDetails)
route.get("/fetch_results",getStudentResults)


route.post("/createStudent",createStudent)
route.post("/StudentMarks",createStudent)




module.exports=route