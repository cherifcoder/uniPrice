const mongoose=require("mongoose")
const dotenv = require("dotenv");
dotenv.config();

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI)
        console.log("Connexion reussi a la base de donnee");
    }catch(error){
        console.error(`Erreur lors de la connexion a la base de donnee : ${error.message}`);
        process.exit(1)
    }
    
    
}

module.exports= connectDB