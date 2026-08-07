import emailjs from "@emailjs/browser";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";

export function Contact({ embedded = false }: { embedded?: boolean }) {
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.send(
        "service_daocdfg",
        "template_9fthzxq",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Priyo",
        },
        "Vg8sg4oEZ1NmFBw_K",
      );

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error(err);
      alert("Failed to send message");
    } finally {
      setSending(false);
    }
  };

  const sectionClass = embedded
    ? "relative bg-[#0A0B0D] text-white px-6 py-12"
    : "sticky-card sticky-card-7 min-h-screen bg-[#0A0B0D] text-white px-6 py-32 md:py-48";

  return (
    <section id={embedded ? undefined : "contact"} className={sectionClass}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white">
            Get In Touch
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-16 md:grid-cols-2">
          {/* LEFT SIDE - FORM */}
          <Reveal y={20}>
            <form onSubmit={handleSubmit} className="space-y-8 text-center md:text-left">
              {[
                { id: "name", label: "Your name", type: "text" },
                { id: "email", label: "Email", type: "email" },
                { id: "subject", label: "Subject", type: "text" },
              ].map((f) => (
                <div key={f.id} className="relative">
                  <label
                    htmlFor={f.id}
                    className={`absolute transition-all duration-300 ${
                      focused === f.id
                        ? "-top-4 font-mono text-[14px] text-brand"
                        : "top-3 font-mono text-[16px] text-white/80"
                    }`}
                  >
                    {f.label}
                  </label>

                  <input
                    id={f.id}
                    type={f.type}
                    required
                    value={formData[f.id as keyof typeof formData]}
                    onChange={handleChange}
                    onFocus={() => setFocused(f.id)}
                    onBlur={(e) => e.target.value === "" && setFocused(null)}
                    className="w-full border-b border-[#22252A] bg-transparent py-3 text-white outline-none focus:border-brand transition-colors"
                  />
                </div>
              ))}

              <div className="relative">
                <label
                  htmlFor="message"
                  className={`absolute transition-all duration-300 ${
                    focused === "message"
                      ? "-top-4 font-mono text-[14px] text-brand"
                      : "top-3 font-mono text-[16px] text-white/80"
                  }`}
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={(e) => e.target.value === "" && setFocused(null)}
                  className="w-full resize-none border-b border-[#22252A] bg-transparent py-3 text-white outline-none focus:border-brand transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="cta-primary focus-ring group relative inline-flex items-center gap-3 font-mono text-[14px] uppercase tracking-widest"
              >
                <span>{sending ? "Sending..." : submitted ? "Sent ✓" : "Send Message"}</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          </Reveal>

          {/* RIGHT SIDE - INFO */}
          <Reveal y={20} delay={0.1}>
            <div className="space-y-10 text-white text-center md:text-left">
              <div>
                <p className="font-mono text-[14px] uppercase tracking-[0.3em] text-white">Email</p>
                <a
                  href="mailto:priyoghosh02@gmail.com"
                  className="text-xl md:text-2xl font-medium text-white transition-colors hover:text-brand underline decoration-[#22252A] underline-offset-4 hover:decoration-brand"
                >
                  priyoghosh02@gmail.com
                </a>
              </div>

              <div>
                <p className="font-mono text-[14px] uppercase tracking-[0.3em] text-white">Phone</p>
                <a
                  href="tel:+8801743457164"
                  className="text-xl md:text-2xl font-medium text-white transition-colors hover:text-brand underline decoration-[#22252A] underline-offset-4 hover:decoration-brand"
                >
                  +880 1743 457164
                </a>
              </div>

              <div>
                <p className="font-mono text-[14px] uppercase tracking-[0.3em] text-white">
                  Location
                </p>
                <p className="text-xl md:text-2xl font-medium text-white">Dhaka, Bangladesh</p>
              </div>

              <div>
                <p className="font-mono text-[14px] uppercase tracking-[0.3em] text-white mb-4">
                  Social
                </p>

                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {[
                    {
                      label: "GitHub",
                      href: "https://github.com/PriyoGhosh02/",
                    },
                    {
                      label: "LinkedIn",
                      href: "https://www.linkedin.com/in/priyoghosh02/",
                    },
                    {
                      label: "Whatsapp",
                      href: "https://wa.me/8801743457164",
                    },
                    {
                      label: "Facebook",
                      href: "https://www.facebook.com/priyo.ghosh.792",
                    },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#22252A] bg-[#121417] px-4 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-brand hover:bg-brand hover:text-white"
                    >
                      <span>{s.label}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
