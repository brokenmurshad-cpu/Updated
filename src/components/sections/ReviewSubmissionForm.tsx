"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Star } from "lucide-react";

type ProjectOption = {
  id: string;
  title: string;
};

const ratings = [1, 2, 3, 4, 5] as const;
const reviewControlClassName =
  "min-h-14 w-full rounded-xl border border-white/[0.08] bg-[#08080e] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#0a8f87] focus:ring-2 focus:ring-[#0a8f87]/15";

const countries = [
  ["🇦🇪", "United Arab Emirates"],
  ["🇵🇰", "Pakistan"],
  ["🇸🇦", "Saudi Arabia"],
  ["🇶🇦", "Qatar"],
  ["🇴🇲", "Oman"],
  ["🇧🇭", "Bahrain"],
  ["🇰🇼", "Kuwait"],
  ["🇯🇴", "Jordan"],
  ["🇱🇧", "Lebanon"],
  ["🇪🇬", "Egypt"],
  ["🇮🇳", "India"],
  ["🇧🇩", "Bangladesh"],
  ["🇱🇰", "Sri Lanka"],
  ["🇳🇵", "Nepal"],
  ["🇦🇫", "Afghanistan"],
  ["🇹🇷", "Turkey"],
  ["🇬🇧", "United Kingdom"],
  ["🇺🇸", "United States"],
  ["🇨🇦", "Canada"],
  ["🇦🇺", "Australia"],
  ["🇳🇿", "New Zealand"],
  ["🇩🇪", "Germany"],
  ["🇫🇷", "France"],
  ["🇮🇹", "Italy"],
  ["🇪🇸", "Spain"],
  ["🇵🇹", "Portugal"],
  ["🇳🇱", "Netherlands"],
  ["🇧🇪", "Belgium"],
  ["🇨🇭", "Switzerland"],
  ["🇦🇹", "Austria"],
  ["🇸🇪", "Sweden"],
  ["🇳🇴", "Norway"],
  ["🇩🇰", "Denmark"],
  ["🇫🇮", "Finland"],
  ["🇮🇪", "Ireland"],
  ["🇵🇱", "Poland"],
  ["🇬🇷", "Greece"],
  ["🇷🇴", "Romania"],
  ["🇨🇿", "Czech Republic"],
  ["🇺🇦", "Ukraine"],
  ["🇧🇷", "Brazil"],
  ["🇲🇽", "Mexico"],
  ["🇦🇷", "Argentina"],
  ["🇨🇴", "Colombia"],
  ["🇿🇦", "South Africa"],
  ["🇳🇬", "Nigeria"],
  ["🇰🇪", "Kenya"],
  ["🇬🇭", "Ghana"],
  ["🇸🇬", "Singapore"],
  ["🇲🇾", "Malaysia"],
  ["🇮🇩", "Indonesia"],
  ["🇵🇭", "Philippines"],
  ["🇹🇭", "Thailand"],
  ["🇻🇳", "Vietnam"],
  ["🇨🇳", "China"],
  ["🇯🇵", "Japan"],
  ["🇰🇷", "South Korea"],
  ["🌍", "Other / Not listed"],
] as const;

export default function ReviewSubmissionForm({
  projects,
}: {
  projects: ProjectOption[];
}) {
  const [rating, setRating] = useState<(typeof ratings)[number]>(5);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const redirectRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const url = new URL(window.location.href);

    if (url.searchParams.get("review") === "success") {
      queueMicrotask(() => setStatus("sent"));
      url.searchParams.delete("review");
      window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
    }
  }, []);

  const prepareSubmission = () => {
    if (redirectRef.current) {
      redirectRef.current.value = `${window.location.origin}/reviews?review=success#submit-review`;
    }

    setStatus("sending");
  };

  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      onSubmit={prepareSubmission}
      className="rounded-[1.35rem] border border-white/12 bg-[#101018] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.3)] sm:rounded-[1.65rem] sm:p-8 lg:p-10"
      aria-label="Submit a client review"
    >
      <input
        type="hidden"
        name="access_key"
        value="0cede430-6fdf-4abc-aa9e-39bd3b0e2d50"
      />
      <input
        type="hidden"
        name="subject"
        value="New portfolio review awaiting approval"
      />
      <input
        type="hidden"
        name="from_name"
        value="Muhammad Husnain Review Profile"
      />
      <input type="hidden" name="review_status" value="Pending approval" />
      <input ref={redirectRef} type="hidden" name="redirect" />

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="review-botcheck">Leave this field unchecked</label>
        <input
          id="review-botcheck"
          name="botcheck"
          type="checkbox"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ReviewField label="Your name" htmlFor="review-name">
          <input
            id="review-name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={80}
            autoComplete="name"
            placeholder="Enter your name"
            className={reviewControlClassName}
          />
        </ReviewField>

        <ReviewField label="Related project" htmlFor="review-project">
          <select
            id="review-project"
            name="project"
            required
            defaultValue=""
            className={reviewControlClassName}
          >
            <option value="" disabled>
              Select a project
            </option>
            {projects.map((project) => (
              <option key={project.id} value={`${project.title} (${project.id})`}>
                {project.title}
              </option>
            ))}
          </select>
        </ReviewField>

        <ReviewField label="Your country" htmlFor="review-country">
          <select
            id="review-country"
            name="country"
            required
            defaultValue=""
            className={reviewControlClassName}
          >
            <option value="" disabled>
              Select your country
            </option>
            {countries.map(([flag, country]) => (
              <option key={country} value={`${flag} ${country}`}>
                {flag} {country}
              </option>
            ))}
          </select>
        </ReviewField>

        <fieldset>
          <legend className="mb-3 block text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/55">
            Your rating
          </legend>
          <div className="flex min-h-14 items-center gap-1 rounded-xl border border-white/[0.08] bg-[#08080e] px-4">
            {ratings.map((value) => (
              <label
                key={value}
                className="focus-within:ring-accent/70 cursor-pointer rounded-md p-1 transition hover:-translate-y-0.5 focus-within:ring-2"
              >
                <input
                  className="sr-only"
                  type="radio"
                  name="rating"
                  value={`${value} out of 5 stars`}
                  checked={rating === value}
                  onChange={() => setRating(value)}
                  aria-label={`${value} out of 5 stars`}
                />
                <Star
                  className={
                    value <= rating
                      ? "h-6 w-6 fill-[#f8c94e] text-[#f8c94e]"
                      : "h-6 w-6 text-white/20"
                  }
                />
              </label>
            ))}
            <span className="ml-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white/40">
              {rating}/5
            </span>
          </div>
        </fieldset>
      </div>

      <div className="mt-6">
        <ReviewField label="Your review" htmlFor="review-message">
          <textarea
            id="review-message"
            name="message"
            required
            minLength={20}
            maxLength={1500}
            rows={6}
            placeholder="Share your experience with the project..."
            className={`${reviewControlClassName} resize-none`}
          />
        </ReviewField>
      </div>

      <div className="mt-7 flex flex-col gap-4 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-lg text-xs leading-[1.7] text-white/40">
          Reviews are checked before publishing to keep this profile genuine and spam-free.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          data-cursor="hover"
          className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border-2 border-accent bg-accent px-7 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:bg-[#004643] hover:shadow-[0_0_28px_rgba(10,143,135,0.35)] disabled:cursor-wait disabled:opacity-60"
        >
          {status === "sending" ? "Submitting..." : "Submit review"}
        </button>
      </div>

      <div className="min-h-7" aria-live="polite">
        {status === "sent" ? (
          <p className="mt-5 flex items-center gap-2 text-sm text-[#31b8ae]">
            <CheckCircle2 className="h-4 w-4" />
            Review submitted successfully. It will appear after approval.
          </p>
        ) : null}
      </div>
    </form>
  );
}

function ReviewField({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-3 block text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/55"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
