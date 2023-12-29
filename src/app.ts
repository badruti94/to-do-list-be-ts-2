require('dotenv').config()
import express from 'express'
import mongoose from 'mongoose'
import routes from './routes'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/', routes);

(async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL as string)
        app.listen(4000, () => console.log('listen'))
    } catch (error) {
        console.log(error);
    }
})();