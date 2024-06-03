import axios from "axios";

export const getAllExercises = async () => {
  try {
    const response = await axios.get(`http://localhost:8000/exercises/getAll`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const getExerciseById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8000/exercises/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
