import express from "express";
import {
  getAllExercises,
  getExerciseById,
} from "../controllers/exerciseController.js";

const router = express.Router();

router.get("/getAll", getAllExercises);
router.get("/:exerciseId", getExerciseById);

export default router;
