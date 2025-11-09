import { useState, useEffect } from 'react';
import { Sparkles, BookOpen, Map, Mail } from 'lucide-react';
import AnimatedThreads from './components/AnimatedThreads';
import Section from './components/Section';
import LoreCard from './components/LoreCard';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-100 overflow-x-hidden relative">
      <AnimatedThreads />

      <div className="relative z-10">
        <header className={`min-h-screen flex flex-col items-center justify-center px-6 transition-opacity duration-2000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center space-y-8 max-w-4xl">
            <div className="inline-block">
              <h1 className="text-6xl md:text-7xl font-serif font-bold bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 bg-clip-text text-transparent animate-shimmer whitespace-nowrap">
                🕸️ The Weaver's Heart
              </h1>
              <p className="text-xs uppercase letter-spacing-2 text-amber-600 mt-4 font-light tracking-widest">Under Construction</p>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide italic animate-fade-in-delay">
              A tale of truth, illusion, and the threads that bind the worlds together.
            </p>

            <div className="flex items-center justify-center gap-2 animate-pulse-slow">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>
          </div>
        </header>

        <Section
          title="The Story"
          icon={<BookOpen className="w-8 h-8 text-amber-400" />}
          delay={200}
        >
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed">
            <p className="first-letter:text-6xl first-letter:font-serif first-letter:text-amber-400 first-letter:float-left first-letter:mr-3 first-letter:leading-none">
              In the spaces between reality and dream, there exists a realm woven from the very fabric of existence.
              The Weaver's Heart beats at the center of all things—a cosmic loom where truth and illusion intertwine,
              where every choice threads through infinite possibilities.
            </p>

            <p>
              Some say the Weaver was once mortal, ascending through knowledge too terrible to comprehend.
              Others whisper that the Heart itself is alive, pulsing with the memories of a thousand dying worlds,
              each strand a story, each knot a sacrifice.
            </p>

            <p className="italic text-amber-200">
              But what happens when the threads begin to fray? When the pattern unravels, and the ancient secrets
              buried in the weave claw their way into the light?
            </p>

            <div className="pt-8 text-center">
              <div className="inline-block px-8 py-3 border border-amber-400/30 rounded-lg hover:bg-amber-400/10 transition-all duration-300 cursor-pointer group">
                <span className="text-amber-400 font-serif group-hover:text-amber-300">Enter the Tapestry →</span>
              </div>
            </div>
          </div>
        </Section>

        <Section
          title="Chronicles"
          icon={<BookOpen className="w-8 h-8 text-amber-400" />}
          delay={400}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg border border-amber-400/20 bg-black/40 backdrop-blur-sm p-8 hover:border-amber-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-400/20">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-serif text-amber-300 mb-4">Book I: The Unraveling</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    When apprentice weaver Lyra discovers a thread that shouldn't exist—one that leads to a world
                    the Ancients tried to erase—she must choose between her oath and the truth.
                  </p>
                  <span className="text-amber-500 text-sm font-light">Coming Soon</span>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg border border-amber-400/20 bg-black/40 backdrop-blur-sm p-8 hover:border-amber-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-400/20">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-serif text-amber-300 mb-4">Book II: The Silver Strand</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Beyond the veil lies the Court of Echoes, where forgotten gods play games with mortal souls,
                    and one thread holds the power to rewrite all of history.
                  </p>
                  <span className="text-amber-500 text-sm font-light">In Development</span>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section
          title="Lore Atlas"
          icon={<Map className="w-8 h-8 text-amber-400" />}
          delay={600}
        >
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-gray-300 mb-12 text-lg">
              Explore the realms, decipher ancient runes, and discover the secrets woven into the fabric of existence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <LoreCard
                rune="⚝"
                title="The Weaver's Oath"
                description="An ancient pact binding all who touch the threads to silence and servitude."
              />

              <LoreCard
                rune="◈"
                title="Realm of Echoes"
                description="A mirror world where the dead speak and time flows backward."
              />

              <LoreCard
                rune="⧉"
                title="The Frayed Edge"
                description="Where reality tears and nightmares seep through the cracks in the weave."
              />
            </div>
          </div>
        </Section>

        <footer className="relative border-t border-amber-400/20 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-6 h-6 text-amber-400" />
              <h2 className="text-3xl font-serif text-amber-300">Join the Weave</h2>
            </div>

            <p className="text-gray-400 text-lg">
              Subscribe to receive updates on new chapters, exclusive lore, and early access to the expanding universe.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-6 py-3 bg-black/60 border border-amber-400/30 rounded-lg text-gray-300 placeholder-gray-600 focus:outline-none focus:border-amber-400/60 transition-colors"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-black font-semibold rounded-lg hover:from-amber-500 hover:to-amber-400 transition-all duration-300 shadow-lg shadow-amber-400/20 whitespace-nowrap">
                Subscribe
              </button>
            </div>

            <div className="pt-8 text-gray-600 text-sm">
              <p>© 2025 The Weaver's Heart. All threads reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
