'use server';

import { z } from 'zod';
import { summarizeProjectDescription } from '@/ai/flows/summarize-project-description';
import type { SummarizerState } from './schemas';

const SummarizeSchema = z.object({
  description: z.string().min(50, { message: 'Description must be at least 50 characters long.' }),
});

export async function summarizeProjectDescriptionAction(
  prevState: SummarizerState,
  formData: FormData
): Promise<SummarizerState> {
  const validatedFields = SummarizeSchema.safeParse({
    description: formData.get('description'),
  });

  if (!validatedFields.success) {
    return {
      summary: '',
      message: validatedFields.error.flatten().fieldErrors.description?.[0] || 'Invalid input.',
      status: 'error',
    };
  }
  
  try {
    const result = await summarizeProjectDescription({ projectDescription: validatedFields.data.description });
    if (result && result.summary) {
        return {
            summary: result.summary,
            message: 'Summary generated successfully.',
            status: 'success',
        };
    }
    return {
      summary: '',
      message: 'Failed to generate summary.',
      status: 'error',
    };

  } catch (error) {
    console.error(error);
    return {
      summary: '',
      message: 'An unexpected error occurred.',
      status: 'error',
    };
  }
}
