import mongoose from "mongoose";
import { DB_Name } from "../src/constraints.js";
const connectDB = async () =>
{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MongoDB_URL}/${DB_Name}`)
        console.log(`\n MongoDb connected !! DB Host : ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log("MONGODB connection error",error);
        process.exit(1)
        //read more about this on nodejs
        

    }
}
export default connectDB