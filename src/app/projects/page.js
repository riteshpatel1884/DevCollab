import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../lib/data";

export const metadata = {
  title: "Projects — DevCollab",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="max-w-6xl mx-auto px-5 py-12 w-full flex-1">
        <div className="mb-8">
          <h1 className="font-display font-bold text-3xl text-[var(--text-primary)] mb-2">
            Open Projects
          </h1>
          <p className="text-[var(--text-secondary)] text-sm">
            {projects.length} projects looking for collaborators
          </p>
        </div>

        {/* Filters row */}
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          {[
            "All",
            "Productivity",
            "Developer Tools",
            "DevOps",
            "Beginner",
            "Intermediate",
            "Advanced",
          ].map((filter) => (
            <button
              key={filter}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                filter === "All"
                  ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                  : "bg-[var(--bg-card)] text-[var(--text-secondary)] border-[var(--border)] hover:border-[var(--text-secondary)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
