import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        mongoose.connection.on ('connected', ()=> console.log()
    );
    await mongoose.connect(`${process.env.MONGODB_URI}/freshkart`)
    } catch (error) {
        console.error(error.message);
    }
}

export default connectDB;