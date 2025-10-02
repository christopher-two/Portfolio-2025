"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import { BrainCircuit, Loader2 } from "lucide-react";

import { summarizeProjectDescriptionAction } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import type { SummarizerState } from "@/lib/schemas";

const initialState: SummarizerState = {
  summary: "",
  message: "",
  status: "idle",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full group">
      {pending ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <BrainCircuit className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
      )}
      Generate Summary
    </Button>
  );
}

export function SummarizerForm() {
  const [state, formAction] = useFormState(summarizeProjectDescriptionAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.status === "error" && state.message) {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <form action={formAction} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="description">Project Description</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Paste your detailed project description here. The more detail, the better the summary..."
            required
            minLength={50}
            rows={15}
          />
        </div>
        <SubmitButton />
      </form>
      <div className="space-y-4">
        <Label>Generated Summary</Label>
        <Card className="min-h-[358px] border-2 border-dashed border-border flex items-center justify-center">
            <CardContent className="p-6">
                {state.status === 'idle' && !state.summary && (
                    <p className="text-sm text-muted-foreground text-center">Your generated summary will appear here.</p>
                )}
                {state.status !== 'idle' && state.summary && (
                    <p className="text-sm text-foreground/90">{state.summary}</p>
                )}
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
