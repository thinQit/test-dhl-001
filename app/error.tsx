"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-6">
      <div className="max-w-xl text-center space-y-4">
        <h2 className="text-3xl font-semibold">Something went wrong</h2>
        <p className="text-muted-foreground">
          We hit a temporary issue while loading this page.
        </p>
        <Button onClick={reset} className="transition-all duration-200 hover:scale-105">
          Try again
        </Button>
      </div>
    </div>
  );
}
