const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('./db/connect')
const port = 5000;

//require dotenv
require('dotenv').config()

//require router
const router = require('./routes/crud')

//middleware
app.use(express.json())
app.use(cors({ origin: 'http://localhost:3000'}))

//routes
app.use('/api/v1/crud', router)

//connection
const start = async () =>{
   try{ 
        await connectDB(process.env.MONGO_CONNECT)
        app.listen(port, () => {
            console.log(`Server is running on port ${port}, better go catch it...`)
        })
    }catch(error){
    console.log(error)
}
}
start()


