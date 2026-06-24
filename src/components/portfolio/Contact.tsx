import { useState } from "react";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";
import emailjs from "@emailjs/browser";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
        "Vg8sg4oEZ1NmFBw_K"
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
    ? "relative px-6 py-12"
    : "relative px-6 py-32 md:py-48";

  return (
    <section id={embedded ? undefined : "contact"} className={sectionClass}>
      <div className="mx-auto max-w-6xl">

        <Reveal>
          <h2 className="text-5xl md:text-7xl font-semibold text-white">
            Get In Touch
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-16 md:grid-cols-2">

          {/* LEFT SIDE - FORM */}
          <Reveal y={20}>
            <form onSubmit={handleSubmit} className="space-y-8">

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
                        ? "-top-4 text-[14px] text-white"
                        : "top-3 text-[16px] text-white/80"
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
                    onBlur={(e) =>
                      e.target.value === "" && setFocused(null)
                    }
                    className="w-full border-b border-white/40 bg-transparent py-3 text-white outline-none"
                  />
                </div>
              ))}

              <div className="relative">
                <label
                  htmlFor="message"
                  className={`absolute transition-all duration-300 ${
                    focused === "message"
                      ? "-top-4 text-[14px] text-white"
                      : "top-3 text-[16px] text-white/80"
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
                  onBlur={(e) =>
                    e.target.value === "" && setFocused(null)
                  }
                  className="w-full resize-none border-b border-white/20 bg-transparent py-3 text-white outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="group relative inline-flex items-center gap-3 rounded-full border border-white px-8 py-4 text-[14px] uppercase tracking-widest text-white"
              >
                <span>
                  {sending
                    ? "Sending..."
                    : submitted
                    ? "Sent ✓"
                    : "Send Message"}
                </span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          </Reveal>

          {/* RIGHT SIDE - INFO */}
          <Reveal y={20} delay={0.1}>
            <div className="space-y-10 text-white">

              <div>
                <p className="text-[14px] uppercase tracking-[0.3em] text-white/80">
                  Email
                </p>
                <a
                  href="mailto:priyoghosh02@gmail.com"
                  className="text-xl md:text-2xl font-medium underline"
                >
                priyoghosh02@gmail.com                
                </a>
              </div>

              <div>
                <p className="text-[14px] uppercase tracking-[0.3em] text-white/80">
                  Phone
                </p>
                <a
                  href="tel:+8801743457164"
                  className="text-xl md:text-2xl font-medium underline"
                >
                  +880 1743 457164
                </a>
              </div>

              <div>
                <p className="text-[14px] uppercase tracking-[0.3em] text-white/80">
                  Location
                </p>
                <p className="text-xl md:text-2xl font-medium">
                  Dhaka, Bangladesh
                </p>
              </div>

              <div>
                <p className="text-[14px] uppercase tracking-[0.3em] text-white/80 mb-3">
                  Social
                </p>

                <div className="space-y-3">
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
                      className="flex justify-between border-b border-white/10 py-2 hover:border-white"
                    >
                      <span>{s.label}</span>
                      <ArrowUpRight className="h-4 w-4" />
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