import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X, Loader2 } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Hey 👋 I'm Priyo. Ask me anything about my projects, stack, experience or how to get in touch.",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, busy]);

const send = async () => {
  const text = input.trim();
  if (!text || busy) return;

  setInput("");

  const next: Msg[] = [...messages, { role: "user", content: text }];
  setMessages(next);
  setBusy(true);

  try {
    const resp = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: next }),
    });

    const data = await resp.json();

    if (!resp.ok) {
      throw new Error(data.error || "Something went wrong");
    }

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: data.message,
      },
    ]);
  } catch (error) {
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content:
          error instanceof Error
            ? error.message
            : "Network error. Please try again.",
      },
    ]);
  } finally {
    setBusy(false);
  }
};

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        data-cursor="hover"
        aria-label="Open chat"
        className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black text-white shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all hover:scale-105 hover:border-white md:bottom-8 md:right-8"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        {!open && (
          <span className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-black bg-white" />
        )}
      </button>

      <div
        className={`fixed bottom-24 right-4 z-[60] w-[calc(100vw-2rem)] max-w-sm origin-bottom-right overflow-hidden rounded-2xl border border-white/15 bg-black/90 backdrop-blur-xl transition-all duration-300 md:right-8 ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-2 scale-95 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            <span className="font-display text-sm font-semibold tracking-wide text-white">
              Ask me anything
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
            AI · live
          </span>
        </div>
        <div
          ref={scrollRef}
          className="flex h-80 flex-col gap-3 overflow-y-auto overscroll-contain px-4 py-4"
          style={{ WebkitOverflowScrolling: "touch" }}
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          {messages.map((m, i) => (
            <div
              key={i}
              className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                m.role === "user"
                  ? "ml-auto bg-white text-black"
                  : "border border-white/10 bg-white/5 text-white/90"
              }`}
            >
              {m.content}
            </div>
          ))}
          {busy && (
            <div className="flex items-center gap-2 text-xs text-white/50">
              <Loader2 className="h-3 w-3 animate-spin" /> thinking…
            </div>
          )}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send();
          }}
          className="flex items-center gap-2 border-t border-white/10 p-3"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a question…"
            disabled={busy}
            className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
          />
          <button
            type="submit"
            disabled={busy || !input.trim()}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-opacity disabled:opacity-30"
            data-cursor="hover"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </>
  );
}
