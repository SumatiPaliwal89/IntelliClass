import express from "express";
import dotenv from "dotenv";
const app = express();

dotenv.config();

app.get("/", (req,res) =>{
  res.status(200).send("Hello");
})

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});