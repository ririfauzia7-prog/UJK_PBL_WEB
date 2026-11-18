import { Router } from "express";
import {
  getAllSiswa,
  getSiswaByKode,
  createSiswa,
  updateSiswa,
  deleteSiswa,
} from "../controllers/siswa.controller.js";
import { validateSiswa } from "../middleware/validateSiswa.js";

const router = Router();

router.get("/", getAllSiswa);
router.get("/:id", getSiswaByKode);
router.post("/", validateSiswa, createSiswa);
router.put("/:id", validateSiswa, updateSiswa);
router.delete("/:id", deleteSiswa);

export default router;