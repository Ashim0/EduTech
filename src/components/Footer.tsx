export function Footer() {
    return (
        <footer className="border-t bg-slate-950">
            <div className="mx-auto w-[min(1400px,92vw)] px-4 py-8 sm:py-14 lg:py-16">
                <div className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-6 sm:pb-8 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-400">
                            EduTech Express
                        </p>
                        <h2 className="mt-2 max-w-2xl font-mono text-lg font-bold text-white sm:text-2xl">
                            Structured support for study abroad planning, admissions, and visa preparation.
                        </h2>
                    </div>
                    <a
                        className="inline-flex w-fit items-center justify-center rounded-md border border-[#0b3d91] bg-[#0b3d91] px-4 py-2 text-xs font-semibold text-white transition hover:border-[#E20A16] hover:bg-[#E20A16] sm:px-5 sm:py-3 sm:text-sm"
                        href="#consultation"
                    >
                        Request Consultation
                    </a>
                </div>

                <div className="flex flex-col gap-6 sm:gap-10 md:flex-row md:flex-wrap">
                    <div className="md:flex-[1.2_1_0%] md:min-w-[18rem]">
                        <a className="font-mono text-lg font-bold tracking-[0.04em] text-white sm:text-[1.22rem]" href="#">
                            EduTech Express
                        </a>
                        <p className="mt-3 max-w-[32ch] text-xs leading-6 text-slate-400 sm:text-sm">
                            Trusted counseling for students aiming to study in top destinations
                            worldwide.
                        </p>
                    </div>
                    <div className="md:flex-1 md:min-w-48">
                        <h3 className="mb-3 text-sm font-semibold text-white sm:text-base">Quick Links</h3>
                        <a className="mb-2 block text-xs text-slate-400 transition hover:text-white sm:text-sm" href="#">About</a>
                        <a className="mb-2 block text-xs text-slate-400 transition hover:text-white sm:text-sm" href="#">Services</a>
                        <a className="mb-2 block text-xs text-slate-400 transition hover:text-white sm:text-sm" href="#">Universities</a>
                        <a className="block text-xs text-slate-400 transition hover:text-white sm:text-sm" href="#">Contact</a>
                    </div>
                    <div className="md:flex-1 md:min-w-48">
                        <h3 className="mb-3 text-sm font-semibold text-white sm:text-base">Contact</h3>
                        <p className="mb-2 text-xs text-slate-400 sm:text-sm">+977 01 xxxxxxxxx</p>
                        <p className="mb-2 text-xs text-slate-400 sm:text-sm">info@edutech.com</p>
                        <p className="text-xs text-slate-400 sm:text-sm">Kathmandu, Nepal</p>
                    </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6 text-xs text-slate-500 sm:text-sm">
                    © 2026 EduTech Express. All rights reserved.
                </div>
            </div>
        </footer>
    );
}