"use server";

import { submitContactForm as submitContactFormAction } from "./schemas";
import type { ContactFormState } from "./schemas";

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  return submitContactFormAction(prevState, formData);
}
