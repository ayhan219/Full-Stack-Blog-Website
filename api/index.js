const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const auth = require("./routes/Auth")
const post = require("./routes/Post")
const cors = require("cors")
const cookieParser = require("cookie-parser")
dotenv.config();


app.use('/uploads', express.static('uploads'));

app.use(cors({
    origin: 'http://localhost:5173', // İsteklerin yapıldığı frontend domaini
    credentials: true // Cookie'lerin veya diğer kimlik doğrulama bilgilerin paylaşılmasına izin verir
  }));
app.use(express.json())
app.use(cookieParser());

app.use("/api/auth",auth)
app.use("/api/post",post)


const connectDB = async()=>{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to DB");
    
}

app.listen(5000,async()=>{
    await connectDB();
    console.log("server listening on port 5000");
})

