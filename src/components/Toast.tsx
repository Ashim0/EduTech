"use client";

import React, { useEffect, useState } from "react";

type ToastProps = {
    message: string;
    duration?: number;
    onClose?: () => void;
};

export default function Toast({ message, duration = 3000, onClose }: ToastProps) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
        const hide = setTimeout(() => setVisible(false), duration - 200);
        const finish = setTimeout(() => onClose && onClose(), duration);
        return () => {
            clearTimeout(hide);
            clearTimeout(finish);
        };
    }, [message, duration, onClose]);

    return (
        <div
            role="status"
            aria-live="polite"
            className={`fixed right-6 top-6 z-50 transform transition-all duration-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                }`}
        >
            <div className="flex items-start gap-3 rounded-lg bg-white px-4 py-3 shadow-lg">
                <svg className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
                <div className="min-w-50">
                    <p className="text-sm font-semibold text-slate-900">{message}</p>
                </div>
                <button
                    aria-label="Close notification"
                    onClick={() => {
                        setVisible(false);
                        onClose && onClose();
                    }}
                    className="ml-2 rounded p-1 text-slate-500 hover:text-slate-700"
                >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
