import { useEffect, useState } from "react";
import * as api from "../api/siswaApi";

export function useSiswa() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [versi, setVersi] = useState(0); // dinaikkan setiap data berubah agar daftar dimuat ulang

  useEffect(() => {
    let aktif = true;
    api
      .getSiswa()
      .then((hasil) => {
        if (!aktif) return;
        setData(hasil);
        setError("");
      })
      .catch(() => {
        if (aktif) setError("Gagal memuat data. Pastikan server backend sudah berjalan.");
      })
      .finally(() => {
        if (aktif) setLoading(false);
      });
    return () => {
      aktif = false;
    };
  }, [versi]);

  const muatUlang = () => setVersi((v) => v + 1);

  const simpan = async (form, id) => {
    await (id ? api.updateSiswa(id, form) : api.createSiswa(form));
    muatUlang();
  };

  const hapus = async (id) => {
    await api.deleteSiswa(id);
    muatUlang();
  };

  return { data, loading, error, simpan, hapus };
}
