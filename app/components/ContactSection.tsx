"use client";

const contactEmail = "omganeshganesh723@gmail.com";

export default function ContactSection() {
  function sendSessionRequest(formData: FormData) {
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const emailSubject = encodeURIComponent(
      subject || "Portfolio collaboration",
    );
    const emailBody = encodeURIComponent(
      `Hi Om Ganesh,\n\n${message}\n\nFrom: ${name}\nReply to: ${email}`,
    );

    window.location.href = `mailto:${contactEmail}?subject=${emailSubject}&body=${emailBody}`;
  }

  return (
    <section id="contact" className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
      <div className="relative mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-[2rem] border border-white/10 bg-[#d9f36a] p-6 text-[#11120f] sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-14 lg:p-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-16 size-64 rounded-full border border-black/10 sm:size-80"
        />
        <div className="relative">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/55">
            Book a session · Open channel
          </p>
          <h2 className="mt-4 text-4xl leading-[1.02] font-semibold tracking-[-0.06em] sm:text-6xl">
            Let&apos;s make
            <br />
            something resonate.
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-6 text-black/65 sm:text-base">
            Send a signal about a role, a project, or an idea. Add your details
            to the board and your email app will prepare the message.
          </p>
          <a
            href={`mailto:${contactEmail}`}
            className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-black/75 underline decoration-black/30 underline-offset-4 transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
          >
            Email me directly
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <form
          action={sendSessionRequest}
          className="relative rounded-3xl border border-black/10 bg-[#11120f] p-5 text-[#f4f2ec] shadow-xl shadow-black/10 sm:p-7"
        >
          <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#d9f36a]/70">
                Contact console · CH 01
              </p>
              <h3 className="mt-2 text-lg font-semibold">
                Send a session request
              </h3>
            </div>
            <span
              aria-hidden="true"
              className="grid size-10 place-items-center rounded-full border border-[#d9f36a]/30 text-[#d9f36a]"
            >
              ↗
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-xs font-medium text-white/70">
              Your name
              <input
                required
                name="name"
                autoComplete="name"
                placeholder="Name on the guest list"
                className="min-h-12 min-w-0 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white placeholder:text-white/35 focus:border-[#d9f36a]/70 focus:outline-none"
              />
            </label>
            <label className="grid gap-2 text-xs font-medium text-white/70">
              Your email
              <input
                required
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="min-h-12 min-w-0 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white placeholder:text-white/35 focus:border-[#d9f36a]/70 focus:outline-none"
              />
            </label>
            <label className="grid gap-2 text-xs font-medium text-white/70 sm:col-span-2">
              Subject
              <input
                required
                name="subject"
                placeholder="What are we making?"
                className="min-h-12 min-w-0 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white placeholder:text-white/35 focus:border-[#d9f36a]/70 focus:outline-none"
              />
            </label>
            <label className="grid gap-2 text-xs font-medium text-white/70 sm:col-span-2">
              Message
              <textarea
                required
                name="message"
                rows={4}
                placeholder="Leave a note about the opportunity, project, or idea..."
                className="min-h-32 min-w-0 resize-y rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-[#d9f36a]/70 focus:outline-none"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#d9f36a] px-6 text-sm font-bold text-[#11120f] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d9f36a] sm:w-auto"
          >
            Email me <span aria-hidden="true">🚀</span>
          </button>
          <p className="mt-4 text-[11px] leading-5 text-white/45">
            No data is stored on this site. Submitting opens your email app with
            the message ready to send.
          </p>
        </form>
      </div>
    </section>
  );
}
