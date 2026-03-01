// /app/components/TextLab.tsx
'use client'
import React, { useState } from "react"

const starts = [
"In the neon night,",
"Under cyberpunk skies,",
"This is Epic Tech AI:",
"From code, from fire—",
"With electric dreams,",
"Rise, rebel, create—",
"Legends awaken when"
]

const endings = [
"sparks ignite the city heart.",
"boundaries shatter, worlds restart.",
"concepts fuse and destinies part.",
"the Agent Army wields the art.",
"chaos sings and ideas dart.",
"wisdom burns in the circuit chart."
]

function shuffle<T>(array: T[]): T[] {
return [...array].sort(() => Math.random() - 0.5)
}

export default function TextLab() {
const [text, setText] = useState("")
const [loading, setLoading] = useState(false)

const generate = () => {
setLoading(true)
setTimeout(() => {
const s = shuffle(starts)
const e = shuffle(endings)
const core = [
"We are the synapse wild, the ones who break and blend,",
"Every limit’s temporary, every rule’s meant to bend.",
"Stacking up the knowledge, remixing code and sound,",
"If you seek the future—look where rebels gather round."
]
setText(
`${s[0]}\n\n${core.join("\n")}\n\n${e[0]}`
)
setLoading(false)
}, 700)
}

return (
<div className="w-full bg-cyberBlack rounded-xl border border-epicCyan p-6 flex flex-col items-center mb-8">
<h3 className="font-display text-3xl mb-2 text-spectralMagenta">📖 Text Lab (Free)</h3>
<p className="mb-4 text-epicCyan text-center">
Generate live creative poetry or story snippets—original every time.
</p>
<button
onClick={generate}
disabled={loading}
className="mb-4 px-8 py-2 bg-spectralMagenta text-cyberBlack font-bold rounded shadow hover:bg-epicCyan hover:text-cyberBlack transition disabled:opacity-40"
>
{loading ? "Generating..." : "Generate Text"}
</button>
<pre className="whitespace-pre-wrap p-4 w-full bg-cyberBlack/80 border border-epicCyan rounded text-epicCyan font-mono min-h-[100px]">
{text}
</pre>
</div>
)
}
