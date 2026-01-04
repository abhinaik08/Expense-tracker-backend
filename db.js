import mongoose from "mongoose"
// const MONGO_URI = "mongodb://localhost:27017/crud";
const MONGO_URI = "mongodb+srv://abhinaik:abhinaik@cluster0.1cwnstj.mongodb.net/crud"
const connectDb = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDb connected")
    } catch (error) {
        console.log(error);
    }
};
export default connectDb 