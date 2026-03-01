// /app/components/MusicLab.tsx
'use client'
import React, { useState } from "react"
import * as Tone from "tone"

const scales = [
{ name: "Major", intervals: [0,2,4,5,7,9,11,12] },
{ name: "Minor", intervals: [0,2,3,5,7,8,10,12] }
]
const notes = ["C", "D", "E", "F", "G", "A", "B"]

function getScaleNotes(root: string, scale: number[]) {
return scale.map(i => notes[(notes.indexOf(root) + i) % notes.length])
}

export default function MusicLab() {
const [playing, setPlaying] = useState(false)
const [root, setRoot] = useState("C")
const [scaleType, setScaleType] = useState(scales[0])

const handlePlay = async () => {
await Tone.start()
setPlaying(true)
const synth = new Tone.PolySynth().toDestination()
const scaleNotes = getScaleNotes(root, scaleType.intervals)
let idx = 0
const loop = new Tone.Loop((time) => {
synth.triggerAttackRelease(scaleNotes[idx % scaleNotes.length] + "4", "8n", time)
idx++
}, "8n").start(0)
Tone.Transport.start()
setTimeout(() => {
Tone.Transport.stop()
loop.dispose()
synth.dispose()
setPlaying(false)
}, 8000)
}

return (
<div className="w-full bg-cyberBlack rounded-xl border border-spectralMagenta p-6 flex flex-col items-center mb-8">
<h3 className="font-display text-3xl mb-2 text-epicCyan">🎵 Music Lab (Free)</h3>
<p className="mb-4 text-spectralMagenta text-center">
Create simple melodies using your browser—no signup, no cost, instant sound!
</p>
<div className="flex items-center gap-4 mb-6">
<label>Root Note:</label>
<select
className="px-2 py-1 rounded border border-epicCyan bg-cyberBlack text-epicCyan"
value={root}
onChange={e => setRoot(e.target.value)}
>
{notes.map(r => <option key={r}>{r}</option>)}
</select>
<label>Scale:</label>
<select
className="px-2 py-1 rounded border border-epicCyan bg-cyberBlack text-epicCyan"
value={scaleType.name}
onChange={e =>
setScaleType(scales.find(sc => sc.name === e.target.value) || scales[0])
}
>
{scales.map(s => <option key={s.name}>{s.name}</option>)}
</select>
<button
onClick={handlePlay}
disabled={playing}
className="ml-6 px-6 py-2 bg-epicCyan text-cyberBlack font-bold rounded shadow hover:bg-spectralMagenta hover:text-cyberBlack transition disabled:opacity-40"
>
{playing ? "Playing..." : "Generate & Play"}
</button>
</div>
</div>
)
}
