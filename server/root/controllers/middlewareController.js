
import AppError from "../../classes/AppError.js";
export const errorHandler = async (err, req, res, next) => {
    if (err instanceof AppError) {
      res.status(err.httpStatus).json({ msg: err.clientError });
    } else {
      console.log("Unhandled error", err);
      res.status(500).json({ msg: "Internal Server Error" });
    }
  };
  