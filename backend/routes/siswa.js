import { Router } from "express";
import db from "../db.js";

const router = Router();

// READ semua
router.get("/", async (req, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM siswa ORDER BY id_siswa DESC");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ satu
router.get("/:id", async (req, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM siswa WHERE id_siswa = $1", [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ message: "Data tidak ditemukan" });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE
router.post("/", async (req, res) => {
  const { nama, jurusan, tanggal_lahir, alamat } = req.body;
  if (!nama || !jurusan || !tanggal_lahir || !alamat)
    return res.status(400).json({ message: "Semua field wajib diisi" });
  try {
    const { rows } = await db.query(
      "INSERT INTO siswa (nama, jurusan, tanggal_lahir, alamat) VALUES ($1, $2, $3, $4) RETURNING id_siswa",
      [nama, jurusan, tanggal_lahir, alamat]
    );
    res.status(201).json({ message: "Data berhasil ditambahkan", id_siswa: rows[0].id_siswa });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  const { nama, jurusan, tanggal_lahir, alamat } = req.body;
  if (!nama || !jurusan || !tanggal_lahir || !alamat)
    return res.status(400).json({ message: "Semua field wajib diisi" });
  try {
    const result = await db.query(
      "UPDATE siswa SET nama=$1, jurusan=$2, tanggal_lahir=$3, alamat=$4 WHERE id_siswa=$5",
      [nama, jurusan, tanggal_lahir, alamat, req.params.id]
    );
    if (result.rowCount === 0) return res.status(404).json({ message: "Data tidak ditemukan" });
    res.json({ message: "Data berhasil diperbarui" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const result = await db.query("DELETE FROM siswa WHERE id_siswa = $1", [req.params.id]);
    if (result.rowCount === 0) return res.status(404).json({ message: "Data tidak ditemukan" });
    res.json({ message: "Data berhasil dihapus" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;