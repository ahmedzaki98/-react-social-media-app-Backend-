import express from "express";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import postRoute from "./routes/posts.js";
import commentRoute from "./routes/comments.js";
import likeRoute from "./routes/likes.js";
import cors from "cors";
// import multer from "multer";
import cookieParser from "cookie-parser";

const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);
app.use("/api/likes", likeRoute);

app.listen(8800, () => {
  console.log("API WORKING!");
});
