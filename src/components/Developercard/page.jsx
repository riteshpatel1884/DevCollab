export default function DeveloperCard({ developer }) {
  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl px-5 py-4 flex items-center gap-4 hover:border-[var(--text-tertiary)] hover:shadow-sm transition-all duration-200 cursor-pointer">
      <div className="w-9 h-9 rounded-full bg-[var(--bg-subtle)] flex items-center justify-center text-lg shrink-0">
        {developer.avatar}
      </div>
      <div>
        <p className="text-sm font-medium text-[var(--text-primary)]">
          {developer.name}
        </p>
        <p className="text-xs text-[var(--text-secondary)]">
          {developer.role} · {developer.stack}
        </p>
      </div>
    </div>
  );
}
