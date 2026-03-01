// /app/components/AgentShowcase.tsx
import { FaFilm, FaMicrophoneAlt, FaMusic, FaPaintBrush, FaBook, FaCode, FaKey } from "react-icons/fa";

const divisions = [
{
name: "Visionary Corps",
icon: <FaFilm className="text-epicCyan" size={42} />,
description: "Cinematic AI video & VFX creation. Imagine. Direct. Animate.",
},
{
name: "Voicemaster Division",
icon: <FaMicrophoneAlt className="text-spectralMagenta" size={42} />,
description: "Ultra-real voiceovers in any language, tone, or emotion.",
},
{
name: "SoundForge Legion",
icon: <FaMusic className="text-epicCyan" size={42} />,
description: "Compose original music and scores—remix at will.",
},
{
name: "DesignCore Elite",
icon: <FaPaintBrush className="text-spectralMagenta" size={42} />,
description: "Logo, UI/UX, and full brand creation—visual law enforced.",
},
{
name: "ScriptSmith Order",
icon: <FaBook className="text-epicCyan" size={42} />,
description: "Stories, lyrics, scripts, and poetic manifestos.",
},
{
name: "CodeSynth Engineers",
icon: <FaCode className="text-spectralMagenta" size={42} />,
description: "Full-stack apps, interactive code—deployed instantly.",
},
{
name: "KeyMaster Ops",
icon: <FaKey className="text-epicCyan" size={42} />,
description: "Secure API and credential management—gatekeeper mode.",
},
];

export default function AgentShowcase() {
return (
<section className="w-full mt-16 flex flex-col items-center">
<h3 className="font-display text-3xl lg:text-4xl font-extrabold text-center text-epicCyan drop-shadow mb-8">Agent Army Divisions</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl px-8">
{divisions.map((div, idx) => (
<div
key={div.name}
className="flex flex-col items-center bg-cyberBlack/80 border-2 border-epicCyan rounded-xl shadow-xl px-6 py-8 hover:scale-105 hover:border-spectralMagenta transition-all"
>
{div.icon}
<h4 className="font-display mt-4 text-2xl text-spectralMagenta font-bold">{div.name}</h4>
<p className="text-center mt-2 text-epicCyan opacity-90">{div.description}</p>
</div>
))}
</div>
</section>
);
}
