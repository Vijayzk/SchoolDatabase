import express from 'express'
import connectDB from './db/connectdb.js'
import home from './routes/home.js'
import web from './routes/web.js'
import web1 from './routes/web1.js'
import {join} from 'path'
import dotenv from 'dotenv'

dotenv.config()


const app = express()
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL


//Database Connection
connectDB(DATABASE_URL)

app.use(express.urlencoded({extended:false}))

//Static Files
app.use(express.static(join(process.cwd(),"public")))

//Load Routes
app.use('/',home)
app.use("/student",web)
app.use('/teacher',web1)

//Set TEmplate Engine
app.set("view engine" , "ejs")

app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`)
})