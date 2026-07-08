import { createFileRoute } from "@tanstack/react-router";

const SYSTEM_PROMPT = `You are a friendly portfolio assistant for Priyo Ghosh — an aspiring full-stack web developer based in Dhaka, Bangladesh. Speak warmly in the first person as if you were Priyo.

Key facts about Priyo Ghosh:
- Aspiring Full Stack Developer with experience in web development, Shopify customization, and database systems
- Skilled in building responsive interfaces, backend integration, and working with international clients
- Web Development: HTML, CSS, JavaScript, React, MongoDB
- Programming Languages: C, Java, Python, JavaScript
- Frameworks: React, Next.js, Node.js, Tailwind CSS, Material-UI
- Databases: MongoDB, MySQL

Experience:
- Web Developer at Softvance Delta, Bitopia Group (Dec 2025 – Present), Block-F, Joypurhat Tower, Banasree Main Road, Dhaka 1219 — developing responsive web pages and CMS interfaces with frontend frameworks
- Web Developer at Sardar IT (Aug 2025 – Nov 2025), Shialbari, Rupnagar Rd, Dhaka 1216 — built responsive web pages with HTML, CSS, JavaScript & Tailwind, converting Figma designs into clean interfaces

Projects:
- Portfolio Website — designed and developed with HTML, CSS, JavaScript
- University Management System — university admission database with students, courses, instructors and departments; SQL queries, triggers and constraints; joins, nested queries and aggregates
- The Atelier — boutique multi-page experience (live at https://theatelier.london/)
- Active on Codeforces with competitive-programming practice

Education:
- B.Sc. in Computer Science and Engineering, Green University of Bangladesh — graduating 2026
- HSC (Science), Kaliganj Govt. College — 2020
- SSC (Science), Dr. Mujib-Ruby Model High School — 2018

Contact:
- Email: priyoghosh02@gmail.com
- Phone: 01743457164
- GitHub: https://github.com/PriyoGhosh02
- LinkedIn: https://www.linkedin.com/in/priyo02
- Facebook: https://www.facebook.com/priyo.ghosh.02

Keep answers short (max 3 sentences unless asked for detail). Be warm and humble. If asked something off-topic, gently steer back to my work, skills, projects or how to get in touch.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { messages } = (await request.json()) as {
            messages: { role: "user" | "assistant"; content: string }[];
          };

          const lastUserMessage = [...messages].reverse().find((message) => message.role === "user")?.content ?? "";
          const apiKey = process.env.LOVABLE_API_KEY;

          if (!apiKey) {
            return Response.json({
              message: `Local assistant reply: I can help with my projects, stack, experience, or how to get in touch. You asked: ${lastUserMessage || "about my work"}.`,
            });
          }

          const upstream = await fetch(
            "https://ai.gateway.lovable.dev/v1/chat/completions",
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                model: "google/gemini-3-flash-preview",
                messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
                stream: false,
              }),
            },
          );

          if (!upstream.ok) {
            const fallbackError = await upstream.text().catch(() => "");
            if (upstream.status === 429)
              return Response.json({ error: "Too many requests. Try again in a moment." }, { status: 429 });
            if (upstream.status === 402)
              return Response.json({ error: "AI credits exhausted." }, { status: 402 });
            return Response.json({ error: fallbackError || "AI gateway error." }, { status: 500 });
          }

          const payload = (await upstream.json()) as {
            choices?: Array<{ message?: { content?: string } }>;
          };
          const assistantMessage = payload.choices?.[0]?.message?.content ?? "I’m here to help with my portfolio and experience.";

          return Response.json({
            message: `Gemini AI reply: ${assistantMessage}`,
          });
        } catch (e) {
          console.error("chat error:", e);
          return Response.json({ error: "Unexpected error" }, { status: 500 });
        }
      },
    },
  },
});
