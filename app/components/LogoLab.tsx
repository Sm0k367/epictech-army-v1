// /app/components/LogoLab.tsx
'use client'
import React, { useState } from "react"
import { FaBrain, FaRocket, FaPaintBrush, FaBolt, FaCogs, FaCrown } from "react-icons/fa"

const icons = [FaBrain, FaRocket, FaPaintBrush, FaBolt, FaCogs, FaCrown]
const bgColors = ["#00F6FF", "#FA28FF", "#090B12", "#15151a", "#1c0429", "#fee140"]

function randomItem<T>(arr: T[]): T {
return arr[Math.floor(Math.random() * arr.length)]
}
function randomInt(min: number, max: number) {
return Math.floor(Math.random() * (max - min) + min)
}

export default function LogoLab() {
const [seed, setSeed] = useState(Math.random())
const downloadSVG = () => {
const svg = document.getElementById('logolab-svg')?.outerHTML
if (!svg) return
const blob = new Blob([svg], { type: "image/svg+xml" })
const url = URL.createObjectURL(blob)
const a = document.createElement('a')
a.href = url
a.download = "epictech-logo.svg"
a.click()
URL.revokeObjectURL(url)
}
const reRoll = () => setSeed(Math.random())
const iconIdx = Math.floor(seed * icons.length)
const Icon = icons[iconIdx]
const color = bgColors[Math.floor(seed * bgColors.length)]
const size = 92 + randomInt(0, 28)

return (
<div className="w-full bg-cyberBlack rounded-xl border border-spectralMagenta p-6 flex flex-col items-center mb-8">
<h3 className="font-display text-3xl mb-2 text-epicCyan">🖌️ Logo Lab (Free)</h3>
<p className="mb-4 text-spectralMagenta text-center">
Instantly generate & remix creative logos.<br />
Download SVG—no cost, no API needed.
</p>
<div className="bg-cyberBlack flex items-center justify-center p-6 mb-4 rounded-xl border border-epicCyan">
<svg
id="logolab-svg"
width={size}
height={size}
viewBox="0 0 128 128"
style={{ background: color, borderRadius: '25%' }}
xmlns="http://www.w3.org/2000/svg"
>
<g>
<foreignObject width="100%" height="100%">
<div className="w-full h-full flex items-center justify-center">
<span>
<Icon size={64} color={randomItem(bgColors)} />
</span>
</div>
</foreignObject>
</g>
</svg>
</div>
<div className="flex gap-4 mt-2">
<button
className="px-6 py-2 bg-epicCyan text-cyberBlack font-bold rounded shadow hover:bg-spectralMagenta hover:text-cyberBlack transition"
onClick={reRoll}
>
Remix
</button>
<button
className="px-6 py-2 bg-spectralMagenta text-cyberBlack font-bold rounded shadow hover:bg-epicCyan hover:text-cyberBlack transition"
onClick={downloadSVG}
>
Download SVG
</button>
</div>
</div>
)
}
