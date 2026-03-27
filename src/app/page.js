import Link from "next/link";
import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";
import ProjectCard from "@/components/Projectcard/page";
import DeveloperCard from "@/components/Developercard/page";
import { developers, projects, stats } from "../lib/data";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "var(--bg)" }}
    >
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-5 pt-20 pb-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <h1 className="font-display font-bold text-5xl md:text-6xl leading-[1.05] tracking-tight mb-6">
              <span style={{ color: "var(--text-primary)" }}>Find your </span>
              <span style={{ color: "var(--text-tertiary)" }}>
                next
                <br />
                build partner.
              </span>
            </h1>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-8 max-w-sm">
              DevCollab connects developers who want to build together. Browse
              open projects and ship something real.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-[var(--accent)] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
            >
              Browse Projects →
            </Link>
          </div>

          {/* Right — developer cards */}
          <div className="flex flex-col gap-3">
            {developers.map((dev) => (
              <DeveloperCard key={dev.id} developer={dev} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-subtle)]">
        <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: stats.developers, label: "DEVELOPERS" },
            { value: stats.projects, label: "PROJECTS" },
            { value: stats.collaborations, label: "COLLABORATIONS" },
            { value: stats.skillsListed, label: "SKILLS LISTED" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display font-bold text-4xl text-[var(--text-primary)] mb-1">
                {stat.value}
              </p>
              <p className="text-[10px] font-mono-custom tracking-widest text-[var(--text-tertiary)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-5 py-16 w-full">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display font-semibold text-2xl text-[var(--text-primary)]">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section
        id="how-it-works"
        className="max-w-6xl mx-auto px-5 pb-16 w-full"
      >
        <h2 className="font-display font-semibold text-2xl text-[var(--text-primary)] mb-8">
          How it works
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              num: "01",
              title: "Build Your Profile",
              desc: "List your tech stack, skills, and GitHub. Let the right projects find you.",
            },
            {
              num: "02",
              title: "Browse or Post Projects",
              desc: "Find a project that excites you — or post your own idea and invite collaborators.",
            },
            {
              num: "03",
              title: "Apply & Connect",
              desc: "Apply with a note, get accepted, and jump straight into a shared workspace with real-time chat.",
            },
          ].map((step) => (
            <div
              key={step.num}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6"
            >
              <p className="font-display font-bold text-4xl text-[var(--border)] mb-4">
                {step.num}
              </p>
              <h3 className="font-medium text-[var(--text-primary)] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-5 pb-20 w-full">
        <div className="bg-[var(--accent)] rounded-2xl px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-display font-bold text-2xl text-white mb-1">
              Ready to build something?
            </h2>
            <p className="text-sm text-white/60">
              Join developers already on DevCollab.
            </p>
          </div>
          <Link
            href="/signup"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-[var(--accent)] text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Started Free →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
