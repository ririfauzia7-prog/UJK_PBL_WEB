import { useMemo, useState } from "react";
import { useSiswa } from "./hooks/useSiswa";
import FilterBar from "./components/FilterBar";
import SiswaTable from "./components/SiswaTable";
import SiswaForm from "./components/SiswaForm";
import ConfirmDialog from "./components/ConfirmDialog";

export default function App() {
  const { data, loading, error, simpan, hapus } = useSiswa();
  const [formSiswa, setFormSiswa] = useState(undefined); // undefined: tertutup, null: tambah, objek: edit
  const [hapusSiswa, setHapusSiswa] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [filterJurusan, setFilterJurusan] = useState("");

  const daftarJurusan = useMemo(
    () => [...new Set(data.map((s) => s.jurusan))].sort(),
    [data]
  );

  const dataTampil = useMemo(() => {
    const kata = keyword.trim().toLowerCase();
    return data.filter(
      (s) =>
        (!filterJurusan || s.jurusan === filterJurusan) &&
        (!kata ||
          s.nama.toLowerCase().includes(kata) ||
          s.alamat.toLowerCase().includes(kata))
    );
  }, [data, keyword, filterJurusan]);

  const resetFilter = () => {
    setKeyword("");
    setFilterJurusan("");
  };

  const konfirmasiHapus = async () => {
    await hapus(hapusSiswa.kode_siswa);
    setHapusSiswa(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-fuchsia-50">
      <header className="bg-gradient-to-r from-violet-700 to-fuchsia-600 pb-24 pt-10 text-white shadow-lg">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Biodata Siswa</h1>
            <p className="mt-1 text-violet-100">Kelola biodata siswa dengan mudah</p>
          </div>
          <button
            onClick={() => setFormSiswa(null)}
            className="rounded-xl bg-white px-5 py-2.5 font-semibold text-violet-700 shadow-md transition hover:bg-violet-50"
          >
            + Tambah Siswa
          </button>
        </div>
      </header>

      <main className="mx-auto -mt-16 max-w-6xl px-6 pb-12">
        <div className="mb-4 inline-block rounded-xl bg-white px-5 py-3 shadow-md">
          <span className="text-sm text-gray-500">Total Siswa</span>
          <p className="text-2xl font-bold text-violet-700">{data.length}</p>
        </div>

        {error && (
          <p className="mb-4 rounded-xl bg-red-50 px-5 py-3 text-red-600">{error}</p>
        )}

        <FilterBar
          keyword={keyword}
          onKeywordChange={setKeyword}
          jurusan={filterJurusan}
          onJurusanChange={setFilterJurusan}
          daftarJurusan={daftarJurusan}
          onReset={resetFilter}
        />

        <SiswaTable
          data={dataTampil}
          loading={loading}
          onEdit={setFormSiswa}
          onDelete={setHapusSiswa}
        />
      </main>

      {formSiswa !== undefined && (
        <SiswaForm
          siswa={formSiswa}
          onSubmit={simpan}
          onClose={() => setFormSiswa(undefined)}
        />
      )}

      {hapusSiswa && (
        <ConfirmDialog
          pesan={`Yakin ingin menghapus data "${hapusSiswa.nama}"?`}
          onConfirm={konfirmasiHapus}
          onClose={() => setHapusSiswa(null)}
        />
      )}
    </div>
  );
}