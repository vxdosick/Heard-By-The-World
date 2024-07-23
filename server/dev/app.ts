import express from 'express'
import { connect } from 'mongoose'
import { MONGO, PORT } from './config'

const app = express()

app.use(express.urlencoded({extended: true}))

connect(MONGO).then(()=> {
    console.log("MONGO connected");
}).catch((err)=> {
    console.log('Failed to connect to MongoDB', err);
})




app.get('/', (req, res)=> {
    res.send("hello")
})







app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
    
})