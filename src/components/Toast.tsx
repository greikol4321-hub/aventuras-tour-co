"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "@phosphor-icons/react";

type ToastProps = {
  message: string;
  type?: "success" | "error" | "info";
  onClose: () => void;
  duration?: number;
};

export default function Toast({ message, type = "success", onClose, duration = 4000 }: ToastProps) {
  const [visible, setVisible] = useState(false);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => onCloseRef.current(), 300);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  const colors = {
    success: "bg-leaf-600",
    error: "bg-red-500",
    info: "bg-brand-500",
  };

  return (
    <div
      className={`fixed top-5 left-1/2 z-[100] flex items-center gap-3 rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-xl transition-all duration-300 ${colors[type]} ${
        visible ? "translate-x-[-50%] opacity-100" : "translate-x-[-50%] -translate-y-4 opacity-0"
      }`}
      role="alert"
    >
      <span>{message}</span>
      <button onClick={onClose} className="ml-2 rounded-lg p-1 hover:bg-white/20" aria-label="Cerrar">
        <X size={16} />
      </button>
    </div>
  );
}
