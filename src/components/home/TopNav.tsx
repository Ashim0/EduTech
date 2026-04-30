export function TopNav() {
    return (
        <div className="border-b border-slate-200/80 bg-[#0b3d91] backdrop-blur-sm">
            <div className="mx-auto flex w-[min(1400px,92vw)] items-center justify-end gap-6 py-2 lg:gap-8 px-4">
                <a className="text-sm font-medium text-white/70 transition hover:text-white" href=" ">
                    +977 01 xxxxxxxx
                </a>
                <span className="text-slate-300">|</span>
                <a className="text-sm font-medium text-white/70 transition hover:text-white" href="mailto:info@edutech.com">
                    info@edutech.com
                </a>
                <span className="text-slate-300">|</span>
                <a className="text-sm font-medium text-white/70 transition hover:text-white" href="#" >
                    Counselor Login
                </a>


                <span className="text-slate-300">|</span>
                <a className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-3 py-1 text-sm font-semibold text-white/70 transition hover:border-white hover:text-white" href="#">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Login
                </a>
            </div>
        </div>
    );
}
