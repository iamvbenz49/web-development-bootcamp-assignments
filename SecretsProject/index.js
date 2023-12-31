import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
let isAuthorised = false;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req,res,next) => {
    const password = req.body["password"];
    if(password==="Batman"){
        isAuthorised = true;
    }
    next();
});

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/check",(req,res) => {
    if(isAuthorised){
        res.sendFile(__dirname + "/public/secret.html");
    }else{
        res.sendFile(__dirname + "/public/index.html");
    }
})

app.listen(3000);