"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[var(--bg)] border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display font-700 text-[var(--text-primary)] text-[17px] tracking-tight hover:opacity-80 transition-opacity"
        >
          DevCollab
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          <Link
            href="/projects"
            className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/developers"
            className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            Developers
          </Link>
          <Link
            href="/#how-it-works"
            className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            How it Works
          </Link>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${darkMode ? "bg-gray-700" : "bg-amber-200"}`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 flex items-center justify-center text-xs ${darkMode ? "translate-x-5" : ""}`}
            >
              {darkMode ? "🌙" : "☀️"}
            </span>
          </button>

          <Link
            href="/login"
            className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors px-3 py-1.5"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="text-sm bg-[var(--accent)] text-white px-4 py-1.5 rounded-md hover:bg-[var(--accent-hover)] transition-colors font-medium"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className="w-5 flex flex-col gap-1">
            <span
              className={`block h-0.5 bg-[var(--text-primary)] transition-all ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`}
            ></span>
            <span
              className={`block h-0.5 bg-[var(--text-primary)] transition-all ${mobileOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block h-0.5 bg-[var(--text-primary)] transition-all ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)] px-5 py-4 flex flex-col gap-3">
          <Link
            href="/projects"
            className="text-sm text-[var(--text-secondary)]"
          >
            Projects
          </Link>
          <Link
            href="/developers"
            className="text-sm text-[var(--text-secondary)]"
          >
            Developers
          </Link>
          <Link
            href="/#how-it-works"
            className="text-sm text-[var(--text-secondary)]"
          >
            How it Works
          </Link>
          <hr className="border-[var(--border)]" />
          <Link href="/login" className="text-sm text-[var(--text-secondary)]">
            Log in
          </Link>
          <Link
            href="/signup"
            className="text-sm font-medium text-[var(--text-primary)]"
          >
            Sign up →
          </Link>
        </div>
      )}
    </nav>
  );
}
