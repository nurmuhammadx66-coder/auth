import { log } from "console";
import express from "express";

let app = express()

app.use(express.json())
app.use("/api/products", productRoute);

mongoose 
.connect(
    "mongodb://NN_7271:<db_password>@ac-6lm2iio-shard-00-00.jokph45.mongodb.net:27017,ac-6lm2iio-shard-00-01.jokph45.mongodb.net:27017,ac-6lm2iio-shard-00-02.jokph45.mongodb.net:27017/?ssl=true&replicaSet=atlas-10o6ax-shard-0&authSource=admin&appName=Cluster0SS"
)


.then(()=>{
    console.log("MongoDB connect")
})
.catch((err) => console.log(err.message))

app.listen(3000,()=>{
    console.log('Server yaratildi ')
})