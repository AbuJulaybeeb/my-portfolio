"use server";

export interface ContactState {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
}

export async function submitContactForm(
  prevState: ContactState | null,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const subject = formData.get("subject")?.toString().trim() || "Portfolio Project Inquiry";
  const message = formData.get("message")?.toString().trim();

  const errors: ContactState["errors"] = {};

  if (!name || name.length < 2) {
    errors.name = ["Name must be at least 2 characters."];
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = ["Please provide a valid email address."];
  }

  if (!message || message.length < 10) {
    errors.message = ["Message must be at least 10 characters long."];
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the errors in the form.",
      errors,
    };
  }

  // Simulate server processing or webhook forwarding
  // In production, this can seamlessly pipe to Resend, SendGrid, or Discord/Telegram webhook
  try {
    // Artificial brief network delay for authentic tactile UI feedback
    await new Promise((res) => setTimeout(res, 800));

    // Log securely on server console
    console.log(`[Contact Submission] From: ${name} <${email}> | Subject: ${subject}`);
    console.log(`[Message Body]: ${message}`);

    return {
      success: true,
      message: `Thank you, ${name}! Your message has been received. Jibril will respond within 24 hours.`,
    };
  } catch (err) {
    console.error("Error processing contact form:", err);
    return {
      success: false,
      message: "An unexpected error occurred. Please reach out directly to abujulaybeeb08@gmail.com.",
    };
  }
}
