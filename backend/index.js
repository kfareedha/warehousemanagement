import express from "express";
const app = express();
import cors from "cors";
import warehouseRouter from "./routes/productroutes.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();
const port = process.env.PORT || 5000;
import connectDB from "./config/db.js";
connectDB();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", warehouseRouter);

app.listen(port, () => {
  console.log(`server is running on: ${port}`);
});
