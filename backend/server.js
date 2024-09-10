import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //allows use us to accept json data to body

app.use("/api/products", productRoutes);

//Listen to a port and call back function once it's ready
app.listen(PORT, () => {
  connectDB();
  console.log("server started at http://localhost:" + PORT);
});

