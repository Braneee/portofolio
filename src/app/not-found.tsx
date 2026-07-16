import Link from "next/link";
import Button from "@/components/ui/Button";
import { Home, Compass, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <div className="flex justify-center mb-6">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-danger/10 text-danger border border-danger/20">
          <AlertTriangle className="h-8 w-8" />
        </span>
      </div>
      
      <h1 className="font-sans text-4xl font-extrabold text-text-primary tracking-tight sm:text-5xl">
        404 - Page Not Found
      </h1>
      
      <p className="mt-4 font-sans text-sm text-text-secondary leading-relaxed">
        Sorry, the page you are looking for does not exist or has been moved to another URL. Let&apos;s get you back on track!
      </p>

      <div className="mt-8 flex justify-center gap-4 flex-wrap">
        <Link href="/">
          <Button variant="primary" size="md">
            <Home className="h-4 w-4" />
            <span>Go to Home</span>
          </Button>
        </Link>
        <Link href="/projects">
          <Button variant="secondary" size="md">
            <Compass className="h-4 w-4" />
            <span>View Projects</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
