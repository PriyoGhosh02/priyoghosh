import { useEffect } from "react";
import { X } from "lucide-react";
import { Contact } from "./Contact";

export function ContactDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto overscroll-contain px-3 py-6 sm:px-4 sm:py-10"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />
      <div
        className="relative my-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-white/15 bg-black"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-black"
          data-cursor="hover"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        <div
          className="max-h-[88vh] overflow-y-auto overscroll-contain scrollbar-hide"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <Contact embedded />
        </div>
      </div>
    </div>
  );
}
