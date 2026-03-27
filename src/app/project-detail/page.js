import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { projects } from "../../../lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }));
}

export function generateMetadata({ params }) {
  const project = projects.find((p) => p.id === Number(params.id));
  if (!project) return {};
  return { title: `${project.title} — DevCollab` };
}

export default function ProjectDetailPage({ params }) {
  const project = projects.find((p) => p.id === Number(params.id));
  if (!project) notFound();

  const completedMilestones = project.milestones.filter((m) => m.done).length;
  const progressPct = Math.round(
    (completedMilestones / project.milestones.length) * 100,
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-5 py-8 w-full">
          {/* Back */}
          <div className="mb-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              ← Back
            </Link>
          </div>

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-[var(--text-tertiary)] mb-5">
            <Link
              href="/projects"
              className="hover:text-[var(--text-secondary)] transition-colors"
            >
              Projects
            </Link>
            <span>›</span>
            <span className="text-[var(--text-tertiary)]">
              {project.category}
            </span>
            <span>›</span>
            <span className="text-[var(--text-secondary)]">
              {project.title}
            </span>
          </nav>

          {/* Title row */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-[var(--text-primary)] leading-tight">
              {project.title}
            </h1>
            <span className="shrink-0 flex items-center gap-1.5 text-xs font-medium text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
              {project.status}
            </span>
          </div>

          <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-5 max-w-2xl">
            {project.tagline}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm bg-[var(--tag-bg)] text-[var(--tag-text)] px-3 py-1 rounded-lg border border-[var(--border)]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-secondary)] mb-10 pb-8 border-b border-[var(--border)]">
            <span className="flex items-center gap-1.5">
              <span>📅</span> Posted {project.postedAgo}
            </span>
            <span className="flex items-center gap-1.5">
              <span>👥</span> {project.applicants} applicants
            </span>
            <span className="flex items-center gap-1.5">
              <span>🕐</span> {project.hoursPerWeek}
            </span>
            <span className="flex items-center gap-1.5">
              <span>🏷️</span> {project.category}
            </span>
            <span className="bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full">
              {project.level}
            </span>
          </div>

          {/* Two-column layout */}
          <div className="grid md:grid-cols-[1fr_300px] gap-10">
            {/* Left column */}
            <div className="space-y-10">
              {/* About */}
              <section>
                <h2 className="font-display font-semibold text-lg text-[var(--text-primary)] mb-4">
                  About this project
                </h2>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {project.description}
                </p>
              </section>

              {/* Features */}
              <section>
                <h2 className="font-display font-semibold text-lg text-[var(--text-primary)] mb-4">
                  Planned Features
                </h2>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                    >
                      <span className="text-[var(--text-tertiary)] mt-0.5">
                        •
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>
              </section>

              {/* Milestones */}
              <section>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-display font-semibold text-lg text-[var(--text-primary)]">
                    Milestones
                  </h2>
                  <span className="text-xs text-[var(--text-tertiary)]">
                    {progressPct}% complete
                  </span>
                </div>
                {/* Progress bar */}
                <div className="h-1 bg-[var(--border)] rounded-full mb-5 overflow-hidden">
                  <div
                    className="h-full bg-[var(--accent)] rounded-full transition-all"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
                <div className="space-y-3">
                  {project.milestones.map((milestone, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          milestone.done
                            ? "bg-[var(--accent)] border-[var(--accent)]"
                            : "border-[var(--border)] bg-white"
                        }`}
                      >
                        {milestone.done && (
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                          >
                            <path
                              d="M2 5l2.5 2.5L8 3"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                      <span
                        className={`text-sm ${milestone.done ? "line-through text-[var(--text-tertiary)]" : "text-[var(--text-primary)]"}`}
                      >
                        {milestone.label}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Who we're looking for */}
              <section>
                <h2 className="font-display font-semibold text-lg text-[var(--text-primary)] mb-4">
                  Who we're looking for
                </h2>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                  {project.whoWeAreLookingFor}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.rolesNeeded.map((role) => (
                    <span
                      key={role}
                      className="text-sm bg-[var(--tag-bg)] text-[var(--tag-text)] px-3 py-1 rounded-lg border border-[var(--border)]"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* Right sidebar */}
            <div className="space-y-4">
              {/* CTA card */}
              <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5">
                <p className="text-xs font-mono-custom tracking-widest text-[var(--text-tertiary)] mb-4">
                  INTERESTED?
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-3 bg-[var(--bg-subtle)] rounded-lg">
                    <p className="font-display font-bold text-2xl text-[var(--text-primary)]">
                      {project.applicants}
                    </p>
                    <p className="text-[10px] text-[var(--text-tertiary)] mt-0.5 tracking-wider">
                      APPLICANTS
                    </p>
                  </div>
                  <div className="text-center p-3 bg-[var(--bg-subtle)] rounded-lg">
                    <p className="font-display font-bold text-xl text-[var(--text-primary)]">
                      {project.teamSize}
                    </p>
                    <p className="text-[10px] text-[var(--text-tertiary)] mt-0.5 tracking-wider">
                      TEAM SIZE
                    </p>
                  </div>
                  <div className="text-center p-3 bg-[var(--bg-subtle)] rounded-lg">
                    <p className="font-display font-bold text-xl text-[var(--text-primary)]">
                      {project.timeline}
                    </p>
                    <p className="text-[10px] text-[var(--text-tertiary)] mt-0.5 tracking-wider">
                      TIMELINE
                    </p>
                  </div>
                  <div className="text-center p-3 bg-[var(--bg-subtle)] rounded-lg">
                    <p className="font-display font-bold text-xl text-[var(--text-primary)]">
                      {project.level}
                    </p>
                    <p className="text-[10px] text-[var(--text-tertiary)] mt-0.5 tracking-wider">
                      LEVEL
                    </p>
                  </div>
                </div>
                <button className="w-full bg-[var(--accent)] text-white text-sm font-semibold py-3 rounded-lg hover:bg-[var(--accent-hover)] transition-colors mb-3">
                  Apply to Collaborate
                </button>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              </div>

              {/* Posted by */}
              <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5">
                <p className="text-xs font-mono-custom tracking-widest text-[var(--text-tertiary)] mb-3">
                  POSTED BY
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--bg-subtle)] flex items-center justify-center text-xl">
                    {project.author.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--text-primary)]">
                      {project.author.name}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      {project.author.role} Developer
                    </p>
                  </div>
                </div>
                <p className="text-xs text-[var(--text-tertiary)] mb-0.5">
                  {project.author.github} on GitHub
                </p>
                <p className="text-xs text-[var(--text-tertiary)]">
                  Member since {project.author.memberSince}
                </p>
              </div>

              {/* Roles needed */}
              <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5">
                <p className="text-xs font-mono-custom tracking-widest text-[var(--text-tertiary)] mb-3">
                  ROLES NEEDED
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.rolesNeeded.map((role) => (
                    <span
                      key={role}
                      className="text-xs bg-[var(--tag-bg)] text-[var(--tag-text)] px-3 py-1.5 rounded-lg border border-[var(--border)]"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
