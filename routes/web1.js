import express from "express";
import teacherController from "../controllers/teacherController.js";

const router = express.Router()

router.get('/',teacherController.getAllDoc)
router.post('/',teacherController.createDoc)
router.get('/edit1/:id',teacherController.editDoc)
router.post('/update/:id',teacherController.updateDocById)
router.post('/delete/:id',teacherController.deleteDocById)

export default router