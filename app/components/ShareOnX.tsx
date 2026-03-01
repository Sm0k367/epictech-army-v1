// /app/components/ShareOnX.tsx
'use client'
import React from "react"

const shareText = encodeURIComponent(
"Check out what I just created with Epic Tech AI! 🚀 Manifest the impossible at https://epictech-army-v1.vercel.app #EpicTechAI"
)

export default function ShareOnX() {
return (
<section className="w-full my-10 flex items-center justify-center">
<a
href={`https://x.com/intent/tweet?text=${shareText}`}
target="_blank"
rel="noopener noreferrer"
className="px-8 py-4 bg-spectralMagenta text-cyberBlack font-bold rounded-2xl shadow-lg border-2 border-epicCyan text-xl font-display hover:bg-epicCyan hover:text-cyberBlack transition"
>
🚀 Share Your Creation on X (formerly Twitter)
</a>
</section>
)
}
