const FIELD_WAJIB = ["kode_siswa", "nama", "jurusan", "tanggal_lahir", "alamat"];

export function validateSiswa(req, res, next) {
  const kosong = FIELD_WAJIB.filter((f) => !String(req.body?.[f] ?? "").trim());
  if (kosong.length > 0) {
    return res.status(400).json({ message: `Field wajib diisi: ${kosong.join(", ")}` });
  }

  const kode = Number(req.body.kode_siswa);
  if (!Number.isInteger(kode) || kode < 1) {
    return res.status(400).json({ message: "Kode siswa harus berupa bilangan bulat positif" });
  }

  next();
}