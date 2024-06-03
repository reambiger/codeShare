import Exercise from "../models/exerciseModel.js";
import AppError from "../../classes/AppError.js";

export const getExerciseById = async (req, res, next) => {
  try {
    const exercise = await Exercise.findById(req.params.exerciseId);
    if (!exercise) {
      throw new AppError(404,"could ot find exercise in getExerciseById ","could vot find exercise");
    }
    res
      .status(200)
      .json({ msg: "fetched exercises sucssfuly", exercise: exercise });
  } catch (err) {
    next(err);
  }
};
export const getAllExercises = async (req, res, next) => {
  try {
    const exercises = await Exercise.find({}).select("name difficultyLevel");
    res
      .status(200)
      .json({ msg: "fetched exercises sucssfuly", exercises: exercises });
  } catch (err) {
    next(err);
  }
};
