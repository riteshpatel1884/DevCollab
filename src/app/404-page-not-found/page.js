import Link from "next/link";
import Navbar from "@/components/Navbar/page";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-5">
        <div className="text-center">
          <p className="font-display font-bold text-8xl text-[var(--border)] mb-4">
            404
          </p>
          <h1 className="font-display font-semibold text-2xl text-[var(--text-primary)] mb-2">
            Page not found
          </h1>
          <p className="text-[var(--text-secondary)] text-sm mb-8">
            The page you're looking for doesn't exist.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[var(--accent)] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
          >
            ← Back home
          </Link>
        </div>
      </main>
    </div>
  );
}
