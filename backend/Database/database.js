import mongoose from 'mongoose';
import dotenv from 'dotenv';

export const connectionDb = async() => {
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connection: ${connection.connection.host}`)
    }
    catch(error){
        console.log('Error connection to MongoDB')
        process.exit(1)  // Exit the process with a failure code
    }
}