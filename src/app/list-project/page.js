import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";
import { developers } from "../../lib/data";

export const metadata = {
  title: "Developers — DevCollab",
};

export default function DevelopersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="max-w-6xl mx-auto px-5 py-12 w-full flex-1">
        <div className="mb-8">
          <h1 className="font-display font-bold text-3xl text-[var(--text-primary)] mb-2">
            Developers
          </h1>
          <p className="text-[var(--text-secondary)] text-sm">
            {developers.length} developers available to collaborate
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {developers.map((dev) => (
            <div
              key={dev.id}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6 hover:border-[var(--text-tertiary)] hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--bg-subtle)] flex items-center justify-center text-2xl">
                  {dev.avatar}
                </div>
                <div>
                  <p className="font-medium text-[var(--text-primary)]">
                    {dev.name}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {dev.role} · {dev.stack}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[var(--text-tertiary)]">
                  {dev.github}
                </span>
                <button className="text-xs bg-[var(--bg-subtle)] text-[var(--text-secondary)] px-3 py-1.5 rounded-md hover:bg-[var(--border)] transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
