"use client";

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

type InfoPageProps = {
    title: string;
    subtitle?: string;
    content: string;
    backHref: string;
    accentColor?: string; // e.g., 'text-lime-400'
    borderColor?: string; // e.g., 'border-lime-400'
    shadowColor?: string; // e.g., 'shadow-[4px_4px_0px_0px_rgba(163,230,53,1)]'
    secondaryColor?: string; // e.g., 'text-cyan-400'
};

export function InfoPage({
    title,
    subtitle,
    content,
    backHref,
    accentColor = 'text-lime-400',
    borderColor = 'border-lime-400',
    shadowColor = 'shadow-[4px_4px_0px_0px_rgba(163,230,53,1)]',
    secondaryColor = 'text-cyan-400'
}: InfoPageProps) {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4 md:p-12 font-mono">
            <div className="max-w-4xl mx-auto space-y-12">

                {/* Navigation */}
                <Link
                    href={backHref}
                    className={`inline-flex items-center gap-2 px-4 py-2 border-2 ${borderColor} bg-zinc-900 ${accentColor} font-bold hover:bg-lime-400 hover:text-black transition-all ${shadowColor} active:translate-x-[2px] active:translate-y-[2px] active:shadow-none mb-8`}
                >
                    <ArrowLeft size={20} />
                    VOLVER
                </Link>

                {/* Header */}
                <header className="space-y-4">
                    <h1 className={`text-4xl md:text-6xl font-black font-headline ${accentColor} uppercase tracking-tighter`}>
                        {title}
                    </h1>
                    {subtitle && (
                        <p className={`text-xl text-zinc-400 font-bold border-l-4 ${secondaryColor} pl-4`}>
                            {subtitle}
                        </p>
                    )}
                </header>

                {/* Content Box */}
                <div className={`border-4 border-zinc-700 bg-zinc-900/50 p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(39,39,42,1)] prose prose-invert prose-zinc max-w-none 
          prose-headings:font-headline prose-headings:text-lime-400 prose-headings:uppercase prose-headings:tracking-tight
          prose-strong:${secondaryColor} prose-a:${accentColor} prose-li:marker:${accentColor}
        `}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {content}
                    </ReactMarkdown>
                </div>

                {/* Footer */}
                <footer className="pt-12 border-t-2 border-zinc-800 text-zinc-500 text-sm">
                    SPOT © 2026 • TODOS LOS DERECHOS RESERVADOS
                </footer>
            </div>
        </div>
    );
}
