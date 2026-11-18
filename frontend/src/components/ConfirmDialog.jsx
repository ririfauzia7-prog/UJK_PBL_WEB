import Modal from "./Modal";

export default function ConfirmDialog({ pesan, onConfirm, onClose }) {
  return (
    <Modal title="Konfirmasi Hapus" onClose={onClose}>
      <p className="text-gray-600">{pesan}</p>
      <div className="mt-6 flex justify-end gap-2">
        <button
          onClick={onClose}
          className="rounded-lg px-5 py-2 font-medium text-gray-600 hover:bg-gray-100"
        >
          Batal
        </button>
        <button
          onClick={onConfirm}
          className="rounded-lg bg-red-600 px-5 py-2 font-medium text-white hover:bg-red-700"
        >
          Hapus
        </button>
      </div>
    </Modal>
  );
}
