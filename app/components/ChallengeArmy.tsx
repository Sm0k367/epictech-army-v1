// /app/components/ChallengeArmy.tsx
'use client'
import React, { useState } from "react"

const responses = [
"🔥 Agent Army deployed! Expect a multidimensional remix in 10 seconds.",
"🎬 Spawning Visionary Corps: cinematic trailer generation engaged.",
"🎵 SoundForge Legion is composing a new anthem—check back soon!",
"🧠 CodeSynth Engineers just built a web app while you blinked.",
"🖌️ DesignCore is sketching an iconic logo... in four parallel universes.",
"📖 ScriptSmith Order already wrote you a myth. Look in your inbox!",
"⚡️ Maximum capability reached! Impossible is the baseline.",
"🤖 Response auto-optimized for creative overdrive."
]

function getRandomResponse() {
return responses[Math.floor(Math.random() * responses.length)]
}

export default function ChallengeArmy() {
const [input, setInput] = useState("")
const [result, setResult] = useState<string | null>(null)
const [loading, setLoading] = useState(false)

const handleChallenge = (e: React.FormEvent) => {
e.preventDefault()
setLoading(true)
setResult(null)
setTimeout(() => {
setResult(getRandomResponse())
setLoading(false)
}, 900)
}

return (
<section className="w-full mt-16 flex flex-col items-center">
<h3 className="font-display text-3xl lg:text-4xl font-extrabold text-center text-epicCyan drop-shadow mb-6">
Challenge the Agent Army
</h3>
<form onSubmit={handleChallenge} className="flex flex-col sm:flex-row gap-4 w-full max-w-3xl justify-center items-center mb-5">
<input
className="flex-1 px-5 py-3 rounded border-2 border-spectralMagenta bg-cyberBlack text-epicCyan font-mono"
value={input}
onChange={e => setInput(e.target.value)}
placeholder="Challenge us: (e.g., Write a rock anthem, design a logo...)"
/>
<button
type="submit"
disabled={loading || !input.trim()}
className="px-7 py-3 bg-spectralMagenta text-cyberBlack font-bold rounded shadow-lg hover:bg-epicCyan hover:text-cyberBlack transition disabled:opacity-40"
>
{loading ? "Working..." : "Unleash"}
</button>
</form>
{result && (
<div className="mt-4 px-8 py-4 rounded-lg border-2 border-epicCyan bg-cyberBlack/95 font-mono text-epicCyan text-center shadow-lg animate-fade-in">
{result}
</div>
)}
</section>
)
}
