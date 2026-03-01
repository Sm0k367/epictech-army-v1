import MusicLab from "./components/MusicLab";
import TextLab from "./components/TextLab";
import LogoLab from "./components/LogoLab";
import AgentShowcase from "./components/AgentShowcase";
import CreativeGallery from "./components/CreativeGallery";
import ChallengeArmy from "./components/ChallengeArmy";
import FeedbackWidget from "./components/FeedbackWidget";

export default function Home() {
return (
<>
<section className="mt-10 flex flex-col items-center max-w-3xl mx-auto px-4 py-10 bg-cyberBlack/80 rounded-lg shadow-2xl border-2 border-epicCyan animate-fade-in">
<h2 className="font-display text-4xl lg:text-6xl font-bold text-epicCyan mb-6 text-center drop-shadow-lg">
Welcome to the Agent Army
</h2>
<p className="text-lg text-spectralMagenta text-center mb-10">
Experience the living force behind Epic Tech AI.<br />
Create. Remix. Launch. The future is now.
</p>
<div className="w-full flex flex-col gap-6">
<button className="py-4 px-8 bg-spectralMagenta hover:bg-epicCyan hover:text-cyberBlack text-cyberBlack font-display text-xl font-bold rounded-lg shadow transition-all border border-epicCyan">
Summon the Agent Army
</button>
<button className="py-3 px-6 bg-cyberBlack/50 border border-spectralMagenta text-epicCyan rounded hover:bg-spectralMagenta hover:text-cyberBlack font-bold transition-all">
Explore Capabilities
</button>
<button className="py-3 px-6 bg-cyberBlack/80 border border-epicCyan text-spectralMagenta rounded hover:bg-epicCyan hover:text-cyberBlack font-bold transition-all">
Challenge the Impossible
</button>
</div>
<div className="mt-12 text-cyberBlack bg-epicCyan/80 px-4 py-3 rounded font-mono text-center shadow-lg font-bold">
💡 “Mission Control for the Impossible”<br />
<span className="text-xs text-spectralMagenta">Built & Deployed by Epic Tech AI</span>
</div>
</section>
<ChallengeArmy />
<MusicLab />
<TextLab />
<LogoLab />
<AgentShowcase />
<CreativeGallery />
<FeedbackWidget />
</>
);
}
