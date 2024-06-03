import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  difficultyLevel: { type: Number, required: true },
  explanation: { type: String, required: true },
  testCases: [{
    funcInputs: {type: String},
    result: { type: mongoose.Schema.Types.Mixed } // Corrected here
  }],
  codeBlock: { type: String }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);
export default Exercise;
