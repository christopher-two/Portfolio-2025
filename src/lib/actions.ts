"use server";

import { submitContactForm as submitContactFormAction, summarizeProjectDescriptionAction as summarizeAction } from "./schemas";
import type { ContactFormState, SummarizerState } from "./schemas";

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  return submitContactFormAction(prevState, formData);
}

export async function summarizeProjectDescriptionAction(
  prevState: SummarizerState,
  formData: FormData
): Promise<SummarizerState> {
  return summarizeAction(prevState, formData);
}
