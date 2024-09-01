import TeacherModel from "../models/Teacher.js"

class teacherController{
     
     //Showing Document
     static getAllDoc = async (req,res) => {
      try{
            const result = await TeacherModel.find()
            //console.log(result)
            res.render('teacher',{data:result})
          }
          catch(error){
              console.log(error)
          }
     }

     //Creating Document
     static createDoc = async(req,res) => {
        
          //console.log("Create Doc")
          //console.log(req.body)
          try{
               const {name,age,salary} = req.body
               const doc = new TeacherModel({
                    name:name,
                    age:age,
                    salary:salary
               })

               const result = await doc.save()
               res.redirect('/teacher')
          }
          catch(error){
               console.log(error)
          }
     }

     //Show Editing document 
     static editDoc = async(req,res) => {
          //console.log(req.params.id)
          try{
             const result = await TeacherModel.findById(req.params.id)
             res.render('edit1',{data:result})
          }
          catch(error){
               console.log(error)
          }
     }


     //Update Document 
     static updateDocById = async(req,res) => {
          //console.log(req.params.id)
          //console.log(req.body)
          try{
               const result = await TeacherModel.findByIdAndUpdate(req.params.id,req.body)
               res.redirect('/teacher')
          }
          catch(error){
               console.log(error)
          }
     }

     //Delete Document
     static deleteDocById = async(req,res) => {
          try{
              const result = await TeacherModel.findByIdAndDelete(req.params.id)
              res.redirect('/teacher')
          }    
          catch(error){
               console.log(error)
          }      
     }

}

export default teacherController