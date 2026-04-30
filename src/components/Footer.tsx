export function Footer() {
    return (
        <footer className="border-t bg-slate-950">
            <div className="mx-auto w-[min(1400px,92vw)] px-4 py-14 lg:py-16">
                <div className="mb-10 flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-400">
                            EduTech Express
                        </p>
                        <h2 className="mt-2 max-w-2xl font-mono text-2xl font-bold text-white">
                            Structured support for study abroad planning, admissions, and visa preparation.
                        </h2>
                    </div>
                    <a
                        className="inline-flex w-fit items-center justify-center rounded-md border border-[#0b3d91] bg-[#0b3d91] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#E20A16] hover:bg-[#E20A16]"
                        href="#consultation"
                    >
                        Request Consultation
                    </a>

                </div>


                <div className="flex flex-col gap-10 md:flex-row md:flex-wrap">
                    <div className="md:flex-[1.2_1_0%] md:min-w-[18rem]">
                        <a className="font-mono text-[1.22rem] font-bold tracking-[0.04em] text-white" href="#">
                            EduTech Express
                        </a>
                        <p className="mt-3 max-w-[32ch] text-sm leading-6 text-slate-400">
                            Trusted counseling for students aiming to study in top destinations
                            worldwide.
                        </p>
                    </div>
                    <div className="md:flex-1 md:min-w-48">
                        <h3 className="mb-3 text-base font-semibold text-white">Quick Links</h3>
                        <a className="mb-2 block text-slate-400 transition hover:text-white" href="#">About</a>
                        <a className="mb-2 block text-slate-400 transition hover:text-white" href="#">Services</a>
                        <a className="mb-2 block text-slate-400 transition hover:text-white" href="#">Universities</a>
                        <a className="block text-slate-400 transition hover:text-white" href="#">Contact</a>
                    </div>
                    <div className="md:flex-1 md:min-w-48">
                        <h3 className="mb-3 text-base font-semibold text-white">Contact</h3>
                        <p className="mb-2 text-slate-400">+977 01 xxxxxxxxx</p>
                        <p className="mb-2 text-slate-400">info@edutech.com</p>
                        <p className="text-slate-400">Kathmandu, Nepal</p>
                    </div>
                </div>

                <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
                    © 2026 EduTech Express. All rights reserved.
                </div>
            </div>
        </footer>
    );
}