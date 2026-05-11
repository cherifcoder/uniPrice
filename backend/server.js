const dotenv = require("dotenv");
dotenv.config();
const app=require("./app")
const connectDB=require("./src/configs/db")


connectDB()

const port=process.env.PORT||5000
app.listen(port,()=>{
    console.log(`Application en ecoute sur le port http://localhost:${port}` );
    
})