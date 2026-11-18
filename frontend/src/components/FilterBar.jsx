export default function FilterBar({
  keyword,
  onKeywordChange,
  jurusan,
  onJurusanChange,
  daftarJurusan,
  onReset,
}) {
  return (
    <div className="mb-4 flex flex-wrap gap-3">
      <input
        type="search"
        value={keyword}
        onChange={(e) => onKeywordChange(e.target.value)}
        placeholder="Cari nama atau alamat..."
        className="min-w-60 flex-1 rounded-xl border border-gray-300 bg-white px-4 py-2.5 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
      />

      <select
        value={jurusan}
        onChange={(e) => onJurusanChange(e.target.value)}
        className="rounded-xl border border-gray-300 bg-white px-4 py-2.5 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
      >
        <option value="">Semua Jurusan</option>
        {daftarJurusan.map((j) => (
          <option key={j} value={j}>
            {j}
          </option>
        ))}
      </select>

      {(keyword || jurusan) && (
        <button
          onClick={onReset}
          className="rounded-xl px-4 py-2.5 font-medium text-violet-700 hover:bg-violet-100"
        >
          Reset
        </button>
      )}
    </div>
  );
}