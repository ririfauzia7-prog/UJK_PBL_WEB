import { formatTanggal } from "../utils/formatTanggal";

const HEADERS = ["Kode Siswa", "Nama", "Jurusan", "Tanggal Lahir", "Alamat", "Aksi"];

export default function SiswaTable({ data, loading, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto rounded-2xl bg-white shadow-lg shadow-violet-100">
      <table className="w-full text-left">
        <thead className="bg-violet-50 text-sm uppercase tracking-wide text-violet-700">
          <tr>
            {HEADERS.map((h, i) => (
              <th
                key={h}
                className={`whitespace-nowrap px-5 py-4 font-semibold ${i === 5 ? "text-center" : ""}`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {(loading || data.length === 0) && (
            <tr>
              <td colSpan={HEADERS.length} className="px-5 py-10 text-center text-gray-400">
                {loading ? "Memuat data..." : "Data tidak ditemukan"}
              </td>
            </tr>
          )}
          {data.map((s) => (
            <tr key={s.kode_siswa} className="transition hover:bg-violet-50/50">
              <td className="px-5 py-4 text-gray-500">{s.kode_siswa}</td>
              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-100 font-semibold text-violet-700">
                    {s.nama.charAt(0).toUpperCase()}
                  </span>
                  <span className="font-medium text-gray-800">{s.nama}</span>
                </div>
              </td>
              <td className="px-5 py-4">
                <span className="rounded-full bg-fuchsia-50 px-3 py-1 text-sm text-fuchsia-700">
                  {s.jurusan}
                </span>
              </td>
              <td className="whitespace-nowrap px-5 py-4 text-gray-600">
                {formatTanggal(s.tanggal_lahir)}
              </td>
              <td className="px-5 py-4 text-gray-600">{s.alamat}</td>
              <td className="whitespace-nowrap px-5 py-4 text-center">
                <button
                  onClick={() => onEdit(s)}
                  className="mr-2 rounded-lg bg-violet-100 px-3 py-1.5 text-sm font-medium text-violet-700 hover:bg-violet-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(s)}
                  className="rounded-lg bg-red-50 px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-100"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}