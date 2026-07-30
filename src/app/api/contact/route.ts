import { personal } from "@/data/content";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 5000;

type ContactPayload = {
  email?: unknown;
  message?: unknown;
  website?: unknown;
};

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message =
    typeof payload.message === "string" ? payload.message.trim() : "";
  const website =
    typeof payload.website === "string" ? payload.website.trim() : "";

  // Silently accept bot submissions caught by the hidden honeypot field.
  if (website) {
    return Response.json({ ok: true });
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (message.length < 3 || message.length > MAX_MESSAGE_LENGTH) {
    return Response.json(
      { error: "Message must contain between 3 and 5000 characters." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "Email service is not configured." },
      { status: 503 },
    );
  }

  const recipient = process.env.CONTACT_TO_EMAIL || personal.email;
  const from =
    process.env.CONTACT_FROM_EMAIL ||
    "Muhammad Husnain Portfolio <onboarding@resend.dev>";

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": crypto.randomUUID(),
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email,
        subject: `New portfolio inquiry from ${email}`,
        text: [
          "New message from the Muhammad Husnain portfolio contact form.",
          "",
          `Visitor email: ${email}`,
          "",
          "Message:",
          message,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      console.error("Contact email delivery failed:", response.status);
      return Response.json(
        { error: "Message delivery failed." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { error: "Message delivery failed." },
      { status: 502 },
    );
  }
}
