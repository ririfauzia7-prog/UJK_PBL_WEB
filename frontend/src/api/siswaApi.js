const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5000/api/siswa";

async function request(path = "", options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(body.message || "Terjadi kesalahan pada server");
  return body;
}

export const getSiswa = () => request();

export const createSiswa = (data) =>
  request("", { method: "POST", body: JSON.stringify(data) });

export const updateSiswa = (id, data) =>
  request(`/${id}`, { method: "PUT", body: JSON.stringify(data) });

export const deleteSiswa = (id) => request(`/${id}`, { method: "DELETE" });
