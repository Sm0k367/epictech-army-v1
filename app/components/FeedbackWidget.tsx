// /app/components/FeedbackWidget.tsx
'use client'
import React, { useState } from "react"

type Feedback = { msg: string; time: string }
const getTime = () =>
new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

export default function FeedbackWidget() {
const [input, setInput] = useState("")
const [feedback, setFeedback] = useState<Feedback[]>([])
const [sent, setSent] = useState(false)

const handleSend = (e: React.FormEvent) => {
e.preventDefault()
if (!input.trim()) return
setFeedback([{ msg: input, time: getTime() }, ...feedback].slice(0, 5))
setInput("")
setSent(true)
setTimeout(() => setSent(false), 1700)
}

return (
<section className="w-full flex flex-col items-center my-6">
<h4 className="font-display text-2xl text-spectralMagenta mb-2">💬 Instant Feedback</h4>
<form onSubmit={handleSend} className="w-full max-w-md flex gap-2 mb-4">
<input
className="flex-1 px-4 py-2 rounded border border-epicCyan bg-cyberBlack text-epicCyan"
value={input}
onChange={e => setInput(e.target.value)}
placeholder="Got feedback? Send it!"
/>
<button
type="submit"
disabled={!input.trim()}
className="px-5 py-2 bg-spectralMagenta text-cyberBlack font-bold rounded hover:bg-epicCyan hover:text-cyberBlack transition"
>
Send
</button>
</form>
{sent && (
<div className="mb-3 px-4 py-2 bg-epicCyan/90 text-cyberBlack font-mono rounded shadow text-center transition animate-fade-in">
Thank you for your feedback!
</div>
)}
<div className="w-full max-w-md">
{feedback.length > 0 && (
<div className="mt-2 bg-cyberBlack/70 border border-epicCyan rounded p-3 text-xs text-epicCyan font-mono">
<div className="mb-2 font-bold text-spectralMagenta">Recent Comments:</div>
<ul>
{feedback.map((f, i) => (
<li key={i} className="mb-1">[{f.time}] {f.msg}</li>
))}
</ul>
</div>
)}
</div>
</section>
)
}
