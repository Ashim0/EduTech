"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

type SubItem = {
    href: string;
    label: string;
};

type NavItem = {
    href: string;
    label: string;
    children?: SubItem[];
};

const navItems = [
    {
        href: "/services",
        label: "Our services",
        children: [
            { href: "#services", label: "Admission Guidance" },
            { href: "#services", label: "Visa Documentation" },
            { href: "#services", label: "Scholarship Counseling" },
        ],
    },
    {
        href: "#study-abroad",
        label: "Study abroad",
        children: [
            { href: "#university", label: "Top Destinations" },
            { href: "#university", label: "Course Selection" },
            { href: "#consultation", label: "Application Support" },
        ],
    },
    { href: "#learning-center", label: "Learning center" },
    {
        href: "/about-us",
        label: "About us",
        children: [
            { href: "/about-us", label: "Who We Are" },
            { href: "#about-us", label: "Our Counselors" },
            { href: "#learning-center", label: "Success Stories" },
        ],
    },
    { href: "#interview", label: "Interview" },
    { href: "#university", label: "University" },
] as const satisfies NavItem[];

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            className="rounded-full px-2 py-1 text-xs font-bold transition hover:bg-slate-100 hover:text-[#0b3d91] lg:px-3 lg:py-2 lg:text-[0.98rem]"
            href={href}
        >
            {children}
        </Link>
    );
}

function NavDropdown({ item }: { item: NavItem }) {
    return (
        <div className="group relative">
            <Link
                className="inline-flex items-center rounded-full px-2 py-1 text-xs font-bold transition hover:bg-slate-100 hover:text-[#0b3d91] lg:px-3 lg:py-2 lg:text-[0.98rem]"
                href={item.href}
            >
                {item.label}
                <svg
                    className="ml-1 h-3 w-3 text-slate-500 transition group-hover:text-[#0b3d91] lg:h-4 lg:w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </Link>
            <div className="pointer-events-none absolute left-0 top-[calc(100%-2px)] z-30 min-w-48 rounded-lg lg:min-w-56 lg:rounded-xl border border-slate-200 bg-white p-1 lg:p-2 opacity-0 shadow-xl transition duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                {item.children?.map((subItem) => (
                    <Link
                        key={`${item.label}-${subItem.label}`}
                        href={subItem.href}
                        className="block rounded-md px-2 py-1 text-xs font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-[#0b3d91] lg:rounded-lg lg:px-3 lg:py-2 lg:text-sm"
                    >
                        {subItem.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
            <div className="mx-auto flex h-14 w-[min(1400px,92vw)] items-center justify-between gap-2 px-3 sm:h-16 sm:gap-4 sm:px-4 lg:h-24 lg:gap-6">
                <Link className="shrink-0" href="/">
                    <Image
                        src="/EduLogo.png"
                        alt="EduTech Express Logo"
                        width={200}
                        height={50}
                        className="h-10 w-24 object-contain sm:h-12 sm:w-32 lg:h-20 lg:w-45"
                    />
                </Link>
                <nav className="hidden items-center gap-1 whitespace-nowrap text-slate-600 lg:flex" aria-label="Primary Navigation">
                    {navItems.map((item) =>
                        "children" in item ? (
                            <NavDropdown key={item.label} item={item} />
                        ) : (
                            <NavLink key={item.href} href={item.href}>
                                {item.label}
                            </NavLink>
                        )
                    )}
                </nav>
                <Link className="hidden shrink-0 items-center justify-center rounded-md border border-[#0b3d91] bg-[#0b3d91] px-3 py-2 text-xs font-semibold text-white transition hover:border-[#E20A16] hover:bg-[#E20A16] lg:inline-flex lg:px-4 lg:py-3 lg:text-sm" href="#consultation">
                    Free Counselling
                </Link>

                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="inline-flex items-center justify-center rounded-md p-1.5 text-slate-600 transition hover:bg-slate-100 sm:p-2 lg:hidden"
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
                </button>
            </div>


            {mobileMenuOpen && (
                <div className="border-t border-slate-200/80 bg-white px-3 py-3 sm:px-4 sm:py-4 lg:hidden">
                    <nav className="flex flex-col space-y-1 sm:space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="block rounded-lg px-2 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-[#0b3d91] sm:px-3 sm:py-2 sm:text-sm"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <Link
                        href="#consultation"
                        className="mt-3 flex items-center justify-center rounded-md border border-[#0b3d91] bg-[#0b3d91] px-3 py-2 text-xs font-semibold text-white transition hover:border-[#E20A16] hover:bg-[#E20A16] sm:mt-4 sm:px-4 sm:py-3 sm:text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Free Counselling
                    </Link>
                </div>
            )}
        </header>
    );
}
