import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.id}`} className="block group">
      <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6 h-full hover:border-[var(--text-tertiary)] hover:shadow-sm transition-all duration-200">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-display font-semibold text-[var(--text-primary)] text-lg leading-snug group-hover:opacity-80 transition-opacity">
            {project.title}
          </h3>
          <span className="shrink-0 text-[10px] font-mono-custom font-medium text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
            {project.status}
          </span>
        </div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          {project.tagline}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs bg-[var(--tag-bg)] text-[var(--tag-text)] px-2 py-0.5 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
