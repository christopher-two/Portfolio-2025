export type FormState = {
  message: string;
  status: 'idle' | 'success' | 'error';
};

export type ContactFormState = FormState;

export type SummarizerState = FormState & {
  summary: string;
};

// This is a placeholder for a server action.
// In a real scenario, you would have a server action that handles the form submission.
export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log('Received contact form submission:');
  console.log('Name:', formData.get('name'));
  console.log('Email:', formData.get('email'));
  console.log('Message:', formData.get('message'));

  // You can add logic here to send an email, save to a database, etc.

  return {
    message: "Your message has been sent successfully! I'll get back to you soon.",
    status: 'success',
  };
}
