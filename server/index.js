import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();
 
app.use(cors());
app.use(express.json())
app.use('/', postRoutes)

const DB_URI = 'mongodb+srv://root:root@cluster0.pp3mm.mongodb.net/test';
const PORT = process.env.PORT || 5000;

const conectToDB = async () => {
    try {
        await mongoose.connect(DB_URI);
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
       
    } catch (err) {
        console.log(`Faild to connect`, err);
    }
}
conectToDB();