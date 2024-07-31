import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
    console.log(`\n connectionInstance = ${connectionInstance}`);
  } catch (error) {
    console.log(`\n Error connecting to MongoDB: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
