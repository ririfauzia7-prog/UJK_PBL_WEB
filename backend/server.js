import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import siswaRoutes from "./routes/siswa.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/siswa", siswaRoutes);

app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));
