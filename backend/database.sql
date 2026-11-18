CREATE TABLE IF NOT EXISTS siswa (
  id_siswa SERIAL PRIMARY KEY,
  nama VARCHAR(100) NOT NULL,
  jurusan VARCHAR(100) NOT NULL,
  tanggal_lahir DATE NOT NULL,
  alamat TEXT NOT NULL
);

INSERT INTO siswa (nama, jurusan, tanggal_lahir, alamat) VALUES
('Zia', 'Sistem Informasi', '2005-03-15', 'Jl.wadas no 37');
