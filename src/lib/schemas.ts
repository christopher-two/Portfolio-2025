import { z } from "zod";

// --- Contact Form ---
export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  status: "success" | "error" | "idle";
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    const errorMessages = validatedFields.error.flatten().fieldErrors;
    const firstError = Object.values(errorMessages).flat()[0] || "Invalid input. Please check your fields.";
    return {
      message: firstError,
      status: "error",
    };
  }

  try {
    // In a real app, you'd send an email, save to a DB, etc.
    console.log("New contact form submission:", validatedFields.data);
    return {
      message: "Your message has been sent successfully!",
      status: "success",
    };
  } catch (error) {
    console.error("Contact form submission error:", error);
    return {
      message: "An unexpected error occurred. Please try again.",
      status: "error",
    };
  }
}
