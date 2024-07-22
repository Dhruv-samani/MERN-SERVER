import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.js";
import tourRouter from "./routes/tour.js";
import fileUpload from "express-fileupload";
import profileRouter from "./routes/profile.js";
import uploadRouter from "./routes/upload.js";
import dotenv from "dotenv";

dotenv.config();

process.env.BROWSER = "none";

const app = express();

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(fileUpload());
app.use(express.static("public"));

app.use("/users", userRouter); //http://localhost:5000/users/signup
app.use("/tour", tourRouter);
app.use("/profiles", profileRouter);
app.use("/uploads", uploadRouter);

app.get("/", (req, res) => {
  res.send("Welcome to tour API");
});

const port = process.env.PORT || 4000;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(port, () => console.log(`Server Running on ${port}`));
  })
  .catch((err) => {
    console.log(`${err} did not connect`);
  });
