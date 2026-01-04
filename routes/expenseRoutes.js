import express from "express";
import { addExpense, deleteExpense, getExpense, getSingleExpense, updateExpense } from "../controllers/expenseControllers.js";
const router = express.Router();
router.post("/insert", addExpense)
router.get("/view-all", getExpense)
router.get("/singleview/:id", getSingleExpense)
router.put("/edit/:id", updateExpense)
router.delete("/delete/:id", deleteExpense)
export default router;