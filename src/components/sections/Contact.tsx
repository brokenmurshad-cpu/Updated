"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { personal, whatsappUrl } from "@/data/content";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: String(data.get("email") || ""),
          message: String(data.get("message") || ""),
          website: String(data.get("website") || ""),
        }),
      });

      if (!response.ok) {
        throw new Error("Message delivery failed");
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="reference-contact relative isolate overflow-hidden border-b border-white/10 bg-[#191924] text-white"
    >
      <div className="relative z-10 mx-auto w-full max-w-[128rem] px-5 py-[4.6rem] sm:px-12 lg:min-h-[100svh] lg:px-[3.1vw] lg:py-[5.25rem]">
        <p className="relative z-10 flex items-center gap-2.5 font-sans text-[clamp(1.25rem,1.65vw,2rem)] font-extrabold uppercase leading-none tracking-[-0.055em] text-white">
          <span className="inline-flex animate-spin text-white/65 [animation-duration:5s]">✦</span>
          Get in <span className="text-[#854ce6]">touch</span>
        </p>

        <div className="mt-[clamp(4rem,11vh,9rem)] max-w-[66rem] lg:max-w-[64vw]">
          <h2 className="font-display text-[clamp(3.25rem,7.9vw,10rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.065em] text-white/95 sm:leading-[0.86] sm:tracking-[-0.085em]">
            Let&apos;s talk
            <span className="mt-[0.17em] block text-[#854ce6]">about your</span>
            <span className="mt-[0.17em] block text-[#854ce6]">idea.</span>
          </h2>
        </div>

        <div className="mt-12 grid items-start gap-14 lg:mt-[clamp(3.5rem,6.5vh,6.5rem)] lg:grid-cols-[minmax(0,1.1fr)_minmax(27rem,0.72fr)] lg:gap-[clamp(4.5rem,10vw,14rem)]">
          <div className="max-w-3xl">
            <p className="max-w-2xl text-[clamp(0.95rem,1vw,1.16rem)] leading-[1.7] text-white/85">
              Have a project in mind? Looking for a long-term partner? Or just want to say hi?
              Let&apos;s connect and create something amazing together.
            </p>

            <div className="mt-10 space-y-7 border-t border-white/10 pt-8">
              <ContactDetail
                icon={Mail}
                label="Email me"
                value={personal.email}
                href={`mailto:${personal.email}`}
              />
              <ContactDetail
                icon={Phone}
                label="WhatsApp"
                value={personal.phone}
                href={whatsappUrl}
              />
              <ContactDetail icon={MapPin} label="Location" value={personal.location} />
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="w-full rounded-[1.35rem] border border-[#854ce6]/45 bg-[#090917]/95 p-5 shadow-[0_20px_55px_rgba(0,0,0,0.48),0_0_32px_rgba(133,76,230,0.16)] sm:rounded-[1.65rem] sm:p-10"
            aria-label="Contact form"
          >
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="contact-website">Website</label>
              <input
                id="contact-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <Field label="Email address" name="email" type="email" placeholder="Enter your email" required />

            <div className="mt-6">
              <label
                htmlFor="contact-message"
                className="mb-3 block text-xs font-bold uppercase tracking-[0.03em] text-white/65"
              >
                How can I help?
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-white/[0.04] bg-[#070817] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#854ce6] focus:ring-2 focus:ring-[#854ce6]/15"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              data-cursor="hover"
              className="mt-9 w-full rounded-full border-[3px] border-[#854ce6] bg-[#140928]/55 px-4 py-3.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white shadow-[7px_6px_0_rgba(14,6,29,0.55)] transition hover:bg-[#854ce6] hover:shadow-[0_0_26px_rgba(133,76,230,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a978ff] disabled:cursor-wait disabled:opacity-60 sm:px-5 sm:text-[11px] sm:tracking-[0.28em]"
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>

            <div className="min-h-8" aria-live="polite">
              {status === "sent" ? (
                <p className="mt-4 text-center text-xs text-[#a978ff]">
                  Message sent successfully. I&apos;ll get back to you soon.
                </p>
              ) : null}
              {status === "error" ? (
                <p className="mt-4 text-center text-xs text-red-300">
                  Message could not be sent. Please try again.
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={`contact-${name}`}
        className="mb-3 block text-xs font-bold uppercase tracking-[0.03em] text-white/65"
      >
        {label}
      </label>
      <input
        id={`contact-${name}`}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/[0.04] bg-[#070817] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#854ce6] focus:ring-2 focus:ring-[#854ce6]/15"
      />
    </div>
  );
}

function ContactDetail({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/65">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#854ce6]">{label}</p>
        <p className="mt-1 break-all text-sm font-bold text-white sm:break-words">{value}</p>
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      data-cursor="hover"
      className="block w-fit transition-opacity hover:opacity-70"
    >
      {content}
    </a>
  );
}
