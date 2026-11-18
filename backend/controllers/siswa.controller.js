import db from "../db.js";

const KODE_DUPLIKAT = "23505";

const handleError = (res, err) => {
  if (err.code === KODE_DUPLIKAT) {
    return res.status(409).json({ message: "Kode siswa sudah digunakan" });
  }
  res.status(500).json({ message: err.message });
};

const tidakDitemukan = (res) => res.status(404).json({ message: "Data tidak ditemukan" });

export async function getAllSiswa(req, res) {
  try {
    const { rows } = await db.query("SELECT * FROM siswa ORDER BY kode_siswa DESC");
    res.json(rows);
  } catch (err) {
    handleError(res, err);
  }
}

export async function getSiswaByKode(req, res) {
  try {
    const { rows } = await db.query("SELECT * FROM siswa WHERE kode_siswa = $1", [req.params.id]);
    if (rows.length === 0) return tidakDitemukan(res);
    res.json(rows[0]);
  } catch (err) {
    handleError(res, err);
  }
}

export async function createSiswa(req, res) {
  const { kode_siswa, nama, jurusan, tanggal_lahir, alamat } = req.body;
  try {
    await db.query(
      `INSERT INTO siswa (kode_siswa, nama, jurusan, tanggal_lahir, alamat)
       VALUES ($1, $2, $3, $4, $5)`,
      [kode_siswa, nama, jurusan, tanggal_lahir, alamat]
    );
    res.status(201).json({ message: "Data berhasil ditambahkan", kode_siswa: Number(kode_siswa) });
  } catch (err) {
    handleError(res, err);
  }
}

export async function updateSiswa(req, res) {
  const { kode_siswa, nama, jurusan, tanggal_lahir, alamat } = req.body;
  try {
    const result = await db.query(
      `UPDATE siswa SET kode_siswa = $1, nama = $2, jurusan = $3, tanggal_lahir = $4, alamat = $5
       WHERE kode_siswa = $6`,
      [kode_siswa, nama, jurusan, tanggal_lahir, alamat, req.params.id]
    );
    if (result.rowCount === 0) return tidakDitemukan(res);
    res.json({ message: "Data berhasil diperbarui" });
  } catch (err) {
    handleError(res, err);
  }
}

export async function deleteSiswa(req, res) {
  try {
    const result = await db.query("DELETE FROM siswa WHERE kode_siswa = $1", [req.params.id]);
    if (result.rowCount === 0) return tidakDitemukan(res);
    res.json({ message: "Data berhasil dihapus" });
  } catch (err) {
    handleError(res, err);
  }
}