import Image from "next/image";
import Link from "next/link";

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
        href: "#services",
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
        href: "#about-us",
        label: "About us",
        children: [
            { href: "#about-us", label: "Who We Are" },
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
            className="rounded-full px-3 py-2 text-[0.98rem] font-bold transition hover:bg-slate-100 hover:text-[#0b3d91]"
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
                className="inline-flex items-center rounded-full px-3 py-2 text-[0.98rem] font-bold transition hover:bg-slate-100 hover:text-[#0b3d91]"
                href={item.href}
            >
                {item.label}
                <svg
                    className="ml-1 h-4 w-4 text-slate-500 transition group-hover:text-[#0b3d91]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </Link>
            <div className="pointer-events-none absolute left-0 top-[calc(100%-2px)] z-30 min-w-56 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                {item.children?.map((subItem) => (
                    <Link
                        key={`${item.label}-${subItem.label}`}
                        href={subItem.href}
                        className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-[#0b3d91]"
                    >
                        {subItem.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export function NavBar() {
    return (
        <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
            <div className="mx-auto flex h-24 w-[min(1400px,92vw)] items-center justify-between gap-6 px-4">
                <Link className="shrink-0" href="#">
                    <Image
                        src="/EduLogo.png"
                        alt="EduTech Express Logo"
                        width={200}
                        height={50}
                        className="h-20 w-45 object-contain"
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
                <Link className="inline-flex shrink-0 items-center justify-center rounded-md border border-[#0b3d91] bg-[#0b3d91] px-4 py-3 text-sm font-semibold text-white transition hover:border-[#E20A16] hover:bg-[#E20A16]" href="#consultation">
                    Free Counselling
                </Link>
            </div>
        </header>
    );
}
