"use client";
import React from "react";
import { BeamsUpstream } from "@/components/ui/beams-upstream";
import { useRouter } from "next/navigation";

export default function BeamsUpstreamDemo() {
    const router = useRouter();
  return (
    <div className="h-[100vh] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-500 mb-4">
          404 - Page Not Found
        </h1>
        <h1 className="text-lg md:text-2xl text-neutral-400 mb-4">
          {"Oops! The page you're looking for doesn't exist."}
        </h1>
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8" />
        <button type="button" className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        
        onClick={() => router.push('/portfolio')}>
          Go back home
        </button>
      </div>
      <BeamsUpstream />
    </div>
  );
}
