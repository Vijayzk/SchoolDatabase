import mongoose from "mongoose";

//Defining schema

const teacherSchema = new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    age:{type:Number,required:true,min:25,max:60},
    salary:{type:mongoose.Decimal128,required:true,validate:(value) => value >= 5000.5}

})

//Model
const TeacherModel = mongoose.model("teacher",teacherSchema)

export default TeacherModel