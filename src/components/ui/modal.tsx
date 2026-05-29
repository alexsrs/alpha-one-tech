import React from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
};

export default function Modal({ open, onClose, title, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-lg shadow-lg w-[90%] max-w-3xl mx-4 p-6 z-10">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button aria-label="fechar" onClick={onClose} className="text-slate-600 hover:text-slate-800 cursor-pointer">✕</button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
