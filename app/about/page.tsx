"use client";

import { NumberTicker } from "@/components/ui/number-ticker";
import { Eye, Flag, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const executiveLeadership = [
  {
    name: "Arch. Theresa C. Bisnar",
    role: "President & CEO",
    image: "/ceo_picture.png",
  },
  {
    name: "Engr. Adonis Aquillo",
    role: "Chief Operating Officer",
    image: "/executive_placeholder.png",
  },
  {
    name: "Cynthia Ibay",
    role: "Corporate Secretary",
    image: "/executive_placeholder.png",
  },
  {
    name: "Bonifacio B. Cortez",
    role: "Business Development Management",
    image: "/executive_placeholder.png",
  },
  {
    name: "Rene Alcairo",
    role: "VP - Finance Operation",
    image: "/executive_placeholder.png",
  },
  {
    name: "VP - Finance Construction",
    role: "VP - Finance Construction",
    image: "/executive_placeholder.png",
  },
  {
    name: "VP - Construction",
    role: "VP - Construction",
    image: "/executive_placeholder.png",
  },
  {
    name: "Consultant",
    role: "Consultant",
    image: "/executive_placeholder.png",
  },
  {
    name: "Legal Department",
    role: "Legal Department",
    image: "/executive_placeholder.png",
  },
];
const departmentHeads = [
  {
    name: "IT Manager",
    role: "IT Manager",
    image: "/executive_placeholder.png",
  },
  {
    name: "Sales & Marketing Manager",
    role: "Sales & Marketing Manager",
    image: "/executive_placeholder.png",
  },
  {
    name: "Operations Manager",
    role: "Operations Manager",
    image: "/executive_placeholder.png",
  },
  {
    name: "Admin Manager",
    role: "Admin Manager",
    image: "/executive_placeholder.png",
  },
  {
    name: "Finance Manager",
    role: "Finance Manager",
    image: "/executive_placeholder.png",
  },
  {
    name: "Project Manager",
    role: "Project Manager",
    image: "/executive_placeholder.png",
  },
  {
    name: "Purchasing Manager",
    role: "Purchasing Manager",
    image: "/executive_placeholder.png",
  },
];

const staffMembers = [
  {
    name: "IT Staff",
    role: "Information Technology",
    image: "/executive_placeholder.png",
  },
  {
    name: "Sales Staff",
    role: "Sales",
    image: "/executive_placeholder.png",
  },
  {
    name: "Marketing Staff",
    role: "Marketing",
    image: "/executive_placeholder.png",
  },
  {
    name: "Accountant",
    role: "Accounting",
    image: "/executive_placeholder.png",
  },
  {
    name: "Accounting Manager",
    role: "Finance",
    image: "/executive_placeholder.png",
  },
  {
    name: "Purchasing Supervisor",
    role: "Purchasing",
    image: "/executive_placeholder.png",
  },
  {
    name: "Purchasing Staff",
    role: "Purchasing",
    image: "/executive_placeholder.png",
  },
];

/* ================= TYPES ================= */

type Person = {
  name: string;
  role: string;
  image?: string;
};

type SectionProps = {
  data: Person[];
};

type ProfileCardProps = {
  person: Person;
  size?: "large" | "medium" | "small";
  roleColor?: string;
};

/* ================= SIZE CONFIG ================= */

const CARD_SIZES = {
  large: {
    card: "w-64 shadow-lg hover:shadow-2xl",
    image: "h-40 w-40",
  },
  medium: {
    card: "w-56 shadow-md hover:shadow-xl",
    image: "h-32 w-32",
  },
  small: {
    card: "w-52 shadow-sm hover:shadow-lg",
    image: "h-28 w-28",
  },
} as const;

/* ================= PROFILE CARD ================= */

const ProfileCard = ({
  person,
  size = "medium",
  roleColor = "text-gray-600",
}: ProfileCardProps) => {
  const currentSize = CARD_SIZES[size];

  return (
    <div
      className={`
        group relative
        overflow-hidden
        rounded-2xl
        bg-white
        p-6
        text-center
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:shadow-xl
        ${currentSize.card}
      `}
    >
      {/* SUBTLE TOP ACCENT (now clipped correctly) */}
      <div className="absolute left-0 top-0 h-1 w-full bg-blue-400/80" />

      {/* IMAGE */}
      <div
        className={`
          relative mx-auto
          mt-2
          overflow-hidden rounded-full
          bg-slate-100
          ring-4 ring-blue-400/15
          transition
          group-hover:ring-blue-400
          ${currentSize.image}
        `}
      >
        {person.image ? (
          <Image
            src={person.image}
            alt={person.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-gray-400">
            No Image
          </div>
        )}
      </div>

      {/* NAME */}
      <h4 className="mt-5 text-sm font-semibold text-gray-900">
        {person.name}
      </h4>

      {/* ROLE */}
      <p className={`mt-1 text-xs font-medium ${roleColor}`}>{person.role}</p>
    </div>
  );
};

/* ================= SECTIONS ================= */
export const ExecutiveLeadershipSection = ({ data }: SectionProps) => (
  <div className="mb-20">
    <h3 className="mb-10 text-xl font-bold text-gray-900 text-center">
      Executive Leadership
    </h3>

    <div
      className="
      grid
      gap-y-14
      gap-x-10
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-5
      justify-items-center
    "
    >
      {data.map((person, i) => (
        <ProfileCard
          key={i}
          person={person}
          size="medium"
          roleColor="text-blue-400"
        />
      ))}
    </div>
  </div>
);
export const DepartmentHeadsSection = ({ data }: SectionProps) => (
  <div className="mb-20">
    <h3 className="mb-10 text-xl font-bold text-gray-900 text-center">
      Department Heads
    </h3>

    <div className="grid gap-y-14 gap-x-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
      {data.map((person, i) => (
        <ProfileCard
          key={i}
          person={person}
          size="medium"
          roleColor="text-blue-400"
        />
      ))}
    </div>
  </div>
);
export const StaffSection = ({ data }: SectionProps) => (
  <div>
    <h3 className="mb-10 text-xl font-bold text-gray-900 text-center">
      Operations & Support Staff
    </h3>

    <div className="grid gap-y-14 gap-x-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
      {data.map((person, i) => (
        <ProfileCard
          key={i}
          person={person}
          size="small"
          roleColor="text-gray-600"
        />
      ))}
    </div>
  </div>
);

export default function AboutPage() {
  const [open, setOpen] = useState(false);
  const sectionRef = useRef(null);
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateKey((prev) => prev + 1); // restart ticker
        }
      },
      { threshold: 0.5 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen ">
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
            <Link href="./about" className="underline">
              ABOUT US
            </Link>
            <Link href="./projects">PROJECTS</Link>
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
              <Link
                href="./about"
                className="underline"
                onClick={() => setOpen(false)}
              >
                ABOUT US
              </Link>
              <Link href="./projects" onClick={() => setOpen(false)}>
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

      {/* CEO MESSAGE SECTION */}
      <section className="relative w-full min-h-screen bg-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[48px_48px] " />

        <div className="relative mx-auto flex min-h-screen max-w-6xl px-6 py-24 md:py-16 items-start md:items-center">
          <div className="grid w-full gap-14 md:grid-cols-2 items-center">
            {/* Image Column */}
            <div className="relative flex justify-center md:justify-start">
              <div className="relative">
                <Image
                  src="/ceo_picture.png"
                  alt="Chief Executive Officer"
                  width={380}
                  height={380}
                  className="relative z-10 w-95 h-95 object-contain"
                />

                {/* Framing */}
                <div className="absolute -top-6 -left-2 h-full w-full border-2 border-blue-400" />
              </div>
            </div>

            {/* Text Column */}
            <div>
              <span className="inline-block mb-3 text-xs font-semibold tracking-widest uppercase text-blue-400">
                Leadership
              </span>

              <h2 className="mb-6 text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                Message from the CEO
              </h2>

              <div className="space-y-6 text-sm md:text-base text-gray-700 leading-relaxed">
                <p>
                  A.D. Lacson III Developer and Construction Corporation stands
                  as a committed contributor to national development, driven by
                  quality, innovation, and responsibility in every project we
                  undertake.
                </p>

                <p>
                  As we move toward future milestones, we remain guided by the
                  relationships we have built with our partners and clients.
                  Growth for us is not measured by structures alone, but by
                  trust earned through collaboration.
                </p>

                <p>
                  We believe that construction is more than building — it is
                  about shaping environments, empowering communities, and
                  sustaining progress.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-10 border-l-4 border-blue-400 pl-4">
                <p className="font-semibold text-gray-900 uppercase">
                  Arch. Theresa C. Bisnar
                </p>
                <p className="text-sm text-gray-500">Chief Executive Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION, MISSION & GOALS SECTION */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/home_images/pse.jpg"
          alt="Infrastructure Project"
          fill
          priority
          className="object-cover scale-105"
        />

        {/* Strong Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Blue Accent Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.25),transparent_50%)]" />

        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-center py-28">
          <div className="mx-auto w-full max-w-6xl px-6 md:px-12 text-white">
            {/* Header */}
            <div className="mb-20 text-center">
              <span className="mb-4 inline-block text-xs font-semibold tracking-widest uppercase text-blue-400">
                Our Foundation
              </span>
              <h2 className="text-3xl font-extrabold md:text-5xl">
                Vision, Mission & Goals
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-white/85 leading-relaxed">
                Our principles define who we are, how we work, and where we are
                headed as a trusted construction and development partner.
              </p>
            </div>

            {/* Cards */}
            <div className="grid gap-10 md:grid-cols-3">
              {/* Vision */}
              <div className="group flex h-full flex-col rounded-2xl border border-white/15 bg-white/15 p-8 backdrop-blur-2xl shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/60 hover:shadow-2xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/25 text-blue-400 group-hover:bg-blue-400 group-hover:text-black transition">
                  <Eye size={28} />
                </div>

                <h3 className="mb-4 text-2xl font-bold">Our Vision</h3>

                <p className="text-base leading-relaxed text-white/90">
                  A.D. Lacson III Developers and Construction Corporation
                  envisions a future where communities grow stronger through
                  quality infrastructure, ethical leadership, and innovative
                  construction solutions that turn aspirations into reality.
                </p>
              </div>

              {/* Mission */}
              <div className="group flex h-full flex-col rounded-2xl border border-white/15 bg-white/15 p-8 backdrop-blur-2xl shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/60 hover:shadow-2xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/25 text-blue-400 group-hover:bg-blue-400 group-hover:text-black transition">
                  <Target size={28} />
                </div>

                <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>

                <p className="text-base leading-relaxed text-white/90">
                  We are committed to delivering high-quality, cost-effective
                  projects on time by fostering a skilled and motivated
                  workforce, embracing innovation, and building long-term
                  relationships founded on trust and performance excellence.
                </p>
              </div>

              {/* Goals */}
              <div className="group flex h-full flex-col rounded-2xl border border-white/15 bg-white/15 p-8 backdrop-blur-2xl shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/60 hover:shadow-2xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/25 text-blue-400 group-hover:bg-blue-400 group-hover:text-black transition">
                  <Flag size={28} />
                </div>

                <h3 className="mb-4 text-2xl font-bold">Our Goals</h3>

                <ul className="space-y-4 text-base text-white/90">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-400" />
                    Deliver service quality that exceeds industry standards
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-400" />
                    Drive sustainable growth through innovation and efficiency
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-400" />
                    Maintain strong partnerships with clients and stakeholders
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-400" />
                    Build with passion, integrity, and purpose
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORY SECTION */}
      <section
        ref={sectionRef}
        className=" relative w-full bg-slate-100 overflow-hidden py-20 md:py-0 md:min-h-screen md:flex md:items-center"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[48px_48px]" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-16">
          <div className="grid items-center gap-14 md:grid-cols-2">
            {/* IMAGE GRID */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  "/home_images/construction&design.png",
                  "/home_images/telecommunication.png",
                  "/home_images/electrical1.png",
                  "/home_images/safety.png",
                ].map((src, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl shadow-lg"
                  >
                    <Image
                      src={src}
                      alt={`History ${index + 1}`}
                      width={400}
                      height={400}
                      className="h-52 sm:h-60 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
                  </div>
                ))}
              </div>
            </div>

            {/* TEXT CONTENT */}
            <div>
              <span className="mb-3 inline-block text-xs font-semibold tracking-widest uppercase text-blue-400">
                Our Journey
              </span>

              <h2 className="mb-6 text-3xl font-extrabold md:text-4xl text-gray-900">
                Company History
              </h2>

              <div className="space-y-6 text-base leading-relaxed text-gray-700">
                <p>
                  A.D. Lacson III Developers and Construction Corporation was
                  founded in 2008 through the vision of its CEO and President,
                  <span className="font-semibold text-gray-900">
                    {" "}
                    Arch. Theresa C. Bisnar
                  </span>
                  .
                </p>

                <p>
                  Initially serving NCR and nearby provinces, the company
                  steadily expanded its capabilities through dedication and
                  results.
                </p>

                <p>
                  Today, A.D. Lacson III employs over 500 professionals
                  nationwide.
                </p>
              </div>

              {/* Highlight stats */}
              <div className="mt-10 flex gap-10">
                <div>
                  <p className="text-2xl font-extrabold tracking-tighter text-blue-400">
                    2008
                  </p>

                  <p className="text-sm text-gray-600">Founded</p>
                </div>

                <div>
                  <div className="flex items-end gap-0">
                    <NumberTicker
                      key={`workforce-${animateKey}`}
                      value={500}
                      className="text-2xl font-extrabold tracking-tighter text-blue-400"
                    />
                    <span className="text-2xl font-extrabold text-blue-400">
                      +
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Workforce</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY POLICY SECTION */}
      <section className="relative w-full bg-white overflow-hidden py-20 md:py-0 md:min-h-screen md:flex md:items-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[48px_48px]" />
        {/* Blue accent strip */}
        <div className="absolute left-0 top-0 h-full w-1.5 bg-blue-400" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-16">
          <div className="grid items-center gap-14 md:grid-cols-2">
            {/* TEXT */}
            <div>
              <span className="mb-3 inline-block text-xs font-semibold tracking-widest uppercase text-blue-400">
                Our Commitment
              </span>

              <h2 className="mb-6 text-3xl font-extrabold text-gray-900 md:text-4xl">
                Quality Policy
              </h2>

              <div className="space-y-5 text-sm md:text-base leading-relaxed text-gray-700">
                <p>
                  A.D. Lacson III Developers and Construction Corporation’s
                  success is rooted in an uncompromising commitment to quality
                  across every phase of operation — from planning to execution.
                </p>

                <p>
                  We ensure that all projects are delivered on time, within
                  budget, and aligned with both client and internal standards
                  through careful management of EMM (Equipment, Material,
                  Manpower) and ORS (Operations, Response, Safety).
                </p>

                <p>
                  Management continuously strengthens the Quality Management
                  System by embedding quality objectives across all departments.
                </p>

                {/* Key Points */}
                <ul className="mt-6 space-y-3">
                  {[
                    "Maintain strong partnerships with suppliers and stakeholders",
                    "Provide adequate equipment, materials, and skilled manpower",
                    "Ensure a safe and healthy work environment",
                    "Promote learning and professional growth among employees",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="pt-4">
                  All personnel are encouraged to actively participate in
                  sustaining and improving quality standards throughout the
                  organization.
                </p>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative group">
              <Image
                src="/home_images/quality.png"
                alt="Quality and Construction"
                width={900}
                height={900}
                className=" rounded-2xl object-cover shadow-lg transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-2xl "
              />

              {/* Floating badge */}
              <div className=" absolute -bottom-5 -left-5 rounded-lg bg-blue-400 px-5 py-3 text-xs font-semibold text-white shadow-md transition-all duration-300 ease-out group-hover:shadow-xl group-hover:-translate-y-0.5 ">
                Excellence • Safety • Trust
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANAGEMENT SECTION */}
      <section className="relative w-full py-28 overflow-hidden bg-slate-100">
        {/* Subtle grid texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[48px_48px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-16">
          {/* ===== HEADER ===== */}
          <div className="mb-20 text-center">
            <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mt-6 rounded-2xl border border-white/15 bg-white/15 p-8 backdrop-blur-2xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/60 hover:shadow-2xl">
              🚧 The site is still in development 🚧
            </h4>
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-400">
              Organization
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">
              Board of Directors & Management
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              A.D. Lacson III Developers and Construction Corporation leadership
              and operational management team.
            </p>
          </div>

          {/* ===== SECTIONS ===== */}
          <ExecutiveLeadershipSection data={executiveLeadership} />
          <DepartmentHeadsSection data={departmentHeads} />
          <StaffSection data={staffMembers} />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#00349a] text-white py-6 px-4 text-xs md:text-sm">
        <p>2026 © A.D LACSON III | Developer and Construction Corporation</p>
      </footer>
    </div>
  );
}
