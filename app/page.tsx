"use client";

import { Mail, MapPinned, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Building2,
  MonitorPlay,
  RadioTower,
  ShieldCheck,
  Zap,
} from "lucide-react";

const services = [
  {
    title: "Construction & Design",
    icon: Building2,
    items: [
      "General Construction & Engineering Works",
      "Structural Design Works",
      "MEPFS Design Works",
      "Architectural & Design Works",
    ],
  },
  {
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
  },
  {
    title: "Electrical & Renewable Energy",
    icon: Zap,
    items: [
      "Commercial Photovoltaic Systems",
      "Solar LED Street Light Installation",
      "Mini Hydro Turbines",
      "Energy-Efficient Electrical Systems",
    ],
  },
  {
    title: "Safety & Security Systems",
    icon: ShieldCheck,
    items: [
      "CCTV & Access Control Systems",
      "Fire Alarm & Public Address Systems",
      "Walk-through Detectors & Baggage X-ray",
    ],
  },
  {
    title: "IT & Audio Visual Solutions",
    icon: MonitorPlay,
    items: [
      "Audio Visual & Teleconferencing Systems",
      "LED Wall & Interactive Board Systems",
      "Large LED Display & Information Boards",
    ],
  },
];

const projects = [
  { title: "SUNVIEW PALACE", src: "/complete_projects/sunview.jpg" },
  { title: "PARQUE ESPAÑA", src: "/complete_projects/parque.jpg" },
  { title: "PSE TEKTITE TOWERS", src: "/complete_projects/pse.jpg" },
  { title: "R-SQUARE RESIDENCES", src: "/complete_projects/rsquare.jpg" },
  { title: "1000 MW POWER PLANT", src: "/complete_projects/1000mw.jpg" },
  { title: "MALAMPAYA POWER PLANT", src: "/complete_projects/offshore.jpg" },
];

const images = [
  "/home_images/pse.jpg",
  "/home_images/parque.jpg",
  "/home_images/pse.jpg",
];

type Project = {
  title: string;
  src: string;
};

export default function Home() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const [activeImage, setActiveImage] = useState<Project | null>(null);

  const [alert, setAlert] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const onFormSubmitted = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // ✅ Frontend validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setAlert({
        type: "error",
        message: "Please fill in all required fields.",
      });
      return;
    }

    setIsSending(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setAlert({
          type: "success",
          message:
            "Your message has been sent successfully. We will contact you shortly.",
        });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setAlert({
          type: "error",
          message: "Unable to send your message. Please try again later.",
        });
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setAlert({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };
  const handleEmailClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      "Adlacson Construction – Website Inquiry",
    );
    const body = encodeURIComponent(
      `Date: ${new Date().toLocaleDateString("en-PH", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}

        Name:
        Email:
        Purpose:

        Message:


        Thank you.

        Best regards,`,
    );

    const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(
      navigator.userAgent,
    );

    if (isMobile) {
      // 📱 Gmail app (or default mail app)
      window.location.href = `mailto:adlacson3devconscorp.itdep@gmail.com?subject=${subject}&body=${body}`;
    } else {
      // 🖥 Gmail web in new tab
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=adlacson3devconscorp.itdep@gmail.com&su=${subject}&body=${body}`,
        "_blank",
        "noopener,noreferrer",
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* zxc */}
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
            <Link href="./" className="underline">
              HOME
            </Link>
            <Link href="./about">ABOUT US</Link>
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
              <Link
                href="./"
                onClick={() => setOpen(false)}
                className="underline"
              >
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
              <Link href="./services" onClick={() => setOpen(false)}>
                SERVICES
              </Link>
            </nav>
          </aside>
        </>
      )}

      {/* MAIN HOME SECTION */}
      <section className="relative h-screen w-full overflow-hidden pt-20">
        {/* Marquee Background */}
        <div className="absolute inset-0 flex w-max animate-marquee">
          {images.map((src, i) => (
            <div key={i} className="relative h-full aspect-video shrink-0">
              <Image
                src={src}
                alt={`Infrastructure Project ${i + 1}`}
                fill
                priority
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/40 to-black/65" />

        {/* Subtle Texture */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-6 max-w-4xl px-6 text-white md:mx-16 md:px-0">
            {/* Accent Line */}
            <div className="mb-4 h-1 w-16 rounded-full bg-linear-to-r from-blue-400 to-blue-600" />

            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
              <span className="block">Passion to Build.</span>
              <span className="block text-blue-400">Commitment to Serve.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              A.D. Lacson III Developer and Construction Corporation is one of
              the Philippines&apos; leading engineering-based integrated
              construction companies, delivering resilient and future-ready
              infrastructure.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="h-6 w-px bg-white/60" />
          </div>
        </div>
      </section>

      {/* MAIN ABOUT / HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/home_images/integrity1.png"
          alt="A.D. Lacson III Developer and Construction"
          fill
          priority
          className="object-cover scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/80" />

        {/* Accent Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,52,154,0.25),transparent_45%)]" />

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <div className="max-w-4xl text-white">
            {/* Section Label */}
            <span className="mb-4 inline-block text-xs font-semibold tracking-widest uppercase text-blue-400">
              who we are
            </span>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight drop-shadow-lg md:text-6xl">
              Driven by Engineering.
              <br />
              <span className="text-blue-400">Defined by Excellence.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/90 drop-shadow md:text-base">
              A.D. Lacson III Developers and Construction Corporation is an
              engineering-driven construction company committed to delivering
              sustainable, high-quality projects while creating lasting value
              for communities and partners across the Philippines.
            </p>

            {/* CTA Button */}
            <div className="mt-10 flex justify-center">
              <button
                onClick={() => router.push("/about")}
                className="group rounded-lg bg-[#00349a] px-10 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105 hover:shadow-xl"
              >
                Learn More About Us
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="h-6 w-px bg-white/60" />
          </div>
        </div>
      </section>

      {/* MAIN PROJECTS SECTION */}
      <section className="relative w-full py-24 overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-100">
        {/* BACKGROUND GRID — MUST NOT BLOCK CLICKS */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[48px_48px]" />

        {/* Section Header */}
        <div className="relative z-20 mx-auto mb-16 max-w-4xl px-6 text-center">
          <span className="mb-3 inline-block text-xs font-semibold tracking-widest text-blue-400 uppercase">
            Portfolio
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            Main Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600 md:text-lg">
            A showcase of A.D. Lacson III Developer and Construction
            Corporation’s leading projects, demonstrating our passion to build
            and commitment to serve.
          </p>
        </div>

        {/* Desktop & Tablet Grid */}
        <div className="relative z-20 hidden md:grid mx-auto max-w-6xl grid-cols-2 gap-8 px-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setActiveImage(project)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <Image
                src={project.src}
                alt={project.title}
                width={500}
                height={400}
                sizes="100vw"
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Card Overlay Grid */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[40px_40px] opacity-40" />

              {/* Title */}
              <div className="absolute bottom-0 left-0 w-full p-5">
                <h3 className="text-lg font-semibold text-white [text-shadow:-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000]">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="relative z-20 md:hidden mx-auto mt-10 max-w-xl px-6">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() => setActiveImage(project)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg"
                >
                  <Image
                    src={project.src}
                    alt={project.title}
                    width={500}
                    height={400}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-black/80 via-black/30 to-transparent" />

                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <h3 className="text-lg font-semibold text-white [text-shadow:-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000]">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA — FORCE ABOVE EVERYTHING */}
        <div className="relative z-30 mt-16 text-center">
          <button
            onClick={() => router.push("/projects")}
            className="group cursor-pointer rounded-lg bg-[#00349a] px-10 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105 hover:shadow-xl"
          >
            View All Projects
          </button>
        </div>

        {/* Scroll Indicator — NON INTERACTIVE */}
        <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs tracking-widest uppercase text-primary">
              Scroll
            </span>
            <div className="h-6 w-px bg-primary" />
          </div>
        </div>
      </section>

      {/* MAIN SUSTAINABILITY SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/home_images/cons.jpg"
          alt="A.D. Lacson III Developer and Construction"
          fill
          priority
          className="object-cover scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/55 to-black/30" />

        {/* Subtle Blue Accent Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(96,165,250,0.25),transparent_45%)]" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="max-w-4xl px-6 text-white md:px-16">
            {/* Section Label */}
            <span className="mb-4 inline-block text-xs font-semibold tracking-widest uppercase text-blue-400">
              Sustainability
            </span>

            {/* Headline */}
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Building Today.
              <br />
              <span className="text-blue-400">Protecting Tomorrow.</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
              A.D. Lacson III Developer and Construction Corporation delivers
              reliable construction solutions with a strong commitment to
              sustainable and responsible building practices. We focus on
              quality, efficiency, and environmental care in every project we
              build, creating long-lasting developments for today and the
              future.
            </p>

            {/* CTA */}
            <button
              onClick={() => router.push("/sustainability")}
              className="mt-10 rounded-lg border border-blue-400/60 px-8 py-3 text-sm font-semibold text-blue-400 transition-all duration-300 hover:bg-blue-400 hover:text-black hover:shadow-xl hover:scale-105"
            >
              Learn More About Our Sustainability
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="h-6 w-px bg-white/60" />
          </div>
        </div>
      </section>

      {/* SERVICES OFFERED SECTION */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/home_images/service.png"
          alt="A.D. Lacson III Developer and Construction"
          fill
          priority
          className="object-cover scale-100"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/85 via-black/65 to-black/80" />

        {/* Subtle Blue Accent Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(96,165,250,0.25),transparent_45%)]" />

        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-center py-24">
          <div className="mx-auto w-full max-w-6xl px-6 text-white md:px-12">
            {/* Header */}
            <span className="mb-4 inline-block text-xs font-semibold tracking-widest uppercase text-blue-400">
              What We Do
            </span>

            <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              Services Offered
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">
              A.D. Lacson III Developer and Construction Corporation delivers
              integrated engineering, construction, and technology-driven
              solutions tailored to modern infrastructure needs.
            </p>

            {/* Swiper */}
            <div className="mt-14">
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                spaceBetween={24}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="pb-16"
              >
                {services.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <SwiperSlide key={index} className="h-full">
                      <div className="group flex h-80 flex-col rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-2xl">
                        {/* Icon */}
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-400/20 text-blue-400 transition group-hover:bg-blue-400 group-hover:text-black">
                          <Icon size={24} />
                        </div>

                        {/* Title */}
                        <h3 className="mb-4 text-lg font-bold md:text-xl">
                          {service.title}
                        </h3>

                        {/* Items */}
                        <ul className="space-y-2 text-sm text-white/90 md:text-base">
                          {service.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="h-6 w-px bg-white/60" />
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="relative w-full py-24 overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-100">
        {/* Subtle Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[40px_40px]" />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-xs font-semibold tracking-widest uppercase text-blue-400">
              Get In Touch
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              Contact Us
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Get in touch with A.D. Lacson III Developer and Construction
              Corporation. We’re ready to work with you.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-6">
              {[
                {
                  icon: MapPinned,
                  title: "Office Address",
                  value:
                    "Unit C 11th Floor, Future Point Plaza III, Brgy. South Triangle, Panay Avenue, Quezon City, Philippines 1103",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+63 975 792 7858",
                },
                {
                  icon: Mail,
                  title: "Email",
                  value: "adlacson3devconscorp@gmail.com",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-2xl bg-slate-100/90 border border-slate-200 p-6 shadow-md transition hover:shadow-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-400/30 text-blue-500">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact Form + Direct Email */}
            <div className="space-y-6">
              {/* Contact Form */}
              <form
                onSubmit={onFormSubmitted}
                className="rounded-3xl bg-slate-100/90 border border-slate-200 p-8 shadow-2xl backdrop-blur-xl space-y-6"
              >
                {/* Full Name */}
                <div className="relative">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder=" "
                    required
                    className="peer w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm focus:border-blue-400 focus:outline-none"
                  />
                  <label className="absolute left-4 top-3 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs bg-white px-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=" "
                    required
                    className="peer w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm focus:border-blue-400 focus:outline-none"
                  />
                  <label className="absolute left-4 top-3 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs bg-white px-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder=" "
                    required
                    className="peer w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm focus:border-blue-400 focus:outline-none"
                  />
                  <label className="absolute left-4 top-3 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs bg-white px-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full rounded-xl bg-blue-400 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300
              hover:bg-blue-500 hover:scale-[1.02]
              disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSending ? "Please wait… Sending" : "Send Message"}
                </button>
              </form>

              <button
                type="button"
                onClick={handleEmailClick}
                className="group flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-300 bg-white px-6 py-4 text-sm font-semibold text-gray-700 shadow-md transition-all duration-300 hover:bg-slate-50 hover:shadow-xl hover:-translate-y-0.5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:animate-bounce">
                  <Mail size={20} />
                </span>

                <span className="flex flex-col text-left leading-tight">
                  <span className="text-gray-900">Email Us Directly</span>
                  <span className="text-xs font-normal text-gray-500">
                    Opens Gmail app on mobile · New tab on desktop
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#00349a] text-white py-6 text-start px-5 text-sm">
        <p>2026 © A.D LACSON III | Developer and Construction Corporation</p>
      </footer>

      {/* Alert Modal */}
      {alert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl p-6 animate-fadeIn">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  alert.type === "success"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {alert.type === "success" ? "✓" : "!"}
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {alert.type === "success"
                  ? "Message Sent"
                  : "Submission Failed"}
              </h3>
            </div>

            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              {alert.message}
            </p>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setAlert(null)}
                className="rounded-lg bg-blue-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.title}
              width={1200}
              height={800}
              className="max-h-[90vh] w-auto rounded-xl object-contain shadow-2xl"
            />

            {/* Close button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg hover:bg-gray-200"
            >
              ✕
            </button>

            {/* Optional title */}
            <p className="mt-4 text-center text-white text-lg font-semibold">
              {activeImage.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
