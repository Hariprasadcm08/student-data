const  express=require('express')
const mongoose = require('mongoose')
const route=require('./route/route')
const app=express()

app.use(express.json())

mongoose
  .connect(
    "mongodb+srv://hariprasadcm:harIprasad@cluster0.ahvii9p.mongodb.net/Student-data",
    {UseNewUrlParser: true}
  )
  .then(() => console.log("Mongo-Db is connected"))
  .catch((err) => console.log(err.message))

app.use("/", route);

app.listen(3000, function (){
  console.log("listening at " + (process.env.PORT || 3000))})