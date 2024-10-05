'use client';
import { ReactNode } from "react";

import ModalProvider from "@/providers/modal-provider";
import { ToastProvider } from "./toast-provider";

export default function ClientProviders({ children }: { children: ReactNode }) {
    return (
        <>
            <ToastProvider />
            <ModalProvider />
            {children}
        </>
    );
}