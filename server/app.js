import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./root/controllers/middlewareController.js";
import exerciseRoute from "./root/routes/exerciseRoute.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://665d6deb82d8ef6a16759e52--neon-griffin-df7db4.netlify.app",
  ],
  credentials: true,
};
https://665d76c62a91437081a24bcd--neon-griffin-df7db4.netlify.app/
app.use(cors(corsOptions));
app.use("/exercises", exerciseRoute);

app.get("*", (req, res) => {
  res.status(200).send("Page not found.");
});
app.use(errorHandler);

export default app;
