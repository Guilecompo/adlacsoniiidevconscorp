"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type TabKey = "flagship" | "completed" | "ongoing";

const flagshipProjects = [
  { title: "SUNVIEW PALACE", src: "/complete_projects/sunview.jpg" },
  { title: "PARQUE ESPAÑA", src: "/complete_projects/parque.jpg" },
  { title: "PSE TEKTITE TOWERS", src: "/complete_projects/pse.jpg" },
  { title: "R-SQUARE RESIDENCES", src: "/complete_projects/rsquare.jpg" },
  { title: "1000 MW POWER PLANT", src: "/complete_projects/1000mw.jpg" },
  { title: "MALAMPAYA POWER PLANT", src: "/complete_projects/offshore.jpg" },
];
// const completedProjects = [
//   { title: "Project Alpha", src: "/sample_incomplete/sample10.jpg" },
//   { title: "Project Beta", src: "/sample_incomplete/sample9.jpg" },
//   { title: "Project Gamma", src: "/sample_incomplete/sample7.jpg" },
//   { title: "Project Delta", src: "/sample_incomplete/sample4.jpg" },
//   { title: "Project Epsilon", src: "/sample_incomplete/sample2.jpg" },
//   { title: "Project Zeta", src: "/sample_incomplete/sample.jpg" },
// ];
// const ongoingProjects = [
//   { title: "Project Alpha", src: "/sample_incomplete/sample7.jpg" },
//   { title: "Project Beta", src: "/sample_incomplete/sample9.jpg" },
//   { title: "Project Gamma", src: "/sample_incomplete/sample10.jpg" },
//   { title: "Project Delta", src: "/sample_incomplete/sample.jpg" },
//   { title: "Project Epsilon", src: "/sample_incomplete/sample2.jpg" },
//   { title: "Project Zeta", src: "/sample_incomplete/sample4.jpg" },
// ];

export default function ProjectPage() {
  const [open, setOpen] = useState(false);

  const [activeTab, setActiveTab] = useState<TabKey>("flagship");

  const projects =
    activeTab === "flagship" ? flagshipProjects : activeTab === "completed";
  // ? completedProjects
  // : ongoingProjects;

  const tabs: { key: TabKey; label: string }[] = [
    { key: "flagship", label: "Flagship Projects" },
    // { key: "completed", label: "Completed Projects" },
    // { key: "ongoing", label: "Ongoing Projects" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 py-2">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3">
            <Image
              src="/logo.png"
              alt="logo image"
              width={40}
              height={40}
              sizes="(min-width: 768px) 50px, 40px"
              className="w-10 h-10 md:w-12.5 md:h-12.5"
            />
            <div>
              <span className="block text-base md:text-xl font-bold text-[#00349a]">
                A.D. LACSON III
              </span>
              <span className="block text-xs md:text-sm font-semibold text-[#00349a]">
                Developer and Construction Corporation
              </span>
            </div>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#00349a]">
            <Link href="./">HOME</Link>
            <Link href="./about">ABOUT US</Link>
            <Link href="./projects" className="underline">
              PROJECTS
            </Link>
            <Link href="./sustainability">SUSTAINABILITY</Link>
            <Link href="./services">SERVICES</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-[#00349a] text-2xl"
          >
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      {open && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setOpen(false)}
          />

          {/* Sidebar */}
          <aside className="fixed right-0 top-0 z-50 h-full w-64 bg-white shadow-lg p-6 flex flex-col">
            <button
              onClick={() => setOpen(false)}
              className="self-end text-xl font-bold"
            >
              ✕
            </button>

            <nav className="mt-8 flex flex-col gap-4 text-[#00349a] font-semibold">
              <Link href="./" onClick={() => setOpen(false)}>
                HOME
              </Link>
              <Link href="./about" onClick={() => setOpen(false)}>
                ABOUT US
              </Link>
              <Link
                href="./projects"
                onClick={() => setOpen(false)}
                className="underline"
              >
                PROJECTS
              </Link>
              <Link href="./sustainability" onClick={() => setOpen(false)}>
                SUSTAINABILITY
              </Link>
              <Link href="./services" onClick={() => setOpen(false)}>
                SERVICES
              </Link>
            </nav>
          </aside>
        </>
      )}

      {/* === PROJECTS SECTION === */}
      <section className="relative w-full bg-slate-50 py-28 overflow-hidden">
        {/* Soft background accent */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,52,154,0.06),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-16">
          {/* Header */}
          <div className="mb-14 max-w-3xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-400">
              Portfolio
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">
              Our Projects
            </h2>

            <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
              Explore our flagship developments, completed constructions, and
              ongoing projects that reflect our commitment to quality,
              innovation, and excellence.
            </p>
          </div>

          {/* Tabs (Original Style) */}
          <div className="mb-12 flex flex-wrap gap-10 border-b justify-start">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`pb-3 font-semibold transition 
            text-xs sm:text-sm md:text-base
            ${
              activeTab === tab.key
                ? "border-b-2 border-[#00349a] text-[#00349a]"
                : "text-gray-500 hover:text-gray-900"
            }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects &&
              Array.isArray(projects) &&
              projects.map(
                (project: { title: string; src: string }, index: number) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    {/* Image */}
                    <div className="relative h-60 w-full overflow-hidden">
                      <Image
                        src={project.src}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Hover Title */}
                      <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <h3 className="text-base font-semibold text-white">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Static Title */}
                    <div className="px-4 py-4 text-center">
                      <h3 className="text-sm md:text-base font-semibold text-gray-800 group-hover:text-[#00349a] transition">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                ),
              )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#00349a] text-white py-6 text-start px-5 text-sm">
        <p>2026 © A.D LACSON III | Developer and Construction Corporation</p>
      </footer>
    </div>
  );
}
