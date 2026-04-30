"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Globe, FileCheck, Plane, Star } from "lucide-react";
import Toast from "../Toast";

export default function HomeSections() {

    const processItems = [
        { icon: GraduationCap, title: "Profile Review" },
        { icon: Globe, title: "University Shortlisting" },
        { icon: FileCheck, title: "Documentation" },
        { icon: Plane, title: "Visa & Departure" },
    ];

    const destinationCards = [
        { country: "Canada", level: "High PR pathway", flagSrc: "/canada-flag.jpg" },
        { country: "Australia", level: "Top-ranked universities", flagSrc: "/australia-flag.jpg" },
        { country: "UK", level: "Fast-track masters", flagSrc: "/united-kingdom-flag.jpg" },
        { country: "USA", level: "Research-focused programs", flagSrc: "/usa-flag.jpg" },
    ];

    const testimonials = [
        {
            quote:
                "The counselors mapped my profile to the right universities and guided me through every document. My visa came through on the first attempt.",
            name: "John Doe",
            destination: "Master's in Australia",
        },
        {
            quote:
                "From IELTS prep to pre-departure briefing, the support was practical and clear. I always knew what my next step was.",
            name: "Jane Doe",
            destination: "Bachelor's in the UK",
        },
        {
            quote:
                "I visited the office with confusion and left with a plan. The team was transparent with timelines and costs throughout.",
            name: "Will Smith",
            destination: "Postgraduate in Canada",
        },
    ];


    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [errors, setErrors] = useState<{ fullName?: string; email?: string; phone?: string }>({});
    const fullNameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const phoneRef = useRef<HTMLInputElement | null>(null);

    function isValidEmail(email: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({});

        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form) as any) as Record<string, string>;
        const fullName = (data.fullName || "").trim();
        const email = (data.email || "").trim();
        const phone = (data.phone || "").trim();

        const nextErrors: typeof errors = {};
        if (!fullName) nextErrors.fullName = "Full name is required.";
        if (!email) nextErrors.email = "Email is required.";
        else if (!isValidEmail(email)) nextErrors.email = "Enter a valid email.";
        if (!phone) nextErrors.phone = "Phone is required.";
        else if (phone.replace(/\D/g, "").length < 7) nextErrors.phone = "Enter a valid phone number.";

        if (Object.keys(nextErrors).length) {
            setErrors(nextErrors);
            if (nextErrors.fullName) fullNameRef.current?.focus();
            else if (nextErrors.email) emailRef.current?.focus();
            else if (nextErrors.phone) phoneRef.current?.focus();
            return;
        }

        setSubmitting(true);
        console.log("consultation demo submit", { fullName, email, phone });
        await new Promise((r) => setTimeout(r, 700));
        setSubmitting(false);
        setSubmitted(true);
        setToastMessage("Request sent — we'll be in touch shortly.");
        setShowToast(true);
        form.reset();
    };

    return (
        <div className="min-h-screen bg-white text-slate-900">
            <section id="about-us"
                className="relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('/hero.png')" }}
            >
                <div className="absolute inset-0 bg-slate-900/45" />
                <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:gap-8 sm:px-6 sm:py-20 md:py-28 lg:flex-row lg:items-center lg:gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-xs tracking-[0.3em] uppercase text-blue-200 font-semibold sm:text-sm">
                            Study Abroad Consultancy
                        </p>
                        <h1 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl sm:mt-4 md:text-5xl lg:text-6xl lg:mt-6">
                            Build Your Future Abroad
                        </h1>
                        <p className="mt-4 text-xs text-slate-200 max-w-xl sm:mt-6 sm:text-sm md:text-base lg:text-lg">
                            Expert counseling for university admissions, scholarships, visa
                            filing, and departure support.
                        </p>
                        <div className="mt-6 flex gap-2 flex-wrap sm:gap-4 sm:mt-8">
                            <a className="rounded-lg sm:rounded-xl bg-blue-700 hover:bg-blue-800 text-white px-3 py-2 text-xs font-semibold cursor-pointer sm:px-6 sm:py-3 sm:text-sm">
                                Free Consultation
                            </a>
                            <a className="rounded-lg sm:rounded-xl border border-white/40 text-white px-3 py-2 text-xs font-semibold cursor-pointer sm:px-6 sm:py-3 sm:text-sm">
                                Explore Destinations
                            </a>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="lg:ml-auto w-full lg:w-auto mt-4 sm:mt-0"
                    >
                        <div className="flex flex-col gap-2 p-3 sm:gap-3 sm:p-4 md:gap-4 md:p-6">
                            {[
                                ["300+", "Scholarship Wins"],
                                ["97%", "Visa Success"],
                                ["20 Years", "Experience"],
                                ["15+", "Service Locations"],
                            ].map((i) => (
                                <div
                                    key={i[0]}
                                    className="rounded-xl sm:rounded-2xl bg-white/50 border border-white/20 p-3 text-white sm:p-4 md:p-5"
                                >
                                    <p className="text-lg font-bold sm:text-2xl md:text-3xl">{i[0]}</p>
                                    <p className="text-xs sm:text-sm md:text-base">{i[1]}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <section id="university" className="max-w-7xl mx-auto px-4 py-12 sm:px-6 sm:py-24">
                <div className="text-center max-w-3xl mx-auto">
                    <p className="uppercase tracking-[0.3em] text-blue-700 text-xs font-semibold sm:text-sm">
                        Destinations
                    </p>
                    <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
                        Top Countries Students Choose
                    </h2>
                </div>
                <div className="mt-12 flex flex-wrap gap-6">
                    {destinationCards.map((item) => (
                        <motion.article
                            key={item.country}
                            whileHover={{ y: -6 }}
                            transition={{ type: "spring", stiffness: 220, damping: 22 }}
                            className="group w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-xl md:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={item.flagSrc}
                                    alt={`${item.country} flag`}
                                    className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-[#0b3d91]">
                                    Popular Choice
                                </span>
                            </div>
                            <div className="space-y-3 p-5">
                                <h3 className="text-xl font-bold text-slate-900">{item.country}</h3>
                                <p className="text-sm text-slate-600">{item.level}</p>
                                <a
                                    href="#consultation"
                                    className="inline-flex items-center text-sm font-semibold text-[#0b3d91] transition hover:text-[#E20A16]"
                                >
                                    Explore Programs
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            <section id="services" className="bg-slate-50 py-12 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Our Process</h2>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-4 sm:mt-12 sm:gap-6">
                        {processItems.map(({ icon: Icon, title }, idx) => {
                            const I = Icon;
                            return (
                                <div
                                    key={idx}
                                    className="w-full rounded-3xl border bg-white p-6 shadow-sm md:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
                                >
                                    <I className="w-10 h-10 text-blue-700" />
                                    <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                                    <p className="mt-2 text-slate-600">
                                        Professional step-by-step support.
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id="learning-center" className="max-w-7xl mx-auto px-4 py-12 sm:px-6 sm:py-24">
                <div className="text-center">
                    <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Student Success Stories</h2>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 sm:mt-12 sm:gap-6">
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={`${testimonial.name}-${idx}`}
                            className="w-full rounded-3xl border p-6 shadow-sm md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src="/dummy-profile-pic-1.jpg"
                                    alt="Student testimonial"
                                    className="w-14 h-14 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold">{testimonial.name}</p>
                                    <p className="text-sm text-slate-500">{testimonial.destination}</p>
                                </div>
                            </div>
                            <p className="mt-4 text-slate-600">
                                {testimonial.quote}
                            </p>
                            <div className="flex mt-4 gap-1">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star
                                        key={s}
                                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section
                id="consultation"
                className="relative overflow-hidden bg-cover bg-center py-12 sm:py-20 md:py-24 text-white"
                style={{ backgroundImage: "url('/img1.png')" }}
            >
                <div className="absolute inset-0 bg-slate-900/70" />
                <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:gap-8 sm:px-6 md:gap-12 lg:flex-row lg:items-center">
                    <div className="lg:flex-1">
                        <h2 className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">Book Free Consultation</h2>
                        <p className="mt-3 text-xs text-blue-100 sm:mt-4 sm:text-sm md:text-base">
                            Get your personalized roadmap for studying abroad.
                        </p>
                    </div>
                    <div className="w-full rounded-2xl sm:rounded-3xl border border-white/25 bg-white/12 p-4 sm:p-6 md:p-8 text-white shadow-2xl ring-1 ring-white/20 backdrop-blur-xl lg:w-[min(100%,430px)]">
                        <p className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.16em] text-blue-100/90">
                            Quick Application
                        </p>
                        <h3 className="mt-2 text-base font-bold text-white sm:text-lg md:text-xl lg:text-2xl">Talk to an Expert Counselor</h3>
                        <p className="mt-2 text-[0.7rem] text-blue-100/90 sm:text-xs md:text-sm">Fill in your details and we will contact you within 24 hours.</p>

                        {!submitted ? (
                            <form onSubmit={handleSubmit} id="consultation-form" className="mt-4 space-y-3 sm:mt-6 sm:space-y-4">
                                <div>
                                    <label className="mb-1 block text-xs font-semibold text-blue-50 sm:text-sm">Full Name</label>
                                    <input
                                        ref={fullNameRef}
                                        name="fullName"
                                        placeholder="Enter your full name"
                                        className={`w-full rounded-lg sm:rounded-xl border px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm placeholder:text-blue-100/75 outline-none transition focus:ring-4 focus:ring-white/20 ${errors.fullName
                                            ? "border-red-400 bg-red-900/20 text-white"
                                            : "border-white/35 bg-white/18 text-white focus:border-white/70"
                                            }`}
                                    />
                                    {errors.fullName && <p className="mt-1 text-[0.65rem] sm:text-xs text-red-200">{errors.fullName}</p>}
                                </div>
                                <div>
                                    <label className="mb-1 block text-xs font-semibold text-blue-50 sm:text-sm">Email</label>
                                    <input
                                        ref={emailRef}
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        className={`w-full rounded-lg sm:rounded-xl border px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm placeholder:text-blue-100/75 outline-none transition focus:ring-4 focus:ring-white/20 ${errors.email
                                            ? "border-red-400 bg-red-900/20 text-white"
                                            : "border-white/35 bg-white/18 text-white focus:border-white/70"
                                            }`}
                                    />
                                    {errors.email && <p className="mt-1 text-[0.65rem] sm:text-xs text-red-200">{errors.email}</p>}
                                </div>
                                <div>
                                    <label className="mb-1 block text-xs font-semibold text-blue-50 sm:text-sm">Phone</label>
                                    <input
                                        ref={phoneRef}
                                        name="phone"
                                        placeholder="+977 98XXXXXXXX"
                                        className={`w-full rounded-lg sm:rounded-xl border px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm placeholder:text-blue-100/75 outline-none transition focus:ring-4 focus:ring-white/20 ${errors.phone
                                            ? "border-red-400 bg-red-900/20 text-white"
                                            : "border-white/35 bg-white/18 text-white focus:border-white/70"
                                            }`}
                                    />
                                    {errors.phone && <p className="mt-1 text-[0.65rem] sm:text-xs text-red-200">{errors.phone}</p>}
                                </div>
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full rounded-lg sm:rounded-xl bg-white py-2 text-xs font-bold tracking-wide text-[#0b3d91] shadow-lg transition disabled:opacity-60 disabled:cursor-wait hover:bg-blue-50 sm:py-3 sm:text-sm md:py-3"
                                >
                                    {submitting ? "Sending…" : "Request Free Consultation"}
                                </button>
                            </form>
                        ) : (
                            <div className="mt-4 rounded-lg bg-white/10 p-3 text-xs font-semibold text-white sm:mt-6 sm:p-4 sm:text-sm">Thank you — we will contact you soon.</div>
                        )}
                    </div>
                </div>
                {showToast && (
                    <Toast message={toastMessage} onClose={() => setShowToast(false)} />
                )}
            </section>
        </div>
    );
}
