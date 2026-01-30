"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SustainabilityPage() {
  const [open, setOpen] = useState(false);

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
            <Link href="./projects">PROJECTS</Link>
            <Link href="./sustainability" className="underline">
              SUSTAINABILITY
            </Link>
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
              <Link href="./projects" onClick={() => setOpen(false)}>
                PROJECTS
              </Link>
              <Link
                href="./sustainability"
                onClick={() => setOpen(false)}
                className="underline"
              >
                SUSTAINABILITY
              </Link>
              <Link href="./services" onClick={() => setOpen(false)}>
                SERVICES
              </Link>
            </nav>
          </aside>
        </>
      )}

      {/* Overview */}
      <section className="relative min-h-screen overflow-hidden bg-slate-50">
        {/* Background Image */}
        <Image
          src="/others/health&safety1.jpg" // replace with sustainability / construction image
          alt="Sustainability Overview"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />

        {/* Soft Color Overlay */}
        <div className="absolute inset-0 bg-blue-400/20" />

        {/* Radial Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
              Sustainability
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
              Overview
            </h2>

            <p className="mt-6 max-w-3xl text-gray-800 leading-relaxed">
              Our sustainability framework reflects our commitment to
              responsible construction, innovation, and long-term value creation
              for communities and stakeholders. Through integrated systems and
              ethical practices, we ensure progress that is both measurable and
              meaningful.
            </p>

            {/* Accent Line */}
            <div className="mt-10 h-1 w-28 rounded-full bg-blue-400" />
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="relative min-h-screen bg-white flex items-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[48px_48px] " />
        <div className="mx-auto max-w-7xl px-6 py-20 w-full">
          <h4 className="text-center mb-10 text-xl md:text-2xl font-semibold text-gray-900 mt-6 rounded-2xl border border-white/15 bg-white/15 p-8 backdrop-blur-2xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/60 hover:shadow-2xl">
            🚧 The site is still in development 🚧
          </h4>
          <div className="grid items-center gap-16 md:grid-cols-2">
            {/* LEFT — IMAGE GRID */}
            <div className="grid grid-cols-2 gap-6">
              {[
                "/home_images/integrity.png",
                "/home_images/integrity.png",
                "/home_images/integrity.png",
                "/home_images/integrity.png",
              ].map((src, i) => (
                <div
                  key={i}
                  className="group relative h-44 overflow-hidden rounded-2xl shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                >
                  <Image
                    src={src}
                    alt="Certification"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Soft Corporate Overlay */}
                  <div className="absolute inset-0 bg-blue-500/0 transition-colors duration-500 group-hover:bg-blue-500/10" />
                </div>
              ))}
            </div>

            {/* RIGHT — CONTENT */}
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-blue-400">
                Certifications
              </span>

              <h3 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">
                Internationally Certified Standards
              </h3>

              <p className="mt-6 text-base leading-relaxed text-gray-600 max-w-xl">
                A.D. Lacson III Developer and Construction Corporation complies
                with internationally recognized management system standards to
                ensure quality, environmental responsibility, and occupational
                health and safety across all operations.
              </p>

              <ul className="mt-8 space-y-3 text-sm font-medium text-gray-700">
                <li>• ISO 9001 — Quality Management System</li>
                <li>• ISO 14001 — Environmental Management System</li>
                <li>• ISO 45001 — Occupational Health & Safety</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATED MANAGEMENT SYSTEM */}
      <section className="relative min-h-screen w-full bg-slate-100 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/services/construction/architectural.jpg" // replace with construction / management / site image
          alt="Integrated Management System"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-blue-900/85" />

        {/* Subtle Blue Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.25),transparent_50%)]" />

        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-center">
          <div className="mx-auto max-w-7xl px-6 md:px-16">
            <div className="max-w-3xl">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-400">
                Integrated Management System
              </span>

              <h3 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-white">
                A Unified Approach to Quality, Safety & Sustainability
              </h3>

              <p className="mt-8 text-base md:text-lg leading-relaxed text-white/90">
                A.D. Lacson III Developer and Construction Corporation
                implements an Integrated Management System (IMS) that seamlessly
                combines Quality Management, Environmental Management, and
                Occupational Health and Safety into a single, cohesive
                framework.
              </p>

              <p className="mt-6 text-base md:text-lg leading-relaxed text-white/90">
                Through this integrated approach, the company ensures consistent
                project execution, regulatory compliance, proactive risk
                management, and continual improvement across all operations. The
                IMS strengthens operational efficiency while upholding the
                highest standards of safety, environmental responsibility, and
                service excellence.
              </p>

              {/* Accent Line */}
              <div className="mt-10 h-1 w-28 rounded-full bg-blue-400" />
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="relative bg-white">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[48px_48px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:min-h-screen md:px-16 md:flex md:items-center">
          <div className="grid w-full gap-16 md:grid-cols-2 md:items-center">
            {/* LEFT – TEXT */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
                Quality
              </span>

              <h3 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900">
                Excellence Built Into Every Project
              </h3>

              <p className="mt-8 text-base leading-relaxed text-gray-700">
                At A.D. Lacson III Developer and Construction Corporation,
                quality is the foundation of every structure we build. Our
                projects are guided by strict engineering standards, meticulous
                planning, and continuous inspection to ensure precision,
                durability, and performance. Through disciplined execution and a
                culture of accountability, we consistently deliver work that
                meets client expectations and complies with international
                quality management standards.
              </p>

              {/* Accent line */}
              <div className="mt-10 h-1 w-24 rounded-full bg-blue-400" />
            </div>

            {/* RIGHT – IMAGE */}
            <div className="relative h-72 sm:h-96 md:h-130 w-full overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/home_images/quality1.png"
                alt="Quality Construction Work"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HEALTH & SAFETY */}
      <section className="relative overflow-hidden bg-black">
        {/* Background Image */}
        <Image
          src="/others/health&safetybg.jpg"
          alt="Health and Safety Background"
          fill
          sizes="100vw"
          className="object-cover"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_55%)]" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:min-h-screen md:flex md:items-center md:px-16">
          <div className="grid w-full gap-16 md:grid-cols-2 md:items-center">
            {/* LEFT – IMAGE */}
            <div className="relative h-72 sm:h-96 md:h-130 w-full overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/home_images/health&safety.png"
                alt="Health and Safety Practices"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* RIGHT – TEXT */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                Health & Safety
              </span>

              <h3 className="mt-4 text-3xl md:text-4xl font-extrabold text-white">
                Protecting People. Securing Every Site.
              </h3>

              <p className="mt-8 text-base leading-relaxed text-white/80">
                At A.D. Lacson III Developer and Construction Corporation, the
                health and safety of our workforce and stakeholders are
                paramount. We implement proactive safety programs, continuous
                training, and strict compliance with occupational health and
                safety standards to minimize risk across all project sites. By
                embedding safety into our daily operations, we foster a culture
                of responsibility, awareness, and accountability that ensures
                every project is completed without compromising human
                well-being.
              </p>

              {/* Accent Line */}
              <div className="mt-10 h-1 w-24 rounded-full bg-blue-400" />
            </div>
          </div>
        </div>
      </section>

      {/* ENVIRONMENT */}
      <section className="relative min-h-screen overflow-hidden bg-white">
        {/* Background Image */}
        <Image
          src="/others/environment.jpg"
          alt="Environmental Responsibility"
          fill
          sizes="100vw"
          className="object-cover"
        />

        {/* Soft White Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Subtle Blue Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_60%)]" />

        {/* CONTENT */}
        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 md:px-16">
          <div className="max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
              Environment
            </span>

            <h3 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-white/80">
              Building Responsibly for a Sustainable Future
            </h3>

            <p className="mx-auto mt-8 text-base md:text-lg leading-relaxed text-white/90">
              A.D. Lacson III Developer and Construction Corporation integrates
              environmental responsibility into every phase of construction.
              Through efficient resource utilization, waste minimization, and
              environmentally conscious construction methods, the company
              reduces its ecological footprint while maintaining structural
              integrity and project efficiency. By complying with environmental
              regulations and promoting sustainable site practices, A.D. Lacson
              III ensures that development progresses in harmony with the
              communities and environments it serves.
            </p>

            {/* Accent Line */}
            <div className="mx-auto mt-10 h-1 w-28 rounded-full bg-blue-500" />
          </div>
        </div>
      </section>

      {/* DATA PRIVACY ACT */}
      <section className="relative overflow-hidden bg-slate-100">
        {/* Subtle Background Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[48px_48px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.12),transparent_60%)]" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:min-h-screen md:flex md:items-center md:px-16">
          <div className="grid w-full gap-16 md:grid-cols-2 md:items-center">
            {/* LEFT – TEXT */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
                Data Privacy Act
              </span>

              <h3 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900">
                Protecting Information with Integrity and Responsibility
              </h3>

              <p className="mt-8 text-base leading-relaxed text-gray-700">
                A.D. Lacson III Developer and Construction Corporation
                recognizes the importance of safeguarding personal information
                entrusted to the company. In compliance with the Data Privacy
                Act of 2012 and applicable Philippine laws, the organization
                upholds strict standards of confidentiality, transparency, and
                responsible data handling across all business operations.
              </p>

              <p className="mt-6 text-base leading-relaxed text-gray-700">
                Personal data collected for project coordination, workforce
                management, regulatory compliance, and legitimate business
                operations are processed only when necessary. Appropriate
                organizational, technical, and physical safeguards are
                implemented to prevent unauthorized access, misuse, loss, or
                disclosure, while respecting the rights of data subjects in
                accordance with law.
              </p>

              {/* Accent Line */}
              <div className="mt-10 h-1 w-24 rounded-full bg-blue-400" />
            </div>

            {/* RIGHT – IMAGE */}
            <div className="relative h-72 sm:h-96 md:h-130 w-full overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/others/dataprivacy1.jpg"
                alt="Data Privacy and Information Security"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRITY & GOVERNANCE */}
      <section className="relative overflow-hidden bg-linear-to-b from-white to-slate-50">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[48px_48px]" />

        {/* Soft Blue Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.10),transparent_60%)]" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:min-h-screen md:flex md:items-center md:px-16">
          <div className="grid w-full gap-16 md:grid-cols-2 md:items-center">
            {/* LEFT – IMAGE */}
            <div className="relative h-72 sm:h-96 md:h-130 w-full overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/home_images/integrity1.png"
                alt="Integrity and Corporate Governance"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* RIGHT – TEXT */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
                Integrity & Governance
              </span>

              <h3 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900">
                Upholding Ethical Standards in Every Engagement
              </h3>

              <p className="mt-8 text-base leading-relaxed text-gray-700">
                Integrity is a fundamental principle that guides A.D. Lacson III
                Developer and Construction Corporation in all aspects of its
                business. The company is committed to conducting operations with
                honesty, transparency, and accountability, ensuring that all
                projects and partnerships are governed by sound ethical and
                professional standards.
              </p>

              <p className="mt-6 text-base leading-relaxed text-gray-700">
                Acts of bribery, corruption, non-compliance, or unlawful conduct
                are strictly prohibited. Directors, officers, and employees are
                expected to act lawfully and in the public interest, uphold
                ethical behavior in all dealings, and discourage improper
                practices among clients, suppliers, subcontractors, and
                partners. Through clear governance policies and a culture of
                responsibility, A.D. Lacson III reinforces trust, credibility,
                and long-term sustainability in the construction industry.
              </p>

              {/* Key Values */}
              <div className="mt-10 border-l-4 border-blue-400 pl-6">
                <p className="font-semibold text-gray-900 uppercase tracking-wide">
                  Integrity · Honesty · Ethics
                </p>
              </div>
            </div>
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
