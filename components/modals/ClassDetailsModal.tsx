"use client";

interface ClassDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  time: string;
  date: string;
  price: string;
}

export default function ClassDetailsModal({ isOpen, onClose, title, time, date, price }: ClassDetailsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2"><strong>Time:</strong> {time}</p>
        <p className="mt-2"><strong>Date:</strong> {date}</p>
        <p className="mt-2"><strong>Price:</strong> {price}</p>

        {/* Nút đóng popup */}
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}
