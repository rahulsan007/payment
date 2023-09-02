import express from "express";
import cors from "cors";
const app = express();
app.use(cors());

app.get("/api", (req, res) => {
  res.status(201).json("not Paid");
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
