import express from 'express'
import connectDb from './db.js';
import expenseRoute from "./routes/expenseRoutes.js"
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors())
connectDb();
app.use("/api/expense", expenseRoute)
const PORT = 7000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})
