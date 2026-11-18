import { useState } from "react";
import Modal from "./Modal";

const FIELDS = [
  { name: "kode_siswa", label: "Kode Siswa", type: "number", placeholder: "Contoh: 4", min: 1 },
  { name: "nama", label: "Nama", type: "text", placeholder: "Nama lengkap" },
  { name: "jurusan", label: "Jurusan", type: "text", placeholder: "Jurusan" },
  { name: "tanggal_lahir", label: "Tanggal Lahir", type: "date" },
  { name: "alamat", label: "Alamat", type: "text", placeholder: "Alamat lengkap" },
];

const FORM_KOSONG = { kode_siswa: "", nama: "", jurusan: "", tanggal_lahir: "", alamat: "" };

export default function SiswaForm({ siswa, onSubmit, onClose }) {
  const [form, setForm] = useState(
    siswa
      ? {
          kode_siswa: siswa.kode_siswa,
          nama: siswa.nama,
          jurusan: siswa.jurusan,
          tanggal_lahir: siswa.tanggal_lahir,
          alamat: siswa.alamat,
        }
      : FORM_KOSONG
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await onSubmit(form, siswa?.kode_siswa);
      onClose();
    } catch (err) {
      setError(err.message);
      setSaving(false);
    }
  };

  return (
    <Modal title={siswa ? "Edit Biodata Siswa" : "Tambah Biodata Siswa"} onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4">
        {FIELDS.map(({ name, label, ...props }) => (
          <div key={name}>
            <label htmlFor={name} className="mb-1 block text-sm font-medium text-gray-700">
              {label}
            </label>
            <input
              id={name}
              name={name}
              value={form[name]}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-800 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
              {...props}
            />
          </div>
        ))}

        {error && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>}

        <div className="flex justify-end gap-2 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-5 py-2 font-medium text-gray-600 hover:bg-gray-100"
          >
            Batal
          </button>
          <button
            type="submit"
            disabled={saving}
            className="rounded-lg bg-violet-600 px-5 py-2 font-medium text-white shadow-sm transition hover:bg-violet-700 disabled:opacity-60"
          >
            {saving ? "Menyimpan..." : siswa ? "Perbarui" : "Simpan"}
          </button>
        </div>
      </form>
    </Modal>
  );
}