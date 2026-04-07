import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-6">
      <div className="max-w-xl text-center space-y-4">
        <h1 className="text-4xl font-semibold">Page not found</h1>
        <p className="text-muted-foreground">
          The page you are looking for does not exist or may have moved.
        </p>
        <Button asChild className="transition-all duration-200 hover:scale-105">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
