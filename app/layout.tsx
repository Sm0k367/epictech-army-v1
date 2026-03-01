import '../styles/globals.css'
import { ReactNode } from "react"
import ShareOnX from "./components/ShareOnX";

export const metadata = {
title: 'Epic Tech AI Agent Army',
description: 'Mission Control for the Impossible – Experience the living Agent Army, create, remix, launch.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
return (
<html lang="en" className="bg-cyberBlack text-epicCyan min-h-full">
<head>
<link rel="icon" href="/favicon.ico" />
</head>
<body className="font-body min-h-screen flex flex-col">
<header className="w-full flex items-center justify-between px-8 py-4 bg-cyberBlack border-b border-epicCyan shadow-lg">
<div className="flex items-center gap-4">
<img
src="/logo.png"
alt="Epic Tech AI Logo"
className="h-12 w-12 rounded-lg shadow-md border-2 border-spectralMagenta bg-cyberBlack"
/>
<h1 className="font-display text-3xl lg:text-5xl font-extrabold tracking-tight drop-shadow-md">
⚡️ Epic Tech AI Agent Army ⚡️
</h1>
</div>
<span className="hidden md:block text-spectralMagenta font-bold text-xl">
Manifest Everything
</span>
</header>
<main className="flex-1 flex flex-col w-full items-center">{children}</main>
<ShareOnX />
<footer className="w-full mt-8 py-4 flex justify-center bg-cyberBlack border-t border-spectralMagenta text-xs text-epicCyan opacity-80">
<span>© {new Date().getFullYear()} Epic Tech AI. Built to break the limits.</span>
</footer>
</body>
</html>
)
}
