import {
  X as CloseIcon,
  Download,
  Facebook,
  FileText,
  Github,
  Linkedin,
  Mail,
  PhoneForwarded,
  Plus,
  UserPen,
} from "lucide-react";
import { useState } from "react";

type Item = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
  download?: string;
  external?: boolean;
  onClick?: () => void;
};

export function SocialDock({ onContact }: { onContact: () => void }) {
  const [open, setOpen] = useState(false);

  const items: Item[] = [
    { label: "GitHub", icon: Github, href: "https://github.com/PriyoGhosh02/", external: true },
    {
      label: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/priyoghosh02/",
      external: true,
    },
    {
      label: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/priyo.ghosh.02",
      external: true,
    },
    { label: "Phone", icon: PhoneForwarded, href: "https://wa.me/8801743457164" },
    { label: "Email", icon: Mail, href: "mailto:priyoghosh02@gmail.com" },
    { label: "Read CV", icon: FileText, href: "/Resume.pdf", external: true },
    { label: "Download CV", icon: Download, href: "/Resume.pdf", download: "Priyo_Ghosh_CV.pdf" },
    { label: "Contact me", icon: UserPen, onClick: onContact },
  ];

  // Radial layout: spread items along an arc on the LEFT side of the trigger.
  // Angles measured from 12 o'clock, going counter-clockwise into the left half.
  const radius = 150;
  const startDeg = -70; // top-left
  const endDeg = 70; // bottom-left
  const step = items.length > 1 ? (endDeg - startDeg) / (items.length - 1) : 0;

  return (
    <>
      {/* Backdrop tap-to-close (mobile too) */}
      <button
        aria-hidden={!open}
        tabIndex={-1}
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[54] bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
      />

      <div className="fixed right-5 top-1/2 z-[55] -translate-y-1/2 md:right-8">
        <div className="relative flex h-14 w-14 items-center justify-center">
          {/* Moon Circle Animation */}
          {open && (
            <div
              className="absolute inset-0 rounded-full border border-white/20"
              style={{
                width: "56px",
                height: "56px",
                animation: "moon-orbit 4s linear infinite",
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/40" />
            </div>
          )}

          {items.map((it, i) => {
            const Icon = it.icon;
            const angle = startDeg + step * i;
            const rad = (angle * Math.PI) / 180;
            // x is negative (left of trigger), y depends on angle.
            const x = -Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            const Tag: any = it.onClick ? "button" : "a";
            const isExternal = it.external || (it.href && it.href.startsWith("http"));
            return (
              <Tag
                key={it.label}
                href={it.href}
                download={it.download}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                onClick={
                  it.onClick
                    ? () => {
                      it.onClick!();
                      setOpen(false);
                    }
                    : () => setOpen(false)
                }
                data-cursor="hover"
                aria-label={it.label}
                title={it.label}
                className={`group absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#22252A] bg-[#121417]/90 text-white backdrop-blur-md transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#FF3B00] hover:bg-[#FF3B00] hover:text-white ${open
                  ? "pointer-events-auto scale-100 opacity-100"
                  : "pointer-events-none scale-50 opacity-0"
                  }`}
                style={{
                  transform: open
                    ? `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1)`
                    : "translate(-50%, -50%) scale(0.5)",
                  transitionDelay: `${open ? i * 35 : (items.length - i) * 20}ms`,
                }}
              >
                <Icon className="h-4 w-4" />
                <span className="pointer-events-none absolute right-[calc(100%+10px)] whitespace-nowrap rounded-full border border-[#22252A] bg-[#121417] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white opacity-0 transition-opacity group-hover:opacity-100 shadow-md">
                  {it.label}
                </span>
              </Tag>
            );
          })}

          <button
            onClick={() => setOpen((v) => !v)}
            data-cursor="hover"
            aria-label={open ? "Close tools" : "Open tools"}
            aria-expanded={open}
            className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 ${open
              ? "border-[#FF3B00] bg-[#FF3B00] text-white rotate-90"
              : "border-[#22252A] bg-[#121417] text-white hover:border-[#FF3B00] hover:text-[#FF3B00]"
              }`}
          >
            <span className="relative block h-5 w-5">
              <Plus
                className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${open ? "rotate-45 opacity-0 scale-75" : "rotate-0 opacity-100 scale-100"
                  }`}
              />
              <CloseIcon
                className={`absolute inset-0 h-5 w-5 text-black transition-all duration-300 ${open ? "rotate-0 opacity-100 scale-100" : "-rotate-45 opacity-0 scale-75"
                  }`}
              />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
