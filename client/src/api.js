import axios from "axios";

export const getAllExercises = async () => {
  try {
    const response = await axios.get(`https://codeshareserver-5.onrender.com/exercises/getAll`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const getExerciseById = async (id) => {
  console.log("🚀 ~ getExerciseById ~ id:", id)
  try {
    const response = await axios.get(`https://codeshareserver-5.onrender.com/exercises/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
