const WEB3FORMS_ACCESS_KEY = "0cede430-6fdf-4abc-aa9e-39bd3b0e2d50";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 5000;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  subject?: unknown;
  from_name?: unknown;
  botcheck?: unknown;
};

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ success: false, message: "Invalid request." }, { status: 400 });
  }

  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  const botcheck = typeof payload.botcheck === "string" ? payload.botcheck.trim() : "";

  if (botcheck) {
    return Response.json({ success: true, message: "Message sent successfully." });
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return Response.json(
      { success: false, message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (message.length < 3 || message.length > MAX_MESSAGE_LENGTH) {
    return Response.json(
      { success: false, message: "Message must contain between 3 and 5000 characters." },
      { status: 400 },
    );
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: email,
        email,
        message,
        subject: "New portfolio inquiry",
        from_name: "Muhammad Husnain Portfolio",
      }),
      cache: "no-store",
    });

    const result = (await response.json()) as {
      success?: boolean;
      message?: string;
    };

    if (!response.ok || !result.success) {
      return Response.json(
        {
          success: false,
          message: result.message || "Web3Forms rejected the submission.",
        },
        { status: response.status >= 400 ? response.status : 502 },
      );
    }

    return Response.json({
      success: true,
      message: result.message || "Message sent successfully.",
    });
  } catch (error) {
    console.error("Web3Forms delivery failed:", error);
    return Response.json(
      {
        success: false,
        message: "The email service could not be reached. Please try again.",
      },
      { status: 502 },
    );
  }
}
