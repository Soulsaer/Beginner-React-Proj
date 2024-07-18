import mongoose from "mongoose";

const db = async () => {
  try {
    await mongoose.connect(process.env.Mongo_url);
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  }
};

export default db;
