export function formatTanggal(tanggal) {
  if (!tanggal) return "-";
  return new Date(`${tanggal}T00:00:00`).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
