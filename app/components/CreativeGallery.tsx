// /app/components/CreativeGallery.tsx
'use client'
import React, { useState } from "react"

export type GalleryItem = {
type: "music" | "text" | "logo",
content: string // for music/text: label/details; for logo: SVG markup (string)
time: string
}

export default function CreativeGallery() {
// In a real app, accept props or use context for global state
// This demo: static "example" items, feel free to wire up real tools later
const [items] = useState<GalleryItem[]>([
{
type: "music",
content: "🎵 Melody in C Major / Major Scale / 8s",
time: "just now"
},
{
type: "text",
content: "In the neon night, we build, remix, and dare.",
time: "just now"
},
{
type: "logo",
content:
`<svg width="48" height="48" viewBox="0 0 48 48"><rect width="48" height="48" rx="10" fill="#00F6FF"/><circle cx="24" cy="24" r="12" fill="#FA28FF" /></svg>`,
time: "just now"
}
])

return (
<section className="w-full mt-14 flex flex-col items-center">
<h3 className="font-display text-3xl lg:text-4xl font-extrabold text-center text-spectralMagenta drop-shadow mb-8">
Creative Gallery (Live Demo)
</h3>
<div className="flex flex-wrap gap-7 w-full max-w-5xl px-8 justify-center">
{items.length === 0 && (
<p className="text-center text-epicCyan opacity-75">No creations yet! Try the labs above.</p>
)}
{items.map((item, idx) => (
<div
key={idx}
className="flex flex-col items-center border border-epicCyan bg-cyberBlack/90 rounded-lg px-5 py-6 shadow-lg hover:scale-105 transition-all"
>
<span className="mb-2">
{item.type === "music" && "🎵"}
{item.type === "text" && "📖"}
{item.type === "logo" && (
<span
dangerouslySetInnerHTML={{ __html: item.content }}
style={{ display: "inline-block", verticalAlign: "middle" }}
/>
)}
</span>
<div className="text-epicCyan font-mono text-center mb-3">{item.type !== "logo" ? item.content : "Logo"}</div>
<span className="text-xs text-spectralMagenta">{item.time}</span>
</div>
))}
</div>
</section>
)
}
