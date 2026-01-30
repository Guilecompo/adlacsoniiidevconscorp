"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  Building2,
  MonitorPlay,
  RadioTower,
  ShieldCheck,
  Zap,
} from "lucide-react";

const constructionAndDesign = {
  title: "Construction & Design",
  icon: Building2,
  items: [
    "General Construction & Engineering Works",
    "Structural Design Works",
    "MEPFS Design Works",
    "Architectural & Design Works",
  ],
};

const telecommunications = {
  title: "Telecommunications",
  icon: RadioTower,
  items: [
    "Tower Erection & Antenna Installation",
    "Cellular Base Station Construction",
    "Microwave & Radio Equipment",
    "Fiber Optic Transmission Networks",
    "Structured Cabling & OSP Works",
    "Broadband Subscriber Line Installation",
  ],
};

const electricalAndRenewableEnergy = {
  title: "Electrical & Renewable Energy",
  icon: Zap,
  items: [
    "Commercial Photovoltaic Systems",
    "Solar LED Street Light Installation",
    "Mini Hydro Turbines",
    "Energy-Efficient Electrical Systems",
  ],
};

const safetyAndSecuritySystems = {
  title: "Safety & Security Systems",
  icon: ShieldCheck,
  items: [
    "CCTV & Access Control Systems",
    "Fire Alarm & Public Address Systems",
    "Walk-through Detectors & Baggage X-ray",
  ],
};

const itAndAudioVisualSolutions = {
  title: "IT & Audio Visual Solutions",
  icon: MonitorPlay,
  items: [
    "Audio Visual & Teleconferencing Systems",
    "LED Wall & Interactive Board Systems",
    "Large LED Display & Information Boards",
  ],
};

export default function ServicesPage() {
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
            <Link href="./sustainability">SUSTAINABILITY</Link>
            <Link href="./services" className="underline">
              SERVICES
            </Link>
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
              <Link href="./sustainability" onClick={() => setOpen(false)}>
                SUSTAINABILITY
              </Link>
              <Link
                href="./services"
                onClick={() => setOpen(false)}
                className="underline"
              >
                SERVICES
              </Link>
            </nav>
          </aside>
        </>
      )}

      {/* CONSTRUCTION & DESIGN */}
      <section className="relative min-h-screen bg-[#00349a]/90 text-white py-24 md:py-0">
        {/* Background Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.25),transparent_50%)]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 md:px-16">
          <div className="grid w-full items-center gap-16 md:grid-cols-2">
            {/* LEFT — IMAGE GRID */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "/services/construction/general_construction.jpg",
                "/services/construction/structural.jpg",
                "/services/construction/mepfs.jpg",
                "/services/construction/architectural.jpg",
              ].map((src, index) => (
                <div
                  key={index}
                  className="relative h-40 md:h-48 lg:h-56 overflow-hidden rounded-2xl shadow-lg"
                >
                  <Image
                    src={src}
                    alt={`Construction Design ${index + 1}`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>

            {/* RIGHT — CONTENT */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                Services
              </span>

              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
                {constructionAndDesign.title}
              </h2>

              <p className="mt-6 max-w-xl text-sm md:text-base text-white/80 leading-relaxed">
                A.D. Lacson III Developer and Construction Corporation delivers
                comprehensive construction and design solutions backed by
                engineering excellence, technical expertise, and disciplined
                execution.
              </p>

              {/* SERVICE LIST */}
              <ul className="mt-8 space-y-4">
                {constructionAndDesign.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm md:text-base text-white/90"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Accent Line */}
              <div className="mt-10 h-1 w-24 rounded-full bg-blue-400" />
            </div>
          </div>
        </div>
      </section>

      {/* TELECOMMUNICATIONS */}
      <section className="relative min-h-screen overflow-hidden bg-slate-100 py-24 md:py-0">
        {/* Subtle Grid Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[48px_48px]" />
        {/* Subtle Background Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.12),transparent_60%)]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 md:px-16">
          <div className="grid w-full items-center gap-16 md:grid-cols-2">
            {/* LEFT — CONTENT */}
            <div className="text-gray-900">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
                Services
              </span>

              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
                {telecommunications.title}
              </h2>

              <p className="mt-6 max-w-xl text-sm md:text-base leading-relaxed text-gray-600">
                A.D. Lacson III Developer and Construction Corporation delivers
                end-to-end telecommunications solutions that support reliable
                connectivity, network expansion, and modern digital
                infrastructure across the country.
              </p>

              {/* SERVICE LIST */}
              <ul className="mt-8 space-y-4">
                {telecommunications.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm md:text-base text-gray-700"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Accent Line */}
              <div className="mt-10 h-1 w-24 rounded-full bg-blue-500" />
            </div>

            {/* RIGHT — IMAGE */}
            <div className="relative h-72 md:h-105 w-full overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/services/telecommunication.jpg"
                alt="Telecommunications Infrastructure"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ELECTRICAL & RENEWABLE ENERGY */}
      <section className="relative min-h-screen overflow-hidden bg-[#00349a]/90 py-24 md:py-0">
        {/* Subtle Energy Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.25),transparent_60%)]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 md:px-16">
          <div className="grid w-full items-center gap-16 md:grid-cols-2">
            {/* LEFT — IMAGE */}
            <div className="relative h-72 md:h-110 w-full overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/services/energy.jpg"
                alt="Electrical and Renewable Energy Systems"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* RIGHT — CONTENT */}
            <div className="text-white">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-300">
                Services
              </span>

              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
                {electricalAndRenewableEnergy.title}
              </h2>

              <p className="mt-6 max-w-xl text-sm md:text-base leading-relaxed text-white/80">
                A.D. Lacson III Developer and Construction Corporation delivers
                efficient and sustainable electrical and renewable energy
                solutions designed to support modern infrastructure, reduce
                energy consumption, and promote long-term environmental
                responsibility.
              </p>

              {/* SERVICE LIST */}
              <ul className="mt-8 space-y-4">
                {electricalAndRenewableEnergy.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm md:text-base text-white/90"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-300 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Accent Line */}
              <div className="mt-10 h-1 w-24 rounded-full bg-blue-300" />
            </div>
          </div>
        </div>
      </section>

      {/* SAFETY & SECURITY SYSTEMS */}
      <section className="relative min-h-screen bg-slate-100 overflow-hidden py-24 md:py-0">
        {/* Subtle Grid Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[48px_48px]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 md:px-16">
          <div className="grid w-full items-center gap-16 md:grid-cols-2">
            {/* LEFT — CONTENT */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
                Services
              </span>

              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight text-gray-900">
                {safetyAndSecuritySystems.title}
              </h2>

              <p className="mt-6 max-w-xl text-sm md:text-base leading-relaxed text-gray-600">
                A.D. Lacson III Developer and Construction Corporation provides
                integrated safety and security system solutions designed to
                protect people, assets, and facilities. Our systems are
                engineered for reliability, compliance, and seamless operational
                control.
              </p>

              {/* SERVICE LIST */}
              <ul className="mt-8 space-y-4">
                {safetyAndSecuritySystems.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm md:text-base text-gray-700"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Accent Line */}
              <div className="mt-10 h-1 w-24 rounded-full bg-blue-500" />
            </div>

            {/* RIGHT — IMAGE GRID */}
            <div className="grid grid-cols-2 gap-6">
              {/* Large Image */}
              <div className="group relative col-span-2 h-56 overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                <Image
                  src="/services/safety&security/cctv1.jpg"
                  alt="Security Systems Installation"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
              </div>

              {/* Small Image */}
              <div className="group relative h-48 overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                <Image
                  src="/services/safety&security/access_control.jpg"
                  alt="CCTV and Access Control"
                  fill
                  sizes="(min-width: 768px) 25vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
              </div>

              {/* Small Image */}
              <div className="group relative h-48 overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                <Image
                  src="/services/safety&security/fire_alarm.jpg"
                  alt="Fire Alarm and Safety Systems"
                  fill
                  sizes="(min-width: 768px) 25vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IT & AUDIO VISUAL SOLUTIONS */}
      <section className="relative min-h-screen bg-[#00349a]/90 overflow-hidden py-24 md:py-0">
        {/* Subtle Tech Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_60%)]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 md:px-16">
          <div className="grid w-full items-center gap-16 md:grid-cols-2">
            {/* LEFT — IMAGE GRID */}
            <div className="grid grid-cols-2 gap-6">
              {/* Large Image */}
              <div className="group relative col-span-2 h-56 overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
                <Image
                  src="/services/visual_solution/teleconferencing.jpg"
                  alt="Audio Visual and IT Solutions"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15" />
              </div>

              {/* Small Image */}
              <div className="group relative h-48 overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
                <Image
                  src="/services/visual_solution/ledwall.jpg"
                  alt="LED Wall and Display Systems"
                  fill
                  sizes="(min-width: 768px) 25vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15" />
              </div>

              {/* Small Image */}
              <div className="group relative h-48 overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
                <Image
                  src="/services/visual_solution/billboard.jpg"
                  alt="Digital Billboard Systems"
                  fill
                  sizes="(min-width: 768px) 25vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15" />
              </div>
            </div>

            {/* RIGHT — CONTENT */}
            <div className="text-white">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-300">
                Services
              </span>

              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
                {itAndAudioVisualSolutions.title}
              </h2>

              <p className="mt-6 max-w-xl text-sm md:text-base leading-relaxed text-white/80">
                A.D. Lacson III Developer and Construction Corporation delivers
                advanced IT and audio visual solutions that enhance
                communication, collaboration, and information delivery. Our
                systems are designed for performance, scalability, and seamless
                integration across corporate, commercial, and institutional
                environments.
              </p>

              {/* SERVICE LIST */}
              <ul className="mt-8 space-y-4">
                {itAndAudioVisualSolutions.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm md:text-base text-white/90"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-300 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Accent Line */}
              <div className="mt-10 h-1 w-24 rounded-full bg-blue-300" />
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
