import mongoose from "mongoose"
const { Schema } = mongoose;
const expenseSchema = new Schema({
   title: {
      type: String,
   },
   amount: {
      type: Number,
   },
   category: {
      type: String,
   },
},
{timestamps:true})
export default mongoose.model("expense", expenseSchema);