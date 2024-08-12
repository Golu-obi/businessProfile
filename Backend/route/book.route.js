import express from "express";
import { getBook } from '../controller/book.controller.js';

const router = express.Router();

// Define the route for getting books
router.get("/", getBook);

export default router;
